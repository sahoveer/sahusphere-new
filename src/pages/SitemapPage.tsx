import { Link } from 'react-router-dom';
import { FileText, Home, Info, Shield, Map, Zap } from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    icon: <Home className="w-5 h-5 text-blue-600" />,
    color: 'bg-blue-50 border-blue-100',
    pages: [
      { label: 'Home', path: '/', desc: 'Sahu Sphere homepage with hero section and feature overview' },
      { label: 'Image to PDF Converter', path: '/image-to-pdf', desc: 'Free online image to PDF conversion tool' },
    ],
  },
  {
    category: 'Company',
    icon: <Info className="w-5 h-5 text-purple-600" />,
    color: 'bg-purple-50 border-purple-100',
    pages: [
      { label: 'About Us', path: '/about', desc: 'Learn about Sahu Sphere, our mission, and values' },
      { label: 'Contact Us', path: '/contact', desc: 'Get in touch with our support team' },
    ],
  },
  {
    category: 'Legal Pages',
    icon: <Shield className="w-5 h-5 text-green-600" />,
    color: 'bg-green-50 border-green-100',
    pages: [
      { label: 'Privacy Policy', path: '/privacy-policy', desc: 'How we handle and protect your data' },
      { label: 'Terms & Conditions', path: '/terms', desc: 'Terms of service and usage guidelines' },
      { label: 'Cookie Policy', path: '/cookie-policy', desc: 'How we use cookies on our website' },
      { label: 'DMCA Policy', path: '/dmca', desc: 'Digital Millennium Copyright Act compliance' },
      { label: 'Disclaimer', path: '/disclaimer', desc: 'Legal disclaimers for using our services' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="hero-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #2563EB 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-manrope mb-6">
            <Map className="w-4 h-4" />
            Site Navigation
          </div>
          <h1 className="font-poppins font-bold text-4xl text-white mb-4">Sitemap</h1>
          <p className="text-blue-200 font-manrope text-lg">Find everything on Sahu Sphere in one place.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {sitemapData.map((section) => (
            <div key={section.category} className={`rounded-2xl border p-6 ${section.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {section.icon}
                </div>
                <h2 className="font-poppins font-bold text-xl text-gray-900">{section.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="bg-white rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow border border-white hover:border-blue-100 group"
                  >
                    <FileText className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5 transition-colors" />
                    <div>
                      <p className="font-manrope font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors mb-0.5">{page.label}</p>
                      <p className="text-gray-500 text-xs font-manrope leading-relaxed">{page.desc}</p>
                      <p className="text-blue-400 text-xs font-manrope mt-1 font-medium">sahusphere.com{page.path}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XML Sitemap Note */}
        <div className="mt-10 card-premium p-6 flex items-start gap-4">
          <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-2">XML Sitemap for Search Engines</h3>
            <p className="text-gray-500 font-manrope text-sm leading-relaxed mb-3">
              For search engine crawlers, an XML sitemap is available at{' '}
              <code className="bg-gray-100 px-2 py-0.5 rounded text-blue-600 text-xs">sahusphere.com/sitemap.xml</code>
            </p>
            <p className="text-gray-400 font-manrope text-xs">
              Our sitemap is automatically updated to include all pages and helps search engines index our content efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
