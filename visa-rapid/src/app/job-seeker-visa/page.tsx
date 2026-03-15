import { Metadata } from 'next'
import JobSeekerVisaContent from '@/components/JobSeekerVisaContent'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Germany Opportunity Card — Job Seeker Visa Guide',
  description: 'Complete guide to the Germany Opportunity Card (Chancenkarte). Learn about eligibility, the points-based system, benefits, and how to apply for this job seeker residence permit.',
  alternates: {
    canonical: '/job-seeker-visa',
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
      <JobSeekerVisaContent />
    </>
  )
}
