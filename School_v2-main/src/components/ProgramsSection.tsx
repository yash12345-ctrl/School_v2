import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    title: 'BOOK LAUNCH OF COMARADES AND COMEBACKS BY SAIRA SHAH HALIM',
    subtitle: '',
    desc: 'Supported by FACES',

    image: '/e11.webp'
  },
  {
    title: 'THE CREATIVE ARTS',
    subtitle: '',
    desc: 'Supported by FACES',

    image: '/e30.webp'
  },
  {
    title: 'ZARD SITARA',
    subtitle: '',
    desc: 'Supported by FACES',
    label: '',
    image: '/e43.webp'
  }
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} style={{ background: '#f4f4f4', padding: '6rem 0' }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#d4af37', fontSize: '0.8rem' }}>✦</span>
            <span style={{
              color: '#0a192f',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>Our Initiatives</span>
          </div>

          <h2 style={{
            color: '#0a192f',
            fontFamily: 'var(--font-display, "Playfair Display", serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0'
          }}>
            Driving Force in <em style={{
              fontFamily: 'var(--font-display, "Playfair Display", serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#d4af37',
            }}>Social & Cultural</em> Development
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.08)', transition: { duration: 0.3 } }}
            >
              {/* Image Section */}
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay gradient for label */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                }} />
                {/* Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  color: '#d4af37', // Gold color based on the image
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}>
                  {prog.label}
                </div>
              </div>

              {/* Content Section */}
              <div style={{ padding: '2rem 1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display, "Playfair Display", serif)',
                  fontSize: '1.4rem',
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3,
                  fontWeight: 400
                }}>
                  {prog.title}
                </h3>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#55428f', // purple color based on the image
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem'
                  }}>
                    {prog.subtitle}
                  </div>
                  <p style={{
                    color: '#888',
                    fontSize: '0.85rem',
                    margin: 0
                  }}>
                    {prog.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
