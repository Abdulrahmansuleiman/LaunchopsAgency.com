export function BookingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Lead Qualification?
          </h3>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Schedule a free 30-minute demo call. We'll show you exactly how LaunchOps can qualify leads and book appointments for your business.
          </p>

          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/50 border border-blue-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Book Your Free Demo
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Choose a time that works for you
                </p>
                <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-lg p-6">
                  <div className="text-gray-300 text-sm font-medium">
                    Calendar integration coming soon
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Or email us at hello@launchops.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
