import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingLinesRef = useRef([]);
  const imagesRef = useRef([]);
  const honorsRef = useRef([]);

  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80'
  ];

  const honors = [
    { title: '50K+', desc: 'Trusted clients & happy families served across Gujarat' },
    { title: '₹500+ Cr', desc: 'Cumulative high-yield property transactions in premier Indian corridors' },
    { title: 'TOP-1', desc: 'Leading luxury real estate network in Gujarat' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fade in
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      // Heading lines - slide up from overflow hidden
      headingLinesRef.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(line,
          { y: '110%', opacity: 0 },
          {
            y: '0%', opacity: 1, duration: 1, ease: 'expo.out', delay: i * 0.08,
            scrollTrigger: { trigger: line.closest('.max-w-5xl'), start: 'top 80%', toggleActions: 'play none none none' }
          }
        );
      });

      // Images - staggered scale up with parallax
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        // Scale from 1.2 to 1 on scroll (parallax zoom-out)
        gsap.fromTo(img.querySelector('img'),
          { scale: 1.25 },
          {
            scale: 1, duration: 1, ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 }
          }
        );
        // Fade in + slide up
        gsap.fromTo(img,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: i * 0.15,
            scrollTrigger: { trigger: img, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });

      // Honors - staggered reveal
      honorsRef.current.forEach((honor, i) => {
        if (!honor) return;
        gsap.fromTo(honor,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: honor, start: 'top 90%', toggleActions: 'play none none none' }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingLines = [
    <>India's premier real estate network serving over</>,
    <><i>50K+ clients</i> across <i>Gujarat</i>.</>,
    <>Connecting buyers and investors with premier luxury estates,</>,
    <>commercial hubs, and high-yield <i>township investments</i>.</>
  ];

  return (
    <section ref={sectionRef} id="about" className="w-full bg-white text-black py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">

        {/* Section Label */}
        <div ref={labelRef} className="l1-t text-sm font-serif text-neutral-500 uppercase tracking-widest" style={{ opacity: 0 }}>
          About
        </div>

        {/* Line-by-line heading reveal */}
        <div className="max-w-5xl flex flex-col gap-0 sm:gap-1">
          {headingLines.map((line, i) => (
            <div key={i} className="overflow-hidden py-1 sm:py-2 -my-1 sm:-my-2">
              <div
                ref={el => headingLinesRef.current[i] = el}
                className="h1-t text-2xl sm:text-4xl md:text-5xl leading-tight"
                style={{ transform: 'translateY(110%)', opacity: 0 }}
              >
                {line}
              </div>
            </div>
          ))}
        </div>

        {/* Image Grid with Parallax Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 my-2 sm:my-4">
          {images.map((src, index) => (
            <div
              key={index}
              ref={el => imagesRef.current[index] = el}
              className="overflow-hidden rounded-xl aspect-[4/5] relative group shadow-xl bg-neutral-100"
              style={{ opacity: 0 }}
            >
              <img
                src={src}
                alt={`Prime estate showcase ${index + 1}`}
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="l1 text-white text-xs">PRIME EXCLUSIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honors List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 md:pt-10 border-t border-black/10">
          {honors.map((item, idx) => (
            <div
              key={idx}
              ref={el => honorsRef.current[idx] = el}
              className="flex flex-col gap-2"
              style={{ opacity: 0 }}
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-black border-l-2 border-[#7a0c07] pl-3">
                {item.title}
              </span>
              <p className="l1 text-xs leading-relaxed text-neutral-700 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
