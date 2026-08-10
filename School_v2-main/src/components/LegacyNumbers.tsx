import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 50, suffix: '+', label: 'Years of Excellence', sublabel: 'A foundation built across generations' },
  { number: 15000, suffix: '+', label: 'Alumni Worldwide', sublabel: 'Leaders across 6 continents' },
  { number: 100, suffix: '%', label: 'Student Support', sublabel: 'Scholarships, mentorship & beyond' },
  { number: 25, suffix: '+', label: 'National Awards', sublabel: 'Recognized for academic excellence' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.number, 2000, active);
  const formatted = stat.number >= 1000
    ? (count >= 1000 ? Math.floor(count / 1000) + 'K' : '0')
    : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        textAlign: 'center',
        padding: '2.5rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Decorative line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '40px',
        background: 'linear-gradient(to bottom, var(--gold), transparent)',
      }} />

      <div className="stat-number" style={{ marginTop: '1rem' }}>
        <span className="stat-gold">{formatted}</span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 3vw, 3.5rem)',
          color: 'var(--gold)',
          fontWeight: 300,
        }}>{stat.suffix}</span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.35rem',
        fontWeight: 500,
        color: 'var(--navy)',
        marginTop: '0.5rem',
        marginBottom: '0.4rem',
      }}>
        {stat.label}
      </h3>
      <p style={{
        fontSize: '0.8rem',
        color: 'var(--gray-mid)',
        letterSpacing: '0.03em',
      }}>
        {stat.sublabel}
      </p>
    </motion.div>
  );
}

export default function LegacyNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <section
      id="legacy"
      ref={ref}
      style={{
        position: 'relative',
        padding: '8rem 2rem',
        overflow: 'hidden',
        background: 'var(--off-white)',
      }}
    >
      {/* Subtle background mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 20% 50%, rgba(26,58,107,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 60% 70% at 80% 30%, rgba(201,168,76,0.05) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="text-overline" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>
            ✦ A Legacy In Numbers
          </div>
          <h2 className="text-display-lg" style={{ color: 'var(--navy)' }}>
            Decades of <em>Measured</em> Excellence
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0',
          borderTop: '1px solid var(--gray-light)',
          borderLeft: '1px solid var(--gray-light)',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                borderRight: '1px solid var(--gray-light)',
                borderBottom: '1px solid var(--gray-light)',
                position: 'relative',
              }}
            >
              <StatCard stat={stat} index={i} active={inView} />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontStyle: 'italic',
            color: 'var(--navy)',
            fontWeight: 300,
            opacity: 0.8,
            maxWidth: '700px',
            marginInline: 'auto',
          }}
        >
          "Excellence is not a destination. It is the continuous journey that never ends."
          <footer style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--gold)',
            fontStyle: 'normal',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '1rem',
          }}>
            — Founding Charter, Aeternum Academy, 1974
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
