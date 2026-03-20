import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";
import ForIndividuals from "@/components/ForIndividuals";
import ForBusiness from "@/components/ForBusiness";

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
