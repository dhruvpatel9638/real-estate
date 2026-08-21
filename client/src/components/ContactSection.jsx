import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sendContactInquiry } from '../services/api';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const redBoxRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const inputsRef = useRef([]);

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Red box clip-path reveal from center
      gsap.fromTo(redBoxRef.current,
        { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      // Heading reveal
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Form inputs stagger
      inputsRef.current.forEach((input, i) => {
        if (!input) return;
        gsap.fromTo(input,
          { opacity: 0, y: 30, scaleX: 0.8 },
          {
            opacity: 1, y: 0, scaleX: 1, duration: 0.8, ease: 'expo.out', delay: 0.1 + i * 0.12,
            scrollTrigger: { trigger: input, start: 'top 90%', toggleActions: 'play none none none' }
          }
        );
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    try {
      const res = await sendContactInquiry(formData);
      if (res.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: res.message || 'Failed to submit.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Server error. Please try again.' });
    }
  };

  return (
    <div ref={sectionRef} className="relative w-full bg-black py-8">
      <section
        ref={redBoxRef}
        id="contact"
        className="w-full bg-[#7a0c07] py-32 px-6 sm:px-16 relative overflow-hidden"
        style={{ clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', color: '#000000' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

          {/* Heading */}
          <div ref={headingRef} className="flex flex-col gap-4" style={{ opacity: 0 }}>
            <h2 className="d1 text-4xl sm:text-7xl uppercase leading-none tracking-tight" style={{ color: '#000000' }}>
              Ready to Find Your <br />
              <span className="font-serif italic font-normal lowercase" style={{ color: '#000000' }}>dream</span> heaven?
            </h2>
            <p className="l1 text-xs tracking-wider" style={{ color: 'rgba(0,0,0,0.8)' }}>
              Our manager will contact you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-8 mt-4">
            {['name', 'phone', 'message'].map((field, i) => (
              <div
                key={field}
                ref={el => inputsRef.current[i] = el}
                className="relative border-b border-black/40 focus-within:border-black py-3 transition-colors duration-300"
                style={{ opacity: 0, transformOrigin: 'left center' }}
              >
                <input
                  type={field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  required
                  placeholder={`type your ${field === 'phone' ? 'phone number' : field}...`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-transparent text-center h1 text-xl sm:text-2xl outline-none placeholder:text-black/60"
                  style={{ color: '#000000' }}
                />
              </div>
            ))}

            {status.success && (
              <div className="p-4 bg-black/15 backdrop-blur rounded-lg flex items-center justify-center gap-2 l1 text-xs border border-black/20" style={{ color: '#000000' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: '#15803d' }} />
                <span>Thank you! Your inquiry has been sent successfully.</span>
              </div>
            )}

            {status.error && (
              <div className="p-4 bg-black/50 rounded-lg flex items-center justify-center gap-2 l1 text-xs border border-red-900/40" style={{ color: '#ffffff' }}>
                <AlertCircle className="w-5 h-5" style={{ color: '#fca5a5' }} />
                <span>{status.error}</span>
              </div>
            )}

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                disabled={status.loading}
                className="btn-pill border-black hover:bg-white hover:text-black transition-colors duration-300 px-12 py-4 shadow-xl"
                style={{ backgroundColor: '#000000', color: '#ffffff' }}
              >
                {status.loading ? (
                  <span className="flex items-center gap-2" style={{ color: '#ffffff' }}>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="l1" style={{ color: '#ffffff' }}>Send</span>
                )}
              </button>
            </div>
          </form>

          <p className="l1-t text-xs max-w-md leading-relaxed mt-4" style={{ color: 'rgba(0,0,0,0.7)' }}>
            By sending your request, you're agreeing to our privacy policy. We promise to keep your personal information safe and secure.
          </p>
        </div>
      </section>
    </div>
  );
}
