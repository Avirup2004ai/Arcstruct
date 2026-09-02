import React from 'react';
import ServicesBannerSlider from '@/components/home/ServicesBannerSlider';
import CredibilityStrip from '@/components/home/CredibilityStrip';
import AboutStatement from '@/components/home/AboutStatement';
import ServicesGridMinimal from '@/components/home/ServicesGridMinimal';
import PortfolioMinimal from '@/components/home/PortfolioMinimal';
import MethodologyRail from '@/components/home/MethodologyRail';
import MinimalCTABanner from '@/components/home/MinimalCTABanner';

export default function HomePage() {
  return (
    <>
      {/* 01. Services Banner Slideshow (Hero) */}
      <ServicesBannerSlider />

      {/* 02. Minimal Credibility Metric Strip */}
      <CredibilityStrip />

      {/* 03. Minimal Editorial About Statement */}
      <AboutStatement />

      {/* 04. Visual Services Gallery */}
      <ServicesGridMinimal />

      {/* 05. Featured Architectural & Engineering Projects */}
      <PortfolioMinimal />

      {/* 06. 7-Stage Linear Engineering Rail */}
      <MethodologyRail />

      {/* 07. Elegant Action CTA Banner */}
      <MinimalCTABanner />
    </>
  );
}
