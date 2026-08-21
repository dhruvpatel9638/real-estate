import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmyaPreloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Hold for minimum 5 seconds
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) {
        onComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-8 selection:bg-[#2b5353] selection:text-white"
          style={{ backgroundColor: '#fdfbf7' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Top Spacing */}
          <div className="w-full" />

          {/* Center Branding Content */}
          <div className="flex flex-col items-center justify-center my-auto text-center gap-6">
            {/* Center Logo with Breathing / Pulse Animation */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="flex items-center justify-center min-h-[80px]"
            >
              {!imgError ? (
                <img
                  src="/AMYALOGO.png"
                  alt="Amya Growth Logo"
                  onError={() => setImgError(true)}
                  className="h-16 md:h-24 w-auto object-contain drop-shadow-sm"
                />
              ) : (
                /* Fallback SVG logo in case AMYALOGO.png file is added later */
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2b5353] flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                    A
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight" style={{ color: '#2b5353', fontFamily: 'var(--font-sans)' }}>
                    Amya <span style={{ color: '#589796' }}>Growth</span>
                  </span>
                </div>
              )}
            </motion.div>

            {/* Branding Text */}
            <p
              className="text-base sm:text-lg font-medium tracking-wide"
              style={{ color: '#2b5353', fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Website Crafted with <span className="text-red-500 animate-pulse">❤️</span> by Amya Growth
            </p>

            {/* Elegant Teal/Cyan Loading Spinner */}
            <div className="mt-2 flex items-center justify-center">
              <div
                className="w-7 h-7 rounded-full animate-spin border-2 border-t-transparent"
                style={{ borderColor: '#589796', borderTopColor: 'transparent' }}
              />
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="w-full text-center pb-4">
            <span
              className="text-xs uppercase tracking-widest font-semibold opacity-70"
              style={{ color: '#2b5353' }}
            >
              EXPERIENCE INITIALIZING...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
