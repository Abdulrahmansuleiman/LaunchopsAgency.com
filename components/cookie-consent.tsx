'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-black text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 flex-col md:flex-row">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">We use cookies</h3>
          <p className="text-sm text-gray-300">
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and for marketing purposes. By clicking "Accept," you consent to our use of cookies.
          </p>
        </div>
        
        <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
          <button
            onClick={handleReject}
            className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors text-sm font-medium flex-1 md:flex-none"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors text-sm font-bold flex-1 md:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
