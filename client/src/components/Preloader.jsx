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
              Fame Real Estate — where lifestyle becomes legacy
            </h1>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="relative w-48 md:w-64 h-16 flex items-center justify-center">
              <svg viewBox="0 0 176 42" fill="none" className="w-full h-full text-white">
                <path d="M62.2739 19.7134L74.1816 40.6402C74.3421 40.8649 74.5667 40.9612 74.9198 40.9932V41.25H68.8215V40.9932C69.3992 40.9612 69.5918 40.7044 69.3992 40.2871L66.2859 34.8308H51.297L48.2478 40.1908C48.0231 40.6723 48.2157 40.9612 48.7934 40.9932V41.25H42.984V40.9932C43.3371 40.9612 43.5618 40.8649 43.7222 40.6402L55.662 19.6492C55.8546 19.2641 55.7262 19.0394 55.2769 19.0073V18.7505H62.659V19.0073C62.1776 19.0394 62.0492 19.2641 62.2739 19.7134ZM64.5848 31.6532L58.8075 21.3182L53.0302 31.6532H64.5848Z" fill="currentColor"></path>
                <path d="M128.037 18.7505V19.0073C127.395 19.1036 127.234 19.2962 127.234 19.906V40.0946C127.234 40.7044 127.395 40.897 128.037 40.9932V41.25H122.548V40.9932C123.094 40.9612 123.351 40.6402 123.351 40.0946V23.3724L112.181 41.1537H111.86L100.659 23.8218V40.0946C100.659 40.6402 100.948 40.9612 101.493 40.9932V41.25H96.0048V40.9932C96.6467 40.897 96.8393 40.6402 96.8393 40.0946V19.906C96.8393 19.3604 96.6467 19.1036 96.0048 19.0073V18.7505H102.841V19.0073C102.424 19.0394 102.296 19.232 102.456 19.5851L112.181 34.5419L121.585 19.553C121.746 19.1999 121.618 19.0394 121.2 19.0073V18.7505H128.037Z" fill="currentColor"></path>
                <path d="M175.073 41.25H150.744V40.9932C151.386 40.897 151.578 40.6402 151.578 40.0946V19.906C151.578 19.3604 151.386 19.1036 150.744 19.0073V18.7505H175.073V22.7947H174.816C174.72 22.1528 174.495 21.9923 173.885 21.9923H155.558V28.251H168.846C169.456 28.251 169.649 28.0585 169.745 27.4165H170.002V32.231H169.745C169.649 31.589 169.456 31.3965 168.846 31.3965H155.558V38.0083H173.885C174.495 38.0083 174.72 37.8478 174.816 37.2059H175.073V41.25Z" fill="currentColor"></path>
                <path d="M8.72504 41.25H3.0761V41.0253C3.71803 40.9291 3.9106 40.7044 3.9106 40.0946V31.6853H2.16462C1.55479 31.6853 1.36222 31.8458 1.26593 32.4877H1.00916V27.7053H1.26593C1.36222 28.3473 1.61898 28.5398 2.16462 28.5398H3.9106V19.906C3.9106 19.2962 3.71803 19.0715 3.0761 18.9752V18.7505H27.4051V22.7947H27.1483C27.052 22.1528 26.8594 21.9923 26.2496 21.9923H7.89054V28.5399H21.2105C21.7561 28.5399 22.0129 28.3473 22.1092 27.7054H22.3659V32.4877H22.1092C22.0129 31.8458 21.8203 31.6853 21.2105 31.6853H7.89054V40.0946C7.89054 40.7044 8.08312 40.9291 8.72504 41.0253V41.25Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          {/* Loading Progress */}
          <div className="w-full flex justify-between items-end pb-6 px-4">
            <div className="l2 tracking-wider text-neutral-400">
              <span className="block text-2xl text-white font-bold mb-1">{progress}%</span>
              <span>loaded experience</span>
            </div>
            <div className="l2 tracking-widest uppercase text-neutral-400">
              FAME REAL ESTATE DUBAI & BANGKOK
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
