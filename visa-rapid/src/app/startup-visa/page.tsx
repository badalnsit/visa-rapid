import { Metadata } from 'next'
import StartupVisaContent from '@/components/StartupVisaContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Portugal Startup Visa — Requirements & Process',
  description: 'Complete guide to the Portugal Startup Visa for non-EU entrepreneurs. Learn about incubator partnerships, benefits, and the step-by-step application process.',
  alternates: {
    canonical: '/startup-visa',
  },
}

export default function StartupVisaPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'European Startup Visa Consulting',
        description: 'Launch your startup in Europe with visa programs in Portugal, France, and beyond.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/startup-visa',
      }} />
      <StartupVisaContent />
    </>
  )
}
