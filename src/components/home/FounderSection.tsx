import React from 'react';
import { BRAND_INFO } from '@/data/siteData';
import { CheckCircle2, UserCheck } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="bg-slate-100 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-white dark:bg-[#080B11] border border-slate-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between p-8 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">[PRINCIPAL DESK]</span>
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="my-auto py-8">
              <div className="w-20 h-20 rounded-full border-2 border-blue-500/40 bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center text-2xl font-display font-bold text-blue-600 dark:text-white mb-6">
                TD
              </div>
              <h3 className="text-3xl font-display font-semibold text-slate-900 dark:text-white">{BRAND_INFO.founder}</h3>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase mt-1 tracking-wider font-semibold">
                {BRAND_INFO.founderTitle}
              </p>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                {BRAND_INFO.experienceYears} Years Professional Engineering Practice
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 flex justify-between">
              <span>HOOGHLY • WEST BENGAL</span>
              <span>PAN-INDIA PRACTICE</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            Principal Leadership & Engineering Ethos
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight mb-6">
            Structural integrity is not negotiated. It is calculated.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
            Under the direction of <strong className="font-semibold text-slate-900 dark:text-white">{BRAND_INFO.founder}</strong>, The Archstruct Consultant has engineered and consulted on over 250+ structures with absolute dedication to life safety, statutory municipal clearances, and construction durability.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light">
            Headquartered in Dankuni, Hooghly, our firm combines deep geotechnical ground investigations with advanced structural design calculations, bridging the gap between abstract architectural drawings and robust on-site execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>IS Code & NBC Standard Compliance</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Turnkey Civil & Structural Oversight</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Non-Destructive Testing (NDT) Audits</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>End-to-End Statutory Approval Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
