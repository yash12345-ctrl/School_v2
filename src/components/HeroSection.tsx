import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Ballpit from './Ballpit';

const words = ["Shaping", "Leaders.", "Building", "Legacies."];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const ballpitY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // GSAP word reveal
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.fromTo('.hero-word', {
      y: 80,
      opacity: 0,
      rotationX: -30,
    }, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.0,
      stagger: 0.14,
      ease: 'power4.out',
    });
    tl.fromTo('.hero-sub', {
      y: 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
    }, '-=0.4');
    tl.fromTo('.hero-buttons', {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.5');
    return () => { tl.kill(); };
  }, []);

  // Cards removed

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        zIndex: 2,
      }} />

      {/* Background Video with Parallax */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        zIndex: 0,
        y: ballpitY,
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/also_remove_the_balls.mp4"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
        />
      </motion.div>

      {/* Overlay Gradient for the "Lit" effect (Dims video) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 45%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Ballpit Background */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        zIndex: 2,
        y: ballpitY,
        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 75%, black 95%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 75%, black 95%, black 100%)'
      }}>
        <Ballpit
          count={50}
          gravity={0.8}
          minSize={0.4}
          maxSize={0.8}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={true}
          colors={[0x0A1628, 0xFFFFFF, 0xC9A84C, 0x1A3A6B, 0xF8F7F4]}
          materialParams={{
            metalness: 0.7,
            roughness: 0.15,
            clearcoat: 1,
            clearcoatRoughness: 0.15
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          opacity,
          y,
          padding: '0 1.5rem',
          maxWidth: '1100px',
          width: '100%',
        }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.35rem 1rem 0.35rem 0.35rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          marginBottom: '2.5rem',
          color: '#AAAAAA',
          fontSize: '0.85rem',
        }}>
          <span style={{
            background: '#FFFFFF',
            color: '#000000',
            padding: '0.2rem 0.8rem',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.65rem',
            letterSpacing: '0.25em'
          }}>EST. 2001</span>
          <span style={{ fontWeight: 400, letterSpacing: '0.02em' }}>Since Excellence Began</span>
        </div>

        {/* Hero Headline - word by word */}
        <h1 className="text-display-xl" style={{
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          perspective: '800px',
          fontWeight: 400,
          fontFamily: "'Spicy Rice', cursive",
          lineHeight: 1.1,
          letterSpacing: '0.02em',
          textShadow: '3px 3px 0px #4A2B2B, 6px 6px 0px #4A2B2B'
        }}>
          {words.map((word, i) => (
            <span
              key={i}
              className="hero-word"
              style={{
                display: 'inline-block',
                marginRight: i % 2 === 1 ? '0.5rem' : '0.4rem',
                opacity: 0,
                color: word === 'Legacies.' ? 'var(--gold)' : '#FFFFFF',
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          className="hero-sub"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#CCCCCC',
            maxWidth: '680px',
            margin: '0 auto 3.5rem',
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: '0.01em',
            opacity: 0,
          }}
        >
          For generations, our students have transformed ambition into achievement
          and learning into lifelong success.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0,
            marginTop: '1rem'
          }}
        >
          <a href="#legacy" className="hero-btn-primary">
            Explore Our Legacy
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#alumni" className="hero-btn-secondary">
            Meet Our Alumni
          </a>
        </div>

      </motion.div>
    </section >
  );
}
