import { Metadata } from 'next'
import JobSeekerVisaContent from '@/components/JobSeekerVisaContent'
import StructuredData from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Germany Opportunity Card — Job Seeker Visa Guide',
  description: 'Guide to Germany\'s Opportunity Card (Chancenkarte) — eligibility, points system, benefits, and how to apply for this job seeker visa.',
  alternates: {
    canonical: 'https://www.visarapid.com/job-seeker-visa',
  },
  openGraph: {
    title: 'Germany Opportunity Card — Job Seeker Visa Guide',
    description: 'Complete guide to the Germany Opportunity Card (Chancenkarte). Learn about eligibility, the points-based system, benefits, and how to apply.',
    url: 'https://www.visarapid.com/job-seeker-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Germany Opportunity Card' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germany Opportunity Card — Job Seeker Visa Guide',
    description: 'Complete guide to the Germany Opportunity Card (Chancenkarte). Learn about eligibility, the points-based system, benefits, and how to apply.',
    images: ['/og-image.png'],
  },
}

export default function JobSeekerVisaPage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Germany Opportunity Card Consulting',
        description: 'Germany\'s points-based Opportunity Card for skilled professionals seeking jobs in Germany.',
        provider: {
          '@type': 'Organization',
          name: 'Visa Rapid',
          url: 'https://www.visarapid.com',
        },
        url: 'https://www.visarapid.com/job-seeker-visa',
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Germany Opportunity Card (Chancenkarte)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Opportunity Card is a residence permit in the form of a D-visa for Germany issued by the German missions abroad. It is issued for a maximum of 1 year and serves two purposes: to look for a job in Germany, and to look for a program for the recognition of one\'s foreign professional qualifications. It replaced the former job seeker visa by introducing a point-based system rewarding different qualifications.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the key features of the Germany Opportunity Card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Opportunity Card is a temporary residence permit valid up to 1 year, allowing you to stay in Germany to explore job opportunities or get your qualifications recognized. It can be upgraded to a long-term residence permit without traveling back to your home country. Additionally, holders can work part-time up to 20 hours per week while job searching.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who can apply for the Germany Opportunity Card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There are two pathways: (1) University graduates with a degree recognized in Germany may qualify directly, provided all general eligibility criteria are met. (2) Applicants without a university degree may qualify through the points-based system by scoring at least 6 points based on factors such as professional experience, language skills, age, and other criteria.',
            },
          },
        ],
      }} />
      <Breadcrumbs items={[{ name: 'Job Seeker Visa', href: '/job-seeker-visa' }]} />
      <JobSeekerVisaContent />
    </>
  )
}
