'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';
import ThemeToggle from '@/components/common/ThemeToggle';
import { useTheme } from '@/components/common/ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#080B11]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-white/10 transition-all duration-300 ${
        scrolled ? 'py-2.5 sm:py-3 shadow-md' : 'py-3 sm:py-3.5 md:py-4 shadow-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-3 xl:gap-6">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 bg-white rounded-sm overflow-hidden p-1 border border-slate-200 dark:border-white/10 shadow-sm group-hover:border-blue-500 transition-all">
            <img
              src={theme === 'dark' ? '/ArcLogoDark.jpeg' : '/ArcLogo.png'}
              alt={BRAND_INFO.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center flex-shrink-0">
            <span className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-none whitespace-nowrap pb-[2px] border-b-2 border-emerald-500 dark:border-emerald-400">
              THE ARCHSTRUCT CONSULTANT
            </span>
            <span className="hidden sm:block text-[9px] md:text-[10px] font-mono tracking-wider sm:tracking-widest text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap leading-tight pt-1">
              {BRAND_INFO.secondaryTagline}
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 text-xs font-mono tracking-wider xl:tracking-widest uppercase text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link-indicator py-1 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold active'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle (Cleanly separated with ample gap) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0 pl-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider px-4 xl:px-5 py-2.5 transition-all shadow-sm hover:shadow-md active:scale-95 font-semibold whitespace-nowrap"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden flex-shrink-0">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-sm flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white border border-slate-300 dark:border-white/15 bg-slate-100/80 dark:bg-white/[0.06] transition-all active:scale-95 shadow-sm"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#080B11] border-b border-slate-200 dark:border-white/10 px-6 py-6 text-slate-900 dark:text-white shadow-2xl animate-page-reveal max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                onClick={() => setMobileOpen(false)}
                href={link.href}
                className={`py-2 px-3 rounded transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/40 border-l-2 border-blue-600 dark:border-blue-400'
                    : 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
            <Link
              onClick={() => setMobileOpen(false)}
              href="/contact"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase py-3 px-4 font-semibold shadow-sm transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Initiate Project Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
