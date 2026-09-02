'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PROJECTS, BRAND_INFO } from '@/data/siteData';

const SECTORS = ['All', 'Residential', 'Industrial', 'Commercial', 'Warehousing', 'Institutional', 'Infrastructure'];

export default function ProjectsPage() {
  const [activeSector, setActiveSector] = useState('All');

  const filteredProjects = activeSector === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.sector === activeSector);

  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [PORTFOLIO ARCHIVE]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Selected Project Case Studies
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            Over {BRAND_INFO.projectsCount} engineering engagements spanning structural design, soil mechanics, statutory sanctioning, and non-destructive health audits.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-12 font-mono text-xs">
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-5 py-2.5 uppercase tracking-wider transition-all font-medium ${
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
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] overflow-hidden flex flex-col justify-between hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 bg-black/80 backdrop-blur-sm text-blue-400 border border-white/10 uppercase">
                  {project.sector}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 line-clamp-3 font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{project.scale}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors font-semibold active:scale-95"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
