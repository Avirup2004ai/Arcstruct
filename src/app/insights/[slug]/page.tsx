import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INSIGHTS, BRAND_INFO } from '@/data/siteData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INSIGHTS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);
  if (!insight) return { title: 'Article Not Found' };

  return {
    title: `${insight.title} | Engineering Insights`,
    description: insight.summary,
  };
}

export default function InsightDetailPage({ params }: Props) {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12">
        <header className="pb-12 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-4 text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 font-semibold">
            <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30">{insight.category}</span>
            <span>•</span>
            <span className="text-slate-600 dark:text-slate-400">{insight.readTime}</span>
            <span>•</span>
            <span className="text-slate-500">{insight.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            {insight.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs text-slate-500 dark:text-slate-400">
            <span>Authored by: <strong className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.founder}</strong> ({BRAND_INFO.founderTitle})</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="py-12 space-y-6 text-slate-700 dark:text-slate-300 font-light leading-relaxed text-base lg:text-lg">
          {insight.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="p-8 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 my-8 shadow-sm dark:shadow-none">
          <h2 className="text-lg font-display font-medium text-slate-900 dark:text-white mb-4">
            Engineering Summary & Key Takeaways
          </h2>
          <ul className="space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300">
            {insight.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10 text-center">
          <h3 className="text-2xl font-display font-light text-slate-900 dark:text-white mb-3">
            Require Technical Audit or Soil Investigation?
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
            Connect with our engineering desk in Dankuni, Hooghly
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase px-6 py-3.5 transition-all shadow-md active:scale-95"
          >
            <span>Consult Chief Engineering Desk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
