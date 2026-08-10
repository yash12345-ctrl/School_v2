import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      color: 'white',
      padding: '5rem 2rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div className="container-xl">
        {/* Top: Logo + tagline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
          className="footer-top"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'white',
                display: 'inline-block',
                padding: '0.5rem 0.8rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <img
                  src="/v1.webp"
                  alt="FACES Logo"
                  style={{ height: '50px', width: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: 'white',
                letterSpacing: '0.05em'
              }}>
                FACES
              </div>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              maxWidth: '360px',
            }}>
              Bringing together all active alumni associations across Kolkata to liaison resources for the betterment of society.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {['𝕏', '𝕗', '𝕚𝕟', '▶'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  id={`footer-social-${i}`}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* United Alumni badge */}
          <motion.div
            whileHover={{ y: -5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '18px',
              padding: '0.75rem',
              textAlign: 'center',
              minWidth: '200px',
              minHeight: '220px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              marginRight: '2rem',
            }}
          >
            <div style={{ marginBottom: '0rem', display: 'flex', justifyContent: 'center' }}>
              
              <div
             style={{
              width: '160px',
              height: '160px',
              overflow: 'hidden',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
             justifyContent: 'center',
           }}
            >
            <img
                src="/image1.png"
              alt="United Alumni"
              style={{
              width: '160px',
              height: '160px',
              objectFit: 'cover',
              transform: 'scale(1.3)',
            }}
            />
            
          </div>
          
            </div>
          </motion.div>
          <p
    style={{
      marginTop: '-1rem',
      marginBottom: 0,
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      textAlign: 'right',
      marginRight: '-15rem',
      fontFamily: 'var(--font-display)',
    }}
  >
    Follow us on Instagram
  </p>
         <div><div>
  
        </div></div>
        </div>
          
        

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
        }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Aeternum Academy. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(item => (
              <a
                key={item}
                href="#"
                id={`footer-${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
