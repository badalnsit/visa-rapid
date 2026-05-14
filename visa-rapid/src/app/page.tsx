import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";
import ForIndividuals from "@/components/ForIndividuals";
import ForBusiness from "@/components/ForBusiness";
import StructuredData from "@/components/StructuredData";

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="h-96" />,
});
const StepByStep = dynamic(() => import('@/components/StepByStep'), {
  loading: () => <div className="h-96" />,
});
const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="h-32" />,
});
const ScheduleMeeting = dynamic(() => import('@/components/ScheduleMeeting'), {
  loading: () => <div className="h-96" />,
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Visa Rapid",
          url: "https://www.visarapid.com/",
          logo: "https://www.visarapid.com/logo.png",
          description:
            "Visa Rapid helps professionals move to Europe permanently through startup, business and job seeker visas. Book free consultation and start your journey.",
          sameAs: [
            "https://www.linkedin.com/company/visarapid/",
            "https://www.youtube.com/@visa_rapid",
            "https://www.instagram.com/visa.rapid/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
          knowsAbout: [
            "Europe Immigration",
            "Job Seeker Visa",
            "Startup Visa",
            "D7 Visa",
            "Permanent Residency",
            "Visa Consultation",
          ],
        }}
      />
      {/* Website Schema */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Visa Rapid",
          url: "https://www.visarapid.com/",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.visarapid.com/{search_term_string}",
            "query-input":
              "required name=search_term_string",
          },
        }}
      />
      <HeroSection />
      <ForIndividuals />
      <ForBusiness />
      <WhyChooseUs />
      <StepByStep />
      <StatsSection />
      <ScheduleMeeting />
    </>
  );
}
