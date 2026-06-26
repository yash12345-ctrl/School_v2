import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './about.css';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const aimRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const whoInView = useInView(whoRef, { once: true, margin: '-10%' });
  const quoteInView = useInView(quoteRef, { once: true, margin: '-10%' });
  const missionInView = useInView(missionRef, { once: true, margin: '-10%' });
  const aimInView = useInView(aimRef, { once: true, margin: '-10%' });
  const activitiesInView = useInView(activitiesRef, { once: true, margin: '-10%' });
  const mediaInView = useInView(mediaRef, { once: true, margin: '-10%' });

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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => whoRef.current?.scrollIntoView({ behavior: 'smooth' })}
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
              <img src="/A1.webp" alt="FACES Community" />
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
              <img src="/A2.webp" alt="FACES Mission" />
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
              <img src="/A3.webp" alt="FACES Aim" />
            </div>
            <div className="about-image-decorator" />
          </motion.div>
        </div>
      </section>

      {/* ─── Block 5: Activities (Image Left, Text Right) ──────────────── */}
      <section ref={activitiesRef} className="about-block reversed dark-bg">
        <div className="about-block-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={activitiesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-block-media"
          >
            <div className="about-image-wrapper" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <img src="/A4.webp" alt="FACES Activities" />
            </div>
            <div className="about-image-decorator" style={{ borderColor: 'var(--gold)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={activitiesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-block-content"
          >
            <span className="about-block-subtitle">✦ What We Do</span>
            <h2 className="about-block-title" style={{ color: 'var(--white)' }}>Activities</h2>
            <div className="gold-divider" />
            <p className="about-block-desc" style={{ marginBottom: '1rem' }}>
              We encourage co-operation in cultural, social and sporting activities between members. As the parent body of all active alumni in schools and colleges in Kolkata, we are also involved with their events and functions. Also, we aim to become a driving force in the creation and further development in the field of Higher Education.
            </p>
            <p className="about-block-desc" style={{ marginBottom: '1rem' }}>
              FACES has been associated or has supported the programs listed:
            </p>
            <ul className="about-block-list">
              <li>
                <div>The SAMPARK Project, an initiative of Kolkata Police is supported by FACES. An endeavour to take the idea of Community Policing, SAMPARK enlightens children with the functioning of the Police Forces.</div>
              </li>
              <li>
                <div>We supported the West Bengal Tourism Development Corporation & director of Tourism, Government of West Bengal recently to celebrate World Tourism Day. “The Kite Festival”, held in November 2011 and 2012.</div>
              </li>
              <li>
                <div>Amity Kolkata Half Marathon in association with FACES organised on the 5th of February, 2012. The half marathon was organised in support of the underprivileged girl child.</div>
              </li>
              <li>
                <div>Network 18 & Avon Cyclothon, was the first ever cyclothon event held in the city of Kolkata. Organised in association with FACES, on the 18th of March, 2012.</div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── Block 6: Media Coverage ──────────────────────────────── */}
      <section ref={mediaRef} className="about-block">
        <div className="about-block-container" style={{ gridTemplateColumns: '1fr' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mediaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-block-content"
            style={{ alignItems: 'center', textAlign: 'center' }}
          >
            <span className="about-block-subtitle">✦ In The News</span>
            <h2 className="about-block-title">Media Coverage</h2>
            <div className="gold-divider" />
            <p className="about-block-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Highlights and features of our initiatives across various media platforms. Click any image to enlarge.
            </p>

            <div className="media-grid">
              {['/A8 (1).webp', '/A8 (2).webp', '/A8 (3).webp', '/A8 (4).webp'].map((src, index) => {
                const rotate = [-6, 4, -3, 5][index % 4];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: rotate - 15 }}
                    animate={mediaInView ? { opacity: 1, scale: 1, rotate: rotate } : {}}
                    whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="media-item"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt={`Media Coverage ${index + 1}`} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                &times;
              </button>
              <img src={selectedImage} alt="Enlarged Media" className="lightbox-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
