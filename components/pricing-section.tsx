import { Check } from "lucide-react";

interface PricingSectionProps {
  country: 'US' | 'UK' | 'CA' | 'AU';
}

const pricingData = {
  US: {
    currency: '$',
    starter: 497,
    mid: 997,
    premium: 2997,
  },
  UK: {
    currency: '£',
    starter: 397,
    mid: 797,
    premium: 2397,
  },
  CA: {
    currency: 'C$',
    starter: 647,
    mid: 1297,
    premium: 3897,
  },
  AU: {
    currency: 'A$',
    starter: 747,
    mid: 1497,
    premium: 4497,
  },
};

export function PricingSection({ country }: PricingSectionProps) {
  const prices = pricingData[country];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
            <p className="text-gray-600 text-sm mb-6">Perfect for testing the system</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">{prices.currency}{prices.starter}</span>
              <p className="text-gray-600 text-sm mt-2">50% upfront, 50% on delivery</p>
              <p className="text-gray-500 text-xs mt-1">+ £150/month maintenance</p>
            </div>

            <div className="mb-8">
              <p className="text-blue-600 font-semibold text-sm mb-4">7-Day Delivery</p>
              <a 
                href="https://calendly.com/launchops-automation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Started Now
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">AI Lead Qualification</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Auto Booking Calendar</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Basic Analytics</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Email Support</span>
              </div>
            </div>
          </div>

          {/* Conversion OS (Recommended) */}
          <div className="rounded-2xl border-2 border-blue-600 p-8 bg-blue-50 shadow-lg relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              ★ MOST POPULAR
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-2">Conversion OS</h3>
            <p className="text-gray-700 text-sm mb-6 font-medium">The complete system for scaling</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">{prices.currency}{prices.mid}</span>
              <p className="text-gray-700 text-sm mt-2 font-semibold">50% upfront, 50% on delivery</p>
              <p className="text-gray-600 text-xs mt-1">+ £250/month maintenance</p>
            </div>

            <div className="mb-8">
              <p className="text-blue-700 font-bold text-sm mb-4">7-Day Delivery</p>
              <a 
                href="https://calendly.com/launchops-automation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors text-center"
              >
                Get Started Now
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Everything in Starter +</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Advanced AI Qualification</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Automated Follow-ups</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lead Scoring & Tagging</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Priority Support</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-black mb-2">Premium Enterprise</h3>
            <p className="text-gray-600 text-sm mb-6">Full automation with custom workflows</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">{prices.currency}{prices.premium}</span>
              <p className="text-gray-600 text-sm mt-2">50% upfront, 50% on delivery</p>
              <p className="text-gray-500 text-xs mt-1">+ £500/month maintenance</p>
            </div>

            <div className="mb-8">
              <p className="text-blue-600 font-semibold text-sm mb-4">7-Day Delivery</p>
              <a 
                href="https://calendly.com/launchops-automation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Started Now
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Everything in Conversion OS +</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Custom AI Training</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Multi-Channel Integration</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dedicated Account Manager</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">24/7 Priority Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center bg-blue-50 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-black mb-4">Payment Structure</h4>
          <p className="text-gray-700 max-w-2xl mx-auto">
            All plans are <span className="font-semibold">50% due upfront to secure your spot</span>, and the remaining 50% is due upon completion (within 7 days). This ensures we're both committed to delivering exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}
