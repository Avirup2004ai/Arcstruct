import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { INSIGHTS } from '@/data/siteData';

export default function InsightsPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [KNOWLEDGE DESK]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Technical Insights & Whitepapers
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            Practical engineering research on foundation mechanics, NDT diagnostic testing, and seismic compliance for structural developers and practitioners.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="group border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] p-8 flex flex-col justify-between hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 uppercase font-semibold">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>

                <h2 className="text-xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-4">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">{item.date}</span>
                <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-white/10 group-hover:border-blue-600 dark:group-hover:border-blue-500 group-hover:bg-blue-600 flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
