import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmyaPreloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Total duration: 3.0s (Fade out starts at 2.4s, completes at 3.0s)
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-8 overflow-hidden select-none"
          style={{
            backgroundColor: '#f6f1e7',
            backgroundImage: `radial-gradient(#e6decb 1px, transparent 1px), radial-gradient(#e6decb 1px, #f6f1e7 1px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          {/* Top Spacer */}
          <div className="w-full" />

          {/* Center Content Group (Logo, Branding Text, Dots Loader) */}
          <motion.div
            initial={{ scale: 0.84, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1.0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1], // cubic-bezier(0.16, 1, 0.3, 1)
            }}
            className="flex flex-col items-center justify-center my-auto text-center gap-7 max-w-xl"
          >
            {/* Center Logo Image */}
            <div className="flex items-center justify-center">
              <img
                src="/AMYALOGO.png"
                alt="Amya Growth Logo"
                className="w-[280px] max-w-[80vw] h-auto object-contain drop-shadow-[0_12px_24px_rgba(39,83,84,0.1)]"
              />
            </div>

            {/* Branding Text */}
            <p
              className="text-sm sm:text-base font-medium tracking-wide"
              style={{ color: '#275354', fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              Webapp Crafted with <span className="text-red-500 inline-block animate-pulse">❤️</span> by Amya Growth
            </p>

            {/* Circle of Teal-Cyan Dots Loader */}
            <div className="mt-1 flex items-center justify-center">
              <div className="relative w-9 h-9 flex items-center justify-center animate-spin" style={{ animationDuration: '2.4s' }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: '#468585',
                      opacity: 0.2 + (i / 8) * 0.8,
                      transform: `rotate(${deg}deg) translate(15px)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Initializing Text at Bottom */}
          <div className="w-full text-center pb-2">
            <span
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
              style={{ color: '#9da8a6', fontFamily: "'Inter', sans-serif" }}
            >
              EXPERIENCE INITIALIZING...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
