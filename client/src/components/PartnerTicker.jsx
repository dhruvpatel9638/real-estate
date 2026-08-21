import React from 'react';

export default function PartnerTicker() {
  const logos = [
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_7_8743bd04e9.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_367603cf16.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_6_4243e0a1cf.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_1_dc5a2c0ec4.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_2_70a209375a.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_3_14740dcb56.svg',
    'https://cdn.fame-estate.com/ellington_properties_logo_white_en_4_1798d2c5c6.svg'
  ];

  return (
    <div className="w-full bg-white py-12 overflow-hidden border-t border-b border-black/10">
      <div className="animate-marquee items-center gap-16">
        {[...logos, ...logos, ...logos].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Partner logo ${idx + 1}`}
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
