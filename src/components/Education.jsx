import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Clock } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Education() {
  const { education } = profileData;

  return (
    <section id="education" className="py-24 relative" aria-label="Educational Background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ACADEMIC PATHWAY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            My academic foundation spanning higher primary schooling, pre-university science studies, and undergraduate engineering in AI &amp; ML.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {education.map((item, index) => {
            const isCurrent = item.isCurrent;

            return (
              <div key={index} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan-400 border-background shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                      : 'bg-slate-700 border-background group-hover:bg-slate-500'
                  }`}
                />

                {/* Date display for larger screens on the left */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className={`text-xs font-mono font-medium block ${
                    isCurrent ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    {item.period.split(' to ')[0]}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 block">
                    to {item.period.split(' to ')[1]}
                  </span>
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-2xl transition-all duration-300 p-6 sm:p-8 ${
                    isCurrent
                      ? 'bg-gradient-to-br from-surface-card via-slate-900 to-cyan-950/20 border-2 border-cyan-500/40 shadow-xl shadow-cyan-950/30'
                      : 'bg-surface-card border border-slate-800/80 hover:border-slate-700 shadow-md'
                  }`}
                >
                  {/* Top Row: Degree & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap
                        className={`w-5 h-5 ${
                          isCurrent ? 'text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {isCurrent ? 'Undergraduate Degree (In Progress)' : 'Academic Milestone'}
                      </span>
                    </div>

                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Current Program
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Course / Degree Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${
                    isCurrent ? 'text-white' : 'text-slate-200'
                  }`}>
                    {item.degree}
                  </h3>

                  {/* Institution Name */}
                  <h4 className="text-base sm:text-lg font-medium text-slate-300 mb-3">
                    {item.institution}
                  </h4>

                  {/* Meta Details: Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights for Current Engineering Program */}
                  {isCurrent && (
                    <div className="mt-5 pt-4 border-t border-cyan-900/30 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
                        <span className="font-semibold text-slate-200 block mb-0.5">Core Disciplines</span>
                        <span className="text-slate-400">AI Architectures, Machine Learning Models, Data Systems</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
                        <span className="font-semibold text-slate-200 block mb-0.5">Academic Horizon</span>
                        <span className="text-slate-400">4-Year Engineering Program (Sept 2024 – May 2028)</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
