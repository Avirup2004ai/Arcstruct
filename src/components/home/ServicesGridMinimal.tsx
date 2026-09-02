import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

const FEATURED_SERVICES = [
  {
    ...SERVICES[0],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    ...SERVICES[1],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    ...SERVICES[2],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
  },
  {
    ...SERVICES[4], // Structural Audit & NDT
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
  },
  {
    ...SERVICES[7], // Construction
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=900&q=80',
  },
  {
    ...SERVICES[10], // Waterproofing
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ServicesGridMinimal() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [TECHNICAL DISCIPLINES]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
              Core Capabilities
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        {/* Minimal Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.slug}`}
              className="group relative aspect-[4/3] bg-slate-950 overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col justify-end p-6 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                style={{ backgroundImage: `url(${srv.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Text overlay */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 font-semibold">
                  <span>{srv.number} // {srv.category}</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-blue-600 text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-medium text-white group-hover:text-blue-300 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 font-light mt-2 line-clamp-2">
                  {srv.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
