import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const benefits = [
    { title: 'Zero commission', desc: 'Our services are completely free for buyers.' },
    { title: 'Personalized client service', desc: 'We guide you through every step of the investment process.' },
    { title: 'Residency assistance', desc: 'We ensure seamless residency acquisition for you and your family.' },
    { title: 'Exclusive pre-market access', desc: 'Invest in premium properties before they hit the general market.' },
    { title: 'Top-tier developers', desc: 'Partnered exclusively with reputable developers in the UAE & Thailand.' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );

      // Title line reveal
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: '110%' },
        { opacity: 1, y: '0%', duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: titleRef.current?.parentElement, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'expo.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-black py-28 px-6 sm:px-16 border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-4">
          <span ref={headerRef} className="l1 text-xs text-neutral-500 uppercase tracking-widest" style={{ opacity: 0 }}>
            What Makes FAME the Right Choice for You?
          </span>
          <div className="overflow-hidden py-2 -my-2">
            <h2 ref={titleRef} className="d1 text-4xl sm:text-7xl leading-tight" style={{ opacity: 0, transform: 'translateY(110%)' }}>
              Zero commissions, exclusive access, and full support
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-8 border-t border-black/10">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="flex flex-col gap-3 p-5 rounded-xl hover:bg-neutral-50 transition-colors duration-300 border border-transparent hover:border-black/5 hover:shadow-lg"
              style={{ opacity: 0 }}
            >
              <span className="l1-t font-serif text-lg font-bold text-black border-b border-[#7a0c07]/30 pb-3">
                {item.title}
              </span>
              <p className="l1 text-xs text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
