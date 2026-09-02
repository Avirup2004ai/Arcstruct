import React from 'react';
import { METHODOLOGY_STEPS } from '@/data/siteData';

export default function EngineeringApproach() {
  return (
    <section className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            [7-STAGE METHODOLOGY]
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
            A Rigorous Engineering Workflow
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 font-light">
            Every Archstruct engagement follows a sequential chain of technical verification—eliminating construction site ambiguities before concrete is poured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#080B11] hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-blue-600 dark:text-blue-500 font-mono text-xs tracking-widest mb-4 font-semibold">
                  <span>STAGE {item.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                </div>
                <h3 className="text-xl font-display font-medium text-slate-900 dark:text-slate-200 uppercase tracking-wide">
                  {item.name}
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-1 mb-4 font-medium">
                  {item.subtitle}
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
