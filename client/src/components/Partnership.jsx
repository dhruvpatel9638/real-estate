import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Partnership() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const cardsRef = useRef([]);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline slide up
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      // Description
      gsap.fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: descRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );

      // Cards stagger from right with subtle 3D
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, x: 80, rotateY: 5 },
          { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: 'expo.out', delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="partnership" className="w-full bg-[#f1f1f1] text-black py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col gap-4 sm:gap-6">
          <span className="l1-t font-serif text-[#7a0c07] text-base sm:text-lg">
            Ahmedabad & Maharashtra Real Estate Network
          </span>
          <div ref={headlineRef} style={{ opacity: 0 }}>
            <h2 className="h1-t text-3xl sm:text-5xl md:text-6xl text-black leading-tight">
              0 title disputes across our Gujarat & Maharashtra portfolio
            </h2>
          </div>
          <p ref={descRef} className="l1 text-xs text-neutral-700 leading-relaxed max-w-lg" style={{ opacity: 0 }}>
            Our integrated developer network bridges Ahmedabad's high-growth corridors (Vaishnodevi Circle, S.G. Highway, GIFT City) with Maharashtra's premier luxury real estate hubs (Mumbai, Pune). Partnering directly with top-tier builders ensures 100% verified clear-title estates and high-yield commercial assets.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6" style={{ perspective: '800px' }}>
          {[
            { 
              title: 'RERA Assured', 
              desc: 'Every project across Ahmedabad and Maharashtra is 100% RERA-certified and legally vetted by top property counsels, ensuring zero transaction risk.', 
              border: '#7a0c07' 
            },
            { 
              title: '45%', 
              desc: "of our luxury acquisitions in Ahmedabad & GIFT City are driven by HNI and NRI investors from Mumbai, Pune, and Maharashtra.", 
              border: '#000' 
            },
            { 
              title: 'Twin-State Alliance', 
              desc: 'Direct developer partnerships with Adani Realty, Godrej Properties, Lodha, Goyal & Co., and Hiranandani across Ahmedabad, GIFT City, Mumbai, and Pune.', 
              border: '#7a0c07' 
            }
          ].map((card, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="p-6 sm:p-8 bg-white rounded-xl shadow-md flex flex-col gap-2 border-l-4 hover:shadow-xl transition-shadow duration-300"
              style={{ borderColor: card.border, opacity: 0 }}
            >
              <span className={`${i === 1 ? 'd1 text-4xl sm:text-5xl' : 'h1 text-xl sm:text-3xl'} font-extrabold text-black`}>
                {card.title}
              </span>
              <p className="l1 text-xs text-neutral-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
