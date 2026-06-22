import { motion } from 'framer-motion';

const footerLinks = {
  'Academics': ['Curriculum', 'Faculty', 'Research', 'Innovation Lab', 'Library'],
  'Campus Life': ['Sports', 'Arts & Culture', 'Events', 'Student Council', 'Clubs'],
  'Admissions': ['Apply Now', 'Scholarships', 'Requirements', 'Virtual Tour', 'Contact'],
  'Community': ['Alumni Network', 'Parents', 'Partnerships', 'Giving Back', 'News'],
};

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
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              fontWeight: 600,
              marginBottom: '0.8rem',
            }}>
              Aetern<span style={{ color: 'var(--gold)' }}>um</span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              maxWidth: '360px',
            }}>
              A prestigious institution dedicated to shaping leaders, building
              legacies, and inspiring generations since 1974.
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

          {/* Accreditation badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              minWidth: '160px',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏅</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Accredited
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>
              National Board of Education
            </div>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.2rem',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: '0.7rem' }}>
                    <a
                      href="#"
                      id={`footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        transition: 'color 0.2s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2025 Aeternum Academy. All rights reserved.
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
