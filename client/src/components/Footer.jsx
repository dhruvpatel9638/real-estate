import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-16 px-6 sm:px-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

        {/* Left Info */}
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-extrabold tracking-tighter text-white">
            PRIME <span className="font-serif italic font-normal text-purple-400">Estate</span>
          </div>
          <p className="l1-t text-xs text-neutral-400 max-w-sm leading-relaxed">
            Exclusive real estate agency specializing in luxury residential & commercial properties in Vaishnodevi Circle, Ahmedabad.
          </p>
          <p className="l2 text-neutral-500 mt-2">
            © {new Date().getFullYear()} PRIME REAL ESTATE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Nav & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <div className="flex flex-col text-xs l1 text-neutral-400 gap-2">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#cases" className="hover:text-white transition-colors">Cases</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#partnership" className="hover:text-white transition-colors">Partnership</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-circle border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
