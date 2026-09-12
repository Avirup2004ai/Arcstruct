import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';

export default function AboutStatement() {
  return (
    <section className="bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-white py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold block mb-3">
              [THE ARCHSTRUCT PRACTICE] • {BRAND_INFO.secondaryTagline}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
              "{BRAND_INFO.tagline}"
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold flex-shrink-0"
          >
            <span>Firm Heritage (11 Years)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400">
          <div>
            <strong className="text-slate-900 dark:text-white font-medium block mb-2 font-display text-base">
              01. Calculated Engineering
            </strong>
            Every drawing is validated with finite element structural analysis, geotechnical soil mechanics, and seismic safety under IS 1893 standards.
          </div>
          <div>
            <strong className="text-slate-900 dark:text-white font-medium block mb-2 font-display text-base">
              02. Proven Multi-Sector Track Record
            </strong>
            Over 250+ completed engagements across industrial factories, logistics warehouses, multi-storey apartments, and public infrastructure.
          </div>
          <div>
            <strong className="text-slate-900 dark:text-white font-medium block mb-2 font-display text-base">
              03. Single-Window Delivery
            </strong>
            Headquartered in Dankuni, Hooghly, we coordinate municipal sanctioning, soil testing, NDT audits, and civil construction under one roof.
          </div>
        </div>
      </div>
    </section>
  );
}
