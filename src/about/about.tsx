import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './about.css';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const aimRef = useRef<HTMLDivElement>(null);

  const whoInView = useInView(whoRef, { once: true, margin: '-10%' });
  const quoteInView = useInView(quoteRef, { once: true, margin: '-10%' });
  const missionInView = useInView(missionRef, { once: true, margin: '-10%' });
  const aimInView = useInView(aimRef, { once: true, margin: '-10%' });

  return (
    <div id="about" className="about-page">
      {/* ─── Hero Header ────────────────────────────────── */}
      <header ref={heroRef} className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-tagline">✦ Shaping Leaders. Building Legacies ✦</p>
        </motion.div>
      </header>

      {/* ─── Block 1: Who We Are (Text Left, Image Right) ──────────────── */}
      <section ref={whoRef} className="about-block">
        <div className="about-block-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-block-content"
          >
            <span className="about-block-subtitle">✦ Who We Are</span>
            <h2 className="about-block-title">Who Are We?</h2>
            <div className="gold-divider" />
            <p className="about-block-desc" style={{ marginBottom: '1rem' }}>
              FACES is a non-profit organization founded in 2006 and is formally constituted by charter in 2007. FACES is an association of an established Alumni of multi-disciplinary schools and colleges of Kolkata. FACES has organised various social, cultural and philanthropic activities and has been instrumental in bringing together the alumni of various schools, colleges and educational institutes in Kolkata to do constructive work for the weaker sections in society.
            </p>
            <p className="about-block-desc" style={{ marginBottom: '1rem' }}>
              FACES has played a vital role in creating awareness about social issues like gender inequality, concern for the girl child and involving school children and responsible citizens of Kolkata for aiding the civil administration for spreading awareness on pertinent issues in the city.
            </p>
            <p className="about-block-desc">
              In the last eighteen years, FACES has crossed huge milestones in pioneering awareness movements and drives, whether it was the Global Village programme or India Against Corruption, A Safe Kolkata during Diwali awareness drive or rehabilitating the homeless from Jammu and Kashmir, FACES as an organisation has always taken a giant leap of faith and followed issues close to its heart.
            </p>
            <ul className="about-block-list">
              <li>Founded in 2006 (Chartered in 2007)</li>
              <li>Multi-disciplinary Alumni Association</li>
              <li>18+ Years of Social Action & Philanthropy</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-block-media"
          >
            <div className="about-image-wrapper">
              <img src="/a.JPG" alt="FACES Community" />
            </div>
            <div className="about-image-decorator" />
          </motion.div>
        </div>
      </section>

      {/* ─── Block 2: Education Quote (Centered) ──────────────── */}
      <section ref={quoteRef} className="about-quote-block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="about-quote-container"
        >
          <span className="about-quote-icon">“</span>
          <blockquote className="about-quote-text">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
        </motion.div>
      </section>

      {/* ─── Block 3: Mission (Image Left, Text Right) ──────────────── */}
      <section ref={missionRef} className="about-block reversed dark-bg">
        <div className="about-block-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-block-media"
          >
            <div className="about-image-wrapper" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <img src="/a2.png" alt="FACES Mission" />
            </div>
            <div className="about-image-decorator" style={{ borderColor: 'var(--gold)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-block-content"
          >
            <span className="about-block-subtitle">✦ Our Mission</span>
            <h2 className="about-block-title" style={{ color: 'var(--white)' }}>Our Mission</h2>
            <div className="gold-divider" />
            <p className="about-block-desc" style={{ marginBottom: '1rem' }}>
              FACES has taken up the task of bringing together all the active alumni associations of Schools, Colleges and Educational institutes in Kolkata to liaison resources for betterment of society.
            </p>
            <p className="about-block-desc">
              Our mission is to bring together all the active Alumni/ae associations of educational institutes in Kolkata and aid in their plethora of activities.
            </p>
            <ul className="about-block-list">
              <li>Liaison resources for societal betterment</li>
              <li>Support school and college alumni activities</li>
              <li>Collaborative positive constructive action</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── Block 4: Aim (Text Left, Image Right) ──────────────── */}
      <section ref={aimRef} className="about-block">
        <div className="about-block-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aimInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-block-content"
          >
            <span className="about-block-subtitle">✦ Our Aim & Vision</span>
            <h2 className="about-block-title">Our Aim</h2>
            <div className="gold-divider" />
            <p className="about-block-desc">
              Our aim is to facilitate knowledge transfer between its members by means of interchange so that they can benefit from the added value identities of individuals, schools and their individual freedom in learning and research. We encourage cooperation in cultural, social and sporting activities between members. Also, we aim to become a driving force in the creation and further development in the field of Higher Education, upliftment of the downtrodden and enhance the avenues of service for mankind.
            </p>
            <ul className="about-block-list">
              <li>Facilitate knowledge transfer and interchange</li>
              <li>Cooperation in cultural, social, and sporting activities</li>
              <li>Development in Higher Education & service to mankind</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aimInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-block-media"
          >
            <div className="about-image-wrapper">
              <img src="/a3.png" alt="FACES Aim" />
            </div>
            <div className="about-image-decorator" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
