import { Card, CardContent } from "@/components/ui/card";

export function ValueProposition() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.15_0.05_280)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            How It Works <span className="text-blue-400">For You</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            LaunchOps AI handles lead qualification so you can focus on what you do best
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <Card className="glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Leads Come In 24/7</h3>
                <p className="text-gray-300">Customers submit inquiries from your website, ads, or referrals anytime, day or night.</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Qualifies Them</h3>
                <p className="text-gray-300">Our AI agent texts back instantly, asks qualifying questions, and determines if they're a good fit.</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Books Their Slot</h3>
                <p className="text-gray-300">Once qualified, the AI automatically schedules appointments directly into your calendar.</p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H8m4 0v2m0-2v-2m2 2h2m0 0h2m-2 0v2m0-2v-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">You Close the Deal</h3>
                <p className="text-gray-300">You only talk to warm, pre-qualified leads ready to buy. Close deals faster and easier.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">The Result?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">30-100</div>
              <p className="text-gray-300">Qualified appointments per month</p>
            </div>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Lead qualification happening automatically</p>
            </div>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">70%</div>
              <p className="text-gray-300">More time on fulfillment & closing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
