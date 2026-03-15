import { Metadata } from 'next'
import EntrepreneurVisaContent from '@/components/EntrepreneurVisaContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Portugal D2 Entrepreneur Visa — Requirements & Process',
  description: 'Complete guide to the Portugal D2 Entrepreneur Visa. Learn about eligibility, benefits, application process, and how Visa Rapid can help you secure EU residency.',
  alternates: {
    canonical: '/entrepreneur-visa',
  },
}

export default function EntrepreneurVisaPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Portugal D2 Entrepreneur Visa Consulting',
        description: 'Complete guide and consulting for the Portugal D2 Entrepreneur Visa.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/entrepreneur-visa',
      }} />
      <EntrepreneurVisaContent />
    </>
  )
}
