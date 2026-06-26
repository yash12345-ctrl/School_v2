import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AlumniSection from './components/AlumniSection';
import PresidentSection from './components/PresidentSection';
import ProgramsSection from './components/ProgramsSection';


import CTASection from './components/CTASection';
import Footer from './components/Footer';
import EventPage from './event/event';
import About from './about/about';
import MediaPage from './media/media';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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

  if (currentPath === '/media') {
    return <MediaPage />;
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
          onEnded={() => setIntroFinished(true)}
          onCanPlay={(e) => { e.currentTarget.playbackRate = 1.5; }}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIntroFinished(true)}
          className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-all z-10 font-medium text-sm"
        >
          Skip Intro
        </button>
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
