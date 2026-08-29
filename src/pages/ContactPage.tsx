import { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle, MessageSquare, HelpCircle, Shield } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-blue-600" />, label: 'Email', value: 'info@sahusphere.com', link: 'mailto:info@sahusphere.com', bg: 'bg-blue-50' },
    { icon: <Clock className="w-5 h-5 text-purple-600" />, label: 'Response Time', value: 'Within 24 hours', link: null, bg: 'bg-purple-50' },
    { icon: <MapPin className="w-5 h-5 text-cyan-600" />, label: 'Availability', value: 'Worldwide · 24/7', link: null, bg: 'bg-cyan-50' },
  ];

  const topics = [
    { icon: <HelpCircle className="w-5 h-5 text-blue-500" />, title: 'Technical Support', desc: 'Having issues with a tool? We\'re here to help debug and resolve them quickly.' },
    { icon: <MessageSquare className="w-5 h-5 text-purple-500" />, title: 'Feature Requests', desc: 'Have an idea for a new feature or improvement? We love hearing from our users.' },
    { icon: <Shield className="w-5 h-5 text-green-500" />, title: 'Privacy & Legal', desc: 'For DMCA, privacy concerns, or legal inquiries. We take these seriously.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="hero-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #2563EB 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-manrope mb-6">
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </div>
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-white mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-blue-100/80 font-manrope text-xl leading-relaxed">
            Have a question, feedback, or need support? Our team is ready to help. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-500 font-manrope leading-relaxed">
                  Whether you have a question about our tools, need technical support, want to report an issue, or just want to say hello — we're always happy to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="card-premium p-5 flex items-center gap-4">
                    <div className={`${info.bg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-manrope font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-800 font-manrope font-medium hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-manrope font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="card-premium p-6">
                <h3 className="font-poppins font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM IST' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM IST' },
                    { day: 'Sunday', hours: 'Limited Support' },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 font-manrope">{schedule.day}</span>
                      <span className="text-sm font-manrope font-medium text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-manrope mt-4 pt-4 border-t border-gray-100">
                  * Email responses are typically within 24 hours on business days.
                </p>
              </div>

              {/* Topics */}
              <div className="space-y-3">
                <h3 className="font-poppins font-semibold text-gray-900">What Can We Help With?</h3>
                {topics.map((topic) => (
                  <div key={topic.title} className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 mt-0.5">{topic.icon}</div>
                    <div>
                      <p className="font-manrope font-semibold text-gray-800 text-sm mb-1">{topic.title}</p>
                      <p className="font-manrope text-gray-500 text-xs leading-relaxed">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-8">
                {sent ? (
                  <div className="text-center py-12 animate-bounce-in">
                    <div className="success-circle mb-6 w-20 h-20 mx-auto">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">Message Sent! 🎉</h3>
                    <p className="text-gray-500 font-manrope mb-2">
                      Thank you for reaching out, <strong>{form.name}</strong>!
                    </p>
                    <p className="text-gray-400 font-manrope text-sm mb-8">
                      We've received your message and will reply to <strong className="text-gray-600">{form.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 font-manrope text-sm mb-8">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-6 text-red-600 text-sm font-manrope">
                        ⚠️ {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-manrope font-semibold text-gray-700 mb-2">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-manrope text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-manrope font-semibold text-gray-700 mb-2">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="john@example.com"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-manrope text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-manrope font-semibold text-gray-700 mb-2">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-manrope text-gray-800 bg-gray-50 focus:bg-white transition-all"
                        >
                          <option value="">Select a subject...</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Bug Report">Bug Report</option>
                          <option value="Privacy Inquiry">Privacy Inquiry</option>
                          <option value="DMCA Report">DMCA Report</option>
                          <option value="Partnership">Partnership / Business</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-manrope font-semibold text-gray-700 mb-2">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Describe your question or issue in detail. The more information you provide, the faster we can help you."
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-manrope text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 font-manrope leading-relaxed">
                          Your information is protected and will only be used to respond to your inquiry. We never share personal data with third parties. See our{' '}
                          <a href="/privacy-policy" className="underline font-semibold">Privacy Policy</a>.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
