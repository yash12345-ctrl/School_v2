import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const alumni = [
  {
    id: 'alumni-felix',
    name: 'Book Launch: "Magis Mantra"',
    role: 'Celebrating The Journey',
    company: 'Father Felix Raj, SJ',

    achievement: "A landmark event celebrating the inspiring journey of the Vice-Chancellor, St. Xavier's University.",
    image: '/v2.webp',
    tag: 'Education',
  },
  {
    id: 'alumni-magis',
    name: 'Blanket Distribution',
    role: 'Community Initiative',
    company: 'FACES Alumni Association',

    achievement: 'A collaborative initiative by FACES, in partnership with the Abdus Shokur Foundation and the Anti-Hunger Squad Foundation.',
    image: '/e2.webp',
    tag: 'Community',
  },
  {
    id: 'alumni-faces',
    name: 'Communal Harmony',
    role: 'Documentary Film',
    company: 'By Zara Bhardwaj',
    year: '',
    achievement: 'A powerful documentary film exploring communal harmony, proudly supported by FACES.',
    image: '/e7.webp',
    tag: 'Film',
  },
];

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
          style={{ marginBottom: '5rem', position: 'relative', textAlign: 'center' }}
        >

          <h2 className="text-display-lg" style={{
            color: 'var(--navy)',
            maxWidth: '800px',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 auto'
          }}>
            Featured
            <br />
            <em style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--gold)',
              paddingRight: '0.1em'
            }}>Engagements & Events</em>
          </h2>

          <div style={{
            width: '60px',
            height: '2px',
            background: 'var(--gold)',
            marginTop: '2rem',
            marginBottom: '2rem',
            opacity: 0.6,
            marginLeft: 'auto',
            marginRight: 'auto'
          }} />

          <p style={{
            color: '#555',
            maxWidth: '540px',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            fontWeight: 400,
            margin: '0 auto'
          }}>
            Discover our landmark gatherings that unite the alumni network across
            schools and colleges of Kolkata, driving social and cultural impact.
          </p>
        </motion.div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                {person.name && (
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '0.25rem',
                  }}>
                    {person.name}
                  </h3>
                )}
                {person.role && (
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
                )}
                {person.company && (
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--gray-mid)',
                    marginBottom: '1rem',
                  }}>
                    {person.company}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
