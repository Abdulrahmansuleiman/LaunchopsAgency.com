export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-background border-b border-black/5 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-9">
            <img
              src="/Launchops.png"
              alt="LaunchOps Logo"
              className="h-full w-auto"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Testimonials
          </a>
          <a href="https://calendly.com/launchops-automation/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm">
            Schedule Demo
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gray-700 hover:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
