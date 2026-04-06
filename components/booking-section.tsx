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

          <div className="max-w-2xl mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/launchops-automation/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </div>
        </div>
      </div>
    </section>
  );
}
