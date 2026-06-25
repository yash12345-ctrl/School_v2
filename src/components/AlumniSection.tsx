import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const alumni = [
  {
    id: 'alumni-felix',
    name: 'Fr. Felix Raj, SJ',
    role: 'Vice-Chancellor',
    company: "St. Xavier's University, Kolkata",
    year: 'Honoured 2024',
    achievement: 'A Jesuit educator, administrator, and visionary whose life of service has shaped thousands of students across Kolkata and beyond.',
    image: '/v2.png',
    tag: 'Education',
  },
  {
    id: 'alumni-magis',
    name: '"Magis Mantra"',
    role: 'Book Launch',
    company: 'FACES Alumni Association',
    year: 'Event 2024',
    achievement: 'A landmark publication celebrating the philosophy of "doing more" — documenting Fr. Felix Raj\'s transformative journey and enduring legacy.',
    image: '/v3.png',
    tag: 'Literature',
  },
  {
    id: 'alumni-faces',
    name: 'FACES Kolkata',
    role: 'Alumni Association',
    company: 'Multi-disciplinary Schools & Colleges',
    year: 'Est. 2006',
    achievement: 'Uniting alumni across schools and colleges of Kolkata — driving 50+ social, cultural, and philanthropic activities over 20 years.',
    image: '/v4.png',
    tag: 'Community',
  },
];

const tagColors: Record<string, string> = {
  Education: '#1a3a6b',
  Literature: '#6b1a2a',
  Community: '#1a5a3a',
};

export default function AlumniSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="alumni" style={{ background: 'var(--off-white)', padding: '4rem 0', overflow: 'hidden' }}>
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
            ✦ A Landmark FACES Event
          </div>
          <div className="gold-divider" />
          <h2 className="text-display-lg" style={{ color: 'var(--navy)', maxWidth: '700px', marginTop: '0.5rem' }}>
            Book Launch of
            <br />
            <em>"Magis Mantra"</em>
          </h2>
          <p style={{
            color: 'var(--gray-mid)',
            maxWidth: '540px',
            lineHeight: 1.8,
            marginTop: '1rem',
            fontSize: '0.95rem',
          }}>
            Celebrating the extraordinary journey of <strong style={{ color: 'var(--navy)' }}>Fr. Felix Raj, SJ</strong> —
            Vice-Chancellor, St. Xavier's University, Kolkata. A tribute to vision, faith, and transformative leadership.
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

      </div>
    </section>
  );
}
