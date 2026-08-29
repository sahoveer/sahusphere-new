import { Link } from 'react-router-dom';
import { Zap, Mail, Globe } from 'lucide-react';

const footerLinks = {
  tools: [
    { label: 'Image to PDF', path: '/image-to-pdf' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sitemap', path: '/sitemap' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'DMCA Policy', path: '/dmca' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-poppins font-bold text-xl text-white">
                  SAHU <span className="gradient-text">SPHERE</span>
                </span>
                <p className="text-xs text-gray-500 font-manrope">Smart Online Tools for Everyone</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-manrope max-w-xs">
              Sahu Sphere provides fast, secure, and free online productivity tools. 
              Making professional digital tools accessible to everyone, everywhere.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:info@sahusphere.com" className="hover:text-blue-400 transition-colors font-manrope">
                info@sahusphere.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="font-manrope">sahusphere.com</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: '🔒', label: 'SSL Secure' },
                { icon: '⚡', label: 'Fast & Free' },
                { icon: '🔏', label: 'No Storage' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-300 border border-gray-700"
                >
                  <span>{badge.icon}</span>
                  <span className="font-manrope">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">Our Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-manrope flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-gray-600 text-sm font-manrope flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                  More Tools Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-manrope flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-manrope flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-poppins font-semibold text-white text-lg mb-1">Stay Updated</h4>
              <p className="text-gray-400 text-sm font-manrope">Get notified when we launch new tools and features.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 font-manrope focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-manrope text-center">
              © 2026 Sahu Sphere. All Rights Reserved. | Made with ❤️ for everyone
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-xs font-manrope transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-xs font-manrope transition-colors">
                Terms
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-gray-300 text-xs font-manrope transition-colors">
                Cookies
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-gray-300 text-xs font-manrope transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
