import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const columnsRef = useRef([]);
  const quoteRef = useRef(null);
  const bgRef = useRef(null);
  const [counts, setCounts] = useState({ n1: 0, n2: 0, n3: 0 });

  const stats = [
    { num: 10, suffix: ' Lakh+', text: 'Satisfied clients and families across Gujarat & Maharashtra', color: '#7a0c07' },
    { num: 2, suffix: 'K Cr+', text: 'Cumulative property value transacted in premier real estate corridors', color: '#ffffff' },
    { num: 15, suffix: ' Yrs+', text: 'Legacy of excellence in Indian residential & commercial developments', color: '#7a0c07' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Background image parallax
      if (bgRef.current) {
        gsap.fromTo(bgRef.current,
          { y: '-5%' },
          { y: '5%', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } }
        );
      }

      // Animate number counters on scroll
      const counterTrigger = {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      };

      stats.forEach((stat, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.num,
          duration: 2,
          ease: 'power2.out',
          delay: i * 0.2,
          scrollTrigger: counterTrigger,
          onUpdate: () => {
            setCounts(prev => ({ ...prev, [`n${i}`]: Math.round(obj.val) }));
          }
        });
      });

      // Columns slide up staggered
      columnsRef.current.forEach((col, i) => {
        if (!col) return;
        gsap.fromTo(col,
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: i * 0.2,
            scrollTrigger: { trigger: col, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });

      // Quote reveal
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: quoteRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      }

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-32 px-6 sm:px-16 border-t border-neutral-900 relative overflow-hidden">
      {/* Background with parallax zoom */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Prime estate abstract"
          className="w-full h-[110%] object-cover object-center grayscale will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">

        {/* 3 Column Animated Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => columnsRef.current[i] = el}
              className="flex flex-col gap-4 border-l-2 pl-8"
              style={{ borderColor: stat.color, opacity: 0 }}
            >
              <span className="font-extrabold tracking-tighter" style={{ color: stat.color, fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', lineHeight: 0.9, fontFamily: 'var(--font-sans)' }}>
                {counts[`n${i}`]}{stat.suffix}
              </span>
              <p className="l1 text-xs text-neutral-400 leading-relaxed max-w-xs">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Center Philosophy Statement */}
        <div ref={quoteRef} className="max-w-3xl mx-auto text-center pt-16 border-t border-neutral-800" style={{ opacity: 0 }}>
          <p className="text-base text-neutral-300 font-serif leading-relaxed italic">
            "Prime Estate Network was built on a singular vision: to empower families and investors across Gujarat and Maharashtra with transparent, high-yield real estate opportunities. Over 10 Lakh+ clients trust us for our unyielding commitment to luxury and integrity."
          </p>
        </div>

      </div>
    </section>
  );
}
