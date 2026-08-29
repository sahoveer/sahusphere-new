import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, FileImage, Download, Shield, Zap, Lock, Star, CheckCircle, Globe, Award, Sparkles, RefreshCw, Layers, Settings, Eye } from 'lucide-react';

const features = [
  {
    icon: '🖼️',
    title: 'Multi-Format Support',
    desc: 'Convert JPG, JPEG, PNG, WEBP, and HEIC images seamlessly into professional PDFs.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: '🔀',
    title: 'Drag & Drop Reordering',
    desc: 'Arrange your pages in any order with intuitive drag-and-drop functionality.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: '⚙️',
    title: 'Advanced PDF Settings',
    desc: 'Customize page size, orientation, margins, quality, and file size to your exact needs.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: '🔒',
    title: 'PDF Password Protection',
    desc: 'Secure your PDF with a password. Your files stay private and protected.',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: '💧',
    title: 'Custom Watermark',
    desc: 'Add text watermarks to your PDF for branding or document protection.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: '🌐',
    title: '100% Browser-Based',
    desc: 'All processing happens in your browser. Nothing is uploaded to any server.',
    color: 'from-red-500 to-red-600',
    bg: 'bg-red-50',
  },
];

const steps = [
  {
    number: '01',
    icon: <Upload className="w-6 h-6 text-blue-600" />,
    title: 'Upload Images',
    desc: 'Drag & drop or browse to upload up to 20 JPG, PNG, WEBP, or HEIC images at once.',
  },
  {
    number: '02',
    icon: <Settings className="w-6 h-6 text-purple-600" />,
    title: 'Customize Settings',
    desc: 'Set page size, orientation, margins, quality, and add password or watermark.',
  },
  {
    number: '03',
    icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
    title: 'Arrange Pages',
    desc: 'Drag to reorder, rotate, or delete images to build your perfect PDF layout.',
  },
  {
    number: '04',
    icon: <Download className="w-6 h-6 text-green-600" />,
    title: 'Download PDF',
    desc: 'Click convert and download your high-quality professional PDF in seconds.',
  },
];

const trustStats = [
  { value: '100%', label: 'Free Forever', icon: '🆓' },
  { value: '20', label: 'Images Per PDF', icon: '🖼️' },
  { value: '5+', label: 'Formats Supported', icon: '📋' },
  { value: '0', label: 'Server Storage', icon: '🔒' },
];

