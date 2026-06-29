import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AlumniSection from './components/AlumniSection';
import PresidentSection from './components/PresidentSection';
import ProgramsSection from './components/ProgramsSection';


import CTASection from './components/CTASection';
import Footer from './components/Footer';
import EventPage from './event/event';
import About from './about/about';
import MemberPage from './member/member';
import MediaPage from './media/media';
import DonatePage from './donate/donate';

export default function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem('introFinished') === 'true';
  });
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleIntroFinish = () => {
    setIntroFinished(true);
    sessionStorage.setItem('introFinished', 'true');
  };

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (currentPath === '/event') {
    return <EventPage />;
  }

  if (currentPath === '/about') {
    return (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    );
  }

  if (currentPath === '/member') {
    return (
      <>
        <Navbar />
        <MemberPage />
        <Footer />
      </>
    );
  }

  if (currentPath === '/media') {
    return <MediaPage />;
  }

  if (currentPath === '/donate') {
    return (
      <>
        <Navbar />
        <DonatePage />
        <Footer />
      </>
    );
  }

  // Lenis smooth scrolling
  useEffect(() => {
    if (!introFinished) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [introFinished]);

  if (!introFinished) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
        <video
          src="/Boy_opening_letter_on_bicycle_202606251319.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleIntroFinish}
          onCanPlay={(e) => { e.currentTarget.playbackRate = 1.5; }}
          className="w-full h-full object-cover"
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleIntroFinish}
          className="group absolute bottom-12 right-12 z-10 flex items-center gap-4 pl-6 pr-2 py-2 rounded-full cursor-pointer overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.5)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 168, 76, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
          }}
        >
          {/* Shimmer sweep */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

          {/* Text */}
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.65)',
            transition: 'color 0.4s ease',
          }} className="group-hover:text-white relative z-10">
            Skip Intro
          </span>

          {/* Icon Circle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s ease',
          }} className="group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] relative z-10">
             <svg style={{
               width: '14px',
               height: '14px',
               color: 'rgba(255, 255, 255, 0.8)',
               transition: 'all 0.4s ease',
             }} className="group-hover:text-black group-hover:translate-x-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
             </svg>
          </div>
        </motion.button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AlumniSection />

        <PresidentSection />
        <ProgramsSection />



        <CTASection />

      </main>
      <Footer />
    </>
  );
}
