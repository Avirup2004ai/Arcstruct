import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Engineering & Architectural Services Directory',
  description: 'Explore the 11 integrated engineering disciplines of The Archstruct Consultant: Architectural Planning, Structural Design, Soil Testing, NDT Audits, Surveying, Construction, and Waterproofing.',
};

export default function ServicesPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Page Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [SERVICES DIRECTORY]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Integrated Technical Disciplines
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            From geotechnical soil investigation and seismic structural modeling to statutory fire approvals and turnkey construction supervision.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={srv.slug}
              className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] p-8 lg:p-12 transition-all hover:border-blue-500/40 shadow-sm dark:shadow-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-mono text-blue-600 dark:text-blue-500 font-bold">{srv.number}</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {srv.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-slate-900 dark:text-white">
                    {srv.title}
                  </h2>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-2 uppercase font-semibold">
                    {srv.tagline}
                  </p>

                  <div className="mt-8">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase px-5 py-3 transition-all shadow-sm active:scale-95"
                    >
                      <span>Full Technical Scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm lg:text-base">
                    {srv.fullOverview}
                  </p>

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {srv.keyDeliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                    <span>STANDARDS:</span>
                    {srv.standardsFollowed.map((std, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-white/[0.03] px-2 py-0.5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
