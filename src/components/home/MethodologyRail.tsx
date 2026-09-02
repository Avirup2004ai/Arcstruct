import React from 'react';
import { METHODOLOGY_STEPS } from '@/data/siteData';

export default function MethodologyRail() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            [7-STAGE METHODOLOGY]
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-display text-slate-900 dark:text-slate-100">
            Disciplined Engineering Delivery
          </h2>
        </div>

        {/* Minimal Linear Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {METHODOLOGY_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-5 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D121F] flex flex-col justify-between hover:border-blue-500 transition-all shadow-sm dark:shadow-none"
            >
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold block mb-2">
                  {item.step}
                </span>
                <h3 className="text-sm font-display font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  {item.name}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light mt-3 leading-snug">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
