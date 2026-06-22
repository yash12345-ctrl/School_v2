import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const experiences = [
  {
    id: 'experience-classroom',
    title: 'Smart Classrooms',
    subtitle: 'Where Technology Meets Pedagogy',
    description:
      'Cutting-edge interactive learning environments powered by AI-driven tools, dual 4K displays, and immersive collaboration systems that transform every lesson into an experience.',
    image: '/smart_classroom.png',
    accent: 'var(--royal-light)',
  },
  {
    id: 'experience-innovation',
    title: 'Innovation Labs',
    subtitle: 'Building Tomorrow, Today',
    description:
      'State-of-the-art fabrication zones with robotics, 3D printing, laser cutting, and a dedicated maker space where students prototype real-world solutions to global challenges.',
    image: '/innovation_lab.png',
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
            inset: '-5%',
            scale: imgScale,
          }}
        >
          <img
            src={exp.image}
            alt={exp.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
              ✦ Student Experience
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
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            ✦ The Aeternum Experience
          </div>
          <h2 className="text-display-lg" style={{ color: 'var(--navy)' }}>
            A Campus That
            <br />
            <em>Inspires Brilliance</em>
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
            Every space is designed to awaken curiosity, ignite creativity, and
            forge the leaders of tomorrow.
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { icon: '⚽', title: 'Sports Excellence', desc: 'Olympic-standard facilities' },
            { icon: '🎭', title: 'Arts & Culture', desc: 'Theatre, music, visual arts' },
            { icon: '🌐', title: 'Global Exchange', desc: 'Partnerships in 30+ nations' },
            { icon: '🎤', title: 'Leadership Programs', desc: 'MUN, Debates & Summits' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: 'var(--navy)',
                  marginBottom: '0.3rem',
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--gray-mid)' }}>
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
