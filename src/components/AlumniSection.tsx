import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const alumni = [
  {
    id: 'alumni-ceo',
    name: 'Jonathan Harley',
    role: 'CEO & Founder',
    company: 'Harley Global Ventures',
    year: "Class of '98",
    achievement: 'Built a $2.4B enterprise spanning 40+ countries, employing 12,000 people worldwide.',
    image: '/alumni_ceo.png',
    tag: 'Business',
  },
  {
    id: 'alumni-doctor',
    name: 'Dr. Aisha Patel',
    role: 'Chief Surgeon',
    company: 'Johns Hopkins Medical Center',
    year: "Class of '02",
    achievement: 'Pioneer of minimally invasive cardiac surgery, saving 8,000+ lives with her research.',
    image: '/alumni_doctor.png',
    tag: 'Medicine',
  },
  {
    id: 'alumni-engineer',
    name: 'Marcus Chen',
    role: 'Lead Aerospace Engineer',
    company: 'Orion Space Systems',
    year: "Class of '05",
    achievement: 'Designed propulsion systems for 3 successful Mars missions at NASA collaboration.',
    image: '/alumni_engineer.png',
    tag: 'Engineering',
  },
  {
    id: 'alumni-entrepreneur',
    name: 'Sofia Ramirez',
    role: 'Co-Founder & CEO',
    company: 'NovaTech Solutions',
    year: "Class of '10",
    achievement: 'Forbes 30 Under 30. Built AI healthcare platform valued at $800M.',
    image: '/alumni_entrepreneur.png',
    tag: 'Entrepreneurship',
  },
  {
    id: 'alumni-scientist',
    name: 'Prof. Elena Kovacs',
    role: 'Research Director',
    company: 'Oxford Molecular Institute',
    year: "Class of '95",
    achievement: 'Published 200+ peer-reviewed papers. Nominated for Nobel Prize in Chemistry 2024.',
    image: '/alumni_scientist.png',
    tag: 'Science',
  },
  {
    id: 'alumni-leader',
    name: 'Robert D. Whitmore',
    role: 'State Senator',
    company: 'United States Congress',
    year: "Class of '92",
    achievement: 'Champion of education reform legislation impacting 2M+ students nationally.',
    image: '/alumni_leader.png',
    tag: 'Public Service',
  },
];

const tagColors: Record<string, string> = {
  Business: '#2952a3',
  Medicine: '#1a6b4a',
  Engineering: '#6b3d1a',
  Entrepreneurship: '#6b1a4a',
  Science: '#1a4a6b',
  'Public Service': '#4a1a6b',
};

export default function AlumniSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="alumni" style={{ background: 'var(--off-white)', padding: '8rem 0', overflow: 'hidden' }}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="text-overline" style={{ color: 'var(--gold)' }}>
            ✦ Success Beyond Graduation
          </div>
          <div className="gold-divider" />
          <h2 className="text-display-lg" style={{ color: 'var(--navy)', maxWidth: '600px', marginTop: '0.5rem' }}>
            Where Our Alumni
            <br />
            <em>Change The World</em>
          </h2>
          <p style={{
            color: 'var(--gray-mid)',
            maxWidth: '480px',
            lineHeight: 1.8,
            marginTop: '1rem',
            fontSize: '0.95rem',
          }}>
            From boardrooms to operating theaters, from space missions to Capitol Hill —
            Aeternum graduates lead at the highest levels globally.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {alumni.map((person, i) => (
            <motion.div
              key={person.id}
              id={person.id}
              initial={{ opacity: 0, y: 60, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="premium-card"
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <motion.img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                  whileHover={{ scale: 1.06, transition: { duration: 0.6 } }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.1) 50%, transparent 100%)',
                }} />
                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: tagColors[person.tag] || 'var(--royal)',
                  color: 'white',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px',
                }}>
                  {person.tag}
                </div>
                {/* Class year */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.2rem',
                  color: 'var(--gold)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}>
                  {person.year}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '0.25rem',
                }}>
                  {person.name}
                </h3>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--royal-light)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.15rem',
                  textTransform: 'uppercase',
                }}>
                  {person.role}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--gray-mid)',
                  marginBottom: '1rem',
                }}>
                  {person.company}
                </div>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#555',
                  lineHeight: 1.7,
                  borderTop: '1px solid var(--gray-light)',
                  paddingTop: '1rem',
                }}>
                  {person.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <a
            href="#"
            id="view-all-alumni"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--royal-light)',
              borderBottom: '1px solid var(--royal-light)',
              paddingBottom: '2px',
              transition: 'all 0.3s ease',
            }}
          >
            View Full Alumni Network
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
