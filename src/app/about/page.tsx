import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_INFO } from '@/data/siteData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Practice | Firm Trajectory & Leadership',
  description: 'Learn about The Archstruct Consultant, founded in 2021 by Er. Tanmoy Das, with 11+ years of engineering discipline, 250+ completed projects, and a Pan-India vision.',
};

export default function AboutPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Page Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [ABOUT THE PRACTICE]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Built on engineering experience. <br />
            Designed for enduring scale.
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            Founded in 2021 by Er. Tanmoy Das, The Archstruct Consultant brings over 11 years of structural calculation, geotechnical soil investigation, and statutory architectural planning to every project we undertake.
          </p>
        </div>
      </section>

      {/* Firm Story */}
      <section className="py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 p-8 space-y-6 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
              <div className="flex justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">ESTABLISHED</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.establishedYear}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">HEADQUARTERS</span>
                <span className="text-slate-900 dark:text-white font-semibold">Dankuni, Hooghly (WB)</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">TOTAL ENGAGEMENTS</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.projectsCount} Completed</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">CLIENT BASE</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.clientsCount} Institutional & Private</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">LEAD ENGINEER</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.founder}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
            <h2 className="text-3xl font-display font-medium text-slate-900 dark:text-white mb-6">
              An Engineering-Led Approach to Space
            </h2>
            <p>
              In contemporary construction, a dangerous divide often exists between architectural vision and structural reality. Abstract drawings created without rigorous soil mechanics or seismic calculations frequently cause on-site delays, budget overruns, and long-term structural distress.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">THE ARCHSTRUCT CONSULTANT</strong> was established to eliminate this disconnect. Operating from Dankuni in Hooghly, West Bengal, our practice integrates architectural space planning directly with finite element structural engineering, on-site geotechnical testing, Non-Destructive Testing (NDT), and municipal statutory clearance support.
            </p>
            <p>
              Having successfully completed 250+ projects ranging from heavy industrial PEB warehouses to multi-storey residential complexes and healthcare facilities, our team is equipped to handle complex engineering challenges across India.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-square bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between shadow-sm dark:shadow-none">
              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase font-semibold">[PRINCIPAL LEADERSHIP]</span>
              <div>
                <div className="w-16 h-16 rounded-full border border-blue-500/40 bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center text-xl font-display font-bold text-blue-600 dark:text-white mb-4">
                  TD
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{BRAND_INFO.founder}</h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase mt-1 font-semibold">{BRAND_INFO.founderTitle}</p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">11+ Years Experience</p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500">
                Dankuni, Hooghly • West Bengal – 712311
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl font-display font-medium text-slate-900 dark:text-white mb-6">
              Leadership & Ethical Standards
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
              Er. Tanmoy Das leads the firm with a philosophy grounded in technical transparency, strict compliance with the National Building Code (NBC 2016) and Bureau of Indian Standards (IS Codes), and uncompromising structural safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-700 dark:text-slate-300 pt-6 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>IS 456 / IS 1893 Seismic Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Geotechnical Soil & SPT Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Non-Destructive Testing (NDT) Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Turnkey Quality Civil Supervision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-light text-slate-900 dark:text-white mb-4">
            Discuss Your Project with Er. Tanmoy Das
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-light mb-8">
            Connect with our chief engineering desk to review your architectural plans, structural calculations, or site testing requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all shadow-md active:scale-95"
          >
            <span>Initiate Project Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
