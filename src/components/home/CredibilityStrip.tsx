import React from 'react';
import { BRAND_INFO } from '@/data/siteData';

export default function CredibilityStrip() {
  const STATS = [
    { value: BRAND_INFO.projectsCount, label: 'Projects Completed', sub: 'Across Eastern India' },
    { value: BRAND_INFO.clientsCount, label: 'Trusted Clients', sub: 'Developers & Enterprises' },
    { value: `${BRAND_INFO.experienceYears}+`, label: 'Years Experience', sub: 'Field Engineering' },
    { value: `${BRAND_INFO.establishedYear}`, label: 'Firm Established', sub: 'Founded in Dankuni' },
  ];

  return (
    <section className="bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white py-16 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''}`}>
              <div className="text-4xl lg:text-6xl font-light font-display tracking-tight text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-2 font-semibold">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
