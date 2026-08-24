import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  const navItems = [
    { num: '1', label: 'introduction', id: 'introduction' },
    { num: '2', label: 'About', id: 'about' },
    { num: '3', label: 'cases', id: 'cases' },
    { num: '4', label: 'services', id: 'services' },
    { num: '5', label: 'partnership', id: 'partnership' },
    { num: '6', label: 'team', id: 'team' },
    { num: '7', label: 'contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setNavOpen(false);
    if (onNavigate) onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between pointer-events-none mix-blend-difference text-white">
      {/* Left Brand & CTA */}
      <div className="pointer-events-auto flex items-center gap-4">
        <a href="#introduction" className="text-xl font-extrabold tracking-tighter text-white hover:opacity-90 transition-opacity">
          PRIME <span className="font-serif italic font-normal text-purple-400">Estate</span>
        </a>
        <button
          onClick={() => handleNavClick('contact')}
          className="btn-pill hover:bg-white hover:text-black transition-all flex items-center gap-2 group border-white/40"
        >
          <span className="l1">let's discuss</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Right Navigation */}
      <div className="pointer-events-auto relative flex items-center gap-6">
        <span className="l1 hidden sm:inline-block opacity-75">new emotions?</span>

        {/* Navigation Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="l1 flex items-center gap-1.5 py-2 px-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-xs">{navOpen ? '[ - ]' : '[ + ]'}</span>
            <span>navigation</span>
          </button>

          {/* Nav Menu Drawer */}
          <AnimatePresence>
            {navOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md border border-neutral-800 rounded-lg py-3 px-4 shadow-2xl z-50 text-white"
              >
                <ul className="flex flex-col gap-2.5">
                  {navItems.map((item) => (
                    <li key={item.num}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className="w-full text-left l1 flex items-center gap-2 hover:text-red-500 transition-colors py-1"
                      >
                        <sup className="text-[0.6rem] opacity-60">[ {item.num} ]</sup>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Language Switcher */}
        <button
          onClick={() => setLang(lang === 'EN' ? 'RU' : 'EN')}
          className="l1 py-1 px-2 text-xs border border-white/30 rounded hover:border-white transition-colors"
        >
          {lang}
        </button>
      </div>
    </header>
  );
}
