import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BookingSection } from "@/components/booking-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FinalCTA } from "@/components/final-cta";
import { ValueProposition } from "@/components/value-proposition";
import { VideoSection } from "@/components/video-section";
import { Book } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 spotlight opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 beam-effect opacity-40" />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/5 to-transparent" />

      <div className="relative min-h-screen">
        <div className="absolute inset-4 glow-border rounded-3xl opacity-80 shadow-glow-intense" />

        <Header />

        <main className="relative z-10">
          <HeroSection />
          <VideoSection />
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
