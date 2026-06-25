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
          backgroundImage: 'url(/v11.png)',
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Overline */}
          <div className="text-overline" style={{ color: 'var(--gold)', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            ✦ Begin Your Journey ✦
          </div>

          {/* Headline */}
          <h2
            className="text-display-xl"
            style={{ color: 'white', marginBottom: '1.5rem', lineHeight: 1.05, textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
          >
            Join A Legacy That
            <br />
            <em style={{ color: 'var(--gold-light)', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>Inspires Generations</em>
          </h2>

          {/* Gold divider */}
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '0 auto 1.5rem',
          }} />

          {/* Subheadline */}
          <p style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
            lineHeight: 1.8,
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
            fontWeight: 400,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Begin your journey with an institution that shapes future leaders —
            where every student is seen, challenged, and empowered to exceed
            their greatest aspirations.
          </p>


        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Applications Open', value: '2025–26' },
            { label: 'Merit Scholarships', value: 'Available' },
            { label: 'Acceptance Rate', value: '18%' },
          ].map((badge, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--gold-light)',
                fontWeight: 500,
                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
              }}>
                {badge.value}
              </div>
              <div style={{
                fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
              }}>
                {badge.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
