export function VideoSection() {
  return (
    <section className="py-1 px-4 bg-background relative">
      <div className="max-w-3xl mx-auto">
        <div className="relative glow-border rounded-3xl overflow-hidden shadow-glow">
          <div className="aspect-video bg-gradient-to-br from-card to-card/50 flex items-center justify-center relative">
            {/* Video placeholder with professional styling */}
            <div className="text-center relative z-10">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow hover:shadow-glow-intense transition-all duration-300 cursor-pointer">
                <svg
                  className="w-12 h-12 text-primary-foreground ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* <p className="text-3xl font-bold text-foreground mb-2">
                Oh Baby....
              </p>
              <p className="text-muted-foreground">
                Click to watch the full presentation
              </p>  This is not needed*/}
            </div>

            {/* Ambient lighting effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Video embed placeholder */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="glass-card rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                Video embed placeholder
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Replace this div with your VSL video embed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
