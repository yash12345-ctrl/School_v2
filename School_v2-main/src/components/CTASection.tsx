import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <section
      id="apply"
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          scale,
          opacity,
          backgroundImage: 'url(/v11.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, rgba(10,22,40,0.2) 50%, rgba(10,22,40,0.8) 100%)',
        zIndex: 1,
      }} />

      {/* Gold top line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <span style={{ color: 'var(--gold)', fontSize: '3.5rem', fontFamily: 'Georgia, serif', display: 'block', marginBottom: '-1rem', opacity: 0.8 }}>“</span>
          <blockquote style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontStyle: 'italic',
            lineHeight: 1.55,
            color: '#ffffff',
            margin: '0 0 1.5rem 0',
            fontWeight: 400,
            textShadow: '0 2px 12px rgba(0,0,0,0.6)'
          }}>
            Bridging generations, uniting minds, and empowering communities for a brighter tomorrow.
          </blockquote>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'var(--gold)',
            margin: '1.5rem auto',
            opacity: 0.6
          }} />
          <cite style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
            fontStyle: 'normal',
            display: 'block',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}>
            FACES
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
