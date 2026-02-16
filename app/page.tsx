import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import TicketsSection from "@/components/TicketsSection";
import VenueSection from "@/components/VenueSection";
import SponsorsSection from "@/components/SponsorsSection";
import NetworkingSection from "@/components/NetworkingSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import ReplaySection from "@/components/ReplaySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ScheduleSection />
        <SpeakersSection />
        <TicketsSection />
        <VenueSection />
        <SponsorsSection />
        <NetworkingSection />
        <LiveStreamSection />
        <ReplaySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
