import { Button } from "@/components/ui/button";
import { Zap, Calendar, TrendingUp, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">
          Everything You Get
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Our complete AI infrastructure handles every step of lead qualification automatically
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <Zap className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              AI Responder
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Instant text responses to every inquiry, 24/7, even while you sleep.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <Calendar className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Auto Booking
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Qualified leads book appointments directly into your calendar.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <TrendingUp className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Smart Tagging
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leads are automatically tagged by quality and interest level.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <CheckCircle className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Human Handoff
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI transfers hot leads to your team at the perfect moment.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Follow-ups
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Automated reminders and follow-up sequences to keep leads engaged.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Customizable
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Train the AI with your exact scripts and business rules.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Analytics
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Real-time dashboard showing conversions, response rates, and ROI.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40">
            <div className="w-14 h-14 bg-blue-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Full Setup
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We configure everything for you. You focus on closing.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-2xl p-8">
            <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300 font-medium">Agencies & Businesses</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-2xl p-8">
            <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-gray-300 font-medium">Qualified Leads Generated</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-2xl p-8">
            <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">$10M+</div>
            <div className="text-gray-300 font-medium">Revenue Helped Generate</div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-10 py-6 rounded-lg transition-colors cursor-pointer"
          >
            Schedule Your Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
