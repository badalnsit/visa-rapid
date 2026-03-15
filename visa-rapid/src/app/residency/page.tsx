import { Metadata } from 'next'
import ResidencyContent from '@/components/ResidencyContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Portugal D7 Passive Income Visa — Residency Guide',
  description: 'Complete guide to the Portugal D7 Passive Income Visa. Learn about advantages of living in Portugal, eligibility, and the step-by-step application process.',
  alternates: {
    canonical: '/residency',
  },
}

export default function ResidencyPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Portugal D7 Passive Income Visa Consulting',
        description: 'Portugal\'s D7 visa for retirees and remote workers with passive income.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/residency',
      }} />
      <ResidencyContent />
    </>
  )
}
