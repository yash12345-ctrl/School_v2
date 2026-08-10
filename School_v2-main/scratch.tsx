import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    title: 'Book Launch: "Magis Mantra"',
    subtitle: 'CELEBRATING THE JOURNEY',
    desc: 'Father Felix Raj, SJ',
    label: 'Honoured 2024',
    image: '/A1.webp'
  },
  {
    title: 'Blanket Distribution',
    subtitle: 'COMMUNITY INITIATIVE',
    desc: 'FACES Alumni Association',
    label: 'Winter 2024',
    image: '/A2.webp'
  },
  {
    title: 'Communal Harmony',
    subtitle: 'DOCUMENTARY FILM',
    desc: 'By Zara Bhardwaj',
    label: 'Project 2024',
    image: '/A3.webp'
  }
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} style={{ background: '#f8f9fa', padding: '6rem 0' }}>
      <div className="container-xl">
        
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
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.08)', transition: { duration: 0.3 } }}
            >
              {/* Image Section */}
              <div style={{ position: 'relative', height: '240px' }}>
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
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                }} />
                {/* Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  color: 'var(--gold, #d4af37)',
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
                  color: 'var(--navy, #0a192f)',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}>
                  {prog.title}
                </h3>
                
                <div style={{ marginTop: 'auto' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#6b4c9a', // purple color based on the image
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}>
                    {prog.subtitle}
                  </div>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
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
