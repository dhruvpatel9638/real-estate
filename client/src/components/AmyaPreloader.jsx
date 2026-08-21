import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmyaPreloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Show preloader for 5 seconds then transition out
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-8 overflow-hidden select-none"
          style={{
            backgroundColor: '#f6f1e7',
            backgroundImage: `radial-gradient(#e6decb 1px, transparent 1px), radial-gradient(#e6decb 1px, #f6f1e7 1px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Top Spacing */}
          <div className="w-full" />

          {/* Center Brand Identity Container */}
          <div className="flex flex-col items-center justify-center my-auto text-center gap-8 max-w-xl">
            {/* Center Logo Container with breathing scale */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center relative"
            >
              {/* Optional AMYALOGO.png Image if available */}
              <img
                src="/AMYALOGO.png"
                alt="Amya Growth"
                className="h-20 md:h-28 w-auto object-contain mb-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Exact Recreated Amya Growth Brand Logo Component */}
              <div className="flex flex-col items-center justify-center filter drop-shadow-[0_12px_20px_rgba(39,83,84,0.08)]">
                {/* 'Amya' - Ultra-Bold Geometric Sans with Exact 4-Color Block Accent */}
                <h1
                  className="text-6xl sm:text-8xl tracking-tight leading-none"
                  style={{
                    fontFamily: "'Outfit', 'Syne', sans-serif",
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(90deg, #275354 0%, #275354 36%, #468585 36%, #468585 62%, #275354 62%, #275354 82%, #529696 82%, #529696 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Amya
                </h1>

                {/* 'Growth' - Thin Elegant Spaced Subtitle */}
                <span
                  className="text-xl sm:text-2xl font-light tracking-[0.45em] mt-1 pl-2"
                  style={{
                    color: '#275354',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 200,
                  }}
                >
                  Growth
                </span>
              </div>
            </motion.div>

            {/* Branding Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs sm:text-sm font-medium tracking-wider"
              style={{ color: '#275354', fontFamily: "'Inter', sans-serif" }}
            >
              Website Crafted with <span className="text-red-500 inline-block animate-pulse">❤️</span> by Amya Growth
            </motion.p>

            {/* Circle of Teal-Cyan Dots Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1 flex items-center justify-center"
            >
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
            </motion.div>
          </div>

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
