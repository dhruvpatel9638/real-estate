import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import amyaLogoImg from '../Assets/AMYALOGO.png';

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
            perspective: 1000,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Top Spacing */}
          <div className="w-full" />

          {/* Center Brand Identity Container */}
          <div className="flex flex-col items-center justify-center my-auto text-center gap-6 max-w-2xl px-4">
            {/* Center Logo Container with 3D Flip Entrance & Heartbeat Pulse */}
            <motion.div
              initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
              animate={{
                rotateY: 0,
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotateY: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.8, ease: 'easeOut' },
                scale: {
                  delay: 1.1,
                  repeat: Infinity,
                  duration: 2.4,
                  ease: 'easeInOut',
                },
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex flex-col items-center justify-center relative"
            >
              {/* Amya Growth Logo PNG Image */}
              <img
                src={amyaLogoImg}
                alt="Amya Growth Logo"
                className="h-48 sm:h-64 md:h-76 w-auto object-contain drop-shadow-[0_16px_36px_rgba(39,83,84,0.16)]"
              />
            </motion.div>

            {/* Branding Text directly below logo */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base font-medium tracking-wide mt-1"
              style={{ color: '#275354', fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              Website Crafted with <span className="text-red-500 inline-block animate-pulse">❤️</span> by Amya Growth
            </motion.p>

            {/* Circle of Teal-Cyan Dots Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-2 flex items-center justify-center"
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
