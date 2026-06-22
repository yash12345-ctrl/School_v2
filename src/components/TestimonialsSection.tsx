import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'Aeternum didn\'t just give me an education — it gave me a worldview. The values of rigor, compassion, and relentless curiosity I developed here became the bedrock of everything I have built.',
    author: 'Jonathan Harley',
    role: 'CEO, Harley Global Ventures',
    year: "Class of '98",
    image: '/alumni_ceo.png',
  },
  {
    id: 'testimonial-2',
    quote:
      'On the days I\'m in the operating theater making split-second decisions, I think back to the discipline and critical thinking honed at Aeternum. This institution shaped not just my career, but my character.',
    author: 'Dr. Aisha Patel',
    role: 'Chief Surgeon, Johns Hopkins',
    year: "Class of '02",
    image: '/alumni_doctor.png',
  },
  {
    id: 'testimonial-3',
    quote:
      'From our innovation lab to the NASA collaboration, every audacious dream was encouraged. Aeternum taught me that the boundary of the possible is just a starting point, not a limit.',
    author: 'Marcus Chen',
    role: 'Lead Aerospace Engineer, Orion Space Systems',
    year: "Class of '05",
    image: '/alumni_engineer.png',
  },
  {
    id: 'testimonial-4',
    quote:
      'The entrepreneurship program here was a revelation. At 16, I was pitching business ideas to real investors. That fearlessness — that belief in my own potential — was Aeternum\'s greatest gift to me.',
    author: 'Sofia Ramirez',
    role: 'Co-Founder, NovaTech Solutions',
    year: "Class of '10",
    image: '/alumni_entrepreneur.png',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const navigate = (newIndex: number) => {
    setDirection(newIndex > active ? 1 : -1);
    setActive(newIndex);
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[active];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: '8rem 2rem',
        background: 'white',
        overflow: 'hidden',
      }}
    >
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="text-overline" style={{ marginBottom: '1rem' }}>
            ✦ In Their Own Words
          </div>
          <h2 className="text-display-lg" style={{ color: 'var(--navy)' }}>
            Alumni <em>Testimonials</em>
          </h2>
        </motion.div>

        {/* Testimonial Stage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{
            position: 'relative',
            background: 'var(--off-white)',
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
            minHeight: '320px',
            overflow: 'hidden',
          }}>
            {/* Quote mark decoration */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              left: '2.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '8rem',
              lineHeight: 1,
              color: 'var(--gold)',
              opacity: 0.15,
              userSelect: 'none',
              pointerEvents: 'none',
            }}>
              "
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '3rem',
                  alignItems: 'center',
                }}
                className="testimonial-inner"
              >
                {/* Quote Content */}
                <div>
                  <blockquote
                    className="testimonial-quote"
                    style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}
                  >
                    "{current.quote}"
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: 'var(--gold)',
                      flexShrink: 0,
                    }} />
                    <div>
                      <div style={{
                        fontWeight: 700,
                        color: 'var(--navy)',
                        fontSize: '0.95rem',
                      }}>
                        {current.author}
                      </div>
                      <div style={{
                        fontSize: '0.78rem',
                        color: 'var(--gray-mid)',
                        marginTop: '0.1rem',
                      }}>
                        {current.role} · {current.year}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portrait */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '3px solid white',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}>
                  <img
                    src={current.image}
                    alt={current.author}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2.5rem',
          }}>
            {/* Prev */}
            <button
              id="testimonial-prev"
              onClick={() => navigate((active - 1 + testimonials.length) % testimonials.length)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--gray-light)',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--navy)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-light)';
                (e.currentTarget as HTMLElement).style.color = 'var(--navy)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => navigate(i)}
                style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? 'var(--gold)' : 'var(--gray-light)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }}
              />
            ))}

            {/* Next */}
            <button
              id="testimonial-next"
              onClick={() => navigate((active + 1) % testimonials.length)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--gray-light)',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--navy)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-light)';
                (e.currentTarget as HTMLElement).style.color = 'var(--navy)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonial-inner {
            grid-template-columns: 1fr !important;
          }
          .testimonial-inner > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
