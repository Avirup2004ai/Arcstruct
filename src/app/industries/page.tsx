import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '@/data/siteData';

export default function IndustriesPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [MARKET VERTICALS]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Sector-Specific Engineering
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            From heavy machine vibration foundations and large-span logistics warehouses to hospital radiation suites and high-rise residential framing.
          </p>
        </div>
      </section>

      {/* Industry Matrix */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.code}
              className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] p-8 lg:p-12 hover:border-blue-500/40 shadow-sm dark:shadow-none transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-6 mb-8">
                <div>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1 font-semibold">
                    {ind.code}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-slate-900 dark:text-white">
                    {ind.name}
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:block uppercase">
                  {ind.tagline}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 text-sm lg:text-base">
                {ind.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 font-semibold">
                    Key Engineering Challenges
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-light">
                    {ind.keyChallenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-mono">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                    Our Engineered Solutions
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-light">
                    {ind.ourSolutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                  <span className="text-slate-400 dark:text-slate-500 font-semibold">APPLICABLE SERVICES:</span>
                  {ind.relevantServices.map((srv, idx) => (
                    <span key={idx} className="bg-slate-50 dark:bg-[#080B11] px-2.5 py-1 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300">
                      {srv}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-white transition-colors font-semibold active:scale-95"
                >
                  <span>Inquire for {ind.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