const faqs = [
  {
    q: 'Is Sahu Sphere Image to PDF converter completely free?',
    a: 'Yes! Sahu Sphere is 100% free to use. No registration, no subscription, no hidden fees. Convert unlimited images to PDF at no cost.',
  },
  {
    q: 'How many images can I convert at once?',
    a: 'You can upload and convert up to 20 images per PDF. This allows you to create comprehensive multi-page documents in one go.',
  },
  {
    q: 'Are my files safe? Does Sahu Sphere store my images?',
    a: 'Absolutely safe. All processing happens entirely in your browser using JavaScript. Your images are never uploaded to any server, ensuring complete privacy.',
  },
  {
    q: 'What image formats are supported?',
    a: 'We support JPG, JPEG, PNG, WEBP, and HEIC image formats. More formats are being added regularly.',
  },
  {
    q: 'Can I customize the PDF output?',
    a: 'Yes! You can customize page size (A4, A3, Letter, etc.), orientation (Portrait/Landscape), margins, image fit, quality settings, file size, add password protection, watermarks, and custom metadata.',
  },
  {
    q: 'Does it work on mobile devices?',
    a: 'Yes, Sahu Sphere is fully responsive and works perfectly on smartphones, tablets, and desktop computers.',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-bg min-h-screen flex items-center pt-20 pb-16 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
          
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* Floating Icons */}
          {[
            { icon: '📄', x: '10%', y: '20%', delay: '0s', size: '2rem' },
            { icon: '🖼️', x: '85%', y: '15%', delay: '0.5s', size: '1.8rem' },
            { icon: '⚡', x: '90%', y: '60%', delay: '1s', size: '1.6rem' },
            { icon: '🔒', x: '8%', y: '70%', delay: '1.5s', size: '1.6rem' },
            { icon: '✨', x: '75%', y: '80%', delay: '2s', size: '1.4rem' },
          ].map((item, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: item.x, top: item.y,
                animationDelay: item.delay,
                fontSize: item.size,
                opacity: 0.6,
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-manrope font-medium mb-8 animate-fade-in-up">
                <Sparkles className="w-4 h-4" />
                100% Free · No Registration Required
              </div>

              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Convert Images Into{' '}
                <span className="relative">
                  <span className="gradient-text">Professional</span>
                </span>
                {' '}PDFs Instantly
              </h1>

              <p className="text-blue-100/80 text-lg lg:text-xl font-manrope leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Upload up to 20 images, arrange pages, optimize quality, customize file size, and download a professional PDF in seconds.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/image-to-pdf" className="btn-primary flex items-center justify-center gap-2 text-base">
                  <Upload className="w-5 h-5" />
                  Convert Images Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/#features" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-gray-900 flex items-center justify-center gap-2 text-base">
                  <Eye className="w-5 h-5" />
                  Explore Features
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { icon: <Shield className="w-4 h-4" />, label: 'Secure & Private' },
                  { icon: <Zap className="w-4 h-4" />, label: 'Lightning Fast' },
                  { icon: <Star className="w-4 h-4" />, label: 'Free Forever' },
                  { icon: <Lock className="w-4 h-4" />, label: 'No Registration' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 text-blue-200 text-sm font-manrope">
                    <span className="text-green-400">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Tool Preview Card */}
            <div className="animate-fade-in-right relative" style={{ animationDelay: '0.3s' }}>
              <div className="relative max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl transform scale-95" />
                
                {/* Main Card */}
                <div className="relative glass rounded-3xl p-6 shadow-2xl border border-white/20">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                        <FileImage className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-gray-800 text-sm">Image to PDF</p>
                        <p className="text-xs text-gray-500 font-manrope">3 images selected</p>
                      </div>
                    </div>
                    <span className="badge badge-green text-xs">Ready</span>
                  </div>

                  {/* Image Grid Preview */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { bg: 'from-blue-400 to-blue-600', label: 'photo1.jpg' },
                      { bg: 'from-purple-400 to-purple-600', label: 'photo2.png' },
                      { bg: 'from-cyan-400 to-cyan-600', label: 'photo3.webp' },
                    ].map((img, i) => (
                      <div key={i} className="relative">
                        <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${img.bg} flex items-center justify-center shadow-lg`}>
                          <FileImage className="w-8 h-8 text-white/70" />
                        </div>
                        <div className="mt-1 text-xs text-gray-500 font-manrope text-center truncate">{img.label}</div>
                        <div className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow text-xs font-bold text-gray-600">
                          {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Settings Row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: 'Page Size', value: 'A4' },
                      { label: 'Quality', value: 'High' },
                      { label: 'Orientation', value: 'Portrait' },
                      { label: 'Margins', value: 'Small' },
                    ].map((setting) => (
                      <div key={setting.label} className="bg-gray-50 rounded-xl px-3 py-2.5">
                        <p className="text-xs text-gray-400 font-manrope">{setting.label}</p>
                        <p className="text-sm font-semibold text-gray-700 font-poppins">{setting.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2 font-manrope">
                      <span>Processing...</span>
                      <span>87%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '87%' }} />
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl border border-white/30 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">100% Secure</p>
                      <p className="text-xs text-gray-500 font-manrope">Browser only</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl border border-white/30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Converted!</p>
                      <p className="text-xs text-gray-500 font-manrope">In 2.3 seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-poppins font-bold text-3xl lg:text-4xl gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-manrope">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge badge-blue mx-auto mb-4">
              <Layers className="w-3.5 h-3.5" />
              Simple Process
            </div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 font-manrope text-lg max-w-2xl mx-auto">
              Convert your images to PDF in just 4 simple steps. No technical knowledge required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0 -translate-x-4" />
                )}
                
                <div className="card-premium p-6 text-center relative z-10">
                  <div className="step-number mx-auto mb-4 text-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm font-manrope leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/image-to-pdf" className="btn-primary inline-flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Start Converting — It's Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge badge-purple mx-auto mb-4">
              <Award className="w-3.5 h-3.5" />
              Premium Features
            </div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Everything You Need for Perfect PDFs
            </h2>
            <p className="text-gray-500 font-manrope text-lg max-w-2xl mx-auto">
              Professional-grade features that put you in complete control of your PDF output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card-premium p-6">
                <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-gray-900 text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm font-manrope leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPORTED FORMATS SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-3">
              Supported Image Formats
            </h2>
            <p className="text-gray-500 font-manrope">All major image formats supported for instant PDF conversion</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { ext: 'JPG', color: 'bg-orange-100 text-orange-700 border-orange-200', desc: 'JPEG Photos' },
              { ext: 'PNG', color: 'bg-blue-100 text-blue-700 border-blue-200', desc: 'Transparent Images' },
              { ext: 'WEBP', color: 'bg-green-100 text-green-700 border-green-200', desc: 'Modern Web Format' },
              { ext: 'HEIC', color: 'bg-purple-100 text-purple-700 border-purple-200', desc: 'iPhone Photos' },
              { ext: 'JPEG', color: 'bg-red-100 text-red-700 border-red-200', desc: 'Standard Photo' },
            ].map((fmt) => (
              <div key={fmt.ext} className={`${fmt.color} border-2 rounded-2xl px-6 py-4 text-center min-w-[120px]`}>
                <div className="font-poppins font-bold text-2xl mb-1">.{fmt.ext}</div>
                <div className="text-xs font-manrope opacity-70">{fmt.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIVACY SECTION ===== */}
      <section className="py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-green mb-6">
                <Shield className="w-3.5 h-3.5" />
                Privacy First
              </div>
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">
                Your Files Never Leave Your Device
              </h2>
              <p className="text-gray-400 font-manrope text-lg leading-relaxed mb-8">
                All PDF generation happens entirely in your browser using JavaScript. We never upload your images to any server. Your files remain completely private and secure.
              </p>
              <div className="space-y-4">
                {[
                  'No server uploads — 100% client-side processing',
                  'No registration or login required',
                  'No file storage or data retention',
                  'SSL encrypted connection',
                  'GDPR & privacy law compliant',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 font-manrope">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🔒', title: 'End-to-End Privacy', desc: 'Your files are processed locally in your browser.' },
                { icon: '⚡', title: 'Instant Processing', desc: 'No upload time. Results in seconds.' },
                { icon: '🌍', title: 'Works Offline', desc: 'After loading, use it without internet.' },
                { icon: '📱', title: 'Any Device', desc: 'Phone, tablet, or desktop. All supported.' },
              ].map((card) => (
                <div key={card.title} className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-blue-500/40 transition-colors">
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="font-poppins font-semibold text-white text-sm mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-xs font-manrope leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge badge-blue mx-auto mb-4">FAQ</div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-manrope">Everything you need to know about Sahu Sphere.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* FAQ Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })}} />
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-white mb-6">
            Ready to Convert Your Images?
          </h2>
          <p className="text-blue-100 font-manrope text-xl mb-10">
            Join thousands of users who convert images to PDF with Sahu Sphere — free, fast, and private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/image-to-pdf" className="bg-white text-blue-600 font-poppins font-bold px-8 py-4 rounded-2xl text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Start Converting — Free
            </Link>
            <Link to="/about" className="border-2 border-white/40 text-white font-poppins font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Learn About Us
            </Link>
          </div>
          <p className="text-blue-200/70 text-sm font-manrope mt-6">
            No signup required • Free forever • 100% private
          </p>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-blue-200 shadow-md' : 'border-gray-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="font-poppins font-semibold text-gray-900 text-sm lg:text-base pr-4">{q}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'gradient-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-gray-500 font-manrope text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}



