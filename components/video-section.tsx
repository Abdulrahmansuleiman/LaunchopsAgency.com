export function VideoSection() {
  return (
    <section className="py-12 px-4 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">See How It Works</h3>
          <p className="text-gray-300">Watch a 5-minute demo of LaunchOps in action</p>
        </div>
        <div className="relative glow-border rounded-3xl overflow-hidden shadow-glow">
          <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-black flex items-center justify-center relative">
            {/* Video placeholder with professional styling */}
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow hover:shadow-glow-intense hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg
                  className="w-12 h-12 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-white">
                Play Demo Video
              </p>
            </div>

            {/* Ambient lighting effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
