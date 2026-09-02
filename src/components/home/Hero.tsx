'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, ShieldCheck, Layers, Hammer } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';

const HERO_PILLARS = [
  {
    code: '01',
    phase: 'PLANNING & DRAWING',
    title: 'Architectural Blueprinting',
    detail: 'Statutory municipal sanction layouts, NBC compliance, and ergonomic space optimization.',
    icon: Compass,
    metric: 'IS 8888 / NBC 2016',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    code: '02',
    phase: 'STRUCTURAL DESIGN',
    title: 'Engineered For Resilience',
    detail: '3D finite element seismic analysis, ductile reinforcement detailing, and material economy.',
    icon: Layers,
    metric: 'IS 456 & IS 1893 Seismic',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1600&q=80'
  },
  {
    code: '03',
    phase: 'GEOTECHNICAL & NDT',
    title: 'Diagnostic Ground Truth',
    detail: 'Sub-surface SPT borehole investigations and non-destructive structural health audits.',
    icon: ShieldCheck,
    metric: 'IS 2131 & IS 13311 UPV',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80'
  },
  {
    code: '04',
    phase: 'CONSTRUCTION',
    title: 'Supervised Execution',
    detail: 'Engineer-led civil execution, calibrated concrete batch testing, and turnkey durability.',
    icon: Hammer,
    metric: '250+ Verified Structures',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=80'
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_PILLARS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activePillar = HERO_PILLARS[activeIdx];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-white pt-36 md:pt-40 lg:pt-44 pb-12 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid pointer-events-none opacity-60 dark:opacity-40" />

      {/* Background Image Layer with Adaptive Dimming */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-10 dark:opacity-20 filter grayscale"
        style={{ backgroundImage: `url(${activePillar.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#080B11] via-slate-50/80 dark:via-[#080B11]/80 to-transparent" />

      {/* Top Metadata Header with High Clearance */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-xs tracking-widest text-slate-500 dark:text-slate-400 font-mono uppercase pb-5 mb-6 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
          <span className="font-medium text-slate-700 dark:text-slate-300">{BRAND_INFO.name} • EST. {BRAND_INFO.establishedYear}</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px]">
          <span>HQ: Dankuni, Hooghly (WB)</span>
          <span>Lead: {BRAND_INFO.founder}</span>
          <span>Practice: 11+ Years</span>
        </div>
      </div>

      {/* Main Editorial Hero Typography */}
      <div className="relative z-10 my-auto py-6 md:py-10 max-w-6xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-6 font-semibold">
          <span>Active Discipline: {activePillar.phase}</span>
          <span>•</span>
          <span>{activePillar.metric}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light font-display tracking-tight text-slate-900 dark:text-slate-100 leading-[1.03]">
          Engineering <br />
          <span className="font-serif italic font-normal text-slate-600 dark:text-slate-300">beyond</span> the drawing.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
          From geotechnical soil analysis and seismic structural design to statutory municipal approvals, NDT audits, and turnkey civil execution. Built on 11 years of field discipline.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-white/20 hover:border-slate-800 dark:hover:border-white text-slate-800 dark:text-slate-200 text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all bg-white/60 dark:bg-white/[0.02] active:scale-95"
          >
            <span>Explore 250+ Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Dynamic 4-Phase Discipline Rail */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-white/10">
        {HERO_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={pillar.code}
              onClick={() => setActiveIdx(idx)}
              className={`text-left p-5 transition-all duration-300 border-l-2 ${
                isActive
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-white/[0.04]'
                  : 'border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 bg-transparent'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
                <span>PHASE {pillar.code}</span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'}`} />
              </div>
              <h2 className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase font-display">
                {pillar.phase}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 font-light">
                {pillar.detail}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
