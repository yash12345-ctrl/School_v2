import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus', href: '#experience' },
  { label: 'News', href: '#news' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#" className="nav-logo" id="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <div style={{
            height: '48px',
            width: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
          }}>
            <img 
              src="/v2.webp" 
              alt="School Logo" 
              style={{ 
                height: '135%', 
                width: '135%', 
                objectFit: 'cover',
              }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em' }}>
              St. Stephen's School
            </span>
            <span style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', marginTop: '0.3rem', textTransform: 'uppercase' }}>
              Bowbazar
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.label}>
              <a href={item.href} id={`nav-${item.label.toLowerCase()}`}>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(10,22,40,0.97)',
              backdropFilter: 'blur(24px)',
              padding: '2rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {[...navItems, { label: 'Apply Now', href: '#apply' }].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-display)',
                  color: item.label === 'Apply Now' ? 'var(--gold)' : 'white',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
