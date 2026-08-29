import { Link } from 'react-router-dom';
import { Shield, Zap, Heart, Globe, Award, CheckCircle, ArrowRight, Users, Target, Sparkles } from 'lucide-react';

const values = [
  { icon: <Shield className="w-6 h-6" />, title: 'Privacy First', desc: 'We never store your files. All processing happens in your browser — your data stays yours.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: <Zap className="w-6 h-6" />, title: 'Speed', desc: 'Instant conversions with no upload time. Our tools are optimized for lightning-fast performance.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: <Heart className="w-6 h-6" />, title: 'Simplicity', desc: 'Designed for everyone. No technical knowledge required — just upload, configure, and download.', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: <Globe className="w-6 h-6" />, title: 'Reliability', desc: 'Built with enterprise-grade stability. Available 24/7 for anyone, anywhere in the world.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Innovation', desc: 'We constantly improve our tools with the latest web technologies and user feedback.', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: <Award className="w-6 h-6" />, title: 'Quality', desc: 'Premium results without premium pricing. We believe everyone deserves professional tools.', color: 'text-orange-500', bg: 'bg-orange-50' },
];



export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="hero-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 70% 50%, #7C3AED 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-manrope mb-6">
            <Users className="w-4 h-4" />
            About Sahu Sphere
          </div>
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-white mb-6">
            Making Professional Digital Tools<br />
            <span className="gradient-text">Accessible to Everyone</span>
          </h1>
          <p className="text-blue-100/80 font-manrope text-xl leading-relaxed">
            Sahu Sphere is a free online productivity platform built on the belief that everyone deserves access to professional-grade digital tools — regardless of budget, technical skill, or location.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-blue mb-6">
                <Target className="w-3.5 h-3.5" />
                Our Mission
              </div>
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Democratizing Digital Productivity
              </h2>
              <p className="text-gray-500 font-manrope text-lg leading-relaxed mb-6">
                We started Sahu Sphere with a simple mission: to provide fast, secure, and easy-to-use online productivity tools that anyone can use — completely free.
              </p>
              <p className="text-gray-500 font-manrope leading-relaxed mb-8">
                From students and freelancers to small businesses and enterprises, we build tools that save time, protect privacy, and deliver professional results. Our Image to PDF converter is just the beginning — we're building a comprehensive suite of tools to handle all your digital document needs.
              </p>
              <div className="space-y-4">
                {[
                  'Free for everyone, always',
                  'No account or registration required',
                  '100% browser-based — your files stay private',
                  'Mobile-friendly, works on any device',
                  'Continuously improving based on user feedback',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700 font-manrope">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Fast & Efficient', desc: 'Optimized for speed. Convert files in seconds, not minutes.', bg: 'bg-blue-50' },
                { icon: '🔒', title: 'Privacy Guaranteed', desc: 'Zero data retention. We never see or store your files.', bg: 'bg-green-50' },
                { icon: '🌍', title: 'Globally Available', desc: 'Available worldwide, 24/7, in all browsers and devices.', bg: 'bg-purple-50' },
                { icon: '💡', title: 'Always Innovating', desc: 'Regular updates with new features based on user feedback.', bg: 'bg-orange-50' },
              ].map((card) => (
                <div key={card.title} className={`${card.bg} rounded-2xl p-6`}>
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-2 text-sm">{card.title}</h4>
                  <p className="text-gray-600 text-xs font-manrope leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge badge-purple mx-auto mb-4">Our Values</div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              What Drives Everything We Do
            </h2>
            <p className="text-gray-500 font-manrope text-lg max-w-2xl mx-auto">
              These core values shape every decision we make and every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div key={val.title} className="card-premium p-6">
                <div className={`w-12 h-12 ${val.bg} rounded-2xl flex items-center justify-center ${val.color} mb-5`}>
                  {val.icon}
                </div>
                <h3 className="font-poppins font-semibold text-gray-900 text-lg mb-3">{val.title}</h3>
                <p className="text-gray-500 font-manrope text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge badge-blue mx-auto mb-4">Our Story</div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Built for Real People
            </h2>
          </div>
          <div className="card-premium p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 font-manrope text-lg leading-relaxed mb-6">
                Sahu Sphere was born out of frustration. We were tired of using tools that required subscriptions, uploads to unknown servers, and complex sign-up processes just to do simple things like converting an image to a PDF.
              </p>
              <p className="text-gray-600 font-manrope leading-relaxed mb-6">
                We asked: <em className="text-blue-600 not-italic font-semibold">"Why can't this be simpler, faster, and free?"</em> So we built it. Every tool on Sahu Sphere is designed with three principles: it must be free, it must protect your privacy, and it must be simple enough for anyone to use.
              </p>
              <p className="text-gray-600 font-manrope leading-relaxed mb-8">
                Today, Sahu Sphere serves users globally — from students converting assignment photos to PDFs, to professionals preparing documents for meetings. Our commitment is unwavering: <strong className="text-gray-900">professional tools for everyone, always free.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/image-to-pdf" className="btn-primary flex items-center justify-center gap-2">
                  Try Our Tools
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: 'Free Forever', icon: '🆓' },
              { value: '5+', label: 'File Formats', icon: '📁' },
              { value: '0s', label: 'Upload Time', icon: '⚡' },
              { value: '∞', label: 'Conversions', icon: '♾️' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-poppins font-bold text-4xl text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-manrope">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
