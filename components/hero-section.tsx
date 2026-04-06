export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/10 blur-3xl rounded-full opacity-40" />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wide">
          ★ For Agencies & Local Business Owners
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight text-balance">
          Stop Answering Unqualified Leads. Start Closing Deals.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Our AI agent qualifies leads 24/7, books appointments, handles follow-ups, and transfers to your team—so you can focus on what matters: closing sales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Schedule Free Demo
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:border-white/40 transition-colors text-lg">
            Learn How It Works
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6">Trusted by agencies and local businesses</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <span className="font-semibold">Solar Companies</span>
            <span className="font-semibold">Construction</span>
            <span className="font-semibold">Real Estate</span>
            <span className="font-semibold">Gyms</span>
            <span className="font-semibold">Marketing Agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// for "local business owners" : I will target real estate agents, Gym owners who want to grow their business with qualified appointments and leads.

// for "marketing consultants" : I will target marketing consultants who want to offer qualified lead to their clients and want to grow their business with qualified appointments and leads.

// SOFTWARE I WILL HAVE TO PAY FOR TO SCALE THIS BUSINESS & CLIENTS
// 1. Make - $11/month (to automate workflows between apps)
// 2. GHL - $297/month (CRM to manage leads and sales pipeline)
// 3. Apollo.io - $99/month (to find leads, phone number and their email addresses)
// 4. millionverifier - $20/month (to verify email addresses)
// TOTAL MONTHLY COST - $427/month
// budget - $500/month
