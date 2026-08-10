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
import ContactPage from './contact/contact';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

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

  if (currentPath === '/event') {
    return (
      <div className="app-fade-in">
        <EventPage />
        <MobileBottomBar />
      </div>
    );
  }

  if (currentPath === '/about') {
    return (
      <div className="app-fade-in">
        <Navbar />
        <About />
        <Footer />
        <MobileBottomBar />
      </div>
    );
  }

  if (currentPath === '/media') {
    return (
      <div className="app-fade-in">
        <MediaPage />
        <MobileBottomBar />
      </div>
    );
  }

  if (currentPath === '/contact') {
    return (
      <div className="app-fade-in">
        <Navbar />
        <ContactPage />
        <Footer />
        <MobileBottomBar />
      </div>
    );
  }

  return (
    <div className="app-fade-in">
      <Navbar />
      <main>
        <HeroSection />
        <AlumniSection />
        <PresidentSection />
        <ProgramsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}

