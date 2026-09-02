import React from 'react';
import { TESTIMONIALS } from '@/data/siteData';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            [CLIENT VERIFICATION]
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
            Trusted by 100+ Enterprise & Private Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D121F] p-8 flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-600/40 dark:text-blue-500/40 mb-6" />
                <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
                <div className="text-slate-900 dark:text-white font-medium">{t.client}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{t.company}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] uppercase mt-2 font-semibold">{t.projectType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
