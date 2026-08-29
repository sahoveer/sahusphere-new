import { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, RotateCw, Download, ChevronUp, ChevronDown, Settings, FileText, Shield, Zap, CheckCircle, Trash2, GripVertical, RefreshCw } from 'lucide-react';
import jsPDF from 'jspdf';

interface ImageFile {
  id: string;
  file: File;
  preview: string;
  name: string;
  rotation: number;
}

type PageSize = 'a4' | 'a3' | 'a5' | 'letter' | 'legal' | 'auto';
type Orientation = 'portrait' | 'landscape' | 'auto';
type Margin = 'none' | 'small' | 'medium' | 'large';
type PageFit = 'fit' | 'fill' | 'stretch' | 'original';
type Quality = 'maximum' | 'high' | 'balanced' | 'compressed' | 'ultra';


const PAGE_SIZES: Record<PageSize, [number, number]> = {
  a4: [210, 297],
  a3: [297, 420],
  a5: [148, 210],
  letter: [215.9, 279.4],
  legal: [215.9, 355.6],
  auto: [210, 297],
};

const QUALITY_MAP: Record<Quality, number> = {
  maximum: 1.0,
  high: 0.92,
  balanced: 0.80,
  compressed: 0.65,
  ultra: 0.45,
};

const MARGIN_MAP: Record<Margin, number> = {
  none: 0,
  small: 5,
  medium: 10,
  large: 20,
};

