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
      city: 'Gujarat (Ahmedabad)',
      title: 'Gujarat Network HQ at Vaishnodevi Circle',
      building: 'Prime Estate Towers, Vaishnodevi Circle, Ahmedabad',
      desc: 'Our flagship Gujarat headquarters at Vaishnodevi Circle, Ahmedabad serves over 6 Lakh+ clients across Gujarat including GIFT City, Surat, and Vadodara. A state-of-the-art facility for high-value residential & commercial deals.',
      phone: '+91 98765 43210',
      email: 'gujarat@primeestate-network.com',
      mapUrl: 'https://maps.google.com/?q=Vaishnodevi+Circle+Ahmedabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      city: 'Maharashtra (Mumbai)',
      title: 'Maharashtra Network Hub at BKC Mumbai',
      building: 'Prime Financial Tower, Bandra-Kurla Complex (BKC)',
      desc: 'Our premier Maharashtra hub at BKC Mumbai manages over 4 Lakh+ clients across Mumbai MMR, Pune, and Nagpur. Offering white-glove advisory for luxury penthouses, IT parks, and commercial towers.',
      phone: '+91 98200 12345',
      email: 'maharashtra@primeestate-network.com',
      mapUrl: 'https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const currentLocation = locations[activeLocation];

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

  // Tab switch animation
  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(contentRef.current.querySelectorAll('.loc-anim'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }
    );
    if (imageRef.current) {
      const img = imageRef.current.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'expo.out' }
        );
      }
    }
  }, [activeLocation]);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-28 px-6 sm:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Location Tabs */}
        <div ref={tabsRef} className="flex items-center gap-6 border-b border-neutral-800 pb-4" style={{ opacity: 0 }}>
          {locations.map((loc, idx) => (
            <button
              key={loc.city}
              onClick={() => setActiveLocation(idx)}
              className={`l1 text-lg pb-2 transition-all duration-300 border-b-2 ${
                activeLocation === idx
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              {loc.city}
            </button>
          ))}
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
