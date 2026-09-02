import React from 'react';
import { Shield, Layers, Award, Scale, Zap, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '@/data/siteData';

export default function WhyArchstruct() {
  const PILLARS = [
    {
      icon: Award,
      title: '250+ Projects & 11 Years Practice',
      desc: 'Proven track record delivering residential towers, industrial factories, and logistics parks across Eastern India.'
    },
    {
      icon: Layers,
      title: 'Integrated Single-Window Engineering',
      desc: 'Architectural planning, finite element structural calculation, soil testing, and fire clearance coordinated under one desk.'
    },
    {
      icon: Shield,
      title: 'Evidence-Based Soil & NDT Testing',
      desc: 'In-situ borehole SPT investigations, Ultrasonic Pulse Velocity (UPV), and core testing guaranteeing safety.'
    },
    {
      icon: Scale,
      title: 'Strict IS Code & NBC Compliance',
      desc: 'Designs strictly adhere to IS 456, IS 1893 seismic ductility, IS 800 steel norms, and Part 4 National Building Code.'
    },
    {
      icon: Zap,
      title: 'Structural Steel & RCC Optimization',
      desc: 'Advanced structural modeling that prevents unnecessary over-design, saving 10-15% in material costs.'
    },
    {
      icon: CheckCircle,
      title: 'Engineer-Led Civil Execution',
      desc: 'Our construction division is supervised directly by qualified structural engineers with daily batch testing.'
    }
  ];

  return (
    <section className="bg-white dark:bg-[#080B11] text-slate-900 dark:text-white py-28 px-6 lg:px-12 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            [TECHNICAL AUTHORITY]
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-display text-slate-900 dark:text-slate-100">
            Why Qualified Clients Choose Archstruct
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 font-light">
            We operate as an engineering partner, ensuring structural durability, budget discipline, and statutory compliance from the foundation up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D121F] p-8 hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-sm dark:shadow-none">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-slate-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
