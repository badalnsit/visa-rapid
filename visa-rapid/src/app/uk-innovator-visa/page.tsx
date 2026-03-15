import { Metadata } from 'next'
import UKInnovatorVisaContent from '@/components/UKInnovatorVisaContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'UK Innovator Founder Visa — Start a Business in the UK',
  description: 'Complete guide to the UK Innovator Founder Visa. Learn about our 5-step process, eligibility requirements, and how to start your business in the UK.',
  alternates: {
    canonical: '/uk-innovator-visa',
  },
}

export default function UKInnovatorVisaPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'UK Innovator Founder Visa Consulting',
        description: 'Start an innovative business in the UK with the Innovator Founder Visa.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/uk-innovator-visa',
      }} />
      <UKInnovatorVisaContent />
    </>
  )
}
