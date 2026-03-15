import { Metadata } from 'next'
import GlobalTalentVisaContent from '@/components/GlobalTalentVisaContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'UK Global Talent Visa — For Exceptional Leaders',
  description: 'Complete guide to the UK Global Talent Visa for leaders in technology, science, arts, and academia. Learn about endorsement requirements, benefits, and our application process.',
  alternates: {
    canonical: '/global-talent-visa',
  },
}

export default function GlobalTalentVisaPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'UK Global Talent Visa Consulting',
        description: 'The UK Global Talent Visa for exceptional talent in tech, science, arts, and research.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/global-talent-visa',
      }} />
      <GlobalTalentVisaContent />
    </>
  )
}
