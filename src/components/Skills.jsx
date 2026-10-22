import React from 'react';
import { Database, Code2, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Skills() {
  const { skills } = profileData;

  const iconRegistry = {
    Database: Database,
    Code2: Code2,
    MessageSquare: MessageSquare,
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40" aria-label="Core Competencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical &amp; Professional Skills
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core competencies established through academic study, software development foundations, and active community ambassadorship.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill) => {
            const Icon = iconRegistry[skill.iconName] || Database;

            return (
              <div
                key={skill.id}
                className="group relative rounded-2xl bg-surface-card border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20 glow-effect"
              >
                <div>
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {skill.summary}
                  </p>

                  {/* Deep-dive Pillars */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                      Key Competency Focus
                    </p>
                    {skill.pillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400/90 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    {skill.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    VERIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authenticity Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-semibold">Integrity Notice:</span> Skills presented represent verified competencies from academic curriculum and credentials, without arbitrary percentage ratings or exaggerated metrics.
          </p>
        </div>

      </div>
    </section>
  );
}
