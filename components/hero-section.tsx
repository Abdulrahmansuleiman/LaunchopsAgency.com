export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-white" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-100/20 blur-3xl rounded-full opacity-40" />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wide">
          ★ For Agencies & Local Business Owners
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight text-balance">
          Stop Losing Leads to Competitors.<br className="hidden sm:block" />Start Converting with AI
        </h1>

        <div className="inline-block mb-8 px-4 py-2 bg-blue-100 rounded-full">
          <p className="text-blue-700 font-semibold text-sm">🚀 Delivered in just 7 days</p>
        </div>

        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Invest in a fully automated AI system that qualifies leads 24/7, books appointments, and sends pre-qualified prospects to your team. Scale your business without scaling your headcount.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://calendly.com/launchops-automation/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Schedule Free Demo
          </a>
          <a href="#how-it-works" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
            See How It Works
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-6 font-medium">Trusted by high-growth agencies and local businesses</p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-gray-700 font-semibold">Solar Companies</span>
            <span className="text-gray-700 font-semibold">Construction</span>
            <span className="text-gray-700 font-semibold">Real Estate</span>
            <span className="text-gray-700 font-semibold">Gyms & Fitness</span>
            <span className="text-gray-700 font-semibold">Marketing Agencies</span>
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
