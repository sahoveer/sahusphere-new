import LegalLayout from './LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" subtitle="How and why we use cookies on Sahu Sphere." updated="January 1, 2026">
      <div className="legal-content">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device by websites you visit. They are widely used to make websites work efficiently and provide information to website owners. Cookies help us understand how you interact with our website and improve your experience.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>Sahu Sphere uses cookies to:</p>
        <ul>
          <li>Ensure our website functions correctly</li>
          <li>Remember your preferences (such as dark mode settings)</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Improve the performance and user experience of our site</li>
          <li>Detect and prevent fraudulent activity</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>

        <h3>3.1 Essential / Strictly Necessary Cookies</h3>
        <p>These cookies are necessary for our website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences. You can set your browser to block these cookies, but parts of the site may not work correctly.</p>
        <ul>
          <li><strong>ss-cookies-accepted:</strong> Stores your cookie consent preference (expires: 1 year)</li>
          <li><strong>Session cookies:</strong> Temporary cookies deleted when you close your browser</li>
        </ul>

        <h3>3.2 Preference / Functionality Cookies</h3>
        <p>These cookies allow us to remember choices you make and provide enhanced, personalized features:</p>
        <ul>
          <li><strong>Theme preference:</strong> Remembers if you prefer dark or light mode</li>
          <li><strong>Recent history:</strong> Stores recent tool usage for convenience</li>
        </ul>

        <h3>3.3 Analytics / Performance Cookies</h3>
        <p>These cookies help us understand how visitors interact with our website. All information is aggregated and anonymous:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Tracks page views, session duration, and user behavior (with IP anonymization enabled)</li>
          <li><strong>Performance metrics:</strong> Measures page load times and errors</li>
        </ul>

        <h3>3.4 Security Cookies</h3>
        <p>These cookies help protect against fraudulent activity and ensure the security of our website:</p>
        <ul>
          <li>CSRF protection tokens</li>
          <li>Bot detection cookies (Cloudflare)</li>
        </ul>

        <h2>4. Cookies We Do NOT Use</h2>
        <p>We do not use:</p>
        <ul>
          <li>Advertising or tracking cookies for marketing purposes</li>
          <li>Social media tracking cookies</li>
          <li>Third-party behavioral advertising cookies</li>
          <li>Cookies that track you across other websites</li>
        </ul>

        <h2>5. Managing Your Cookie Preferences</h2>
        <h3>5.1 Our Cookie Banner</h3>
        <p>When you first visit Sahu Sphere, a cookie banner will appear allowing you to accept or decline non-essential cookies. You can change your preference at any time by clearing your browser's localStorage data.</p>

        <h3>5.2 Browser Settings</h3>
        <p>You can control and manage cookies through your browser settings. Here's how for major browsers:</p>
        <ul>
          <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
          <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
        </ul>
        <p>Note: Disabling certain cookies may affect website functionality.</p>

        <h3>5.3 Opt-Out Tools</h3>
        <p>You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

        <h2>6. Third-Party Cookies</h2>
        <p>We may allow third-party services to place cookies on our site. These third parties include:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Analytics and performance measurement</li>
          <li><strong>Cloudflare:</strong> Security, DDoS protection, and CDN services</li>
        </ul>
        <p>These third parties' cookies are governed by their own privacy policies.</p>

        <h2>7. Do Not Track</h2>
        <p>Some browsers include a "Do Not Track" (DNT) feature. We respect DNT signals and will minimize data collection when DNT is enabled in your browser.</p>

        <h2>8. Updates to This Policy</h2>
        <p>We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our website constitutes acceptance of the updated policy.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions about our use of cookies, please contact us at:</p>
        <ul>
          <li><strong>Email:</strong> info@sahusphere.com</li>
          <li><strong>Website:</strong> sahusphere.com/contact</li>
        </ul>
      </div>
    </LegalLayout>
  );
}
