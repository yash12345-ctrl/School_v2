import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Member', href: '/#member' },
  { label: 'Events', href: '/event' },
  { label: 'Media', href: '/media' },
  { label: 'Donate', href: '/#donate' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          /* Apple-style: ultra-thin frosted pill bar when scrolled */
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* ── Premium Logo ── */}
        <a
          href="/"
          className="nav-logo"
          id="nav-logo"
          style={{ display: 'flex', alignItems: 'center', gap: '0', textDecoration: 'none' }}
        >
          {/* Outer frosted pill that wraps everything */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '5px 16px 5px 5px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(201,168,76,0.35)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.14)',
            position: 'relative',
            overflow: 'hidden',
          }}>

            {/* Sweep shimmer overlay on pill */}
            <div style={{
              position: 'absolute',
              top: 0, left: '-100%', width: '60%', height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
              animation: 'navPillSweep 3.5s ease-in-out infinite',
              pointerEvents: 'none',
            }} />

            {/* ── Image badge with rotating conic ring ── */}
            <div style={{ position: 'relative', width: '34px', height: '34px', flexShrink: 0 }}>
              {/* Outer glow aura */}
              <div style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.65) 0%, transparent 70%)',
                filter: 'blur(5px)',
                animation: 'navAuraPulse 2.8s ease-in-out infinite',
              }} />
              {/* Rotating conic-gradient ring */}
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #c9a84c, #e8c96e, #fff8e0, #c9a84c, #8b6914, #c9a84c)',
                animation: 'navRingRotate 3s linear infinite',
                zIndex: 0,
              }} />
              {/* White spacer ring */}
              <div style={{
                position: 'absolute',
                inset: '-0.5px',
                borderRadius: '50%',
                background: 'rgba(10,10,14,0.9)',
                zIndex: 1,
              }} />
              {/* Image circle */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                zIndex: 2,
              }}>
                <img
                  src="/v1.jpeg"
                  alt="FACES"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* ── Wordmark block ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>

              {/* FACES with shimmer */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '0.22em',
                  lineHeight: 1,
                  background: 'linear-gradient(90deg, #cccccc 0%, #ffffff 25%, #ffd966 50%, #ffffff 75%, #cccccc 100%)',
                  backgroundSize: '250% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'navLogoShimmer 3.5s ease-in-out infinite',
                  textShadow: 'none',
                }}>
                  FACES
                </span>
                {/* Gold diamond accent */}
                <span style={{
                  fontSize: '0.4rem',
                  color: 'rgba(201,168,76,0.8)',
                  letterSpacing: 0,
                  WebkitTextFillColor: 'rgba(201,168,76,0.8)',
                  lineHeight: 1,
                  marginBottom: '1px',
                }}>◆</span>
              </div>

              {/* Bottom row: label + hairline + est */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.52rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.92)',
                  lineHeight: 1,
                }}>
                  Alumni Association
                </span>
                <div style={{ width: '1px', height: '7px', background: 'rgba(255,255,255,0.35)' }} />
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.52rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1,
                }}>
                  Est. 2006
                </span>
                {/* Live pulse dot */}
                <div style={{
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: '#34c759',
                  boxShadow: '0 0 6px rgba(52,199,89,0.9)',
                  animation: 'navDotPulse 2s ease-in-out infinite',
                  flexShrink: 0,
                }} />
              </div>
            </div>
          </div>
        </a>

        <style>{`
          @keyframes navLogoShimmer {
            0%   { background-position: 150% 0; }
            60%  { background-position: -50% 0; }
            100% { background-position: 150% 0; }
          }
          @keyframes navRingRotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes navAuraPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50%       { opacity: 1;   transform: scale(1.15); }
          }
          @keyframes navDotPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.4; transform: scale(0.7); }
          }
          @keyframes navPillSweep {
            0%   { left: -100%; }
            60%  { left: 160%; }
            100% { left: 160%; }
          }
          .nav-logo:hover > div {
            background: rgba(255,255,255,0.07) !important;
            border-color: rgba(201,168,76,0.3) !important;
            box-shadow: 0 4px 32px rgba(201,168,76,0.15), inset 0 1px 0 rgba(255,255,255,0.1) !important;
            transition: all 0.3s ease;
          }
        `}</style>

        {/* Desktop Links — Apple-style: compact, light weight */}
        <ul className="nav-links" style={{ gap: '0.25rem' }}>
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.76)',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.76)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay — Apple-style frosted glass */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 72,
              left: '1rem',
              right: '1rem',
              zIndex: 99,
              background: 'rgba(18,18,22,0.88)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              padding: '1.2rem',
              borderRadius: '20px',
              border: '0.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}
          >
            {[...navItems, { label: 'Apply Now', href: '#apply' }].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1rem',
                  fontSize: '1.05rem',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: item.label === 'Apply Now' ? 600 : 400,
                  color: item.label === 'Apply Now' ? 'var(--gold-light)' : 'rgba(255,255,255,0.88)',
                  borderRadius: '12px',
                  transition: 'background 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {item.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
