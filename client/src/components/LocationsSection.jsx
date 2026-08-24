import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LocationsSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const tabsRef = useRef(null);
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      city: 'Ahmedabad',
      title: 'Flagship Office at Vaishnodevi Circle',
      building: 'Prime Estate Towers, Vaishnodevi Circle, Ahmedabad',
      desc: 'Our flagship corporate office at Vaishnodevi Circle, Ahmedabad serves over 10 Lakh+ clients across Gujarat and Western India. A state-of-the-art facility for high-value residential, commercial, and penthouse deals.',
      phone: '+91 98765 43210',
      email: 'info@primeestate-network.com',
      mapUrl: 'https://maps.google.com/?q=Vaishnodevi+Circle+Ahmedabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const currentLocation = locations[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(tabsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: tabsRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      // Image parallax
      const img = imageRef.current?.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { scale: 1.15 },
          { scale: 1, ease: 'none',
            scrollTrigger: { trigger: imageRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-28 px-6 sm:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Location Header */}
        <div ref={tabsRef} className="flex items-center justify-between border-b border-neutral-800 pb-4" style={{ opacity: 0 }}>
          <span className="l1-t font-serif text-lg text-white">Flagship Office</span>
          <span className="l1 text-xs text-neutral-400">AHMEDABAD, GUJARAT</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div ref={contentRef} className="md:col-span-7 flex flex-col gap-6" style={{ opacity: 0 }}>
            <span className="loc-anim l1-t font-serif text-[#7a0c07] text-xl">{currentLocation.building}</span>
            <h3 className="loc-anim h1 text-4xl sm:text-5xl text-white uppercase">{currentLocation.title}</h3>
            <p className="loc-anim l1 text-xs text-neutral-400 leading-relaxed max-w-xl">{currentLocation.desc}</p>

            <div className="loc-anim flex flex-wrap gap-6 pt-4 text-xs l1">
              <a href={`tel:${currentLocation.phone}`} className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4 text-red-500" /><span>{currentLocation.phone}</span>
              </a>
              <a href={`mailto:${currentLocation.email}`} className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4 text-red-500" /><span>{currentLocation.email}</span>
              </a>
            </div>

            <div className="loc-anim pt-4">
              <a href={currentLocation.mapUrl} target="_blank" rel="noopener noreferrer"
                className="btn-pill border-white text-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /><span>Show on map</span>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-neutral-900" style={{ opacity: 0 }}>
            <img key={activeLocation} src={currentLocation.image} alt={currentLocation.city} className="w-full h-full object-cover will-change-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
