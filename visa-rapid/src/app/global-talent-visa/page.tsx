import { Metadata } from 'next'
import GlobalTalentVisaContent from '@/components/GlobalTalentVisaContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'UK Global Talent Visa — For Exceptional Leaders',
  description: 'UK Global Talent Visa guide — endorsement requirements, benefits, and application process for leaders in tech, science, arts, and academia.',
  alternates: {
    canonical: '/global-talent-visa',
  },
  openGraph: {
    title: 'UK Global Talent Visa — For Exceptional Leaders',
    description: 'UK Global Talent Visa guide — endorsement requirements, benefits, and application process for leaders in tech, science, arts, and academia.',
    url: 'https://www.visarapid.com/global-talent-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UK Global Talent Visa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Global Talent Visa — For Exceptional Leaders',
    description: 'UK Global Talent Visa guide — endorsement requirements, benefits, and application process for leaders in tech, science, arts, and academia.',
    images: ['/og-image.png'],
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
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the UK Global Talent Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The UK Global Talent Visa is a prestigious immigration route for exceptional and emerging leaders in fields such as technology, science, arts, culture, and academia. It is designed for individuals who have demonstrated outstanding talent or exceptional promise and wish to live and work in the UK without employer sponsorship.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is the Global Talent Visa for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Global Talent Visa is suitable for professionals who are recognised leaders or rising talents in their field, looking for freedom from sponsorship restrictions, seeking a long-term future in the UK, and interested in fast-track settlement opportunities. Applicants are assessed based on merit, track record, and future potential rather than salary thresholds or job offers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What endorsement is required for the UK Global Talent Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Applicants must obtain an endorsement from an approved UK endorsing body. The main endorsing bodies are Tech Nation (for digital technology professionals), Arts Council England (for arts and culture), the Royal Society (for science and research), and UK Research and Innovation (for academic and research talent). Each body assesses applications based on field-specific criteria.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the key benefits of the UK Global Talent Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Key benefits include no job offer or sponsorship required, freedom to work, freelance, or build a business, flexible visa length up to 5 years, a faster route to Indefinite Leave to Remain (ILR), the ability to bring dependent family members, and recognition as one of the UK\'s most flexible elite visa routes.',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'Global Talent Visa', href: '/global-talent-visa' }]} />
      <GlobalTalentVisaContent />
    </>
  )
}
