import { Button } from "@/components/ui/button";
import { Zap, Calendar, TrendingUp, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          What You'll Discover On Call:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="glass-card rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 group">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Next-Gen AI System
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AI finds and books meetings for you. No complicated stuff - it
              just works.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 group">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Booking Machine
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Consistently generate 30-100 FREE quality appointments monthly
              with our AI system.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 group">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Scale Without Chaos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The same AI system that helped consultant & local business owners
              hit 6-figures in 12 months.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 group">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Done For You (DFY)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do everything end-to-end. We do the work, you see the results.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">
              10+
            </div>
            <div className="text-muted-foreground uppercase tracking-wide font-medium">
              AI EXPERT PARTNERS
            </div>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">
              200+
            </div>
            <div className="text-muted-foreground uppercase tracking-wide font-medium">
              MEETINGS BOOKED
            </div>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">
              50k+
            </div>
            <div className="text-muted-foreground uppercase tracking-wide font-medium">
              IN CALLS MADE
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-primary shadow-glow-intense hover:shadow-glow-intense hover:scale-105 transition-all duration-300 text-lg px-12 py-8 rounded-2xl font-bold text-white cursor-pointer"
          >
            YES I WANT TO SCHEDULE A FREE DISCOVERY CALL
          </Button>
        </div>
      </div>
    </section>
  );
}
