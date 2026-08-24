import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchCases } from '../services/api';

gsap.registerPlugin(ScrollTrigger);

export default function CasesGrid() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [cases, setCases] = useState([]);

  const defaultCases = [
    {
      caseId: '1',
      counter: '01',
      title: 'Vaishnodevi Royal Villa — Ahmedabad',
      developer: 'Prime Gujarat Network',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      caseId: '2',
      counter: '02',
      title: 'BKC Luxury Sky Penthouse — Mumbai',
      developer: 'Prime Maharashtra Network',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      caseId: '3',
      counter: '03',
      title: 'GIFT City Financial Tower — Gandhinagar',
      developer: 'Prime Gujarat Commercial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    },
    {
      caseId: '4',
      counter: '04',
      title: 'Koregaon Park Grand Estate — Pune',
      developer: 'Prime Maharashtra Living',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    fetchCases()
      .then((data) => setCases(data && data.length ? data : defaultCases))
      .catch((err) => {
        console.error('Failed to load cases:', err);
        setCases(defaultCases);
      });
  }, []);

  useEffect(() => {
    if (cases.length === 0) return;

    const ctx = gsap.context(() => {
      // Title slide in from left
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      // Cards stagger reveal
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const row = idx < 4 ? 0 : 1;
        const colDelay = (idx % 4) * 0.1;

        gsap.fromTo(card,
          { opacity: 0, y: row === 0 ? 100 : 140 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: colDelay + row * 0.3,
            scrollTrigger: { trigger: card, start: 'top 95%', toggleActions: 'play none none none' }
          }
        );

        // Inner image parallax
        const img = card.querySelector('img');
        if (img) {
          gsap.fromTo(img,
            { scale: 1.2 },
            {
              scale: 1, ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [cases]);

  return (
    <section ref={sectionRef} id="cases" className="w-full bg-black text-white py-28 px-6 sm:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-neutral-800 pb-6">
          <h2 ref={titleRef} className="h1 text-white tracking-tighter" style={{ opacity: 0 }}>
            OUR <span className="font-serif italic lowercase font-normal text-neutral-300">cases</span>
          </h2>
          <span className="l1 text-xs text-neutral-400 mt-2 sm:mt-0">
            [ PORTFOLIO HIGHLIGHTS ]
          </span>
        </div>

        {/* 4 Column Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cases.map((item, idx) => (
            <article
              key={item.caseId || idx}
              ref={el => cardsRef.current[idx] = el}
              className="group cursor-pointer flex flex-col gap-3"
              style={{ opacity: 0 }}
            >
              {/* Image Frame with zoom */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 relative shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="l2 text-white bg-black/70 px-3 py-1.5 rounded backdrop-blur border border-white/20">
                    {item.developer}
                  </span>
                </div>
              </div>

              {/* Counter & Name */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <span className="l1-t text-[#7a0c07] font-serif font-bold text-base">
                  {item.counter}
                </span>
                <span className="l1 text-white truncate text-xs group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
