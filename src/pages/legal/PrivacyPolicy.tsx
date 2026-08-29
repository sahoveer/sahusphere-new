import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="How we handle your data and protect your privacy." updated="January 1, 2026">
      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Sahu Sphere ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>sahusphere.com</strong> and use our tools and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2>2. Key Privacy Principle — Client-Side Processing</h2>
        <p>
          <strong>The most important thing you should know about Sahu Sphere:</strong> All file processing (including image-to-PDF conversion) is performed entirely in your web browser using JavaScript. Your files are <strong>never uploaded to our servers</strong>. We do not have access to your images, documents, or any other files you use with our tools.
        </p>
        <ul>
          <li>No file uploads to external servers</li>
          <li>No file storage or retention of any kind</li>
          <li>All processing occurs locally on your device</li>
          <li>Files are deleted from memory when you close or refresh the page</li>
        </ul>

        <h2>3. Information We Collect</h2>
        <h3>3.1 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
        <ul>
          <li>IP address (anonymized for analytics)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Date and time of your visit</li>
        </ul>

        <h3>3.2 Information You Provide</h3>
        <p>We collect information you voluntarily provide when you:</p>
        <ul>
          <li>Contact us via our contact form (name, email, message)</li>
          <li>Subscribe to our newsletter (email address only)</li>
        </ul>

        <h3>3.3 Information We Do NOT Collect</h3>
        <ul>
          <li>Images or files you use with our tools</li>
          <li>Content of documents you create</li>
          <li>Payment information (all tools are free)</li>
          <li>Biometric data of any kind</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate and maintain our website</li>
          <li>Improve user experience and website performance</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send newsletters (only if you subscribed)</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Detect and prevent fraud or abuse</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>5. Cookies</h2>
        <p>We use cookies and similar tracking technologies to enhance your browsing experience. These include:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
        <p>You can control cookie settings through your browser. See our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a> for more details.</p>

        <h2>6. Third-Party Services</h2>
        <p>We may use third-party services that collect, monitor, and analyze data to improve our service, including:</p>
        <ul>
          <li>Google Analytics (website analytics — with IP anonymization)</li>
          <li>Cloudflare (security and performance)</li>
        </ul>
        <p>These third parties have their own privacy policies governing the use of this data.</p>

        <h2>7. Data Security</h2>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul>
          <li>SSL/TLS encryption for all data in transit</li>
          <li>Secure server infrastructure</li>
          <li>Regular security audits</li>
          <li>Limited access to personal data by authorized personnel only</li>
        </ul>

        <h2>8. Your Rights (GDPR & Privacy Laws)</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Right to Object:</strong> Object to our processing of your data</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:info@sahusphere.com" className="text-blue-600 hover:underline">info@sahusphere.com</a>.</p>

        <h2>9. Data Retention</h2>
        <p>We retain personal information (contact form submissions) for a maximum of 12 months, after which it is securely deleted. Newsletter subscriptions are retained until you unsubscribe.</p>

        <h2>10. Children's Privacy</h2>
        <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.</p>

        <h2>11. International Data Transfers</h2>
        <p>If you are accessing our website from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our servers are located.</p>

        <h2>12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.</p>

        <h2>13. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> info@sahusphere.com</li>
          <li><strong>Website:</strong> sahusphere.com/contact</li>
        </ul>
      </div>
    </LegalLayout>
  );
}
