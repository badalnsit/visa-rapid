import { Metadata } from 'next'
import ResidencyContent from '@/components/ResidencyContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Portugal D7 Passive Income Visa — Residency Guide',
  description: 'Complete guide to the Portugal D7 Passive Income Visa. Learn about advantages of living in Portugal, eligibility, and the step-by-step application process.',
  alternates: {
    canonical: '/passive-income-visa',
  },
  openGraph: {
    title: 'Portugal D7 Passive Income Visa — Residency Guide',
    description: 'Complete guide to the Portugal D7 Passive Income Visa. Learn about advantages of living in Portugal, eligibility, and the step-by-step application process.',
    url: 'https://www.visarapid.com/passive-income-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Portugal D7 Passive Income Visa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portugal D7 Passive Income Visa — Residency Guide',
    description: 'Complete guide to the Portugal D7 Passive Income Visa. Learn about advantages of living in Portugal, eligibility, and the step-by-step application process.',
    images: ['/og-image.png'],
  },
}

export default function PassiveIncomeVisaPage() {
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
        url: 'https://www.visarapid.com/passive-income-visa',
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Portugal D7 Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Portugal D7 visa is also known as the Portugal Passive Income visa or Retirement Visa. It acts as a route to permanent residency in Portugal and is aimed at non-EU and non-EEA citizens who do not need to rely on an active, salaried income. Holders also have the option of family reunification where family members will be granted a residence visa valid for one year, after which they can apply for permanent residency.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the advantages of living in Portugal with a D7 Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Advantages include visa-free travel in the Schengen area, access to the Portuguese National Health Service and Education Services, full protection via Portuguese law, potential tax exemptions or reduced rates under the NHR programme, the ability to work in Portugal, passing on citizenship to newborn children after a year of residency, obtaining citizenship and a Portuguese passport after 5 years, and a fast application process.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you apply for the Portugal D7 Visa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The process involves 6 steps: (1) Prepare your documents including proof of passive income, passport, health insurance, and bank statements. (2) Submit your application at your local Portuguese consulate. (3) Receive your visa stamped in your passport, valid for 120 days. (4) Travel to Portugal and book a SEF (AIMA) appointment. (5) Attend the SEF appointment with all supporting documents. (6) Obtain your residence permit, typically valid for 2 years with options for renewal and eventual citizenship.',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'Passive Income Visa', href: '/passive-income-visa' }]} />
      <ResidencyContent />
    </>
  )
}
