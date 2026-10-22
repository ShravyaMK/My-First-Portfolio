import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Copy, Check, Send, ArrowUpRight, MessageCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact() {
  const { personal } = profileData;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleLaunchEmail = (e) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || `Connecting with ${personal.name}`);
    const encodedBody = encodeURIComponent(
      message ? `${message}\n\nSent from Portfolio Website` : `Hello ${personal.name},\n\nI would like to connect with you regarding...`
    );
    window.location.href = `mailto:${personal.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-24 relative" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            LET&apos;S CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Whether you are looking for an aspiring AI/ML intern, discussing student tech initiatives, or exploring academic collaborations, I would love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full min-w-0">
          
          {/* Contact Direct Channels (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 w-full min-w-0">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-surface-card border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-300 transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Email */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-surface-card border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Professional Network
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                      LinkedIn Profile
                    </h3>
                  </div>
                </div>

                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="Open LinkedIn profile in new tab"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                View verified professional profile and network with Shravya M K on LinkedIn.
              </p>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-surface-card border border-slate-800 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                    Current Location
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-100">
                    {personal.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                Open to in-person opportunities in Karnataka as well as remote internships across India and globally.
              </p>
            </div>

          </div>

          {/* Interactive Direct Email Launcher / Form (7 cols on lg) */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to open your preferred email client directly addressed to <span className="text-cyan-300 font-mono">{personal.email}</span> with your message formatted.
              </p>

              <form onSubmit={handleLaunchEmail} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Internship Opportunity / Student Ambassadorship"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Shravya, I came across your portfolio and would like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
                    Direct mailto launcher &bull; No third-party data tracking
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all duration-200 shadow-md shadow-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
