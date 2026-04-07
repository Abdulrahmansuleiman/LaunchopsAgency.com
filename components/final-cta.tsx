export function FinalCTA() {
  return (
    <>
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-black leading-tight">
            Ready to Qualify 30-100 Leads Monthly While You Sleep?
          </h2>

          <p className="text-lg md:text-xl mb-12 text-gray-700 text-pretty max-w-3xl mx-auto leading-relaxed">
            Join agencies and local businesses already using LaunchOps to automate lead qualification and close more deals with less hustle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://calendly.com/launchops-automation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-colors cursor-pointer inline-block"
            >
              Get Started Free
            </a>

            <a
              href="/pricing"
              className="px-10 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-lg rounded-lg transition-all duration-300 cursor-pointer inline-block"
            >
              View Pricing
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            Delivered in 7 days • 50% upfront, 50% on completion • Free consultation call
          </p>
        </div>
      </section>

      <footer className="relative py-16 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="h-8 mb-4">
                <img
                  src="/Launchops.png"
                  alt="LaunchOps"
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-700 text-sm max-w-md">
                AI-powered lead qualification for agencies and local businesses that want to close more deals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-black mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                  <li><a href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                  <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 LaunchOps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
