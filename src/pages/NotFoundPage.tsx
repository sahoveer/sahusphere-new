import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Zap } from 'lucide-react';

const quickLinks = [
  { label: 'Image to PDF', path: '/image-to-pdf', icon: '🖼️', desc: 'Convert images to PDF instantly' },
  { label: 'About Us', path: '/about', icon: '👥', desc: 'Learn about our mission' },
  { label: 'Contact Us', path: '/contact', icon: '✉️', desc: 'Get help and support' },
];

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-[10rem] font-poppins font-black gradient-text leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <Search className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-500 font-manrope text-lg leading-relaxed mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off. It may have been moved, deleted, or perhaps never existed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="card-premium p-6">
          <h2 className="font-poppins font-semibold text-gray-900 mb-5 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            Popular Pages
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all text-center group"
              >
                <span className="text-3xl">{link.icon}</span>
                <div>
                  <p className="font-manrope font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">{link.label}</p>
                  <p className="text-gray-500 text-xs font-manrope mt-0.5">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <p className="text-gray-400 font-manrope text-sm mt-8">
          Still can't find what you're looking for?{' '}
          <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact our support team
          </Link>
          {' '}and we'll help you out.
        </p>
      </div>
    </div>
  );
}
