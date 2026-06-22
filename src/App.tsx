import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AlumniSection from './components/AlumniSection';
import LegacyNumbers from './components/LegacyNumbers';
import ExperienceSection from './components/ExperienceSection';
import FutureReadySection from './components/FutureReadySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  // Lenis smooth scrolling
  useEffect(() => {
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
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AlumniSection />
        <LegacyNumbers />
        <ExperienceSection />
        <FutureReadySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
