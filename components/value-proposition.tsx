import { Card, CardContent } from "@/components/ui/card";

export function ValueProposition() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.15_0.05_280)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            This Is For <span className="text-gradient">You If You Are </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our system goes way beyond basic lead generation. Let's see
            <br />
            what makes us different.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Grid of 4 cards around central orb */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Top Left Card */}
            <Card className="glass-card border-0 hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Wasting money on dead ads
                </h3>
                <p className="text-muted-foreground">
                  You don't need followers to have an impact.
                  <br />
                  We'll help you get there.
                </p>
              </CardContent>
            </Card>

            {/* Top Right Card */}
            <Card className="glass-card border-0 hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.716 21 3 16.284 3 8V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Tired Of Making Manual Calls
                </h3>
                <p className="text-muted-foreground">
                  You don't need followers to have an impact.
                  <br />
                  We'll help you get there.
                </p>
              </CardContent>
            </Card>

            {/* Bottom Left Card */}
            <Card className="glass-card border-0 hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Leads not turning into sales
                </h3>
                <p className="text-muted-foreground">
                  You don't need followers to have an impact.
                  <br />
                  We'll help you get there.
                </p>
              </CardContent>
            </Card>

            {/* Bottom Right Card */}
            <Card className="glass-card border-0 hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM12 12v4m0 0l-2-2m2 2l2-2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Struggling with low appointment rates
                </h3>
                <p className="text-muted-foreground">
                  You don't need followers to have an impact.
                  <br />
                  We'll help you get there.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 orb-glow rounded-full shadow-glow-intense animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-foreground/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
