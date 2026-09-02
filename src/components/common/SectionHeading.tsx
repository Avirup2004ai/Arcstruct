import React from 'react';

interface SectionHeadingProps {
  code?: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  code,
  tag,
  title,
  subtitle,
  align = 'left'
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-blue-400 ${isCenter ? 'justify-center' : ''}`}>
        {code && <span>[{code}]</span>}
        <span>{tag}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-light font-display text-slate-100 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
