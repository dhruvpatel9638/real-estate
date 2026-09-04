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
    { title: '1 Lakh+ Client Trust', desc: 'Trusted families and investors served across Gujarat with excellence.' },
    { title: 'RERA Approved Deals', desc: '100% legal title clearance and RERA-compliant property transactions.' },
    { title: 'Zero Buyer Commission', desc: 'Direct developer partnerships with transparent zero-commission advisory.' },
    { title: 'Exclusive Pre-Launch Access', desc: 'Invest in premier residential & commercial hubs before public market launch.' },
    { title: 'NRI Portfolio Advisory', desc: 'Complete property management, tenant leasing, and wealth advisory for NRIs.' }
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
    <section ref={sectionRef} className="w-full bg-white text-black py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-16 border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
          <span ref={headerRef} className="l1 text-xs text-neutral-500 uppercase tracking-widest" style={{ opacity: 0 }}>
            Why Prime Estate Network is Western India's #1 Choice
          </span>
          <div className="overflow-hidden py-1 sm:py-2 -my-1 sm:-my-2">
            <h2 ref={titleRef} className="d1 text-3xl sm:text-5xl md:text-7xl leading-tight" style={{ opacity: 0, transform: 'translateY(110%)' }}>
              1 Lakh+ clients, zero commissions, and complete legal transparency
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-black/10">
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
