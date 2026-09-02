import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

export default function ServicesShowcase() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [DISCIPLINES & CAPABILITIES]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
              Integrated Technical Services
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
          >
            <span>Explore All 11 Services</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-white/10">
          {SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.slug}`}
              className="group py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50 dark:hover:bg-white/[0.02] px-4 transition-all"
            >
              <div className="flex items-baseline gap-6 md:gap-12 lg:w-1/2">
                <span className="font-mono text-sm md:text-base text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-semibold">
                  {srv.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mt-1">
                    {srv.category} • {srv.standardsFollowed[0] || 'IS Code'}
                  </span>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex items-center justify-between gap-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
                  {srv.shortDescription}
                </p>
                <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 group-hover:border-blue-600 dark:group-hover:border-blue-500 group-hover:bg-blue-600 flex items-center justify-center transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
