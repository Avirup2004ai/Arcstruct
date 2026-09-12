import React from 'react';
import { BRAND_INFO } from '@/data/siteData';
import { CheckCircle2, UserCheck, Award, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function FounderSection() {
  return (
    <section className="bg-slate-100 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white dark:bg-[#080B11] border border-slate-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between p-8 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">[PRINCIPAL DESK]</span>
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="my-auto py-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-5 rounded-sm overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-md bg-slate-100 dark:bg-white/[0.04]">
                <img
                  src={BRAND_INFO.founderImage}
                  alt={BRAND_INFO.founder}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">{BRAND_INFO.founder}</h3>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase mt-1 tracking-wider font-semibold">
                {BRAND_INFO.founderTitle}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">B.Tech (Civil), M.Tech (Structural Engg.)</p>
                <p className="text-slate-500 dark:text-slate-400">M.I.E, M.I.G.S, Chartered Engineer</p>
              </div>
            </div>

            {/* Empanelment Tag */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-400 space-y-1 bg-slate-50 dark:bg-white/[0.02] p-3 rounded-sm">
              <div className="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Empanelled Class I Engineer</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-tight">
                Structural (Class I), Geotechnical (Class I), L.B.S. (Class I) of K.M.C & M.E.D, Govt. Of W.B.
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 flex justify-between">
              <span>HOOGHLY • WEST BENGAL</span>
              <span>11+ YEARS PRACTICE</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            Company Founder & CEO
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight mb-6">
            Structural integrity is not negotiated. It is calculated.
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-base">
            <strong className="font-semibold text-slate-900 dark:text-white">{BRAND_INFO.founder}</strong> has over 11 years of professional experience in structural design, specializing in the analysis and design of various categories of structures.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
            His technical proficiency encompasses design of reinforced concrete, steel structures, PEBs, structural assessment, and delivering safe, efficient, and cost-effective engineering solutions. His expertise also includes geotechnical investigation and foundation engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>RCC, Structural Steel & PEB Design</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Geotechnical Soil & Foundation Engineering</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Structural Health Audits & NDT Testing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Class I Empanelled Clearances (KMC & MED)</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              <span>Explore Leadership, Vision & Mission</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
