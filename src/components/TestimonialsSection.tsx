import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="mission-aim"
      ref={ref}
      style={{
        padding: '10rem 2rem',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '8rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ width: '60px', height: '1px', background: 'var(--gold)' }} />
            <div className="text-overline" style={{ color: 'var(--gold)', letterSpacing: '0.2em' }}>
              Core Purpose
            </div>
          </div>
          <h2 className="text-display-lg" style={{ color: 'var(--navy)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', maxWidth: '900px', lineHeight: 1.1 }}>
            Driving change through <em>collaboration & action.</em>
          </h2>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid',
            gap: '3rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            paddingTop: '4rem',
            marginBottom: '4rem'
          }}
          className="editorial-grid"
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--navy)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>01.</span>
              The Mission
            </h3>
          </div>
          
          <div style={{
            fontSize: '1.35rem',
            lineHeight: 1.8,
            color: 'var(--navy)',
            fontWeight: 300,
            maxWidth: '800px'
          }}>
            <p style={{ marginBottom: '2rem' }}>
              <strong style={{ fontWeight: 500 }}>FACES</strong> has taken up the task of bringing together all the active alumni associations of Schools, Colleges and Educational institutes in Kolkata to liaison resources for the betterment of society.
            </p>
            <p>
              Our mission is to bring together all the active Alumni/ae associations of educational institutes in Kolkata and aid in their plethora of activities.
            </p>
          </div>
        </motion.div>

        {/* Aim */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gap: '3rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            paddingTop: '4rem',
          }}
          className="editorial-grid"
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--navy)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>02.</span>
              Our Aim
            </h3>
          </div>
          
          <div>
            <p style={{
              fontSize: '1.35rem',
              lineHeight: 1.8,
              color: 'var(--navy)',
              fontWeight: 300,
              maxWidth: '800px',
              marginBottom: '4rem'
            }}>
              Our aim is to facilitate knowledge transfer between its members by means of interchange so that they can benefit from the added value identities of individuals, schools and their individual freedom in learning and research.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}>
              <div style={{
                background: 'var(--off-white)',
                padding: '2.5rem',
                borderRadius: '16px',
                borderLeft: '2px solid var(--gold)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }} className="aim-card">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '1rem' }}>Cultural Cooperation</h4>
                <p style={{ color: 'var(--gray-dark)', lineHeight: 1.7, fontSize: '1rem' }}>
                  We encourage cooperation in cultural, social and sporting activities between all our esteemed members.
                </p>
              </div>

              <div style={{
                background: 'var(--off-white)',
                padding: '2.5rem',
                borderRadius: '16px',
                borderLeft: '2px solid var(--navy)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }} className="aim-card">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>
                  <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '1rem' }}>Driving Force</h4>
                <p style={{ color: 'var(--gray-dark)', lineHeight: 1.7, fontSize: '1rem' }}>
                  Aiming to become a driving force in the creation and further development in the field of Higher Education, upliftment of the downtrodden and enhancing the avenues of service for mankind.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .editorial-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .editorial-grid {
            grid-template-columns: 280px 1fr;
          }
        }
        .aim-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
      `}</style>
    </section>
  );
}
