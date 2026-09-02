'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';

const SECTORS = ['All', 'Residential', 'Industrial', 'Commercial', 'Warehousing', 'Institutional'];

export default function PortfolioSection() {
  const [activeSector, setActiveSector] = useState('All');

  const filteredProjects = activeSector === 'All'
    ? PROJECTS.slice(0, 4)
    : PROJECTS.filter(p => p.sector === activeSector).slice(0, 4);

  return (
    <section className="bg-slate-100 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [SELECTED ENGAGEMENTS]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
              Project Archive & Case Studies
            </h2>
          </div>

          {/* Sector Filters */}
          <div className="flex flex-wrap gap-2 mt-6 lg:mt-0 font-mono text-xs">
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2 uppercase tracking-wider transition-all font-medium ${
                  activeSector === sector
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group border border-slate-200 dark:border-white/10 bg-white dark:bg-[#080B11] overflow-hidden flex flex-col justify-between transition-all hover:border-blue-500/50 shadow-sm dark:shadow-none ${
                idx === 0 ? 'md:col-span-2 md:grid md:grid-cols-12 md:gap-8' : ''
              }`}
            >
              {/* Image Frame */}
              <div
                className={`relative overflow-hidden bg-slate-900 ${
                  idx === 0 ? 'md:col-span-7 aspect-[16/10]' : 'aspect-[16/10]'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 bg-black/80 backdrop-blur-sm text-blue-400 border border-white/10 uppercase">
                  {project.sector}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className={`p-8 flex flex-col justify-between ${idx === 0 ? 'md:col-span-5' : ''}`}>
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-3 font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-500">
                    SCALE: <span className="text-slate-800 dark:text-slate-300 font-semibold">{project.scale}</span>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors font-semibold"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border border-slate-300 dark:border-white/20 hover:border-slate-800 dark:hover:border-white text-slate-900 dark:text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all bg-white dark:bg-white/[0.02] shadow-sm font-semibold"
          >
            <span>View All 250+ Projects Archive</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
