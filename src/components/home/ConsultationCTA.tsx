import React from 'react';
import ContactForm from '@/components/common/ContactForm';
import { BRAND_INFO } from '@/data/siteData';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300" id="consultation">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Action & Coordinates */}
          <div className="lg:col-span-5">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-3 font-semibold">
              [INITIATE ENGAGEMENT]
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Have a project in mind? Let's engineer it.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
              Whether you are planning a new residential development, high-span industrial warehouse, or require geotechnical soil investigation and NDT structural audits, submit your project specifications below.
            </p>

            <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block uppercase tracking-wider">Engineering Headquarters</strong>
                  <span className="text-slate-600 dark:text-slate-400">{BRAND_INFO.headquarters}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block uppercase tracking-wider">Official Email</strong>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block uppercase tracking-wider">Direct Consultation Hours</strong>
                  <span className="text-slate-600 dark:text-slate-400">{BRAND_INFO.businessHours}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Instant Direct Channel</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                Need quick geotechnical or structural clarification? Connect directly with our chief engineering desk on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello Er. Tanmoy Das, I would like to consult regarding an engineering project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Launch WhatsApp Desk →
              </a>
            </div>
          </div>

          {/* Right Column: Structured Intake Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
