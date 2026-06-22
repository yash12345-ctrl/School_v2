import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    id: 'future-ai',
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'Machine learning, neural networks, and AI ethics integrated into the core curriculum from Grade 6 onwards.',
  },
  {
    id: 'future-robotics',
    icon: '⚙️',
    title: 'Robotics & Automation',
    description: 'Award-winning robotics teams, hands-on programming, and autonomous systems design projects.',
  },
  {
    id: 'future-global',
    icon: '🌍',
    title: 'Global Learning',
    description: 'International collaborations, language immersion, and cultural exchange with 30+ partner institutions worldwide.',
  },
  {
    id: 'future-entrepreneurship',
    icon: '🚀',
    title: 'Entrepreneurship',
    description: 'Student incubator, venture pitch competitions, and mentorship from successful alumni founders.',
  },
  {
    id: 'future-research',
    icon: '🔬',
    title: 'Research & Innovation',
    description: 'Faculty-led research publications, science olympiads, and university-partnered discovery programs.',
  },
  {
    id: 'future-leadership',
    icon: '🏛️',
    title: 'Leadership Academy',
    description: 'Model UN, student senate, executive coaching, and public speaking mastery programs.',
  },
];

export default function FutureReadySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="academics"
      style={{
        position: 'relative',
        padding: '8rem 2rem',
        overflow: 'hidden',
        background: 'var(--navy)',
      }}
    >
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,58,107,0.8) 0%, transparent 70%),
          radial-gradient(ellipse 50% 50% at 80% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem', maxWidth: '700px' }}
        >
          <div className="text-overline" style={{ color: 'var(--gold)', marginBottom: '1.2rem' }}>
            ✦ Future-Ready Education
          </div>
          <h2 className="text-display-lg" style={{ color: 'white' }}>
            Preparing Students
            <br />
            <em style={{ color: 'var(--gold-light)' }}>For Tomorrow</em>
          </h2>
          <div style={{
            width: '48px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--gold), transparent)',
            margin: '1.5rem 0',
          }} />
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            maxWidth: '480px',
          }}>
            At Aeternum, we don't just prepare students for exams — we prepare
            them for the challenges and opportunities of a world being reshaped
            by technology and global interconnection.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.2rem',
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '2.2rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Glow dot */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              <div style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 500,
                color: 'white',
                marginBottom: '0.7rem',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
              }}>
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div style={{
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                color: 'var(--gold)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
