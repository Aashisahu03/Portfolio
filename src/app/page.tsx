'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { FadeInLine } from '~/lib/components/FadeInLine';
import './globals.css'

const HeroSection = dynamic(() => import('~/lib/components/HeroSection'), { ssr: false });
const Software = dynamic(() => import('~/lib/components/software'), { ssr: false });
const PreviousActivities = dynamic(() => import('~/lib/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('~/lib/components/Contacts'), { ssr: false });

export default function HomePage() {
  const [showGlassmorphic, setShowGlassmorphic] = useState(true);
  const [showPortSection, setShowPortSection] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null); // ✅ allow null
  const [fadeValue, setFadeValue] = useState(0.4);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const newFade = Math.min(1, 0.4 + scrollTop / maxScroll);
      setFadeValue(newFade);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setShowGlassmorphic(scrollY < window.innerHeight);
      setShowPortSection(scrollY >= window.innerHeight * 0.1);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const highlights = document.querySelectorAll<HTMLElement>('.highlight-text');

    let revealOrder = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = parseInt(el.dataset.index || "0", 10);

            // Only reveal in order
            if (index === revealOrder) {
              el.classList.add("active");
              revealOrder++;

              // Disconnect this element after revealing
              observer.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    highlights.forEach((el, i) => {
      el.dataset.index = i.toString();
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen w-full">
        <HeroSection showGlassmorphic={showGlassmorphic} contactRef={contactRef} /> {/* ✅ matches */}
      </section>

      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center transition-transform duration-1000 ease-in-out"
          style={{
            backgroundImage: "url('/port.png')",
            transform: showPortSection ? 'translateX(0)' : 'translateX(100%)',
          }}
        />
      </section>

      <section className="min-h-screen px-12 py-24 bg-[#111] text-white flex items-center justify-start">
        <div className="flex flex-col w-[750px] ml-[320px] mt-[150px] text-[30px] leading-relaxed mb-[150px]">
          <FadeInLine index={0}>Hi.</FadeInLine>

          <FadeInLine index={1}>
            I am Aashi Sahu, a <span className="highlight-text highlight-1">Software Engineer</span> from Durg, Chhattisgarh.
          </FadeInLine>

          <FadeInLine index={2}>
            I craft accessible, reusable UI components, design efficient APIs, and optimize database performance to deliver fast, seamless user experiences.
          </FadeInLine>

          <FadeInLine index={3}>
            From creating a custom authentication microservice that <span className="highlight-text highlight-2">boosted daily engagement by 30%</span>      ,      to implementing lazy loading.
          </FadeInLine>

          <FadeInLine index={4}>
            Before I write a single line of code, I deeply understand product requirements, ensuring that architecture, user experience, and performance are aligned.
          </FadeInLine>

          <FadeInLine index={5}>
            I blend <span className="highlight-text highlight-3">form and function</span> to create designs that.
          </FadeInLine>

          <FadeInLine index={6}>
            Do you want to take your project from concept to a production-ready system — with clear communication, robust engineering, and measurable results?
          </FadeInLine>

          <FadeInLine index={7}>Then let’s talk.</FadeInLine>

          <style>{`
    .highlight-text {
      position: relative;
      z-index: 1;
    } 
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>

          <div
            style={{
              position: "relative",
              display: "inline-block",
              borderRadius: "12px",
              padding: "4px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Rotating Border */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "12px",
                padding: "4px",
                background:
                  "conic-gradient(yellow 0deg, transparent 100deg, transparent 260deg, yellow 360deg)",
                animation: "spin 2s linear infinite",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxSizing: "border-box",
                width: "225px",
              }}
            />

            {/* Inner Content */}
            <span
              style={{
                position: "relative",
                background: "black",
                color: "white",
                borderRadius: "8px",
                padding: "10px 32px",
                zIndex: 1,
                display: "inline-block",
              }}
            >
              Contact me
            </span>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen w-full bg-[#111] text-white transition-all duration-1000 ease-in-out">
        <Software />
      </section>
      <section
        className="min-h-screen w-full bg-[#111] text-white transition-all duration-1000 ease-in-out">
        <PreviousActivities />
      </section>
      <section ref={contactRef} style={{ minHeight: "100vh", position: "relative", zIndex: 0 }}>
        <Contact />
      </section>
    </div>
  );
}
