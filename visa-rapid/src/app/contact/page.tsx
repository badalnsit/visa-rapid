import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Visa Rapid. Book a free consultation to discuss your European visa options, eligibility, and application process.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us — Visa Rapid',
    description: 'Get in touch with Visa Rapid. Book a free consultation to discuss your European visa options, eligibility, and application process.',
    url: 'https://www.visarapid.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Visa Rapid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Visa Rapid',
    description: 'Get in touch with Visa Rapid. Book a free consultation to discuss your European visa options, eligibility, and application process.',
    images: ['/og-image.png'],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
