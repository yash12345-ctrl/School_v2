import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Apple-style blur-in reveal
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo('.hero-eyebrow', { opacity: 0, y: 18, filter: 'blur(6px)' }, {
      opacity: 1, y: 0, filter: 'blur(0px)',
      duration: 0.8, ease: 'power3.out',
    });
    tl.fromTo('.hero-line-1', { opacity: 0, y: 48, filter: 'blur(8px)' }, {
      opacity: 1, y: 0, filter: 'blur(0px)',
      duration: 1.0, ease: 'power4.out',
    }, '-=0.3');
    tl.fromTo('.hero-line-2', { opacity: 0, y: 40, filter: 'blur(6px)' }, {
      opacity: 1, y: 0, filter: 'blur(0px)',
      duration: 0.9, ease: 'power4.out',
    }, '-=0.65');
    tl.fromTo('.hero-line-3', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    }, '-=0.6');
    tl.fromTo('.hero-sub-copy', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    }, '-=0.5');
    tl.fromTo('.hero-ctas', { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
    }, '-=0.45');

    tl.fromTo('.hero-stats', { opacity: 0, y: 16 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    }, '-=0.5');
    tl.fromTo('.hero-scroll-hint', { opacity: 0 }, {
      opacity: 1, duration: 0.6,
    }, '-=0.4');

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      {/* ── Cinematic background image & video ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {/* Base Image */}
        <img
          src="/v1.jpeg"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.85,
            filter: 'brightness(0.95) saturate(1.1)',
            transform: 'scale(1.05)',
            zIndex: 0,
          }}
        />
        {/* Video Overlay */}
        <video
          autoPlay muted loop playsInline
          src="/also_remove_the_balls.mp4"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.6,
            mixBlendMode: 'screen', /* Blends the video beautifully over the image */
            transform: 'scale(1.05)',
            zIndex: 1,
          }}
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%),
          linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)
        `,
      }} />

      {/* ── Film-grain noise ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ── Bottom vignette ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 3,
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Gold hairline ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px', zIndex: 10,
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(201,168,76,0.9) 50%, rgba(201,168,76,0.6) 70%, transparent 100%)',
          transformOrigin: 'center',
        }}
      />

      {/* ── Main content wrapper ── */}
      <motion.div
        style={{
          opacity, y, scale,
          position: 'relative', zIndex: 5,
          width: '100%', maxWidth: '1200px',
          padding: '72px 2rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
        }}
        className="hero-outer"
      >
        {/* ── CENTER: Text content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Eyebrow badge */}
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.38rem 1.05rem',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '9999px',
              marginBottom: '2.4rem',
              opacity: 0,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--gold)',
              boxShadow: '0 0 8px rgba(201,168,76,1)',
              display: 'inline-block',
              animation: 'heroPulse 2.4s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: '0.74rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}>
              Est. 2001 · Since Excellence Began
            </span>
          </div>

          {/* Big headline */}
          <div 
            className="hero-line-1"
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '1.8rem 3.2rem',
              borderRadius: '20px',
              opacity: 0,
              marginBottom: '1.5rem',
              display: 'inline-block',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Subtle inner shine */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.25) 25%, transparent 30%)',
              backgroundSize: '200% 200%',
              animation: 'heroShimmer 6s infinite',
              pointerEvents: 'none',
              mixBlendMode: 'overlay',
            }} />
            <h1
              style={{
                position: 'relative',
                zIndex: 1,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(4rem, 9vw, 9.5rem)',
                letterSpacing: '0.45em',
                marginRight: '-0.45em', /* Centers properly despite letter-spacing on last char */
                lineHeight: 0.95,
                color: '#ffffff',
                margin: 0,
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
              }}
            >
              FACES
            </h1>
          </div>

          {/* FACES tagline */}
          <p
            className="hero-line-2"
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2vw, 1.65rem)',
              letterSpacing: '-0.01em',
              color: '#ffffff',
              opacity: 0, marginBottom: '0.4rem',
              lineHeight: 1.35,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            Alumni of multi-disciplinary schools
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>&amp; colleges of Kolkata</span>
          </p>

          <p
            className="hero-line-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(0.78rem, 1.3vw, 0.95rem)',
              color: 'rgba(255,255,255,0.95)',
              opacity: 0, marginBottom: '2.4rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Est. 2006 · Non-Profit · Formally Constituted 2007
          </p>

          {/* Thin divider */}
          <div style={{
            width: '48px', height: '2px',
            background: 'linear-gradient(90deg, rgba(201,168,76,0.9), transparent)',
            marginBottom: '2rem',
          }} />

          {/* Body copy */}
          <p
            className="hero-sub-copy"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.95)',
              maxWidth: '480px',
              marginBottom: '2.8rem',
              opacity: 0,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            A non-profit alumni association uniting graduates of multi-disciplinary
            schools and colleges across Kolkata — driving social, cultural, and
            philanthropic impact since 2006.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-ctas"
            style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', opacity: 0, justifyContent: 'center' }}
          >
            <a href="#legacy" className="apple-btn-primary">
              Explore Our Legacy
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#alumni" className="apple-btn-ghost">
              Meet Our Members
            </a>
          </div>

          {/* ── Stats bar ── */}
          <div
            className="hero-stats"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              marginTop: '2.8rem',
              opacity: 0,
            }}
          >
            {[
              { value: '20+', label: 'Years' },
              { value: '50+', label: 'Activities' },
              { value: '100+', label: 'Members' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <div style={{
                    width: '1px',
                    height: '32px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)',
                    margin: '0 1.6rem',
                    flexShrink: 0,
                  }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(232,201,110,0.85) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1,
                  }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </motion.div>

      {/* ── Scroll hint ── */}
      <div
        className="hero-scroll-hint"
        style={{
          position: 'absolute', bottom: '2.5rem',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 5, opacity: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.45rem',
        }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.62rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
          animation: 'heroLineGrow 2.2s ease-in-out infinite',
        }} />
      </div>

      {/* ── Styles ── */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes heroShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes heroLineGrow {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0.7; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        /* Apple pill buttons */
        .apple-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.9rem;
          background: rgba(255,255,255,0.92);
          color: #000;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 0.9rem; font-weight: 500; letter-spacing: -0.01em;
          border-radius: 9999px; border: none; cursor: pointer; text-decoration: none;
          transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
          white-space: nowrap;
          box-shadow: 0 2px 16px rgba(255,255,255,0.07);
        }
        .apple-btn-primary:hover {
          background: #fff; transform: scale(1.025);
          box-shadow: 0 8px 28px rgba(255,255,255,0.16);
        }
        .apple-btn-primary:active { transform: scale(0.975); }

        .apple-btn-ghost {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.9rem;
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.82);
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 0.9rem; font-weight: 500; letter-spacing: -0.01em;
          border-radius: 9999px;
          border: 0.5px solid rgba(255,255,255,0.17);
          cursor: pointer; text-decoration: none;
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.18s ease;
          white-space: nowrap;
        }
        .apple-btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.28);
          transform: scale(1.025);
        }
        .apple-btn-ghost:active { transform: scale(0.975); }

        /* Responsive: stack on mobile */
        @media (max-width: 768px) {
          .hero-outer {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 2.5rem !important;
          }
          .hero-outer > div:first-child {
            align-items: center !important;
          }
          .hero-outer > div:first-child p { margin-inline: auto; }
          .hero-img-card {
            width: clamp(220px, 70vw, 320px) !important;
          }
        }
        @media (max-width: 500px) {
          .apple-btn-primary, .apple-btn-ghost {
            padding: 0.75rem 1.5rem; font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
