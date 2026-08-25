import React from 'react';

export default function PartnerTicker() {
  const developerLogos = [
    // 1. LODHA
    {
      id: 'lodha',
      render: () => (
        <div className="flex flex-col items-center justify-center px-4">
          <span className="text-2xl font-serif font-black tracking-[0.2em] text-neutral-900 leading-none">
            LODHA
          </span>
          <span className="text-[8px] font-sans tracking-[0.25em] text-neutral-500 uppercase mt-1 font-semibold">
            BUILDING A BETTER LIFE
          </span>
        </div>
      )
    },

    // 2. ADANI REALTY
    {
      id: 'adani-realty',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          {/* Official Adani tri-color gradient wave icon */}
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
            <path d="M8 28C14 16 26 14 32 8" stroke="#0091D5" strokeWidth="4" strokeLinecap="round" />
            <path d="M12 32C18 20 28 18 34 12" stroke="#5C2D91" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M16 36C22 24 30 22 36 16" stroke="#ED1B2F" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-neutral-900 font-sans leading-none lowercase">
              adani
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#0091D5] uppercase font-sans">
              Realty
            </span>
          </div>
        </div>
      )
    },

    // 3. GODREJ PROPERTIES
    {
      id: 'godrej-properties',
      render: () => (
        <div className="flex items-center gap-2 px-4">
          <span className="text-2xl font-serif italic font-bold tracking-tight text-[#E31B23] leading-none">
            Godrej
          </span>
          <div className="h-5 w-[1.5px] bg-neutral-300 mx-0.5"></div>
          <span className="text-xs font-sans font-extrabold tracking-[0.2em] text-neutral-800 uppercase">
            PROPERTIES
          </span>
        </div>
      )
    },

    // 4. OBEROI REALTY
    {
      id: 'oberoi-realty',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          {/* Official Oberoi Realty deep red monogram box */}
          <div className="w-8 h-8 bg-[#8B1E2D] rounded flex items-center justify-center text-white font-serif font-black text-sm tracking-tighter shadow-sm">
            OR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-sans font-black tracking-[0.15em] text-neutral-900 leading-none">
              OBEROI
            </span>
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#8B1E2D] leading-none mt-1">
              REALTY
            </span>
          </div>
        </div>
      )
    },

    // 5. HN SAFAL
    {
      id: 'hn-safal',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <div className="w-8 h-8 rounded-full border-2 border-[#7a0c07] flex items-center justify-center text-[#7a0c07] font-sans font-black text-xs">
            hn
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-sans font-black tracking-[0.18em] text-neutral-900 leading-none">
              SAFAL
            </span>
            <span className="text-[8px] font-sans font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              AHMEDABAD
            </span>
          </div>
        </div>
      )
    },

    // 6. GOYAL & CO.
    {
      id: 'goyal-co',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <svg className="w-7 h-7 text-[#0a3d62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 2 15 12 12 22 9 12" fill="currentColor" opacity="0.2" />
            <polygon points="2 12 12 15 22 12 12 9" fill="currentColor" opacity="0.2" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-serif font-black tracking-[0.15em] text-neutral-900 leading-none">
              GOYAL & CO.
            </span>
            <span className="text-[8px] font-sans font-semibold tracking-[0.25em] text-neutral-500 uppercase mt-0.5">
              ESTD. 1971
            </span>
          </div>
        </div>
      )
    },

    // 7. HIRANANDANI
    {
      id: 'hiranandani',
      render: () => (
        <div className="flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#C9A96E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3.5L6 20l1.5-6.5L3 9l6-1 3-6z" />
            </svg>
            <span className="text-base font-serif font-bold tracking-[0.18em] text-neutral-900 leading-none">
              HIRANANDANI
            </span>
          </div>
          <span className="text-[8px] font-serif italic text-neutral-500 mt-0.5">
            creating communities
          </span>
        </div>
      )
    },

    // 8. KALPATARU
    {
      id: 'kalpataru',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          {/* Kalpataru tree crest mark */}
          <svg className="w-7 h-7 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 22V10" />
            <path d="M12 10c0-4 6-6 6-6s0 4-6 6z" fill="#2E7D32" fillOpacity="0.25" />
            <path d="M12 10c0-4-6-6-6-6s0 4 6 6z" fill="#2E7D32" fillOpacity="0.25" />
            <path d="M12 15c0-3 5-4.5 5-4.5s0 3-5 4.5z" fill="#2E7D32" fillOpacity="0.25" />
            <path d="M12 15c0-3-5-4.5-5-4.5s0 3 5 4.5z" fill="#2E7D32" fillOpacity="0.25" />
          </svg>
          <span className="text-sm font-sans font-extrabold tracking-[0.2em] text-neutral-900 uppercase">
            KALPATARU
          </span>
        </div>
      )
    },

    // 9. PANCHSHIL
    {
      id: 'panchshil',
      render: () => (
        <div className="flex items-center gap-2 px-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E50914]"></div>
          <span className="text-lg font-sans font-black tracking-tight text-neutral-900 lowercase">
            panchshil
          </span>
        </div>
      )
    },

    // 10. SHILP GROUP
    {
      id: 'shilp',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <div className="w-7 h-7 bg-[#7a0c07] text-white flex items-center justify-center font-sans font-black text-sm rounded-sm">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-base font-sans font-black tracking-[0.15em] text-neutral-900 leading-none">
              SHILP
            </span>
            <span className="text-[8px] font-sans font-semibold tracking-[0.25em] text-neutral-400 uppercase">
              GROUP
            </span>
          </div>
        </div>
      )
    },

    // 11. SUN BUILDERS GROUP
    {
      id: 'sun-builders',
      render: () => (
        <div className="flex items-center gap-2 px-4">
          <svg className="w-7 h-7 text-[#F57C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" fill="#F57C00" fillOpacity="0.3" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-sans font-black tracking-[0.15em] text-neutral-900 leading-none">
              SUN BUILDERS
            </span>
            <span className="text-[7.5px] font-sans font-bold tracking-[0.2em] text-neutral-400 uppercase mt-0.5">
              GROUP AHMEDABAD
            </span>
          </div>
        </div>
      )
    },

    // 12. B SAFAL
    {
      id: 'b-safal',
      render: () => (
        <div className="flex items-center gap-2 px-4">
          <svg className="w-6 h-6 text-[#7a0c07]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 20h20L12 2zm0 5.5l5.5 10.5h-11L12 7.5z" />
          </svg>
          <span className="text-base font-sans font-black tracking-[0.15em] text-neutral-900 uppercase">
            B-SAFAL
          </span>
        </div>
      )
    },

    // 13. SHIVALIK GROUP (Gujarat)
    {
      id: 'shivalik',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          {/* Shivalik signature green/teal triangular geometry logo */}
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
            <polygon points="20,4 36,34 4,34" fill="#0D5C75" />
            <polygon points="20,12 30,32 10,32" fill="#148A9D" />
            <polygon points="20,20 25,30 15,30" fill="#48B49F" />
          </svg>
          <div className="flex flex-col">
            <span className="text-base font-sans font-black tracking-[0.18em] text-neutral-900 leading-none">
              SHIVALIK
            </span>
            <span className="text-[7.5px] font-sans font-bold tracking-[0.2em] text-[#0D5C75] uppercase mt-0.5">
              SPACE • LEGACY • TRUST
            </span>
          </div>
        </div>
      )
    },

    // 14. ISCON GROUP (Gujarat)
    {
      id: 'iscon',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <div className="w-8 h-8 rounded-full bg-[#004B87] flex items-center justify-center text-white font-sans font-black text-xs shadow-sm">
            I
          </div>
          <div className="flex flex-col">
            <span className="text-base font-sans font-black tracking-[0.2em] text-neutral-900 leading-none">
              ISCON
            </span>
            <span className="text-[7.5px] font-sans font-bold tracking-[0.18em] text-neutral-400 uppercase mt-0.5">
              GROUP GUJARAT
            </span>
          </div>
        </div>
      )
    },

    // 15. SAVVY GROUP (GIFT City & Ahmedabad)
    {
      id: 'savvy',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <div className="w-7 h-7 border-2 border-[#1E88E5] rounded flex items-center justify-center text-[#1E88E5] font-serif font-black text-sm">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-sans font-black tracking-[0.2em] text-neutral-900 leading-none">
              SAVVY
            </span>
            <span className="text-[7.5px] font-sans font-semibold tracking-[0.15em] text-neutral-400 uppercase mt-0.5">
              GIFT CITY & AHMEDABAD
            </span>
          </div>
        </div>
      )
    },

    // 16. SHEETAL INFRA (Gujarat)
    {
      id: 'sheetal',
      render: () => (
        <div className="flex items-center gap-2.5 px-4">
          <svg className="w-6 h-6 text-[#7a0c07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-sans font-black tracking-[0.15em] text-neutral-900 leading-none">
              SHEETAL
            </span>
            <span className="text-[7.5px] font-sans font-semibold tracking-[0.2em] text-neutral-400 uppercase mt-0.5">
              INFRASTRUCTURE
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 overflow-hidden border-t border-b border-black/10 select-none">
      <div className="animate-marquee items-center gap-10 sm:gap-16">
        {[...developerLogos, ...developerLogos].map((dev, idx) => (
          <div
            key={idx}
            className="flex items-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0 cursor-pointer"
          >
            {dev.render()}
          </div>
        ))}
      </div>
    </div>
  );
}
