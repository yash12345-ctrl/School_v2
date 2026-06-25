import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    id: 'ngo-walk',
    image: '/v6.png',
    title: 'Protest Walk',
    description: 'NGO Parivar organised a walk to protest against the killing of female child. The walk organized in association with FACES was held in May, 2012.',
  },
  {
    id: 'sit-draw',
    image: '/v8.png',
    title: 'Sit & Draw Competition',
    description: 'Sit & Draw Competition organized by Indo Tibetan Border Police (ITBP) in association with FACES on June 15th, 2012.',
  },
  {
    id: 'microsoft-workshop',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    title: 'Microsoft Workshop',
    description: 'Microsoft organized a workshop for school principals hosted by La Martiniere for Girls in association with FACES. Organized in June, the workshop saw a large participation of school and college head of institution.',
  },
  {
    id: 'global-village',
    image: '/v9.png',
    title: 'Global Village',
    description: 'Global Village, organized bt the AISEC in association with La Martinere for Girls School Kolkata, WEBFUNA, FACES amongst others was held in the month of July.',
  },
  {
    id: 'cyber-crime',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    title: 'Cyber Crime Workshop',
    description: 'Cyber Crime workshop organized by the Kolkata Police in association with FACES was organized in July 2012. Five schools from the city participated in the workshop and they were informed of the hazards of using the internet and how to be safe while surfing online.',
  },
  {
    id: 'ram-avatar',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
    title: 'Sanmarg Initiative',
    description: 'FACES has been a support partners to Ram Avatar Gupt, a Sanmarg initiative.',
  },
  {
    id: 'other-initiatives',
    image: '/v10.png',
    title: 'Other Initiatives',
    description: 'Others: Eye chbeck up camps, Lions Quest Teachers Workshop, YMCA Basketball Tournament, National Integration Day with Kolkata Police, etc.',
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
        <style>
          {`
            .social-impact-layout {
              display: flex;
              flex-direction: column;
              gap: 4rem;
            }
            .social-header {
              margin-bottom: 2rem;
            }
            .social-list {
              display: flex;
              flex-direction: column;
            }
            @media (min-width: 992px) {
              .social-impact-layout {
                flex-direction: row;
                align-items: flex-start;
              }
              .social-header {
                position: sticky;
                top: 20vh;
                width: 35%;
                margin-bottom: 0;
                padding-right: 3rem;
              }
              .social-list {
                width: 65%;
              }
            }

            .impact-row {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              padding: 3rem 0;
              border-bottom: 1px solid rgba(255,255,255,0.08);
              transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              cursor: pointer;
              position: relative;
            }
            
            @media (min-width: 768px) {
              .impact-row {
                flex-direction: row;
                align-items: flex-start;
                gap: 3rem;
              }
            }

            .impact-row:hover {
              border-bottom-color: rgba(201,168,76,0.4);
            }

            .impact-image-wrapper {
              flex-shrink: 0;
              width: 120px;
              height: 120px;
              border-radius: 20px;
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255,255,255,0.08);
              box-shadow: 
                0 8px 30px -4px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              position: relative;
              overflow: hidden;
            }

            @media (min-width: 768px) {
              .impact-image-wrapper {
                width: 240px;
                height: 160px;
                border-radius: 24px;
              }
            }
            
            .impact-image-wrapper img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
              z-index: 1;
              display: block;
              filter: brightness(0.8);
            }
            
            .impact-image-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(10, 16, 30, 0.5) 0%, transparent 100%);
              z-index: 2;
              transition: opacity 0.6s ease;
            }
            
            .impact-row:hover .impact-image-wrapper {
              transform: scale(1.02) translateY(-4px);
              border-color: rgba(201,168,76,0.4);
              box-shadow: 
                0 25px 50px -10px rgba(201,168,76,0.25),
                inset 0 1px 1px rgba(255, 255, 255, 0.2);
            }

            .impact-row:hover .impact-image-wrapper img {
              transform: scale(1.08);
              filter: brightness(1);
            }

            .impact-row:hover .impact-image-overlay {
              opacity: 0.2;
            }

            .impact-content {
              flex-grow: 1;
            }

            .impact-title {
              font-family: var(--font-display);
              font-size: 2rem;
              font-weight: 400;
              color: white;
              margin-bottom: 1rem;
              line-height: 1.2;
              transition: color 0.4s ease;
            }

            .impact-row:hover .impact-title {
              color: var(--gold);
            }

            .impact-desc {
              font-size: 1.05rem;
              color: rgba(255,255,255,0.55);
              line-height: 1.8;
              transition: color 0.4s ease;
              max-width: 600px;
            }

            .impact-row:hover .impact-desc {
              color: rgba(255,255,255,0.85);
            }

            .impact-arrow {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid rgba(255,255,255,0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              transition: all 0.4s ease;
              flex-shrink: 0;
              margin-top: 1rem;
            }

            @media (min-width: 768px) {
              .impact-arrow {
                margin-top: 0;
                align-self: center;
              }
            }

            .impact-row:hover .impact-arrow {
              background: var(--gold);
              border-color: var(--gold);
              color: var(--navy);
              transform: translateX(10px);
            }
          `}
        </style>

        <div className="social-impact-layout">
          {/* Sticky Header */}
          <motion.div
            className="social-header"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-overline" style={{ color: 'var(--gold)', marginBottom: '1.2rem' }}>
              ✦ Community & Impact
            </div>
            <h2 className="text-display-lg" style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1 }}>
              Our Social
              <br />
              <em style={{ color: 'var(--gold-light)' }}>Initiatives</em>
            </h2>
            <div style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              margin: '2rem 0',
            }} />
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}>
              FACES is committed to making a tangible difference in society through various collaborations, workshops, and awareness campaigns spanning across communities and organizations.
            </p>
          </motion.div>

          {/* Scrolling List */}
          <div className="social-list">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                className="impact-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="impact-image-wrapper">
                  <img src={feature.image} alt={feature.title} loading="lazy" />
                  <div className="impact-image-overlay" />
                </div>

                <div className="impact-content">
                  <h3 className="impact-title">
                    {feature.title}
                  </h3>
                  <p className="impact-desc">
                    {feature.description}
                  </p>
                </div>

                <div className="impact-arrow">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
