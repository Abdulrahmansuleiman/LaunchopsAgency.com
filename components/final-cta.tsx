import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <>
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-blue-900/10" />
        <div className="absolute inset-0 spotlight opacity-20" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white leading-tight">
            Ready to Qualify 30-100 Leads Monthly While You Sleep?
          </h2>

          <p className="text-lg md:text-xl mb-12 text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed">
            Join agencies and local businesses already using LaunchOps to automate lead qualification and close more deals with less hustle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-6 rounded-lg transition-colors cursor-pointer"
            >
              Get Started Free
            </Button>

            <Button
              size="lg"
              className="border border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold text-lg px-10 py-6 rounded-lg transition-all duration-300 cursor-pointer"
            >
              Watch Demo
            </Button>
          </div>

          <p className="text-gray-400 text-sm">
            No credit card required • 14-day free trial • Full access to all features
          </p>
        </div>
      </section>

      <footer className="bg-black/50 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="h-8 mb-4">
                <img
                  src="/Launchops.png"
                  alt="LaunchOps"
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                AI-powered lead qualification for agencies and local businesses that want to close more deals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 LaunchOps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
