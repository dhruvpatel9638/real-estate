import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Header Title */}
          <div className="w-full text-center pt-8">
            <h1 className="h1 tracking-tighter opacity-90 max-w-4xl mx-auto">
              Prime Estate — where prestige finds its address
            </h1>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center my-auto text-center">
            <div className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
              PRIME <span className="font-serif italic font-normal text-3xl md:text-5xl text-[#7a0c07]">Estate</span>
            </div>
            <span className="l2 tracking-[0.3em] text-neutral-400 mt-2 block">VAISHNODEVI CIRCLE, AHMEDABAD</span>
          </div>

          {/* Loading Progress */}
          <div className="w-full flex justify-between items-end pb-6 px-4">
            <div className="l2 tracking-wider text-neutral-400">
              <span className="block text-2xl text-white font-bold mb-1">{progress}%</span>
              <span>loaded experience</span>
            </div>
            <div className="l2 tracking-widest uppercase text-neutral-400">
              PRIME ESTATE VAISHNODEVI CIRCLE, AHMEDABAD
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
