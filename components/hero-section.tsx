export function HeroSection() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wide">
          ★ For Agencies & Local Business Owners
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
          Stop Losing Leads to Competitors Online
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get an AI lead qualification system that actually works. Delivered in 7 days. From £497.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://calendly.com/launchops-automation/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </a>
          <a href="#pricing" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded hover:bg-blue-50 transition-colors">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
