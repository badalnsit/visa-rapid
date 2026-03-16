import { Metadata } from 'next'
import StartupVisaContent from '@/components/StartupVisaContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Portugal Startup Visa — Requirements & Process',
  description: 'Complete guide to the Portugal Startup Visa for non-EU entrepreneurs. Learn about incubator partnerships, benefits, and the step-by-step application process.',
  alternates: {
    canonical: '/startup-visa',
  },
  openGraph: {
    title: 'Portugal Startup Visa — Requirements & Process',
    description: 'Complete guide to the Portugal Startup Visa for non-EU entrepreneurs. Learn about incubator partnerships, benefits, and the step-by-step application process.',
    url: 'https://www.visarapid.com/startup-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Portugal Startup Visa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portugal Startup Visa — Requirements & Process',
    description: 'Complete guide to the Portugal Startup Visa for non-EU entrepreneurs. Learn about incubator partnerships, benefits, and the step-by-step application process.',
    images: ['/og-image.png'],
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
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Portugal Startup Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The StartUP Visa is a continuous hosting programme for non-EU entrepreneurs who want to develop an innovative or scalable project in Portugal. It enables incubator hosting, a Portuguese entry visa and a residence permit under the StartUP Visa rules. The program aims to strengthen the innovation ecosystem and affirm Portugal as a country open to entrepreneurship.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the benefits of the Portugal Startup Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Benefits include support from certified Portuguese incubators, potential tax benefits under the Non-Habitual Resident (NHR) regime, a pathway to Portuguese citizenship after 5 years of residence, and an affordable residency option with a residence permit valid for 2 years that is extendable to family members.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who can apply for the Portugal Startup Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Applicants must be non-EU nationals without permanent residence in the Schengen Area, entrepreneurs with an innovative and scalable project (an idea or an already running project abroad intending to set up in Portugal), and must obtain interest or acceptance from at least one certified Portuguese incubator to progress.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the step-by-step process for the Portugal Startup Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The process involves 7 steps: (1) Build a strong business plan highlighting technology and innovation, (2) Assemble required documents including CV and pitch deck, (3) Secure an accredited incubator, (4) Wait for IAPMEI decision (typically 30 working days), (5) Apply for your entry visa at the consulate with the Declaration of Participation, (6) Schedule your SEF appointment in Portugal for biometrics, and (7) Receive your residence card, typically valid for 2 years.',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'Startup Visa', href: '/startup-visa' }]} />
      <StartupVisaContent />
    </>
  )
}
