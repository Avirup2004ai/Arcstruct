import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { INSIGHTS } from '@/data/siteData';

export default function InsightsSection() {
  return (
    <section className="bg-slate-100 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [ENGINEERING KNOWLEDGE]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
              Technical Insights & Whitepapers
            </h2>
          </div>
          <Link
            href="/insights"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
          >
            <span>View All Whitepapers</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="group border border-slate-200 dark:border-white/10 bg-white dark:bg-[#080B11] p-8 flex flex-col justify-between hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 uppercase font-semibold">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-4">
                  {item.title}
                </h3>

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
      </div>
    </section>
  );
}
