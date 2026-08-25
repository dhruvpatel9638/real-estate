import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const titleRef = useRef(null);
  const redScreenRef = useRef(null);
  const symbolRef = useRef(null);
  const circleRef = useRef(null);
  const bottomBarRef = useRef(null);

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const revealTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven animation timeline tied to container height (300vh for multi-stage scroll)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: stickyRef.current,
          invalidateOnRefresh: true,
        }
      });

      // 1. Initial hero title & elements are 100% visible at scroll 0, fade out smoothly on scroll (0 to 0.2)
      scrollTl.fromTo(titleRef.current,
        { opacity: 1, y: 0, scale: 1 },
        { opacity: 0, y: -40, scale: 0.95, duration: 0.2, ease: 'power1.out' },
        0
      );

      scrollTl.fromTo([symbolRef.current, circleRef.current, bottomBarRef.current],
        { opacity: 0.4, scale: 1 },
        { opacity: 0, scale: 0.8, duration: 0.2, ease: 'power1.out' },
        0
      );

      // 2. Red curtain expands from center to full screen (0.05 to 0.3)
      scrollTl.fromTo(redScreenRef.current,
        { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', opacity: 1 },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, duration: 0.25, ease: 'power2.inOut' },
        0.05
      );

      // 3. Multi-Image Scroll Sequence (0.25 to 0.65):
      // Image 1 fades in with zoom-out
      scrollTl.fromTo(img1Ref.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 0.15, ease: 'power2.out' },
        0.2
      );

      // Image 2 slides in from right over Image 1 (0.35 to 0.5)
      scrollTl.fromTo(img2Ref.current,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: '0%', duration: 0.2, ease: 'power2.inOut' },
        0.35
      );

      // Image 3 slides in from bottom over Image 2 (0.5 to 0.65)
      scrollTl.fromTo(img3Ref.current,
        { opacity: 0, y: '100%' },
        { opacity: 1, y: '0%', duration: 0.2, ease: 'power2.inOut' },
        0.5
      );

      // 4. All images fade out COMPLETELY to opacity 0 (0.65 to 0.72)
      scrollTl.to([img1Ref.current, img2Ref.current, img3Ref.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.12,
        ease: 'power2.in'
      }, 0.62);

      // 5. THEN Black Text reveals by opening VERTICALLY from center (slower, smoother vertical expansion)
      scrollTl.fromTo(revealTextRef.current,
        { opacity: 0, scaleY: 0.2, clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)' },
        { opacity: 1, scaleY: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.38, ease: 'power1.out' },
        0.68
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '300vh' }}>
      <section
        ref={stickyRef}
        id="introduction"
        className="w-full h-screen flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden bg-black relative sticky top-0"
      >
        {/* Background Luxury Villa Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
            alt="Prime estate luxury background"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Decorative Central Symbols */}
        <div ref={circleRef} className="absolute top-[calc(50%-2rem)] left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
        </div>
        <div ref={symbolRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="w-14 h-6 border border-white/60 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          </div>
        </div>

        {/* Hero Title */}
        <div ref={titleRef} className="mt-20 sm:mt-28 md:mt-36 max-w-7xl mx-auto text-center z-20 px-2">
          <h1 className="d1 text-white leading-none tracking-tight uppercase">
            Prime Real Estate <br />
            <span className="font-serif italic font-normal text-neutral-300" style={{ fontSize: '0.75em', textTransform: 'lowercase' }}>where</span>{' '}
            prestige <br />
            finds its address
          </h1>
        </div>

        {/* Bottom Metadata Bar */}
        <div ref={bottomBarRef} className="w-full flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-8 border-t border-white/10 z-20 text-neutral-400 l2 text-center sm:text-left gap-1.5 sm:gap-0 text-[9px] sm:text-xs">
          <div>VAISHNODEVI CIRCLE, AHMEDABAD</div>
          <div className="font-serif italic text-white text-xs sm:text-base">
            Serving 10 Lakh+ Satisfied Clients Across Gujarat
          </div>
          <div className="hidden sm:block">ESTABLISHED 2010</div>
        </div>

        {/* Red Curtain Screen Container */}
        <div
          ref={redScreenRef}
          className="absolute inset-0 bg-[#7a0c07] z-30 pointer-events-none flex items-center justify-center shadow-2xl overflow-hidden"
          style={{ clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' }}
        >
          {/* Scroll Image Sequence Frames */}
          <div className="absolute inset-0 z-0 flex items-center justify-center p-3 sm:p-8 md:p-12">
            {/* Image 1: Luxury Villa Gujarat */}
            <div ref={img1Ref} className="absolute w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-none overflow-hidden shadow-2xl border border-black/30" style={{ opacity: 0 }}>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" alt="Vaishnodevi Circle Villa" className="w-full h-full object-cover" />
            </div>

            {/* Image 2: Penthouse Ahmedabad */}
            <div ref={img2Ref} className="absolute w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-none overflow-hidden shadow-2xl border border-black/30" style={{ opacity: 0 }}>
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80" alt="Sky Penthouse" className="w-full h-full object-cover" />
            </div>

            {/* Image 3: Commercial Hub Gujarat */}
            <div ref={img3Ref} className="absolute w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-none overflow-hidden shadow-2xl border border-black/30" style={{ opacity: 0 }}>
              <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80" alt="Commercial Estate" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Reveal Black Text (Appears AFTER image sequence finishes on scroll) */}
          <div ref={revealTextRef} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl" style={{ opacity: 0, color: '#000000', transformOrigin: 'center center' }}>
            <span className="l1 text-[10px] sm:text-xs uppercase tracking-widest block mb-2 sm:mb-4" style={{ color: '#000000' }}>Gujarat Premier Real Estate Network</span>
            <h2 className="d1 uppercase tracking-tighter text-3xl sm:text-5xl md:text-7xl leading-none" style={{ color: '#000000' }}>
              Redefining <br />
              <span className="font-serif italic font-normal lowercase" style={{ color: '#000000' }}>luxury</span> living
            </h2>
            <p className="l1 text-[11px] sm:text-xs max-w-md mx-auto mt-3 sm:mt-6 leading-relaxed" style={{ color: '#000000' }}>
              Empowering families and investors across Gujarat with premium high-yield real estate assets.
            </p>
          </div>
        </div>

        {/* Red gradient glow at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#7a0c07]/30 to-transparent pointer-events-none z-10"></div>
      </section>
    </div>
  );
}
