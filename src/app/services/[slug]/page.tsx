import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | The Archstruct Consultant`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 11 Services</span>
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-mono text-blue-600 dark:text-blue-500 font-bold">{service.number}</span>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
              [{service.category}]
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            {service.title}
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Deep-Dive Grid */}
      <section className="py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Overview */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-6">
                Technical Scope & Execution
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
                {service.fullOverview}
              </p>
            </div>

            {/* Scope Points */}
            <div>
              <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-6">
                Core Engineering Scope
              </h3>
              <div className="space-y-3">
                {service.scopePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                    <span className="text-blue-600 dark:text-blue-400 font-mono text-xs mt-0.5 font-bold">0{idx + 1}.</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-6">
                Documented Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyDeliverables.map((deliv, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-white/10 flex items-start gap-2.5 shadow-sm dark:shadow-none">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-slate-700 dark:text-slate-300">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 space-y-6 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Technical Standards</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                {service.standardsFollowed.map((std, idx) => (
                  <li key={idx} className="p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                    {std}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm dark:shadow-none">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block font-semibold">
                Primary Beneficiaries
              </span>
              <ul className="space-y-2 text-xs font-light text-slate-700 dark:text-slate-300">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 text-center">
              <h4 className="text-sm font-display font-medium text-slate-900 dark:text-white mb-2">
                Require {service.title}?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-light mb-6">
                Consult directly with Er. Tanmoy Das to review technical feasibility and site scheduling.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider py-3.5 transition-all shadow-md active:scale-95"
              >
                <span>Request Technical Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
