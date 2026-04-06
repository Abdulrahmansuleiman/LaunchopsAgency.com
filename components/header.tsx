export function Header() {
  return (
    <header className="py-6 px-4 md:px-6 bg-background border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10">
            <img
              src="/Launchops.png"
              alt="LaunchOps Logo"
              className="h-full w-auto"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
            Features
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
            Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
            About
          </a>
          <button className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors text-sm">
            Schedule Demo
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
