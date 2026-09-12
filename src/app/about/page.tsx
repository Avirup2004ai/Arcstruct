import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_INFO } from '@/data/siteData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  Lightbulb, 
  HeartHandshake, 
  Leaf, 
  Clock, 
  GraduationCap, 
  Compass, 
  Layers, 
  Building2, 
  BadgeCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Practice | Vision, Mission, Values & Leadership',
  description: 'The Archstruct Consultant practice: Vision, Mission, 8 Core Values, and leadership by Er. Tanmoy Das, Chartered Engineer & Empanelled Structural Engineer (Class I).',
};

const CORE_VALUE_ICONS = [
  Award,          // Engineering Excellence
  ShieldCheck,    // Integrity & Ethics
  HeartHandshake, // Client-Centric Approach
  Lightbulb,      // Innovation
  CheckCircle2,   // Safety First
  Leaf,           // Sustainability
  Clock,          // Reliability
  GraduationCap   // Continuous Learning
];

export default function AboutPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Page Header */}
      <section className="px-6 lg:px-12 pb-16 md:pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 font-semibold">
            <span>[ABOUT THE PRACTICE]</span>
            <span>•</span>
            <span>{BRAND_INFO.secondaryTagline}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            {BRAND_INFO.tagline}
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            Founded in 2021 by <strong className="font-medium text-slate-900 dark:text-white">{BRAND_INFO.founder}</strong>, The Archstruct Consultant brings over 11 years of structural calculation, geotechnical soil investigation, statutory municipal planning, and civil engineering discipline to every engagement.
          </p>
        </div>
      </section>

      {/* Firm Trajectory & Story */}
      <section className="py-20 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 p-8 space-y-5 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
              <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">ESTABLISHED</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.establishedYear}</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">HEADQUARTERS</span>
                <span className="text-slate-900 dark:text-white font-semibold">Dankuni, Hooghly (WB)</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">COMPLETED PROJECTS</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.projectsCount} Completed</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">CLIENT NETWORK</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.clientsCount} Institutional & Private</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-slate-400 dark:text-slate-500">PRACTICE EXPERIENCE</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.experienceYears}+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">CHIEF EXECUTIVE</span>
                <span className="text-slate-900 dark:text-white font-semibold">{BRAND_INFO.founder}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 dark:text-white">
              An Engineering-Led Approach to Built Environments
            </h2>
            <p>
              In contemporary construction, a dangerous divide often exists between architectural vision and structural reality. Abstract drawings created without rigorous soil mechanics or seismic calculations frequently cause on-site delays, budget overruns, and long-term structural distress.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">THE ARCHSTRUCT CONSULTANT</strong> was established to eliminate this disconnect. Operating from Dankuni in Hooghly, West Bengal, our practice integrates architectural space planning directly with finite element structural engineering, on-site geotechnical testing, Non-Destructive Testing (NDT), and municipal statutory clearance support.
            </p>
            <p>
              Having successfully completed 250+ projects ranging from heavy industrial PEB warehouses and machine foundations to multi-storey residential complexes and healthcare facilities, our team is equipped to handle complex engineering challenges across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Vision & Mission */}
      <section className="py-20 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#07090E]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Vision Block */}
          <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D121F] p-8 md:p-12 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-4">
              <Eye className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">COMPANY VISION</span>
            </div>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-slate-100 leading-snug max-w-5xl">
              "{BRAND_INFO.vision}"
            </p>
          </div>

          {/* Mission Block */}
          <div>
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-3">
              <Target className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">COMPANY MISSION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 dark:text-white mb-2">
              Our Multi-Disciplinary Mission
            </h2>
            <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-wider">
              {BRAND_INFO.mission.statement}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRAND_INFO.mission.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                      <span>PILLAR {pillar.number}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
              [ORGANIZATIONAL FOUNDATION]
            </span>
            <h2 className="text-3xl md:text-4xl font-light font-display text-slate-900 dark:text-slate-100">
              Our 8 Core Values
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-light">
              Principles guiding every design decision, geotechnical assessment, client engagement, and site inspection we conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_INFO.coreValues.map((val, idx) => {
              const Icon = CORE_VALUE_ICONS[idx % CORE_VALUE_ICONS.length];
              return (
                <div
                  key={val.number}
                  className="border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D121F] p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-sm dark:shadow-none group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                        VALUE {val.number}
                      </span>
                      <div className="w-8 h-8 rounded bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Founder & CEO Profile */}
      <section className="py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Founder Identity Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 p-8 shadow-sm dark:shadow-none space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
                  [FOUNDER & CHIEF EXECUTIVE]
                </span>
                <BadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-5 rounded-sm overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-md bg-slate-100 dark:bg-white/[0.04]">
                  <img
                    src={BRAND_INFO.founderImage}
                    alt={BRAND_INFO.founder}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  {BRAND_INFO.founder.toUpperCase()}
                </h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase mt-1 font-semibold tracking-wider">
                  {BRAND_INFO.founderTitle}
                </p>
              </div>

              {/* Degrees & Professional Affiliations */}
              <div className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Academic & Engineering Credentials
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {BRAND_INFO.founderQualifications.map((qual) => (
                    <span
                      key={qual}
                      className="inline-block px-2.5 py-1 text-xs font-mono font-medium bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200"
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Empanelment Badges */}
              <div className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Statutory Empanelment & Licensing
                </span>
                <div className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Empanelled Structural Engineer (Class I) – K.M.C & M.E.D, Govt. of W.B.</span>
                  </div>
                  <div className="p-2.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Empanelled Geotechnical Engineer (Class I) – K.M.C & M.E.D, Govt. of W.B.</span>
                  </div>
                  <div className="p-2.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Licensed Building Surveyor L.B.S. (Class I) – K.M.C & M.E.D, Govt. of W.B.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500">
                Practice Headquarters: Dankuni, Hooghly • West Bengal – 712311
              </div>
            </div>
          </div>

          {/* Founder Bio & Technical Expertise */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-1 font-semibold">
              Principal Engineering Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 dark:text-white leading-tight">
              11+ Years of Dedicated Structural Analysis & Civil Infrastructure
            </h2>

            <p className="text-slate-700 dark:text-slate-300 font-normal leading-relaxed text-base">
              {BRAND_INFO.founderExperience}
            </p>

            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">
              With formal academic credentials in Civil Engineering (B.Tech) and Structural Engineering (M.Tech), combined with institutional memberships as <strong className="text-slate-900 dark:text-white font-medium">Chartered Engineer, M.I.E, and M.I.G.S</strong>, Er. Tanmoy Das brings verified scientific rigour to structural sizing, seismic mitigation, dynamic vibrations, and deep foundation engineering.
            </p>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white mb-4 font-semibold">
                Core Competencies & Design Mastery:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Reinforced Concrete & High-Rise Ductile Frames</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Structural Steel & Pre-Engineered Buildings (PEBs)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Subsurface Geotechnical & Borehole Testing</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Non-Destructive Diagnostic Structural Audits (NDT)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Piled Foundations & Machine Inertia Bases</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Statutory Municipal Sanctions (KMC & MED Empanelled)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-4">
            Connect with Er. Tanmoy Das & Engineering Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-light mb-8 max-w-xl mx-auto">
            Review your architectural concepts, structural designs, soil investigation data, or audit requirements with an empanelled Class I engineering consultant.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all shadow-md active:scale-95 font-semibold"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-slate-300 dark:border-white/20 hover:border-slate-800 dark:hover:border-white text-slate-800 dark:text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all bg-slate-100 dark:bg-white/[0.04] active:scale-95 font-semibold"
            >
              <span>View 250+ Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
