'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ScarcityBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage to see if user dismissed the banner
    const isDismissed = localStorage.getItem('scarcity-banner-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('scarcity-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="text-2xl">⏰</div>
          <div>
            <p className="font-bold text-lg">3 slots left</p>
            <p className="text-sm text-blue-100">For 7-day implementation this month</p>
          </div>
        </div>
        <a 
          href="https://calendly.com/launchops-automation/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Book Your Spot →
        </a>
        <button
          onClick={handleDismiss}
          className="p-2 hover:bg-blue-500/30 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
