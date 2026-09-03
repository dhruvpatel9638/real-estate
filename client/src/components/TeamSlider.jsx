import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchTeam } from '../services/api';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSlider() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const bioRef = useRef(null);
  const labelRef = useRef(null);
  const [team, setTeam] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const defaultTeam = [
    {
      name: "Rajesh Patel",
      role: "Managing Director & Founder",
      bio: "Pioneering luxury real estate developments in Vaishnodevi Circle, Ahmedabad. Over 18 years of expertise in high-end residential estates.",
      image: "/instagram-default-avatar.svg"
    },
    {
      name: "Ananya Sharma",
      role: "Head of Luxury Acquisitions",
      bio: "Specializing in ultra-luxury villas and penthouses across Vaishnodevi Circle and S.G. Highway, advising HNI clients globally.",
      image: "/instagram-default-avatar.svg"
    },
    {
      name: "Vikram Mehta",
      role: "Chief Investment Officer",
      bio: "Structuring high-yield commercial and residential portfolio investments in Ahmedabad's prime growth corridors.",
      image: "/instagram-default-avatar.svg"
    }
  ];

  useEffect(() => {
    fetchTeam()
      .then((data) => {
        if (data && data.length) {
          // ensure each member uses the instagram illustration avatar
          const formatted = data.map((m) => ({
            ...m,
            image: "/instagram-default-avatar.svg"
          }));
          setTeam(formatted);
        } else {
          setTeam(defaultTeam);
        }
      })
      .catch((err) => {
        console.error('Failed to load team:', err);
        setTeam(defaultTeam);
      });
  }, []);

  useEffect(() => {
    if (!team.length) return;

    const ctx = gsap.context(() => {
      // Label reveal
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );

      // Photo scale reveal
      gsap.fromTo(photoRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: photoRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      // Bio slide in from right
      gsap.fromTo(bioRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: 'expo.out', delay: 0.2,
          scrollTrigger: { trigger: bioRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [team]);

  // Slide transition animation
  useEffect(() => {
    if (!photoRef.current || !bioRef.current || !team.length) return;
    const img = photoRef.current.querySelector('img');
    if (img) {
      gsap.fromTo(img,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out' }
      );
    }
    gsap.fromTo(bioRef.current.querySelectorAll('.bio-anim'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08 }
    );
  }, [currentIdx, team]);

  if (!team.length) return null;
  const member = team[currentIdx];

  return (
    <section ref={sectionRef} id="team" className="w-full bg-black text-white py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <div ref={labelRef} className="flex justify-between items-center border-b border-neutral-800 pb-4" style={{ opacity: 0 }}>
          <span className="l1-t font-serif text-[#7a0c07] text-base sm:text-lg">Leadership & Vision</span>
          <span className="l1 text-xs text-neutral-400">0{currentIdx + 1} / 0{team.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center my-2 sm:my-4">
          <div ref={photoRef} className="md:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-neutral-900 order-1 md:order-1" style={{ opacity: 0 }}>
            <img key={currentIdx} src={member.image} alt={member.name} className="w-full h-full object-cover will-change-transform" />
          </div>

          <div ref={bioRef} className="md:col-span-7 flex flex-col gap-4 sm:gap-6 order-2 md:order-2" style={{ opacity: 0 }}>
            <h3 className="bio-anim h1 text-3xl sm:text-5xl md:text-6xl text-white">{member.name}</h3>
            <p className="bio-anim l1-t text-lg sm:text-xl text-[#7a0c07] font-serif">{member.role}</p>
            <p className="bio-anim l1 text-xs text-neutral-400 leading-relaxed max-w-xl">{member.bio}</p>

            <div className="bio-anim flex items-center gap-4 pt-2 sm:pt-6">
              <button onClick={() => setCurrentIdx((p) => (p - 1 + team.length) % team.length)}
                className="btn-circle border-white text-white hover:bg-white hover:text-black transition-all duration-300" aria-label="Previous">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCurrentIdx((p) => (p + 1) % team.length)}
                className="btn-circle border-white text-white hover:bg-white hover:text-black transition-all duration-300" aria-label="Next">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
