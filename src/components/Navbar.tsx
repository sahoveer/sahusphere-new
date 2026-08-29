import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Image to PDF', path: '/image-to-pdf' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const moreLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'DMCA Policy', path: '/dmca' },
  { label: 'Disclaimer', path: '/disclaimer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/5 border-b border-gray-100'
          : location.pathname === '/'
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-blue-400/40 transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <span
                className={`font-poppins font-bold text-xl transition-colors duration-300 ${
                  scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
                }`}
              >
                SAHU{' '}
                <span className="gradient-text">
                  SPHERE
                </span>
              </span>
              <p
                className={`text-xs font-manrope transition-colors duration-300 ${
                  scrolled || location.pathname !== '/' ? 'text-gray-500' : 'text-blue-200'
                }`}
              >
                Smart Online Tools
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-manrope font-500 text-sm transition-colors duration-200 ${
                  scrolled || location.pathname !== '/'
                    ? isActive(link.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    : isActive(link.path) ? 'text-white' : 'text-blue-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1 nav-link font-manrope text-sm transition-colors duration-200 ${
                  scrolled || location.pathname !== '/'
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                More <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-manrope"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/image-to-pdf" className="btn-primary text-sm py-3 px-6">
              🚀 Convert Now — Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled || location.pathname !== '/' ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-manrope font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Legal</p>
              {moreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-manrope"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/image-to-pdf" className="btn-primary w-full text-center block text-sm">
                🚀 Convert Now — Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
