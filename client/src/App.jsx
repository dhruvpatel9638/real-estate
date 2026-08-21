import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import AmyaPreloader from './components/AmyaPreloader';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import CasesGrid from './components/CasesGrid';
import ServicesSlider from './components/ServicesSlider';
import WhyChoose from './components/WhyChoose';
import PartnerTicker from './components/PartnerTicker';
import Partnership from './components/Partnership';
import TeamSlider from './components/TeamSlider';
import ContactSection from './components/ContactSection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [amyaDone, setAmyaDone] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      // Recalculate all ScrollTrigger positions after preloader finishes
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#7a0c07] selection:text-white">
      {!amyaDone && <AmyaPreloader onComplete={() => setAmyaDone(true)} />}
      {amyaDone && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <CasesGrid />
        <ServicesSlider />
        <WhyChoose />
        <PartnerTicker />
        <Partnership />
        <TeamSlider />
        <ContactSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
