import { Metadata } from 'next'
import EntrepreneurVisaContent from '@/components/EntrepreneurVisaContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Portugal D2 Entrepreneur Visa — Requirements & Process',
  description: 'Portugal D2 Entrepreneur Visa guide — eligibility, benefits, application process, and how Visa Rapid helps you secure EU residency.',
  alternates: {
    canonical: 'https://www.visarapid.com/entrepreneur-visa',
  },
  openGraph: {
    title: 'Portugal D2 Entrepreneur Visa — Requirements & Process',
    description: 'Portugal D2 Entrepreneur Visa guide — eligibility, benefits, application process, and how Visa Rapid helps you secure EU residency.',
    url: 'https://www.visarapid.com/entrepreneur-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Portugal D2 Entrepreneur Visa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portugal D2 Entrepreneur Visa — Requirements & Process',
    description: 'Portugal D2 Entrepreneur Visa guide — eligibility, benefits, application process, and how Visa Rapid helps you secure EU residency.',
    images: ['/og-image.png'],
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
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Portugal Entrepreneur (D2) Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Portugal D2 Visa is designed for entrepreneurs who want to enter Portugal and open a new business, buy an already existing business or its share, or set up a branch of an already existing business. It provides a route to EU residency for business-minded individuals.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the benefits of the D2 Entrepreneur Visa in Portugal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Benefits include Schengen Area access with free entry and circulation across 27 European countries, family reunification allowing your family to live in Portugal, Portuguese residency rights including access to healthcare and education, and qualification for permanent residence or citizenship after five years.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is eligible for Portugal\'s D2 Entrepreneur Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To qualify, applicants must be a non-EU national, plan to start a new business or invest in an existing Portuguese business, be a freelancer or independent professional with a contract or business opportunity in Portugal, demonstrate sufficient funds, and show a viable business plan with economic and social value for Portugal.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the application process for Portugal\'s D2 Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The application process involves four steps: (1) Prepare your business plan with financial projections and job creation potential, (2) Register your business by obtaining a Portuguese NIF and opening a bank account, (3) Submit your visa application at the Portuguese Consulate with all required documents, and (4) After arriving in Portugal, schedule an appointment with SEF to finalise your residency permit.',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'Business Owner Visa', href: '/entrepreneur-visa' }]} />
      <EntrepreneurVisaContent />
    </>
  )
}
