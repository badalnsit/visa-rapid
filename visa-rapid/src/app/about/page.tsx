import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Us — Visa Rapid',
  description: 'We help entrepreneurs, founders, and professionals build their futures in Europe — from first step to residence card. Learn about our team, mission, and process.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us — Visa Rapid',
    description: 'We help entrepreneurs, founders, and professionals build their futures in Europe — from first step to residence card.',
    url: 'https://www.visarapid.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Visa Rapid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Visa Rapid',
    description: 'We help entrepreneurs, founders, and professionals build their futures in Europe — from first step to residence card.',
    images: ['/og-image.png'],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
