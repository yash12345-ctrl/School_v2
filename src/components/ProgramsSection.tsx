import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    title: 'The SAMPARK Project',
    desc: 'An initiative of Kolkata Police supported by FACES. An endeavour to take the idea of Community Policing, SAMPARK enlightens children with the functioning of the Police Forces.',
    date: 'Community Policing'
  },
  {
    title: 'World Tourism Day',
    desc: 'We supported the West Bengal Tourism Development Corporation & Director of Tourism, Government of West Bengal recently to celebrate World Tourism Day. “The Kite Festival”, held in November 2011 and 2012.',
    date: 'Tourism Initiative'
  },
  {
    title: 'Amity Kolkata Half Marathon',
    desc: 'In association with FACES, organised on the 5th of February, 2012. The half marathon was organised in support of the underprivileged girl child.',
    date: 'Social Cause'
  },
  {
    title: 'Network 18 & Avon Cyclothon',
    desc: 'The first ever cyclothon event held in the city of Kolkata. Organised in association with FACES, on the 18th of March, 2012.',
    date: 'Sporting Event'
  }
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} style={{ background: '#ffffff', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient rotation animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '800px',
          height: '800px',
          marginTop: '-400px',
          border: '1px dashed rgba(212, 175, 55, 0.2)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      >
        {/* 4 moving points on the rotating circle */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '12px',
              height: '12px',
              background: 'var(--gold)',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-400px)`,
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)'
            }}
          />
        ))}
      </motion.div>

      <div className="container-xl" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>✦</span>
              <span style={{
                color: 'var(--navy)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}>Our Initiatives</span>
            </div>

            <h2 className="text-display-lg" style={{
              color: 'var(--navy)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 2rem 0'
            }}>
              Driving Force in<br/>
              <em style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--gold)',
              }}>Social & Cultural</em><br/>
              Development
            </h2>
            
            <p style={{
              color: 'var(--gray-dark)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              fontWeight: 400,
              marginBottom: '1.5rem',
              maxWidth: '540px'
            }}>
              We encourage co-operation in cultural, social and sporting activities between members. As the parent body of all active alumni in schools and colleges in Kolkata, we are also involved with their events and functions. 
            </p>
            <p style={{
              color: 'var(--gray-dark)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              fontWeight: 400,
              maxWidth: '540px'
            }}>
              We aim to become a driving force in the creation and further development in the field of Higher Education. FACES has been associated with and supported numerous impactful programs across the city.
            </p>
          </motion.div>

          {/* Right Column: 4 Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ y: -5, boxShadow: '0 15px 50px rgba(0,0,0,0.06)', transition: { duration: 0.3 } }}
              >
                {/* Decorative moving point animation on hover */}
                <motion.div
                   style={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '4px',
                     height: '100%',
                     background: 'var(--gold)',
                     originY: 0
                   }}
                   initial={{ scaleY: 0 }}
                   whileHover={{ scaleY: 1 }}
                   transition={{ duration: 0.3 }}
                />

                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  {prog.date}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--navy)',
                  marginBottom: '1rem'
                }}>
                  {prog.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  margin: 0
                }}>
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
