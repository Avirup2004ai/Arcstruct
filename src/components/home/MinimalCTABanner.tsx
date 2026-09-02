import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, MapPin, Mail, Phone } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';

export default function MinimalCTABanner() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography */}
        <div className="lg:col-span-8">
          <span className="text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [INITIATE ENGAGEMENT]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-display text-white leading-tight mb-4">
            Have a project in mind? <br />
            <span className="font-serif italic text-slate-300">Let's engineer it together.</span>
          </h2>
          <p className="text-slate-400 text-base font-light max-w-2xl leading-relaxed">
            From geotechnical soil testing and municipal sanction drawings to seismic structural design and turnkey civil execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-400" />
              Dankuni, Hooghly (WB)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-blue-400" />
              {BRAND_INFO.email}
            </span>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-widest py-4 px-8 transition-all shadow-lg font-semibold active:scale-95 text-center"
          >
            <span>Open Project Intake Form</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello Er. Tanmoy Das, I would like to consult regarding an engineering project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase tracking-widest py-4 px-8 transition-all shadow-lg font-semibold active:scale-95 text-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
