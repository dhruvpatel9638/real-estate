import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { fetchServices } from '../services/api';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSlider() {
  const sectionRef = useRef(null);
  const titleWrapRef = useRef(null);
  const imageWrapRef = useRef(null);
  const controlsRef = useRef(null);
  const labelRef = useRef(null);
  const [services, setServices] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const defaultServices = [
    {
      titleHtml: 'Gujarat Premier <i>Estate</i> <i>Advisory</i>',
      titlePlain: 'Gujarat Premier Estate Advisory',
      description: 'Exclusive real estate advisory covering premier residential, penthouses, and luxury villas across Ahmedabad, GIFT City, Surat & Vadodara.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    },
    {
      titleHtml: 'Commercial Hubs & <i>IT Park</i> <i>Leasing</i>',
      titlePlain: 'Commercial Hubs & IT Park Leasing',
      description: 'High-yield commercial asset acquisition, corporate office leasing, and IT park investment structuring for top enterprises.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    },
    {
      titleHtml: 'NRI Investment & <i>Wealth</i> <i>Portfolios</i>',
      titlePlain: 'NRI Investment & Wealth Portfolios',
      description: 'White-glove real estate wealth management for NRIs and High-Net-Worth Individuals investing in India’s fastest-growing corridors.',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data && data.length ? data : defaultServices))
      .catch((err) => {
        console.error('Failed to load services:', err);
        setServices(defaultServices);
      });
  }, []);

  useEffect(() => {
    if (!services.length) return;

    const ctx = gsap.context(() => {
      // Label reveal — fade + slide up
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      // Title slide up from overflow hidden
      gsap.fromTo(titleWrapRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: titleWrapRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Image reveal — scale + fade
      gsap.fromTo(imageWrapRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: imageWrapRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Controls reveal
      gsap.fromTo(controlsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: controlsRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      );

      // Image parallax inside frame
      const img = imageWrapRef.current?.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { y: '-8%' },
          { y: '8%', ease: 'none',
            scrollTrigger: { trigger: imageWrapRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  // Animate slide transition
  useEffect(() => {
    if (!titleWrapRef.current || !imageWrapRef.current) return;

    gsap.fromTo(titleWrapRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );

    const img = imageWrapRef.current?.querySelector('img');
    if (img) {
      gsap.fromTo(img,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'expo.out' }
      );
    }
  }, [currentIdx]);

  if (!services.length) return null;

  const activeService = services[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % services.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section ref={sectionRef} id="services" className="w-full bg-white text-black py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">

        {/* Header Label */}
        <div ref={labelRef} className="flex items-center justify-between border-b border-black/10 pb-4" style={{ opacity: 0 }}>
          <span className="l1-t font-serif text-lg">Our Services</span>
          <span className="l1 text-xs text-neutral-500">
            0{currentIdx + 1} / 0{services.length}
          </span>
        </div>

        {/* Split Slide Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center my-4 sm:my-6">

          {/* Left Text & Controls */}
          <div className="md:col-span-7 flex flex-col gap-6 sm:gap-8 order-2 md:order-1">
            <div ref={titleWrapRef} className="flex flex-col gap-4 sm:gap-6">
              <h3
                className="h1 text-3xl sm:text-5xl md:text-6xl text-black leading-none"
                dangerouslySetInnerHTML={{ __html: activeService.titleHtml }}
              />
              <p className="l1 text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xl">
                {activeService.description}
              </p>
            </div>

            {/* Controls */}
            <div ref={controlsRef} className="flex items-center gap-4 pt-2 sm:pt-6" style={{ opacity: 0 }}>
              <button onClick={handlePrev} className="btn-circle border-black hover:bg-black hover:text-white transition-all duration-300" aria-label="Previous">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={handleNext} className="btn-circle border-black hover:bg-black hover:text-white transition-all duration-300" aria-label="Next">
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#contact" className="ml-2 sm:ml-4 btn-pill border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-xs">
                <span>let's discuss</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Image Frame */}
          <div ref={imageWrapRef} className="md:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-neutral-100 order-1 md:order-2" style={{ opacity: 0 }}>
            <img
              key={currentIdx}
              src={activeService.image}
              alt={activeService.titlePlain}
              className="w-full h-full object-cover will-change-transform"
              style={{ height: '116%', position: 'absolute', top: '-8%' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
