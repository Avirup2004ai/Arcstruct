import type { Metadata } from 'next';
import { Inter, Space_Mono, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import PageTransition from '@/components/common/PageTransition';
import { BRAND_INFO } from '@/data/siteData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://archstructconsultant.com'),
  title: {
    default: `${BRAND_INFO.name} | Architectural Planning & Structural Engineering`,
    template: `%s | ${BRAND_INFO.name}`,
  },
  description: 'Premier architectural planning, structural design & drawing, geotechnical soil testing, NDT structural audits, and construction engineering consultancy led by Er. Tanmoy Das.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.png',
  },
  keywords: [
    'Structural Engineering Consultant India',
    'Structural Design Consultant West Bengal',
    'Structural Audit and NDT Testing',
    'Soil Testing Dankuni Hooghly',
    'Architectural Planning Consultant',
    'Building Construction Engineering',
    'Foundation Quality Assessment',
    'Fire NOC Clearances',
  ],
  authors: [{ name: BRAND_INFO.founder, url: 'https://archstructconsultant.com' }],
  creator: BRAND_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://archstructconsultant.com',
    siteName: BRAND_INFO.name,
    title: `${BRAND_INFO.name} | Architectural Planning & Structural Engineering`,
    description: 'Bespoke architectural planning, seismic structural design, soil testing, NDT audits, and turnkey construction consultancy.',
    images: [
      {
        url: '/ArcLogo.png',
        width: 1200,
        height: 630,
        alt: 'The Archstruct Consultant Architectural & Structural Practice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_INFO.name} | Structural Engineering & Planning`,
    description: 'Precision engineering, geotechnical investigations, and architectural master planning.',
    images: ['/ArcLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': BRAND_INFO.name,
    'logo': 'https://archstructconsultant.com/ArcLogo.png',
    'description': 'Architectural planning, seismic structural design, soil testing, NDT structural audits, and construction engineering.',
    'founder': {
      '@type': 'Person',
      'name': BRAND_INFO.founder,
      'jobTitle': BRAND_INFO.founderTitle,
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Library Para Road',
      'addressLocality': 'Dankuni, Hooghly',
      'addressRegion': 'West Bengal',
      'postalCode': '712311',
      'addressCountry': 'IN',
    },
    'email': BRAND_INFO.email,
    'telephone': BRAND_INFO.phone,
    'openingHours': 'Mo-Sa 10:00-18:00',
    'priceRange': '₹₹₹',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'West Bengal' },
      { '@type': 'AdministrativeArea', 'name': 'Eastern India' },
      { '@type': 'Country', 'name': 'India' },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} ${syne.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
