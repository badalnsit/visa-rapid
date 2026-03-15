import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Visa Rapid. Book a free consultation to discuss your European visa options, eligibility, and application process.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
