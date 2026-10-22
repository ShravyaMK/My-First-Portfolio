import React from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, Award, Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';
import NeuralVisual from './NeuralVisual';

export default function Hero() {
  const { personal } = profileData;

  return (
    <section
      id="home"
      className="relative flex items-center pt-28 pb-20 lg:py-32 overflow-hidden"
      aria-label="Introduction & Overview"
    >
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full min-w-0">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left w-full min-w-0">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2 w-full min-w-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 backdrop-blur-sm shadow-sm shadow-cyan-950/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span>{personal.statusBadge}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-800 text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{personal.location}</span>
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2 w-full min-w-0">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Personal Portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight break-words">
                Hello, I&apos;m{' '}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent inline-block">
                  {personal.name}
                </span>
              </h1>
            </div>

            {/* Verified Headline */}
            <div className="flex items-start gap-2.5 p-2.5 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-base font-medium text-slate-200 w-full min-w-0">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-snug break-words min-w-0 flex-1">
                {personal.headline}
              </span>
            </div>

            {/* Authentic Introduction */}
            <p className="text-sm sm:text-lg text-slate-400 max-w-2xl leading-relaxed break-words w-full">
              Undergraduate student at <span className="text-slate-200 font-medium">AJ Institute of Engineering and Technology</span>, specializing in Artificial Intelligence and Machine Learning. Focused on database systems, structured software design, and aspiring to build innovative AI solutions.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Get in Touch</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore My Profile</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="pt-4 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Specialization</span>
                <span className="text-slate-200 font-medium">AI &amp; Machine Learning</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Class of</span>
                <span className="text-slate-200 font-medium">2024 – 2028</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Leadership</span>
                <span className="text-cyan-400 font-medium">MS Ambassador &apos;26</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual AI Graphic (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full min-w-0">
            <NeuralVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
