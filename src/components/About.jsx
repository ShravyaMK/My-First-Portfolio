import React from 'react';
import { BookOpen, Users, Compass, Code, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  const { about, personal } = profileData;

  const iconMap = [GraduationCap, Users, Compass, Code];

  return (
    <section id="about" className="py-24 relative" aria-label="About Shravya M K">
      {/* Background divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            BACKGROUND &amp; ASPIRATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            An authentic glimpse into my academic pathway, engineering mindset, and future aspirations in artificial intelligence.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full min-w-0">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 w-full min-w-0">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card/70 border border-slate-800/80 backdrop-blur-sm shadow-xl space-y-5">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Pursuing Engineering in AI &amp; Machine Learning</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.intro}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Currently in my undergraduate studies at <span className="text-slate-200 font-medium">AJ Institute of Engineering and Technology, Mangaluru</span>, I am actively engaging with core computer science principles—focusing particularly on structured database design, object-oriented software development, and foundational algorithms that power intelligent systems.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                My ambition is to grow as an AI Engineer who can develop reliable, well-architected systems that turn raw data into meaningful real-world utility. Outside the lecture hall, I believe in peer learning, technical community engagement through the Microsoft Student Ambassador community, and steady hands-on skill development.
              </p>

              {/* Verified Key Highlights */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>AJIET AI &amp; ML (2024 – 2028)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Microsoft Student Ambassador 2026</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Tata GenAI Analytics Simulation</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Based in Mangaluru, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stat Cards & Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4 w-full min-w-0">
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {about.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  <div className="my-1.5">
                    <span className="text-base sm:text-lg font-bold text-slate-100 block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-cyan-400/90 font-mono">
                      {stat.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              {about.points.map((pt, idx) => {
                const IconComponent = iconMap[idx] || CheckCircle2;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-card/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
