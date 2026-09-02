'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: '01',
    category: 'PLANNING & DRAWING',
    title: 'Architectural Planning & Drawing',
    tagline: 'Statutory municipal sanction layouts, NBC compliance, and ergonomic spatial mastery.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-slate-900 via-blue-950 to-slate-900',
    link: '/services/architectural-planning-drawing',
    badge: 'IS 8888 • NBC 2016',
  },
  {
    id: '02',
    category: 'STRUCTURAL DESIGN',
    title: 'Structural Design & Analysis',
    tagline: 'Seismic-resistant RCC & structural steel frames engineered for safety and material economy.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-blue-950 via-slate-900 to-slate-950',
    link: '/services/structural-design-drawing',
    badge: 'IS 456 • IS 1893 SEISMIC',
  },
  {
    id: '03',
    category: 'SITE INVESTIGATION',
    title: 'Geotechnical Soil Testing',
    tagline: 'In-situ borehole exploration and SPT N-value testing guaranteeing foundation integrity.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-slate-900 via-indigo-950 to-slate-900',
    link: '/services/soil-testing',
    badge: 'IS 2131 • IS 1892',
  },
  {
    id: '04',
    category: 'DIAGNOSTIC AUDIT',
    title: 'Structural Audit & NDT Testing',
    tagline: 'Non-destructive ultrasonic pulse velocity (UPV) and rebound testing for concrete longevity.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-slate-950 via-slate-900 to-blue-950',
    link: '/services/structural-audit-ndt',
    badge: 'IS 13311 PARTS 1 & 2',
  },
  {
    id: '05',
    category: 'TURNKEY EXECUTION',
    title: 'Building Construction & Execution',
    tagline: 'Engineer-supervised civil construction with calibrated batching and strict quality control.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-slate-900 via-blue-950 to-slate-950',
    link: '/services/building-construction',
    badge: '250+ STRUCTURES BUILT',
  },
  {
    id: '06',
    category: 'DAMP PROOFING',
    title: 'Waterproofing & Longevity',
    tagline: 'Engineered chemical crystalline barriers protecting reinforcement from moisture corrosion.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    fallbackBg: 'from-blue-950 via-slate-900 to-indigo-950',
    link: '/services/waterproofing-damp-proofing',
    badge: 'IS 3067 STANDARDS',
  },
];

export default function ServicesBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[90vh] min-h-[620px] max-h-[860px] bg-slate-950 text-white overflow-hidden pt-20 md:pt-24 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with smooth cross-fade */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Fallback Mesh Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.fallbackBg}`} />

            {/* Background Image with Zoom Animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105 opacity-80' : 'scale-100 opacity-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

            {/* Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24 md:pb-28">
              <div className="max-w-3xl">
                {/* Category & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-blue-600 text-white text-[11px] font-mono uppercase tracking-widest font-semibold shadow-sm">
                    {slide.category}
                  </span>
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest hidden sm:inline">
                    {slide.badge}
                  </span>
                </div>

                {/* Big Display Title */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-light font-display tracking-tight text-white leading-[1.08] mb-4">
                  {slide.title}
                </h2>

                {/* Minimal Tagline */}
                <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed mb-8">
                  {slide.tagline}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 text-xs font-mono uppercase tracking-widest px-7 py-3.5 transition-all shadow-lg font-semibold active:scale-95"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-600" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-widest px-7 py-3.5 transition-all shadow-lg font-semibold active:scale-95"
                  >
                    <span>Request Quotation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls & Progress */}
      <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 z-30 flex items-center justify-between pointer-events-none">
        {/* Numbered Pagination & Progress Bar */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <span className="text-xs font-mono text-white font-bold">
            {SLIDES[current].id}
          </span>
          <div className="w-28 sm:w-44 h-[2px] bg-white/30 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 bottom-0 bg-blue-500 transition-all duration-300"
              style={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono text-slate-400">
            0{SLIDES.length}
          </span>
        </div>

        {/* Thumbnail Selector Dots */}
        <div className="hidden md:flex items-center gap-2 pointer-events-auto">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-300 ${
                idx === current ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all backdrop-blur-sm active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all backdrop-blur-sm active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
