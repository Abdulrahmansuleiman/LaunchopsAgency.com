import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <>
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 glass-morphism-dark" />
        <div className="absolute inset-0 spotlight opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
            Ready to stop answering the phone and start closing clients?
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-muted-foreground text-pretty max-w-3xl mx-auto">
            Book a free setup call — limited premium onboarding spots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="gradient-primary shadow-glow-intense hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-bold rounded-2xl"
            >
              Book Free Setup
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="glass-card text-foreground hover:text-primary px-8 py-6 text-lg font-semibold border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300"
            >
              See Pricing
            </Button>
          </div>

          <p className="text-lg text-muted-foreground">
            🔒 Limited spots available • Results guaranteed • Take action now
          </p>
        </div>
      </section>

      <footer className="bg-black py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  Q
                </span>
              </div>
              <span className="text-2xl font-bold text-white">Qualify.io</span>
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a
                href="mailto:hello@upscaledmarketing.com"
                className="hover:text-primary transition-colors"
              >
                hello@Qualifyappointment.com
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 Qualify.io All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
