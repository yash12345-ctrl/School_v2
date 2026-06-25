import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const experiences = [
  {
    id: 'experience-walk',
    title: 'End Female Foeticide',
    subtitle: 'Walk Against the Killing of Girl Child',
    description:
      'Supported by FACES — a powerful march uniting alumni, students, and citizens of Kolkata to stand against female foeticide. Every step a statement. Every voice a movement.',
    image: '/v6.png',
    accent: 'var(--royal-light)',
  },
  {
    id: 'experience-education-summit',
    title: 'Education Summit',
    subtitle: 'Supported by FACES',
    description:
      'A landmark gathering of educators, alumni, and change-makers — brought together by FACES to reimagine the future of education in Kolkata and beyond.',
    image: '/v7.png',
    accent: 'var(--gold)',
  },
];

function ExperiencePanel({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        minHeight: '80vh',
        overflow: 'hidden',
      }}
      className="experience-panel"
    >
      {/* Image Block */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          order: isEven ? 0 : 1,
          minHeight: '500px',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            scale: imgScale,
            overflow: 'hidden',
          }}
        >
          {/* Blurred background fill — eliminates letterbox bars */}
          <img
            src={exp.image}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-10%',
              width: '120%',
              height: '120%',
              objectFit: 'cover',
              filter: 'blur(18px) brightness(0.6) saturate(0.8)',
              transform: 'scale(1.1)',
              pointerEvents: 'none',
            }}
          />
          {/* Main image — full visible */}
          <img
            src={exp.image}
            alt={exp.title}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              zIndex: 1,
            }}
          />
        </motion.div>
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isEven
              ? 'linear-gradient(to right, transparent, rgba(248,247,244,0.06))'
              : 'linear-gradient(to left, transparent, rgba(248,247,244,0.06))',
          }}
        />
      </div>

      {/* Text Block */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(3rem, 6vw, 8rem) clamp(2rem, 5vw, 6rem)',
          background: 'var(--off-white)',
          y: textY,
          order: isEven ? 1 : 0,
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="text-overline"
              style={{ color: exp.accent, marginBottom: '1.2rem' }}
            >
              ✦ FACES Initiative
            </div>
            <h2
              className="text-display-md"
              style={{ color: 'var(--navy)', marginBottom: '0.4rem' }}
            >
              {exp.title}
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: exp.accent,
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}
            >
              {exp.subtitle}
            </div>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: `linear-gradient(90deg, ${exp.accent}, transparent)`,
                marginBottom: '1.5rem',
              }}
            />
            <p
              style={{
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.9,
                maxWidth: '420px',
              }}
            >
              {exp.description}
            </p>
            <a
              href="#"
              id={exp.id}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: exp.accent,
                borderBottom: `1px solid ${exp.accent}`,
                paddingBottom: '2px',
                transition: 'opacity 0.3s',
              }}
            >
              Discover More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

  return (
    <section id="experience" style={{ background: 'var(--off-white)', overflow: 'hidden' }}>
      {/* Section Header */}
      <div
        ref={headerRef}
        style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-overline" style={{ marginBottom: '1rem' }}>
            ✦ The FACES Impact
          </div>
          <h2 className="text-display-lg" style={{ color: 'var(--navy)' }}>
            Initiatives That
            <br />
            <em>Inspire Change</em>
          </h2>
          <p
            style={{
              marginTop: '1.2rem',
              color: 'var(--gray-mid)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '500px',
              marginInline: 'auto',
            }}
          >
            Every initiative is designed to empower communities, foster leadership, and build a lasting legacy of service and excellence.
          </p>
        </motion.div>
      </div>

      {/* Experience Panels */}
      {experiences.map((exp, i) => (
        <ExperiencePanel key={exp.id} exp={exp} index={i} />
      ))}

      {/* Additional Cards Row */}
      <div style={{ padding: '5rem 2rem 8rem' }}>
        <div
          className="container-xl"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              ),
              title: 'Health Initiatives',
              desc: 'Blood donation & medical camps driving critical community care.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              ),
              title: 'Environmental Action',
              desc: 'Tree plantation drives & clean-ups for a sustainable tomorrow.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              ),
              title: 'Education Support',
              desc: 'Scholarships & mentoring programs to empower future leaders.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              ),
              title: 'Community Relief',
              desc: 'Disaster response & proactive aid during times of crisis.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                transition: { duration: 0.3, ease: 'easeOut' } 
              }}
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              {/* Premium Top Gradient Accent */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--gold), var(--royal-light))',
                  opacity: 0.9,
                }}
              />
              
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.08)',
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: 'var(--navy)',
                  marginBottom: '0.6rem',
                  fontWeight: 500,
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-panel {
            grid-template-columns: 1fr !important;
          }
          .experience-panel > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
