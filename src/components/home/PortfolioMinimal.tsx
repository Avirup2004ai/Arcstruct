import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';

export default function PortfolioMinimal() {
  const topProjects = PROJECTS.slice(0, 3);

  return (
    <section className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [SELECTED WORKS]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
          >
            <span>View All 250+ Archive</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-12">
          {topProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#080B11] border border-slate-200 dark:border-white/10 p-6 md:p-8 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image Column */}
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-slate-950">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 bg-black/80 backdrop-blur-sm text-blue-400 border border-white/10 uppercase">
                  {project.sector}
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 line-clamp-3 font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    SCALE: <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.scale}</span>
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white font-semibold">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
