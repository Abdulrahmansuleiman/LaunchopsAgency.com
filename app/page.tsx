import { ScarcityBanner } from "@/components/scarcity-banner";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { QuickStats } from "@/components/quick-stats";
import { TrustedBy } from "@/components/trusted-by";
import { FeaturesSection } from "@/components/features-section";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { CookieConsent } from "@/components/cookie-consent";
import { Chatbot } from "@/components/chatbot";
import { ExitIntentModal } from "@/components/exit-intent-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScarcityBanner />
      <Header />
      <main>
        <HeroSection />
        <QuickStats />
        <TrustedBy />
        <FeaturesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <CookieConsent />
      <Chatbot />
      <ExitIntentModal />
    </div>
  );
}
