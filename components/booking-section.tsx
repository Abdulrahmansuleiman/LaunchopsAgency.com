export function BookingSection() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Automate Your Lead Qualification?
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free 30-minute demo. We&apos;ll show you exactly how LaunchOps can qualify leads and book appointments for your business.
          </p>
        </div>

        {/* Calendly Widget Container - Professional Box */}
        <div className="relative">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/5 rounded-3xl" />
          
          {/* Professional container */}
          <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />

            {/* Calendly Widget */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div
                  className="calendly-inline-widget rounded-2xl overflow-hidden"
                  data-url="https://calendly.com/launchops-automation/30min"
                  style={{
                    minWidth: '100%',
                    height: '700px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            No credit card required • Instant confirmation • 30-minute discovery call
          </p>
        </div>
      </div>
    </section>
  );
}
