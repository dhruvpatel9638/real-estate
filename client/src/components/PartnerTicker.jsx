import React from 'react';

export default function PartnerTicker() {
  const developers = [
    {
      name: 'LODHA',
      subtitle: 'BUILDING A BETTER LIFE',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
    },
    {
      name: 'ADANI REALTY',
      subtitle: 'SHANTIGRAM & LUXURY',
      symbol: (
        <svg className="w-7 h-7 text-[#7a0c07]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="12,8 18,18 6,18" fill="currentColor" opacity="0.4" />
        </svg>
      )
    },
    {
      name: 'GODREJ PROPERTIES',
      subtitle: 'SINCE 1897',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      )
    },
    {
      name: 'OBEROI REALTY',
      subtitle: 'ENVISIONING LUXURY',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      name: 'HN SAFAL',
      subtitle: 'GUJARAT LANDMARKS',
      symbol: (
        <svg className="w-7 h-7 text-[#7a0c07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h2M13 10h2M9 14h2M13 14h2" />
        </svg>
      )
    },
    {
      name: 'GOYAL & CO.',
      subtitle: 'ESTD. 1971 AHMEDABAD',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7l4 10-8-5h8l-8 5z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      name: 'HIRANANDANI',
      subtitle: 'COMMUNITIES ELEVATED',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20h16M6 20V8l6-4 6 4v12M10 12h4v8h-4z" />
        </svg>
      )
    },
    {
      name: 'PANCHSHIL',
      subtitle: 'PUNE LUXURY REALTY',
      symbol: (
        <svg className="w-7 h-7 text-[#7a0c07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      )
    },
    {
      name: 'SUN BUILDERS',
      subtitle: 'AHMEDABAD ARCHITECTURE',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      )
    },
    {
      name: 'SHILP GROUP',
      subtitle: 'PRIME GUJARAT LIVING',
      symbol: (
        <svg className="w-7 h-7 text-[#7a0c07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
        </svg>
      )
    },
    {
      name: 'KALPATARU',
      subtitle: 'MUMBAI & PUNE SPACES',
      symbol: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18M6 8l6-5 6 5M6 14l6-4 6 4M6 20l6-3 6 3" />
        </svg>
      )
    },
    {
      name: 'B SAFAL',
      subtitle: 'ICONIC GUJARAT ESTATES',
      symbol: (
        <svg className="w-7 h-7 text-[#7a0c07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M4 18h16M6 15h12M8 12h8M10 9h4M12 6v-3" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white py-10 sm:py-14 overflow-hidden border-t border-b border-black/10 select-none">
      <div className="animate-marquee items-center gap-12 sm:gap-20">
        {[...developers, ...developers].map((dev, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 opacity-75 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0 px-2 cursor-pointer group"
          >
            <div className="p-2 rounded-lg bg-neutral-50 group-hover:bg-neutral-100 transition-colors border border-black/5">
              {dev.symbol}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm sm:text-base text-black font-sans group-hover:text-[#7a0c07] transition-colors leading-tight">
                {dev.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-neutral-500 font-sans font-semibold uppercase">
                {dev.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
