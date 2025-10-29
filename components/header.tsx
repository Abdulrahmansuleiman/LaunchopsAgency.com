export function Header() {
  return (
    <header className="py-4 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Replace the Q box with the logo */}
          <div className="h-12 mt-5">
            <img
              src="/Launchops.png"
              alt="Launchops Logo"
              className="h-full w-auto"
            />
          </div>
        </div>

        <div className="flex items-center">
          <a
            href="mailto:hello@Qualifyappointment.com"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            hello@Qualifyappointment.com
          </a>
        </div>
      </div>
    </header>
  );
}
