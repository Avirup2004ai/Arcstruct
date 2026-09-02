import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/common/ContactForm';
import { BRAND_INFO } from '@/data/siteData';
import { MapPin, Mail, Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Intake & Engineering Consultation Desk',
  description: 'Initiate an engineering consultation with The Archstruct Consultant for architectural planning, structural design, soil testing, or NDT audits.',
};

export default function ContactPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44 pb-24 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="px-6 lg:px-12 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
            [PROJECT INTAKE DESK]
          </span>
          <h1 className="text-4xl md:text-7xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight">
            Consult With Our Engineering Desk
          </h1>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
            Submit your site specifications, architectural requirements, or structural health audit requests directly to Er. Tanmoy Das and our senior engineering team.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Office Specs & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 space-y-6 shadow-sm dark:shadow-none">
              <h2 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-4">
                Headquarters & Coordinates
              </h2>

              <div className="space-y-4 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block uppercase">Office Location</strong>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed block mt-1">
                      {BRAND_INFO.headquarters}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block uppercase">Consultation Hours</strong>
                    <span className="text-slate-600 dark:text-slate-400 block mt-1">{BRAND_INFO.businessHours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block uppercase">Official Inquiries</strong>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white block mt-1">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Rapid WhatsApp Channel</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-4">
                For immediate technical inquiries regarding soil testing schedules or municipal drawing reviews, message our direct desk.
              </p>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello Er. Tanmoy Das, I would like to discuss an engineering project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase px-5 py-3 transition-all shadow-md font-semibold active:scale-95"
              >
                <span>Launch Direct WhatsApp</span>
              </a>
            </div>

            {/* Verification Guarantee */}
            <div className="p-6 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080B11] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 leading-relaxed">
                All submitted engineering data, structural plans, and geotechnical logs are treated under strict professional non-disclosure protocols.
              </div>
            </div>
          </div>

          {/* Right Column: Intake Engine */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
