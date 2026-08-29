import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('ss-cookies-accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('ss-cookies-accepted', 'true');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('ss-cookies-accepted', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner animate-fade-in-up">
      <div className="glass bg-white/98 rounded-2xl shadow-2xl border border-gray-200 p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1">We use cookies 🍪</h4>
            <p className="text-gray-500 text-xs font-manrope leading-relaxed">
              We use cookies to enhance your experience and analyze usage. No personal data is sold.{' '}
              <Link to="/cookie-policy" className="text-blue-600 hover:underline">Learn more</Link>
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={accept}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white gradient-primary hover:opacity-90 transition-opacity"
              >
                <Check className="w-3.5 h-3.5" />
                Accept All
              </button>
              <button
                onClick={decline}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
          <button
            onClick={decline}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
