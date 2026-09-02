'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ArrowUpRight, Download, Mail, MessageSquare, History, X } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '@/data/siteData';

interface StoredInquiry {
  id: string;
  timestamp: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  sector: string;
  service: string;
  location: string;
  area: string;
  timeline: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [inquiryHistory, setInquiryHistory] = useState<StoredInquiry[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    sector: 'Residential',
    service: SERVICES[0].title,
    location: '',
    area: '',
    timeline: 'Within 30 Days',
    message: ''
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('archstruct_inquiries');
      if (saved) {
        setInquiryHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read inquiries from localStorage', e);
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const newInquiry: StoredInquiry = {
      id: `INQ-${Date.now()}`,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...formData,
    };

    // 1. Save to Local Storage as zero-backend backup
    try {
      const existing = localStorage.getItem('archstruct_inquiries');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newInquiry);
      localStorage.setItem('archstruct_inquiries', JSON.stringify(list));
      setInquiryHistory(list);
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // 2. Post to Next.js API route
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (apiErr) {
      console.warn('API route fallback:', apiErr);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Er. Tanmoy Das / Archstruct Team,\n\nI would like to initiate an engineering consultation:\n• Client: ${formData.name || 'Client'}\n• Company: ${formData.company || 'Private'}\n• Sector: ${formData.sector}\n• Service: ${formData.service}\n• Location: ${formData.location || 'Eastern India'}\n• Scale/Area: ${formData.area || 'N/A'}\n• Timeline: ${formData.timeline}\n• Message: ${formData.message || 'Please connect for project review.'}`
    );
    return `https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`;
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Project Consultation Request] - ${formData.service} (${formData.name})`);
    const body = encodeURIComponent(
      `Dear The Archstruct Consultant,\n\nHere are my project specifications:\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSector: ${formData.sector}\nService Required: ${formData.service}\nLocation: ${formData.location}\nApprox Area: ${formData.area}\nExpected Timeline: ${formData.timeline}\n\nProject Scope & Message:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    return `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;
  };

  const downloadDossier = () => {
    const content = `=====================================================
THE ARCHSTRUCT CONSULTANT - PROJECT INTAKE DOSSIER
=====================================================
Date: ${new Date().toISOString()}
Headquarters: Library Para Road, Dankuni, Hooghly, West Bengal - 712311

CLIENT SPECIFICATIONS:
-----------------------------------------------------
Client Name:      ${formData.name}
Company:          ${formData.company || 'Private'}
Phone/WhatsApp:   ${formData.phone}
Email:            ${formData.email}
Project Sector:   ${formData.sector}
Service Required: ${formData.service}
Site Location:    ${formData.location || 'Eastern India'}
Approx Area:      ${formData.area || 'N/A'}
Target Timeline:  ${formData.timeline}

PROJECT OVERVIEW & CHALLENGES:
-----------------------------------------------------
${formData.message || 'No additional notes provided.'}

=====================================================
Official Contact: arcstractconsultant@gmail.com
Phone: ${BRAND_INFO.phone}
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Archstruct-Inquiry-${formData.name.replace(/\s+/g, '_') || 'Brief'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 p-8 lg:p-12 text-slate-900 dark:text-white shadow-lg dark:shadow-none transition-colors duration-300">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
          [TECHNICAL SPECIFICATION INTAKE]
        </span>
        {inquiryHistory.length > 0 && (
          <button
            type="button"
            onClick={() => setShowHistoryModal(true)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <History className="w-3.5 h-3.5" />
            <span>Saved Log ({inquiryHistory.length})</span>
          </button>
        )}
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-14 h-14 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-medium text-slate-900 dark:text-white">
            Consultation Dossier Logged
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-md mx-auto">
            Your inquiry has been stored. You can instantly transmit this dossier to Er. Tanmoy Das via WhatsApp, send a direct email copy, or download a local brief.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase px-6 py-3.5 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={generateMailtoLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase px-6 py-3.5 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send Official Email</span>
            </a>

            <button
              onClick={downloadDossier}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 hover:border-slate-800 dark:hover:border-white text-slate-800 dark:text-white text-xs font-mono uppercase px-5 py-3.5 transition-all bg-slate-100 dark:bg-white/[0.04]"
            >
              <Download className="w-4 h-4" />
              <span>Download Brief</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-wider underline"
            >
              Submit Another Project Specification
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Your Full Name / Representative *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. S. K. Mukherjee"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Company / Organization (Optional)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Bengal Infra Ventures Pvt Ltd"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98XXX XXXXX"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Official Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@company.com"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Project Sector
              </label>
              <select
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Residential">Residential (Apartment / Villa)</option>
                <option value="Commercial">Commercial / Office Complex</option>
                <option value="Industrial">Industrial / Factory / Shed</option>
                <option value="Warehousing">Warehousing & Logistics</option>
                <option value="Institutional">Institutional / Hospital / Campus</option>
                <option value="Infrastructure">Infrastructure / Public Works</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Primary Engineering Discipline
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Project Location (City / District / State)
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Dankuni / Kolkata / Howrah / Durgapur"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
                Approximate Area / Built-Up Scale
              </label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                placeholder="e.g. 25,000 Sq. Ft. / G+5 Storeys"
                className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-medium">
              Project Summary & Technical Objectives
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Outline specific site conditions, existing structural status, soil concerns, or target delivery timelines..."
              className="w-full bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-widest py-4 transition-all shadow-md disabled:opacity-50"
          >
            <span>{submitting ? 'Transmitting Dossier...' : 'Submit Project Dossier'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* History Modal for viewing locally saved inquiries */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
              <h4 className="font-display font-medium text-lg text-slate-900 dark:text-white">
                Stored Inquiry Log ({inquiryHistory.length})
              </h4>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {inquiryHistory.map((item) => (
                <div key={item.id} className="p-4 bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-blue-600 dark:text-blue-400 font-semibold">
                    <span>{item.service}</span>
                    <span className="text-slate-400">{item.timestamp}</span>
                  </div>
                  <div className="text-slate-800 dark:text-slate-200 font-sans font-medium text-sm mt-1">
                    {item.name} {item.company !== 'N/A' && `(${item.company})`}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Phone: {item.phone} • Email: {item.email}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Location: {item.location} • Sector: {item.sector} • Area: {item.area}
                  </div>
                  {item.message && (
                    <div className="pt-2 text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/5 font-sans italic">
                      "{item.message}"
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
              <button
                onClick={() => {
                  localStorage.removeItem('archstruct_inquiries');
                  setInquiryHistory([]);
                  setShowHistoryModal(false);
                }}
                className="text-xs font-mono text-red-500 hover:underline"
              >
                Clear Saved Log
              </button>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 bg-slate-200 dark:bg-white/10 text-xs font-mono uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
