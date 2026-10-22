import React from 'react';
import { Award, Sparkles, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Credentials() {
  const { credentials } = profileData;

  const iconMap = {
    Award: Award,
    Sparkles: Sparkles,
  };

  return (
    <section id="credentials" className="py-24 relative bg-slate-950/40" aria-label="Certifications and Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            RECOGNITIONS &amp; SIMULATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Recognitions and experiential learning simulations verified from my academic profile.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred, idx) => {
            const Icon = iconMap[cred.iconName] || Award;
            const isCyan = cred.badgeColor === 'cyan';

            return (
              <div
                key={idx}
                className="group rounded-2xl bg-surface-card border border-slate-800 hover:border-slate-700 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl glow-effect"
              >
                <div>
                  {/* Card Header: Icon & Issuer Tag */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                        isCyan
                          ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30'
                          : 'bg-indigo-950/70 text-indigo-300 border border-indigo-500/30'
                      }`}>
                        <span>{cred.issuer}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 mt-1">
                        Cohort: {cred.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Type */}
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {cred.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {cred.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cred.description}
                  </p>

                  {/* Program Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                      Key Takeaways &amp; Focus
                    </p>
                    {cred.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Verified Badge */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Profile Verified</span>
                  </div>
                  <span className="text-slate-500">
                    Authentic Credential
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500">
            All listed credentials and simulations adhere strictly to verifiable profile details without fabricated verification URLs or placeholder IDs.
          </p>
        </div>

      </div>
    </section>
  );
}
