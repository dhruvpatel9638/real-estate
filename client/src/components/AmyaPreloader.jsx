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
            backgroundColor: '#f7f4ed',
            backgroundImage: `radial-gradient(#e5dec9 1px, transparent 1px), radial-gradient(#e5dec9 1px, #f7f4ed 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Top Spacing */}
          <div className="w-full" />

          {/* Center Brand Identity Container */}
          <div className="flex flex-col items-center justify-center my-auto text-center gap-7 max-w-xl">
            {/* Center Logo Block */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-1"
            >
              {/* Image logo or Stylized Split-Gradient Typography */}
              <div className="relative flex flex-col items-center">
                <img
                  src="/AMYALOGO.png"
                  alt="Amya Growth"
                  className="h-16 md:h-24 w-auto object-contain mb-1"
                  onError={(e) => {
                    // Hide image element if file not found so fallback stylized text renders seamlessly
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Stylized 'Amya' with Deep Forest Green & Teal-Cyan Split */}
                <h1
                  className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none"
                  style={{
                    fontFamily: "'Playfair Display', 'Cinzel', serif",
                    background: 'linear-gradient(135deg, #1a3d37 0%, #1a3d37 48%, #489b9b 52%, #489b9b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Amya
                </h1>

                {/* 'Growth' in matching thin dark forest green font */}
                <span
                  className="text-sm sm:text-base font-light tracking-[0.35em] uppercase mt-1 pl-1"
                  style={{ color: '#1a3d37', fontFamily: "'Inter', sans-serif" }}
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
              style={{ color: '#1a3d37', fontFamily: "'Inter', sans-serif" }}
            >
              Website Crafted with <span className="text-red-500 inline-block animate-pulse">❤️</span> by Amya Growth
            </motion.p>

            {/* Circle of Teal-Cyan Dots Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-2 flex items-center justify-center"
            >
              <div className="relative w-9 h-9 flex items-center justify-center animate-spin" style={{ animationDuration: '2.5s' }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: '#489b9b',
                      opacity: 0.2 + (i / 8) * 0.8,
                      transform: `rotate(${deg}deg) translate(14px)`,
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
              style={{ color: '#a3adab', fontFamily: "'Inter', sans-serif" }}
            >
              EXPERIENCE INITIALIZING...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
