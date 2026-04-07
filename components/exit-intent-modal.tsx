'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Track when user is about to leave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User is leaving the page
        const dismissedDate = localStorage.getItem('exit-modal-dismissed-date');
        const today = new Date().toDateString();

        // Only show once per day
        if (!dismissedDate || dismissedDate !== today) {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send data to email (via your email service)
      await fetch('/api/send-lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fullName,
          source: 'exit-intent-modal',
        }),
      });

      setSubmitted(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    const today = new Date().toDateString();
    localStorage.setItem('exit-modal-dismissed-date', today);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8 text-center">
          {!submitted ? (
            <>
              {/* Badge */}
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
                <p className="text-sm font-bold">Wait! Free Demo Inside</p>
              </div>

              <h2 className="text-3xl font-bold text-black mb-4">
                Before you go...
              </h2>

              <p className="text-lg text-gray-700 mb-2">
                Get instant access to a <span className="font-bold">personalized demo video</span>
              </p>

              <p className="text-gray-600 text-sm mb-8">
                See exactly how LaunchOps automates lead qualification for agencies in your industry. Takes just 5 minutes.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                >
                  {isLoading ? 'Sending...' : 'Send Me the Demo Video'}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-6">
                No spam. We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-black mb-2">Check your email!</h3>
              <p className="text-gray-700">
                Your personalized demo video is on the way. We also included tips to implement LaunchOps faster.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
