import React from 'react';
import { ArrowUp, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const { personal, navigation } = profileData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-background pt-16 pb-12 relative" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                {personal.monogram}
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {personal.headline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                aria-label="Email address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
              Quick Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic & Professional Status (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Affiliation
            </span>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-slate-200">AJIET Mangaluru</p>
              <p className="text-slate-400">B.E. in AI &amp; Machine Learning</p>
              <p className="text-cyan-400 font-mono text-[11px]">2024 – 2028</p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors pt-2 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Built for AI Engineering &amp; Academic Showcase</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
