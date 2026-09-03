import React from 'react';

export default function PartnerTicker() {
  const developerLogos = [
    // 1. LODHA — Official logo
    {
      id: 'lodha',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://www.lodhagroup.com/assets/images/lodha-logo.svg"
            alt="Lodha"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex flex-col items-center justify-center">
            <span className="text-2xl font-serif font-black tracking-[0.2em] text-neutral-900 leading-none">LODHA</span>
            <span className="text-[8px] font-sans tracking-[0.25em] text-neutral-500 uppercase mt-1 font-semibold">BUILDING A BETTER LIFE</span>
          </div>
        </div>
      )
    },

    // 2. ADANI REALTY
    {
      id: 'adani-realty',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="/adani_realty.svg"
            alt="Adani Realty"
            className="h-8 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2.5">
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
              <path d="M8 28C14 16 26 14 32 8" stroke="#0091D5" strokeWidth="4" strokeLinecap="round" />
              <path d="M12 32C18 20 28 18 34 12" stroke="#5C2D91" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M16 36C22 24 30 22 36 16" stroke="#ED1B2F" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-neutral-900 font-sans leading-none lowercase">adani</span>
              <span className="text-[10px] font-semibold tracking-wider text-[#0091D5] uppercase font-sans">Realty</span>
            </div>
          </div>
        </div>
      )
    },

    // 3. GODREJ PROPERTIES
    {
      id: 'godrej-properties',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="/godrej_properties_logo.svg"
            alt="Godrej Properties"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2">
            <span className="text-2xl font-serif italic font-bold tracking-tight text-[#E31B23] leading-none">Godrej</span>
            <div className="h-5 w-[1.5px] bg-neutral-300 mx-0.5"></div>
            <span className="text-xs font-sans font-extrabold tracking-[0.2em] text-neutral-800 uppercase">PROPERTIES</span>
          </div>
        </div>
      )
    },

    // 4. OBEROI REALTY
    {
      id: 'oberoi-realty',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://m.economictimes.com/thumb/msid-104644180,width-1600,height-900,resizemode-4,imgsize-16736/oberoi-realty-price-return-in-fy24-so-far-38.jpg"
            alt="Oberoi Realty"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#8B1E2D] rounded flex items-center justify-center text-white font-serif font-black text-sm tracking-tighter shadow-sm">OR</div>
            <div className="flex flex-col">
              <span className="text-sm font-sans font-black tracking-[0.15em] text-neutral-900 leading-none">OBEROI</span>
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#8B1E2D] leading-none mt-1">REALTY</span>
            </div>
          </div>
        </div>
      )
    },

    // 5. HN SAFAL — Official logo from hnsafal.com
    {
      id: 'hn-safal',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://www.hnsafal.com/wp-content/uploads/2025/04/HN-SAFAL-LOGO-HD-1.webp"
            alt="HN Safal"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2">
            <span className="text-lg font-sans font-black tracking-[0.18em] text-neutral-900">HN SAFAL</span>
          </div>
        </div>
      )
    },

    // 6. GOYAL & CO. — Official logo
    {
      id: 'goyal-co',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="/goyal-logo.png"
            alt="Goyal & Co."
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex flex-col items-start justify-center">
            <span className="text-sm font-serif font-black tracking-[0.15em] text-neutral-900 leading-none">GOYAL & CO.</span>
            <span className="text-[8px] font-sans font-semibold tracking-[0.25em] text-neutral-500 uppercase mt-0.5">ESTD. 1971</span>
          </div>
        </div>
      )
    },

    // 7. HIRANANDANI — Official logo
    {
      id: 'hiranandani',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="/hiranandani-logo.png"
            alt="Hiranandani"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex flex-col items-center justify-center">
            <span className="text-base font-serif font-bold tracking-[0.18em] text-neutral-900 leading-none">HIRANANDANI</span>
            <span className="text-[8px] font-serif italic text-neutral-500 mt-0.5">creating communities</span>
          </div>
        </div>
      )
    },

    // 8. KALPATARU — Official logo
    {
      id: 'kalpataru',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://www.ssll.in/downloads/96206110Logo-Kalpataru-1-1-1.png"
            alt="Kalpataru"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2">
            <span className="text-sm font-sans font-extrabold tracking-[0.2em] text-neutral-900 uppercase">KALPATARU</span>
          </div>
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

    // 10. SHILP GROUP — Official logo
    {
      id: 'shilp',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG9-yAR7mO12KvtbT_p3wIOHNQgz-_m13KaKrkS0LHQ&s=10"
            alt="Shilp Group"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-[#7a0c07] text-white flex items-center justify-center font-sans font-black text-sm rounded-sm">S</div>
            <span className="text-base font-sans font-black tracking-[0.15em] text-neutral-900">SHILP</span>
          </div>
        </div>
      )
    },

    // 11. SUN BUILDERS GROUP — Official logo from sunbuilders.in
    {
      id: 'sun-builders',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://sunbuilders.in/images/sun-builders-logo.png"
            alt="Sun Builders Group"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2">
            <span className="text-xs font-sans font-black tracking-[0.15em] text-neutral-900 uppercase">SUN BUILDERS</span>
          </div>
        </div>
      )
    },

    // 12. B SAFAL — Official logo from bsafal.com
    {
      id: 'b-safal',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://bsafal.com/wp-content/uploads/2023/10/Bsafal_Logo_70px-2-1.png"
            alt="B-Safal"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex items-center gap-2">
            <span className="text-base font-sans font-black tracking-[0.15em] text-neutral-900 uppercase">B-SAFAL</span>
          </div>
        </div>
      )
    },

    // 13. SHIVALIK GROUP (Gujarat) — Official logo from shivalikgroup.com
    {
      id: 'shivalik',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://shivalikgroup.com/main-logo.svg"
            alt="Shivalik Group"
            className="h-10 w-auto object-contain"
            style={{ filter: 'none' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image fails to load */}
          <div style={{ display: 'none' }} className="flex flex-col items-start justify-center border-l-[3px] border-[#0D7A8A] pl-3">
            <span className="text-xl font-sans font-black tracking-[0.12em] leading-none" style={{ color: '#0D5C75' }}>
              Shivalik
            </span>
            <span className="text-[7.5px] font-sans font-semibold tracking-[0.22em] text-neutral-500 uppercase mt-1">
              SPACE • LEGACY • TRUST
            </span>
          </div>
        </div>
      )
    },

    // 14. ISCON GROUP (Gujarat) — Official logo from iscongroup.com
    {
      id: 'iscon',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://iscongroup.com/assets/img/logo-black.png"
            alt="Iscon Group"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex flex-col items-start justify-center">
            <span className="text-xl font-sans font-black tracking-[0.25em] leading-none" style={{ color: '#003F87' }}>ISCON</span>
            <span className="text-[7px] font-sans font-bold tracking-[0.2em] text-neutral-500 uppercase mt-0.5">GROUP • GUJARAT</span>
          </div>
        </div>
      )
    },

    // 15. SAVVY GROUP — Official logo from savvygroup.in
    {
      id: 'savvy',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://savvygroup.in/media/images/logo.webp"
            alt="Savvy Group"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div style={{ display: 'none' }} className="flex flex-col items-start justify-center">
            <span className="font-sans font-black tracking-[-0.02em] leading-none text-2xl" style={{ color: '#1B3A5C' }}>savvy</span>
            <span className="text-[7px] font-sans font-semibold tracking-[0.25em] text-neutral-400 uppercase mt-0.5">REALTY GROUP</span>
          </div>
        </div>
      )
    },

    // 16. SHEETAL INFRA — Official logo
    {
      id: 'sheetal',
      render: () => (
        <div className="flex items-center justify-center px-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCSBpaOrf6bQwSDcTOuMaO4_6LrGjqTRCWUDKFXjAvA&s=10"
            alt="Sheetal Infrastructure"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback — merged styles to prevent double style prop bug */}
          <div style={{ display: 'none', borderBottomWidth: '3px', borderBottomStyle: 'solid', borderColor: '#E87722' }} className="flex flex-col items-start justify-center pb-0.5">
            <span className="text-lg font-sans font-black tracking-[0.2em] leading-none text-neutral-900">SHEETAL</span>
            <span className="text-[7px] font-sans font-bold tracking-[0.22em] uppercase mt-0.5" style={{ color: '#E87722' }}>INFRASTRUCTURE</span>
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
