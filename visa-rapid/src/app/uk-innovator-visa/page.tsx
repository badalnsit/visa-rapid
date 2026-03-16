import { Metadata } from 'next'
import UKInnovatorVisaContent from '@/components/UKInnovatorVisaContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'UK Innovator Founder Visa — Start a Business in the UK',
  description: 'Complete guide to the UK Innovator Founder Visa. Learn about our 5-step process, eligibility requirements, and how to start your business in the UK.',
  alternates: {
    canonical: '/uk-innovator-visa',
  },
  openGraph: {
    title: 'UK Innovator Founder Visa — Start a Business in the UK',
    description: 'Complete guide to the UK Innovator Founder Visa. Learn about our 5-step process, eligibility requirements, and how to start your business in the UK.',
    url: 'https://www.visarapid.com/uk-innovator-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UK Innovator Founder Visa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Innovator Founder Visa — Start a Business in the UK',
    description: 'Complete guide to the UK Innovator Founder Visa. Learn about our 5-step process, eligibility requirements, and how to start your business in the UK.',
    images: ['/og-image.png'],
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
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the UK Innovator Founder Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The UK Innovator Founder Visa is a leading business immigration route for international startup founders and experienced entrepreneurs. It enables you to establish and scale an innovative business in the UK, providing access to one of the world\'s most dynamic and globally connected business ecosystems.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the process for obtaining a UK Innovator Founder Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The process involves 5 steps: (1) Strategy session to shape a strong endorsement-ready case, (2) Business Plan and Founder Profile Workshop to refine your application for endorsing bodies, (3) Endorsement and case preparation with a complete and compliant application bundle, (4) Innovator Founder Visa application with end-to-end management, and (5) UK Company Formation and ongoing support including incorporation and business bank account setup.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is my business idea eligible for the UK Innovator Founder Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your business idea must meet four criteria: it must be New (you must establish a new UK business, not join an existing one), Viable (it must have a genuine prospect of success in the UK market), Innovative (it must introduce a distinctive and original solution to an identified market need), and Scalable (it must show clear potential for growth in operations, revenue, and market reach).',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'UK Innovator Visa', href: '/uk-innovator-visa' }]} />
      <UKInnovatorVisaContent />
    </>
  )
}
