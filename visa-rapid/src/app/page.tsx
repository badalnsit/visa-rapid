import HeroSection from "@/components/HeroSection";
import ForIndividuals from "@/components/ForIndividuals";
import ForBusiness from "@/components/ForBusiness";
import WhyChooseUs from "@/components/WhyChooseUs";
import StepByStep from "@/components/StepByStep";
import StatsSection from "@/components/StatsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

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
