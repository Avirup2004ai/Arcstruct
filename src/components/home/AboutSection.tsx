import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';

export default function AboutSection() {
  return (
    <section className="bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] p-8 md:p-12 relative shadow-sm dark:shadow-none">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-3 font-semibold">
              [ARCHSTRUCT HERITAGE]
            </span>
            <div className="text-3xl font-display font-light text-slate-900 dark:text-white mb-6">
              Founded 2021. <br />
              Rooted in 11 Years of Engineering Rigor.
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
              Based in Dankuni (Hooghly, West Bengal), <strong className="text-slate-900 dark:text-white font-medium">THE ARCHSTRUCT CONSULTANT</strong> bridges the gap between creative architectural design and strict structural calculations.
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 dark:text-slate-500">HEADQUARTERS</span>
                <span className="font-semibold text-slate-800 dark:text-white">Dankuni, Hooghly</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 dark:text-slate-500">CHIEF ENGINEER</span>
                <span className="font-semibold text-slate-800 dark:text-white">{BRAND_INFO.founder}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 dark:text-slate-500">PRIMARY CODES</span>
                <span className="font-semibold text-slate-800 dark:text-white">IS 456, IS 1893, NBC 2016</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            About The Practice
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight mb-8">
            Built on engineering experience. Designed for enduring scale.
          </h2>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed text-base">
            <p>
              We are not merely architects or drafting contractors. We are an integrated consultancy where every line drawn on paper is backed by structural finite element modeling, geotechnical soil mechanics, and statutory building compliance.
            </p>
            <p>
              Having executed over 250+ projects across residential complexes, industrial sheds, commercial plazas, and municipal infrastructure in Eastern India, our objective is to deliver enduring engineering value to clients throughout India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Multi-Sector Project Experience</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Evidence-Based Soil & NDT Testing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Full Statutory & Fire Clearances</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Engineer-Supervised Construction</span>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-blue-600 pb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
            >
              <span>Read Full Firm Trajectory & Leadership</span>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
