import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PresidentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      id="president"
      ref={ref}
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0c1a 0%, #111428 50%, #0d1020 100%)',
        padding: '7rem 0',
        overflow: 'hidden',
      }}
    >
      {/* ── Decorative background elements ── */}
      {/* Gold radial glow top-left */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      {/* Gold horizontal hairline top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent)',
        zIndex: 1,
      }} />
      {/* Gold horizontal hairline bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent)',
        zIndex: 1,
      }} />

      <div
        className="container-xl"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2.5rem, 6vw, 6rem)',
          flexWrap: 'wrap',
        }}>

          {/* ── LEFT: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: '0 0 auto', position: 'relative' }}
          >
            {/* Static gold offset border */}
            <div style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '26px',
              border: '1.5px solid rgba(201,168,76,0.4)',
              zIndex: 0,
            }} />
            {/* Glow aura */}
            <div style={{
              position: 'absolute',
              inset: '-24px',
              borderRadius: '30px',
              background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.2) 0%, transparent 70%)',
              zIndex: 0,
            }} />
            {/* Image container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(240px, 26vw, 340px)',
              aspectRatio: '3/4',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.2)',
            }}>
              <img
                src="/v5.webp"
                alt="Imran Zaidi — President, FACES"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Dark gradient overlay at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0, height: '45%',
                background: 'linear-gradient(to top, rgba(5,7,20,0.9), transparent)',
              }} />
              {/* Name badge on image */}
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 3 }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700, fontSize: '1rem',
                  color: '#ffffff', margin: 0,
                  letterSpacing: '-0.01em',
                }}>
                  Imran Zaidi
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500, fontSize: '0.6rem',
                  color: 'rgba(232,201,110,0.95)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  margin: '4px 0 0',
                }}>
                  President, FACES
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Quote & Details ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: '1 1 340px', minWidth: 0 }}
          >
            {/* Overline */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.85)',
              marginBottom: '0.9rem',
            }}>
              ✦ Words from the President
            </div>

            {/* Gold divider */}
            <div style={{
              width: '50px', height: '2px',
              background: 'linear-gradient(90deg, rgba(201,168,76,0.9), transparent)',
              marginBottom: '2rem',
            }} />

            {/* Giant quote mark */}
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '6rem',
              lineHeight: 0.7,
              color: 'rgba(201,168,76,0.22)',
              marginBottom: '1rem',
              userSelect: 'none',
            }}>
              "
            </div>

            {/* Quote text */}
            <blockquote style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.88)',
              margin: '0 0 2.5rem',
              padding: 0,
              border: 'none',
            }}>
              FACES is more than an alumni network — it is a family bound
              by shared memories, common values, and a collective desire to
              give back. Together, we have built something extraordinary,
              and this journey has only just begun.
            </blockquote>

            {/* Thin gold line separator */}
            <div style={{
              width: '60px', height: '1.5px',
              background: 'linear-gradient(90deg, rgba(201,168,76,0.8), transparent)',
              marginBottom: '1.8rem',
            }} />

            {/* Name block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700, fontSize: '1.1rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}>
                Imran Zaidi
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500, fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.85)',
              }}>
                President · FACES Alumni Association
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400, fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '2px',
              }}>
                Est. 2006 · Kolkata
              </span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
