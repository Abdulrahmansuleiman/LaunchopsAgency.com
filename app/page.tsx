import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BookingSection } from "@/components/booking-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FinalCTA } from "@/components/final-cta";
import { ValueProposition } from "@/components/value-proposition";
import { ScarcityBanner } from "@/components/scarcity-banner";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { Chatbot } from "@/components/chatbot";
import { CookieConsent } from "@/components/cookie-consent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 spotlight opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 beam-effect opacity-20" />

      <div className="relative min-h-screen">
        <ScarcityBanner />
        <ExitIntentModal />
        <Chatbot />
        <CookieConsent />

        <Header />

        <main className="relative z-10">
          <HeroSection />
          <BookingSection />
          <FeaturesSection />
          <ValueProposition />
          <TestimonialsSection />
          <FinalCTA />
        </main>
      </div>
    </div>
  );
}
