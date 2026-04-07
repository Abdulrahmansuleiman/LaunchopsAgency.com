'use client';

import { Header } from "@/components/header";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";
import { ComparisonSection } from "@/components/comparison-section";
import { useState, useEffect } from "react";

export default function PricingPage() {
  const [country, setCountry] = useState<'US' | 'UK' | 'CA' | 'AU'>('US');

  useEffect(() => {
    // Detect user country based on timezone or IP (simplified)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('Europe/London') || timezone.includes('Europe/Dublin')) {
      setCountry('UK');
    } else if (timezone.includes('America/Toronto') || timezone.includes('America/Vancouver')) {
      setCountry('CA');
    } else if (timezone.includes('Australia')) {
      setCountry('AU');
    } else {
      setCountry('US');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      
      <main className="relative z-10">
        {/* Pricing Header */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Invest in your growth. Choose the plan that fits your business.
            </p>
            
            {/* Currency Selector */}
            <div className="flex justify-center gap-2 flex-wrap mb-12">
              <button
                onClick={() => setCountry('US')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  country === 'US'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCountry('UK')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  country === 'UK'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                GBP (£)
              </button>
              <button
                onClick={() => setCountry('CA')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  country === 'CA'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                CAD (C$)
              </button>
              <button
                onClick={() => setCountry('AU')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  country === 'AU'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                AUD (A$)
              </button>
            </div>
          </div>
        </section>

        <PricingSection country={country} />
        <ComparisonSection />
      </main>

      <FinalCTA />
    </div>
  );
}
