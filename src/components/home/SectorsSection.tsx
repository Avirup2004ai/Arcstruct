import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Factory, Warehouse, Building2, Home, ShieldPlus, Landmark } from 'lucide-react';
import { INDUSTRIES } from '@/data/siteData';

const ICONS = [Factory, Warehouse, Building2, Home, ShieldPlus, Landmark];

export default function SectorsSection() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            [MARKET VERTICALS]
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
            Sector-Specific Engineering
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 font-light">
            Every building typology operates under unique structural load profiles, fire hazard levels, and regulatory compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={ind.code}
                className="group border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D121F] p-8 flex flex-col justify-between hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-500 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                      {ind.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mt-1 uppercase tracking-wider font-semibold">
                    {ind.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-500">
                    {ind.relevantServices.length} Disciplines
                  </div>
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-semibold"
                  >
                    <span>Sector Matrix</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
