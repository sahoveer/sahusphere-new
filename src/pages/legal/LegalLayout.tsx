import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, FileText } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  updated: string;
  children: ReactNode;
}

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'DMCA Policy', path: '/dmca' },
  { label: 'Disclaimer', path: '/disclaimer' },
];

export default function LegalLayout({ title, subtitle, updated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <div className="hero-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #2563EB 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 font-manrope mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-white">{title}</h1>
          </div>
          <p className="text-blue-200 font-manrope text-lg mb-4">{subtitle}</p>
          <div className="flex items-center gap-2 text-blue-300 text-sm font-manrope">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: {updated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-premium p-5 sticky top-24">
              <h3 className="font-poppins font-semibold text-gray-900 text-sm mb-4 uppercase tracking-wider">Legal Pages</h3>
              <nav className="space-y-1">
                {legalLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-xl text-sm font-manrope transition-colors ${
                      window.location.pathname === link.path
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-xs font-manrope text-gray-500 mb-3">Questions? Contact us:</p>
                <a
                  href="mailto:info@sahusphere.com"
                  className="text-sm text-blue-600 font-manrope font-medium hover:underline flex items-center gap-1"
                >
                  info@sahusphere.com
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="card-premium p-8 lg:p-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
