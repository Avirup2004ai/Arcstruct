import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, SERVICES, INDUSTRIES } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#05070B] text-slate-800 dark:text-white border-t border-slate-200 dark:border-white/10 pt-20 pb-12 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0 bg-white rounded-sm overflow-hidden p-1 border border-slate-200 dark:border-white/10 shadow-sm">
                <img
                  src="/ArcLogo.png"
                  alt={BRAND_INFO.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none whitespace-nowrap pb-[2px] border-b-2 border-emerald-500 dark:border-emerald-400">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase leading-tight pt-1">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Civil engineering consultancy delivering innovative, sustainable, safe, and economically optimized solutions. Led by <strong className="text-slate-900 dark:text-slate-200">{BRAND_INFO.founder}</strong> — B.Tech, M.Tech (Structural), Chartered Engineer, Empanelled Class I (KMC & MED).
            </p>

            <div className="mt-8 space-y-3 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>{BRAND_INFO.businessHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-white transition-colors">About Firm</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 dark:hover:text-white transition-colors">All Services (11)</Link></li>
              <li><Link href="/projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">Portfolio Archive</Link></li>
              <li><Link href="/industries" className="hover:text-blue-600 dark:hover:text-white transition-colors">Industry Sectors</Link></li>
              <li><Link href="/insights" className="hover:text-blue-600 dark:hover:text-white transition-colors">Technical Insights</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Project Intake</Link></li>
            </ul>
          </div>

          {/* Primary Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 font-semibold">
              Engineering Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-light">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services/${srv.slug}`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 mt-1 text-xs font-mono">
                  <span>+ 5 More Disciplines</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors Served */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 font-semibold">
              Sectors Served
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-light">
              {INDUSTRIES.map((ind) => (
                <li key={ind.code}>
                  <Link href={`/industries`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                Geographic Coverage
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-light leading-snug">
                {BRAND_INFO.operatingRegions}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>IS Code & NBC Standard Practice</span>
            <span>•</span>
            <span>{BRAND_INFO.secondaryTagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
