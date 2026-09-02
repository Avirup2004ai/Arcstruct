import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study | The Archstruct Consultant`,
    description: project.challenge,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Archive</span>
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 lg:px-12 pb-16 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 font-semibold">
            <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30">{project.sector}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              {project.location}
            </span>
            <span>•</span>
            <span className="text-slate-500 dark:text-slate-400">Completed {project.year}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-sm font-mono text-slate-500 dark:text-slate-400 uppercase">
            ROLE: <span className="text-slate-900 dark:text-white font-semibold">{project.archstructRole}</span>
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="aspect-[21/9] w-full bg-cover bg-center border border-slate-200 dark:border-white/10 shadow-sm"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section className="px-6 lg:px-12 py-8 border-y border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="font-mono">
            <div className="text-xs text-slate-500 uppercase">PROJECT SCALE</div>
            <div className="text-xl text-slate-900 dark:text-white font-medium mt-1">{project.scale}</div>
          </div>
          {project.keyMetrics.map((m, idx) => (
            <div key={idx} className="font-mono">
              <div className="text-xs text-slate-500 uppercase">{m.label}</div>
              <div className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Narrative */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2 font-semibold">
                01. Technical Challenge
              </span>
              <h2 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-4">
                Site & Structural Constraints
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
                {project.challenge}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2 font-semibold">
                02. Methodology & Calculations
              </span>
              <h2 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-4">
                Engineering Approach
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
                {project.engineeringApproach}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2 font-semibold">
                03. Validated Results
              </span>
              <h2 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-4">
                Structural & Operational Outcome
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h3 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                Disciplines Deployed
              </h3>
              <ul className="space-y-2.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                {project.scope.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/20 text-center">
              <h4 className="text-sm font-display font-medium text-slate-900 dark:text-white mb-2">
                Planning a Similar Project?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-light mb-6">
                Consult with our engineering team regarding site analysis, foundation schemes, or structural modeling.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider py-3 transition-all shadow-md active:scale-95"
              >
                <span>Consult on this Typology</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
