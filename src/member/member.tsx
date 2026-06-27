import { motion } from 'framer-motion';
import './member.css';

export default function MemberPage() {
  return (
    <div className="member-page">
      {/* ─── Hero Section ─── */}
      <header className="member-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="member-hero-title">FACES - Members</h1>
          <p className="member-hero-subtitle">✦ Our Distinguished Alumni ✦</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.querySelector('.core-team-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [-60, 60] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent"
            />
          </div>
        </motion.div>
      </header>

      {/* ─── Core Team Section ─── */}
      <section className="core-team-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Core Team
        </motion.h2>
        <div className="gold-divider-center" />

        <div className="team-tree">
          {/* Top Row: President */}
          <div className="team-row">
            <motion.div 
              className="team-member-card president-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="team-member-photo">
                <img src="/a10.png" alt="Imran Zaki" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Imran Zaki</h3>
                <p className="team-member-role">President</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: VP, Sec, Treas */}
          <div className="team-row">
            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="team-member-photo">
                <img src="/v2.webp" alt="Vice President" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">VP Name</h3>
                <p className="team-member-role">Vice President</p>
              </div>
            </motion.div>

            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="team-member-photo">
                <img src="/v3.webp" alt="Secretary" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Sec. Name</h3>
                <p className="team-member-role">Secretary</p>
              </div>
            </motion.div>

            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="team-member-photo">
                <img src="/v4.webp" alt="Treasurer" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Treas. Name</h3>
                <p className="team-member-role">Treasurer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Eminent Personalities Section ─── */}
      <section className="eminent-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Some eminent personalities
          </h2>
          <p style={{ color: 'var(--gold)', marginBottom: '3rem', fontSize: '1.2rem', fontStyle: 'italic' }}>
            who are member
          </p>
        </motion.div>

        <div className="eminent-list">
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={index}
              className="eminent-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="eminent-photo">
                <img src={`/A${index + 5}.webp`} alt={`Eminent Member ${item}`} />
              </div>
              <div className="eminent-details">
                <h3 className="eminent-name">(Name)</h3>
                <p className="eminent-role-company">(Designation), (Co. Name)</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