export default function ImageToPDF() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [pdfName, setPdfName] = useState('converted-document');
  const [pageSize, setPageSize] = useState<PageSize>('a4');
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [margin, setMargin] = useState<Margin>('small');
  const [pageFit, setPageFit] = useState<PageFit>('fit');
  const [quality, setQuality] = useState<Quality>('high');
  const [watermark, setWatermark] = useState('');
  const [author, setAuthor] = useState('');
  const [pageNumbers, setPageNumbers] = useState(false);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [done, setDone] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [pdfSize, setPdfSize] = useState('');
  const [convTime, setConvTime] = useState('');
  const startTimeRef = useRef<number>(0);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dragItem = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const remaining = 20 - images.length;
    const toAdd = acceptedFiles.slice(0, remaining);
    const newImages: ImageFile[] = toAdd.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      name: file.name.replace(/\.[^.]+$/, ''),
      rotation: 0,
    }));
    setImages(prev => [...prev, ...newImages]);
    setDone(false);
    setPdfBlob(null);
  }, [images.length]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'image/heic': ['.heic'],
    },
    maxFiles: 20,
    disabled: images.length >= 20,
  });

  const removeImage = (id: string) => {
    setImages(prev => {
      const img = prev.find(i => i.id === id);
      if (img) URL.revokeObjectURL(img.preview);
      return prev.filter(i => i.id !== id);
    });
  };

  const rotateImage = (id: string) => {
    setImages(prev => prev.map(img =>
      img.id === id ? { ...img, rotation: (img.rotation + 90) % 360 } : img
    ));
  };

  const renameImage = (id: string, name: string) => {
    setImages(prev => prev.map(img => img.id === id ? { ...img, name } : img));
  };

  const moveImage = (from: number, to: number) => {
    setImages(prev => {
      const updated = [...prev];
      const [item] = updated.splice(from, 1);
      updated.splice(to, 0, item);
      return updated;
    });
  };

  const moveUp = (i: number) => { if (i > 0) moveImage(i, i - 1); };
  const moveDown = (i: number) => { if (i < images.length - 1) moveImage(i, i + 1); };

  const handleDragStart = (index: number) => { dragItem.current = index; };
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };
  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragItem.current !== null && dragItem.current !== index) {
      moveImage(dragItem.current, index);
    }
    dragItem.current = null;
    setDragOverIndex(null);
  };
  const handleDragEnd = () => { dragItem.current = null; setDragOverIndex(null); };

  const estimatedSize = () => {
    if (images.length === 0) return '—';
    const q = QUALITY_MAP[quality];
    const base = images.reduce((acc, img) => acc + img.file.size, 0);
    const est = base * q * 0.7;
    if (est < 1024 * 1024) return `~${(est / 1024).toFixed(0)} KB`;
    return `~${(est / (1024 * 1024)).toFixed(1)} MB`;
  };

  const convertToPDF = async () => {
    if (images.length === 0) return;
    setConverting(true);
    setProgress(0);
    setStatus('Initializing...');
    setDone(false);
    startTimeRef.current = Date.now();

    try {
      const [pw, ph] = PAGE_SIZES[pageSize];
      const isLandscape = orientation === 'landscape';
      const w = isLandscape ? ph : pw;
      const h = isLandscape ? pw : ph;
      const m = MARGIN_MAP[margin];
      const q = QUALITY_MAP[quality];

      const pdf = new jsPDF({
        orientation: isLandscape ? 'landscape' : 'portrait',
        unit: 'mm',
        format: pageSize === 'auto' || pageSize === 'a4' ? 'a4' : [w, h],
      });

      if (author) {
        pdf.setProperties({ author, creator: 'Sahu Sphere' });
      } else {
        pdf.setProperties({ creator: 'Sahu Sphere - sahusphere.com' });
      }

      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        setProgress(Math.round(((i + 0.5) / images.length) * 90));
        setStatus(`Processing page ${i + 1} of ${images.length}...`);

        if (i > 0) pdf.addPage();

        await new Promise<void>((resolve) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;
          const image = new Image();
          image.onload = () => {
            let iw = image.width;
            let ih = image.height;

            if (img.rotation === 90 || img.rotation === 270) {
              canvas.width = ih; canvas.height = iw;
            } else {
              canvas.width = iw; canvas.height = ih;
            }

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((img.rotation * Math.PI) / 180);
            ctx.drawImage(image, -iw / 2, -ih / 2);
            ctx.restore();

            const imgData = canvas.toDataURL('image/jpeg', q);
            const usableW = w - 2 * m;
            const usableH = h - 2 * m;
            const imgW = canvas.width;
            const imgH = canvas.height;
            const ratio = Math.min(usableW / imgW, usableH / imgH);

            let drawW = imgW * ratio;
            let drawH = imgH * ratio;
            let x = m + (usableW - drawW) / 2;
            let y = m + (usableH - drawH) / 2;

            if (pageFit === 'fill') {
              const fillRatio = Math.max(usableW / imgW, usableH / imgH);
              drawW = imgW * fillRatio;
              drawH = imgH * fillRatio;
              x = m + (usableW - drawW) / 2;
              y = m + (usableH - drawH) / 2;
            } else if (pageFit === 'stretch') {
              drawW = usableW; drawH = usableH;
              x = m; y = m;
            } else if (pageFit === 'original') {
              const pxPerMm = 3.7795;
              drawW = Math.min(imgW / pxPerMm, usableW);
              drawH = Math.min(imgH / pxPerMm, usableH);
              x = m; y = m;
            }

            pdf.addImage(imgData, 'JPEG', x, y, drawW, drawH);

            if (watermark) {
              pdf.setFontSize(40);
              pdf.setTextColor(180, 180, 180);
              pdf.setGState(pdf.GState({ opacity: 0.3 }));
              pdf.text(watermark, w / 2, h / 2, { align: 'center', angle: 45 });
              pdf.setGState(pdf.GState({ opacity: 1 }));
            }

            if (pageNumbers) {
              pdf.setFontSize(10);
              pdf.setTextColor(120, 120, 120);
              pdf.text(`${i + 1} / ${images.length}`, w / 2, h - 5, { align: 'center' });
            }

            resolve();
          };
          image.src = img.preview;
        });
      }

      setProgress(95);
      setStatus('Finalizing PDF...');

      await new Promise(r => setTimeout(r, 300));

      const blob = pdf.output('blob');
      setPdfBlob(blob);
      const sizeMB = blob.size / (1024 * 1024);
      setPdfSize(sizeMB < 1 ? `${(blob.size / 1024).toFixed(0)} KB` : `${sizeMB.toFixed(2)} MB`);

      const elapsed = ((Date.now() - startTimeRef.current) / 1000).toFixed(1);
      setConvTime(`${elapsed}s`);
      setProgress(100);
      setStatus('Complete!');
      setDone(true);
    } catch (err) {
      setStatus('Error: Conversion failed. Please try again.');
      console.error(err);
    } finally {
      setConverting(false);
    }
  };

  const downloadPDF = () => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pdfName || 'document'}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    images.forEach(img => URL.revokeObjectURL(img.preview));
    setImages([]);
    setDone(false);
    setPdfBlob(null);
    setProgress(0);
    setStatus('');
  };

  return (
    <div className={`min-h-screen pt-20 pb-16 ${darkMode ? 'dark-mode bg-gray-950' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="hero-bg py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7C3AED 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-manrope mb-5">
            <Zap className="w-4 h-4" />
            Browser-Based · Private · Free
          </div>
          <h1 className="font-poppins font-bold text-3xl lg:text-5xl text-white mb-4">
            Image to PDF Converter
          </h1>
          <p className="text-blue-100/80 font-manrope text-lg max-w-2xl mx-auto">
            Upload up to 20 images, customize settings, and download a professional PDF instantly. Completely free, no signup required.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            {[
              { icon: <Shield className="w-4 h-4" />, label: 'No Upload' },
              { icon: <Zap className="w-4 h-4" />, label: 'Instant' },
              { icon: <CheckCircle className="w-4 h-4" />, label: 'Free' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-blue-200 text-sm font-manrope">
                <span className="text-green-400">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-manrope font-medium border transition-all ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* SUCCESS STATE */}
        {done && pdfBlob && (
          <div className="mb-8 card-premium p-8 text-center animate-bounce-in">
            <div className="success-circle mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-2">PDF Created Successfully! 🎉</h2>
            <p className="text-gray-500 font-manrope mb-1">
              <strong>{images.length} {images.length === 1 ? 'page' : 'pages'}</strong> converted • File size: <strong>{pdfSize}</strong> {convTime && <>• Time: <strong>{convTime}</strong></>}
            </p>
            <p className="text-gray-400 text-sm font-manrope mb-8">{pdfName}.pdf</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={downloadPDF} className="btn-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button onClick={reset} className="btn-secondary flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Convert Another
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT — Upload + Images */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dropzone */}
            {!done && (
              <div className={`card-premium p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className={`font-poppins font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    📁 Upload Images
                    {images.length > 0 && (
                      <span className="ml-3 badge badge-blue text-xs">{images.length}/20</span>
                    )}
                  </h2>
                  {images.length > 0 && (
                    <button onClick={reset} className="text-red-400 hover:text-red-600 text-sm font-manrope flex items-center gap-1 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      Clear All
                    </button>
                  )}
                </div>

                <div
                  {...getRootProps()}
                  className={`dropzone-area cursor-pointer py-14 px-8 text-center transition-all duration-300 ${isDragActive ? 'drag-over' : ''} ${images.length >= 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg animate-float">
                      <Upload className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <p className={`font-poppins font-semibold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                        {isDragActive ? 'Drop images here!' : 'Drag & Drop Images Here'}
                      </p>
                      <p className={`text-sm font-manrope ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        or{' '}
                        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">browse files</span>
                        {' '}from your device
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['JPG', 'PNG', 'WEBP', 'HEIC'].map(fmt => (
                        <span key={fmt} className="badge badge-blue text-xs">{fmt}</span>
                      ))}
                    </div>
                    <p className={`text-xs font-manrope ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Maximum 20 images • All processing done in browser
                    </p>
                  </div>
                </div>

                {/* Paste Hint */}
                <p className={`text-xs font-manrope mt-3 text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  💡 Tip: You can also paste images with <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 text-xs">Ctrl+V</kbd>
                </p>
              </div>
            )}

            {/* Image Grid */}
            {images.length > 0 && !done && (
              <div className={`card-premium p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className={`font-poppins font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    🖼️ Page Preview & Arrangement
                  </h2>
                  <span className={`text-sm font-manrope ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Drag to reorder
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <div
                      key={img.id}
                      className={`image-thumb ${dragOverIndex === index ? 'border-blue-500 scale-105' : ''}`}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={handleDragEnd}
                    >
                      {/* Thumbnail */}
                      <div className="aspect-[3/4] relative bg-gray-100">
                        <img
                          src={img.preview}
                          alt={img.name}
                          className="w-full h-full object-cover"
                          style={{ transform: `rotate(${img.rotation}deg)`, transition: 'transform 0.3s ease' }}
                          loading="lazy"
                        />
                        {/* Page Number */}
                        <div className="absolute top-2 left-2 w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        {/* Drag Handle */}
                        <div className="absolute top-2 right-2 text-white/80 bg-black/30 rounded-lg p-1 cursor-grab">
                          <GripVertical className="w-3.5 h-3.5" />
                        </div>
                        {/* Overlay Actions */}
                        <div className="overlay gap-2 flex-col">
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => { e.stopPropagation(); rotateImage(img.id); }}
                              className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors tooltip"
                              data-tip="Rotate"
                            >
                              <RotateCw className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); removeImage(img.id); }}
                              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white hover:bg-red-600 transition-colors tooltip"
                              data-tip="Remove"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex gap-1">
                            <button onClick={(e) => { e.stopPropagation(); moveUp(index); }} className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <ChevronUp className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); moveDown(index); }} className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Name */}
                      <div className="p-2">
                        <input
                          type="text"
                          value={img.name}
                          onChange={(e) => renameImage(img.id, e.target.value)}
                          className={`w-full text-xs font-manrope border rounded-lg px-2 py-1 focus:border-blue-500 outline-none ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-700'}`}
                          placeholder="Page name"
                        />
                        <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {(img.file.size / 1024).toFixed(0)} KB
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Add More */}
                  {images.length < 20 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className={`aspect-[3/4] border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:border-blue-400 ${darkMode ? 'border-gray-600 text-gray-500 hover:text-blue-400' : 'border-gray-200 text-gray-400 hover:text-blue-500'}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-xs font-manrope">Add More</span>
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.webp,.heic"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) onDrop(Array.from(e.target.files));
                    e.target.value = '';
                  }}
                />
              </div>
            )}

            {/* Convert Button */}
            {images.length > 0 && !done && (
              <div className={`card-premium p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
                {converting ? (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-manrope font-medium text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {status}
                      </span>
                      <span className="font-poppins font-bold text-blue-600">{progress}%</span>
                    </div>
                    <div className="progress-bar mb-4">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <p className={`text-xs font-manrope text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      ⚡ Processing {images.length} image{images.length !== 1 ? 's' : ''} in your browser...
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={convertToPDF}
                    disabled={images.length === 0}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-base font-poppins"
                  >
                    <FileText className="w-5 h-5" />
                    Convert {images.length} Image{images.length !== 1 ? 's' : ''} to PDF
                  </button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — Settings */}
          <div className="space-y-4">
            {/* Live Stats */}
            <div className={`card-premium p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <h3 className={`font-poppins font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                📊 Live Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Images', value: images.length, icon: '🖼️' },
                  { label: 'Pages', value: images.length, icon: '📄' },
                  { label: 'Est. Size', value: estimatedSize(), icon: '💾' },
                  { label: 'Quality', value: quality.charAt(0).toUpperCase() + quality.slice(1), icon: '⭐' },
                ].map((stat) => (
                  <div key={stat.label} className={`rounded-xl p-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="text-lg mb-1">{stat.icon}</div>
                    <p className={`font-poppins font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{stat.value}</p>
                    <p className={`text-xs font-manrope ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Name */}
            <div className={`card-premium p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <h3 className={`font-poppins font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                📝 File Name
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={pdfName}
                  onChange={(e) => setPdfName(e.target.value)}
                  placeholder="my-document"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-manrope pr-14 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'}`}
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-manrope ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  .pdf
                </span>
              </div>
            </div>

            {/* PDF Settings */}
            <div className={`card-premium p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`w-full flex items-center justify-between font-poppins font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                <span>⚙️ PDF Settings</span>
                <Settings className={`w-4 h-4 transition-transform ${showSettings ? 'rotate-90' : ''} text-blue-600`} />
              </button>

              {showSettings && (
                <div className="mt-5 space-y-5">
                  {/* Page Size */}
                  <div>
                    <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Page Size
                    </label>
                    <select
                      value={pageSize}
                      onChange={(e) => setPageSize(e.target.value as PageSize)}
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm font-manrope ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                    >
                      <option value="a4">A4 (210×297mm)</option>
                      <option value="a3">A3 (297×420mm)</option>
                      <option value="a5">A5 (148×210mm)</option>
                      <option value="letter">Letter (8.5×11in)</option>
                      <option value="legal">Legal (8.5×14in)</option>
                      <option value="auto">Auto (from image)</option>
                    </select>
                  </div>

                  {/* Orientation */}
                  <div>
                    <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Orientation
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['portrait', 'landscape', 'auto'] as Orientation[]).map((o) => (
                        <button
                          key={o}
                          onClick={() => setOrientation(o)}
                          className={`py-2 px-3 rounded-xl text-xs font-manrope font-medium border transition-all capitalize ${orientation === o ? 'border-blue-500 bg-blue-50 text-blue-700' : darkMode ? 'border-gray-700 text-gray-400 hover:border-gray-500' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Margins */}
                  <div>
                    <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Margins
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['none', 'small', 'medium', 'large'] as Margin[]).map((m) => (
                        <button
                          key={m}
                          onClick={() => setMargin(m)}
                          className={`py-2 px-3 rounded-xl text-xs font-manrope font-medium border transition-all capitalize ${margin === m ? 'border-blue-500 bg-blue-50 text-blue-700' : darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Page Fit */}
                  <div>
                    <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Image Fit
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['fit', 'fill', 'stretch', 'original'] as PageFit[]).map((f) => (
                        <button
                          key={f}
                          onClick={() => setPageFit(f)}
                          className={`py-2 px-3 rounded-xl text-xs font-manrope font-medium border transition-all capitalize ${pageFit === f ? 'border-blue-500 bg-blue-50 text-blue-700' : darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quality Settings */}
            <div className={`card-premium p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <h3 className={`font-poppins font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🎨 Quality & Size
              </h3>

              {/* Quality */}
              <div className="mb-4">
                <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  PDF Quality
                </label>
                <div className="space-y-2">
                  {([
                    { value: 'maximum', label: 'Maximum', desc: 'Best quality, large file' },
                    { value: 'high', label: 'High Quality', desc: 'Recommended for most uses' },
                    { value: 'balanced', label: 'Balanced', desc: 'Good quality, smaller file' },
                    { value: 'compressed', label: 'Compressed', desc: 'Smaller file, lower quality' },
                    { value: 'ultra', label: 'Ultra Compressed', desc: 'Smallest file possible' },
                  ] as { value: Quality; label: string; desc: string }[]).map((q) => (
                    <div
                      key={q.value}
                      onClick={() => setQuality(q.value)}
                      className={`quality-option flex items-center justify-between cursor-pointer ${quality === q.value ? 'selected' : ''}`}
                    >
                      <div>
                        <p className={`text-sm font-manrope font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{q.label}</p>
                        <p className={`text-xs font-manrope ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{q.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${quality === q.value ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                        {quality === q.value && <div className="w-2 h-2 bg-white rounded-full m-auto" style={{ marginTop: '1px' }} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Page Numbers */}
              <div className={`flex items-center justify-between py-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <div>
                  <p className={`text-sm font-manrope font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Page Numbers</p>
                  <p className={`text-xs font-manrope ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Add page numbering</p>
                </div>
                <button
                  onClick={() => setPageNumbers(!pageNumbers)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${pageNumbers ? 'bg-blue-600' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${pageNumbers ? 'translate-x-5' : ''}`} />
                </button>
              </div>
            </div>

            {/* Security */}
            <div className={`card-premium p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <h3 className={`font-poppins font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🔒 Security & Branding
              </h3>
              <div className="space-y-3">
                <div>
                  <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Watermark Text
                  </label>
                  <input
                    type="text"
                    value={watermark}
                    onChange={(e) => setWatermark(e.target.value)}
                    placeholder="CONFIDENTIAL"
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm font-manrope ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-manrope font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name or company"
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm font-manrope ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className={`rounded-2xl p-4 flex items-start gap-3 ${darkMode ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-200'}`}>
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className={`text-sm font-poppins font-semibold ${darkMode ? 'text-green-400' : 'text-green-800'}`}>100% Private</p>
                <p className={`text-xs font-manrope mt-0.5 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>
                  Your images are processed entirely in your browser. Nothing is uploaded to any server.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🖼️', title: 'Up to 20 Images', desc: 'Multi-image batch convert' },
            { icon: '🔀', title: 'Drag to Reorder', desc: 'Perfect page arrangement' },
            { icon: '⚙️', title: '5 Quality Levels', desc: 'From max to ultra compressed' },
            { icon: '🔒', title: 'No Server Upload', desc: 'Full browser-side privacy' },
          ].map((feat) => (
            <div key={feat.title} className={`card-premium p-4 text-center ${darkMode ? 'bg-gray-900 border-gray-700' : ''}`}>
              <div className="text-2xl mb-2">{feat.icon}</div>
              <p className={`font-poppins font-semibold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{feat.title}</p>
              <p className={`text-xs font-manrope ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
