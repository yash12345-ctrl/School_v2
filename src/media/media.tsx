import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { Play, Camera, FileText, Image as ImageIcon, Heart, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './media.css';

const MEDIA_ITEMS = [
  { id: 1, type: 'Article', title: 'T2 - The Telegraph', date: '18th December, 2023', category: 'Press', image: '/n1.webp', readTime: '5 min read', modalHeading: 'NIPS Hotel Management Institute Hosts Grand Christmas Cake Mixing Ceremony', modalContent: 'FACES partnered with NIPS Hotel Management Institute to organize a vibrant Christmas Cake Mixing Ceremony, bringing together students, educators, and distinguished guests. The event featured festive performances, carol singing, and over 25 handcrafted delicacies prepared by aspiring hospitality professionals. The celebration showcased creativity, teamwork, and the spirit of the festive season while promoting experiential learning in hospitality education.' },
  { id: 2, type: 'Article', title: 'The Telegraph - Metro', date: '1st October, 2023', category: 'Press', image: '/v18.webp', readTime: '5 min read', modalHeading: 'Lotus Mobile Medical Bus Completes One Year of Community Healthcare', modalContent: 'The Lotus Mobile Medical Bus marked its first anniversary after successfully delivering healthcare services across multiple states. Equipped with modern medical facilities for eye, dental, and ENT check-ups, the initiative conducted hundreds of medical camps, travelled thousands of kilometres, and served over 41,000 patients. FACES continues to expand healthcare accessibility through collaborations with social organizations and NGOs.' },
  { id: 3, type: 'Article', title: 'The Telegraph - Metro', date: '21st June, 2022', category: 'Press', image: '/v19.webp', readTime: '4 min read', modalHeading: 'Celebrating Excellence: Honouring Inspiring Muslim Women', modalContent: 'FACES, in collaboration with the Mashriq Education Trust, honoured fifteen accomplished Muslim women from diverse professional backgrounds, including education, healthcare, journalism, entrepreneurship, and culinary arts. The initiative recognized their outstanding achievements while encouraging future generations of women to pursue education, leadership, and professional excellence.' },
  { id: 4, type: 'Article', title: 'T2-The Telegraph', date: '11th June, 2022', category: 'Press', image: '/v20.webp', readTime: '3 min read', modalHeading: 'Celebrating Chinese Heritage at the Dragon Boat Festival', modalContent: 'FACES joined the celebrations of the Dragon Boat Festival, promoting cultural exchange and international friendship. The event featured traditional lion dances, martial arts demonstrations, Chinese music, authentic cuisine, and cultural performances. It brought together diplomats, artists, and community members to celebrate diversity and strengthen cultural ties.' },
  { id: 5, type: 'Article', title: 'Times City - Times of India', date: '12th March, 2022', category: 'Press', image: '/v21.webp', readTime: '3 min read', modalHeading: 'Promoting Facts Through Meaningful Public Dialogue', modalContent: 'FACES organized a panel discussion featuring renowned scholars and public intellectuals to address misconceptions surrounding population growth. The discussion emphasized evidence-based dialogue, demographic research, education, and family planning while encouraging informed public conversations rooted in facts rather than misinformation.' },
  { id: 6, type: 'Article', title: 'Times City - Times of India', date: '24th May, 2019', category: 'Press', image: '/v22.webp', readTime: '4 min read', modalHeading: 'Promoting Creativity at the Kolkata Creativity Festival', modalContent: 'FACES participated in the Kolkata Creativity Festival at ICCR, celebrating art, innovation, and artistic expression. The festival showcased paintings, sculptures, installations, and contemporary artworks while providing artists with a platform to engage with audiences and promote creative excellence across disciplines.' },
  { id: 7, type: 'Article', title: 'T2 - The Telegraph', date: '12th February, 2016', category: 'Press', image: '/v23.webp', readTime: '4 min read', modalHeading: 'Burning Bubbles: An Immersive Journey Through Art and Emotion', modalContent: 'In association with FACES, Burning Bubbles offered audiences an immersive theatre experience combining installation art, performance, music, lighting, and audience interaction. Inspired by classic literature, the production explored themes of memory, healing, identity, and personal transformation through innovative storytelling.' },
  { id: 8, type: 'Article', title: 'Times City - Times of India', date: '1st July, 2019', category: 'Press', image: '/v24.webp', readTime: '3 min read', modalHeading: 'Extending Relief and Hope to Bhatpara Families', modalContent: 'Following incidents of violence in Bhatpara, FACES organized a humanitarian relief initiative to support affected families. Essential supplies including food grains, clothing, utensils, and household items were distributed, while rehabilitation plans focused on restoring livelihoods through skill development and sustainable employment opportunities.' },
  { id: 9, type: 'Article', title: 'Metro - The Telegraph', date: '10th March, 2016', category: 'Press', image: '/v25.webp', readTime: '4 min read', modalHeading: 'Celebrating Unity in Diversity Through Young Talent', modalContent: 'FACES supported St. Stephen\'s School\'s annual cultural programme themed Unity in Diversity. Students presented vibrant performances featuring dance, music, drama, and circus acts that celebrated India\'s rich cultural heritage. The event highlighted creativity, teamwork, and the importance of embracing diversity through education.' },
  { id: 10, type: 'Article', title: 'Metro - The Telegraph', date: '07th March, 2015', category: 'Press', image: '/v26.webp', readTime: '3 min read', modalHeading: 'Strengthening Public Service Through Communication Skills', modalContent: 'FACES collaborated with the Regional Passport Office to conduct a professional development workshop for passport officials. The programme focused on communication, empathy, conflict resolution, stress management, and citizen-centric service, helping officials enhance public interactions and improve service delivery.' },
  { id: 11, type: 'Articles', title: '', date: '', category: 'Press', image: '/v27.webp', modalHeading: '', modalContent: '' },
  { id: 12, type: 'Article', title: 'Times City - The Time Of India', date: '07th January, 2015', category: 'Press', image: '/v28.webp', readTime: '3 min read', modalHeading: 'Building Trust Between Young Citizens and the Police', modalContent: 'FACES partnered with Kolkata Police to organize an educational outreach programme introducing students to the role and responsibilities of law enforcement. Through visits to police facilities and interactive sessions with senior officers, the initiative fostered trust, encouraged civic responsibility, and inspired young people to view policing as a service to society.' },
  { id: 13, type: 'Article', title: 'Times City - The Time Of India', date: '19th January, 2015', category: 'Press', image: '/v29.webp', readTime: '5 min read', modalHeading: 'Thought-Provoking Conversations at the Apeejay Kolkata Literary Festival', modalContent: 'FACES participated in the Apeejay Kolkata Literary Festival, where distinguished historians, authors, and public intellectuals discussed India\'s democratic journey, social development, and future aspirations. The event promoted intellectual dialogue, critical thinking, and meaningful public discourse on issues of national importance.' },
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'Video': return <Play size={14} />;
    case 'Article': return <FileText size={14} />;
    case 'Gallery': return <ImageIcon size={14} />;
    default: return <Camera size={14} />;
  }
};

interface SwipeCardProps {
  item: any;
  index: number;
  cards: any[];
  onSwipe: (direction: 'left' | 'right', item: any) => void;
  onExpand: (item: any) => void;
}

const SwipeCard = ({ item, index, cards, onSwipe, onExpand }: SwipeCardProps) => {
  const x = useMotionValue(0);
  const [exitX, setExitX] = useState(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const isFront = index === cards.length - 1;
  const positionDiff = cards.length - 1 - index;

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 100;
    const swipeRight = info.offset.x > threshold || info.velocity.x > 500;
    const swipeLeft = info.offset.x < -threshold || info.velocity.x < -500;

    if (swipeRight) {
      setExitX(300);
      onSwipe('right', item);
    } else if (swipeLeft) {
      setExitX(-300);
      onSwipe('left', item);
    }
  };

  return (
    <motion.div
      className="media-swipe-card"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x: isFront ? x : 0,
        rotate: isFront ? rotate : 0,
      }}
      animate={{
        scale: isFront ? 1 : Math.max(0.8, 1 - positionDiff * 0.05),
        y: isFront ? 0 : positionDiff * 25,
        zIndex: index,
        opacity: positionDiff > 3 ? 0 : 1,
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      onTap={isFront ? () => onExpand(item) : undefined}
      exit={{ x: exitX, opacity: 0, transition: { duration: 0.3 } }}
      whileTap={isFront ? { cursor: "grabbing", scale: 0.98 } : {}}
    >
      <div className="media-card-img-wrap">
        <img src={item.image} alt={item.title} className="media-card-img" draggable={false} />
        <div className="media-card-overlay"></div>
        <div className="media-card-type">
          {getIconForType(item.type)}
          {item.type}
        </div>
      </div>
      <div className="media-card-content">
        <div className="media-card-meta">
          <span className="media-card-date">{item.date}</span>
          <span className="media-card-info">
            {item.duration || item.readTime || item.count}
          </span>
        </div>
        <h3 className="media-card-title">{item.title}</h3>
        <div className="media-swipe-hint">
          Swipe to explore
        </div>
      </div>
    </motion.div>
  );
};

export default function Media() {

  const [cards, setCards] = useState([...MEDIA_ITEMS].reverse());
  const [likedCards, setLikedCards] = useState<any[]>([]);
  const [expandedItem, setExpandedItem] = useState<any | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (direction: 'left' | 'right', item: any) => {
    if (direction === 'right') {
      setLikedCards(prev => [item, ...prev]);
    }

    setCards(prev => {
      const newCards = prev.filter(c => c.id !== item.id);
      if (newCards.length === 0) {
        setTimeout(() => {
          setCards([...MEDIA_ITEMS].reverse());
          setLikedCards([]);
        }, 800);
      }
      return newCards;
    });
  };

  const manualSwipe = (direction: 'left' | 'right') => {
    if (cards.length === 0) return;
    const topCard = cards[cards.length - 1];
    // To trigger exit animation correctly when using manual buttons, 
    // the SwipeCard itself needs to know to exit. 
    // But since we can't easily trigger SwipeCard's state from parent,
    // we just use handleSwipe. It will instantly remove it (no exit anim from parent), 
    // but the user's focus is on the sidebar updating.
    handleSwipe(direction, topCard);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (cards.length === 0) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const swiperSection = document.querySelector('.media-swipe-section');
        if (swiperSection) {
          const rect = swiperSection.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView) {
            e.preventDefault();
            if (e.key === 'ArrowRight') manualSwipe('right');
            else if (e.key === 'ArrowLeft') manualSwipe('left');
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleCloseModal = () => {
    if (expandedItem) {
      setCards(prevCards => {
        const filtered = prevCards.filter(c => c.id !== expandedItem.id);
        return [...filtered, expandedItem];
      });
    }
    setExpandedItem(null);
  };

  return (
    <div className="media-page-wrapper">
      <Navbar />

      <main className="media-main">
        {/* ── Cinematic Hero Section ── */}
        <section className="media-hero" ref={heroRef}>
          <motion.div className="media-hero-bg-wrapper" style={{ scale: heroScale, opacity: heroOpacity }}>
            <img src="/n1.webp" alt="Media Background" className="media-hero-bg-img" />
            <div className="media-hero-overlay"></div>
            <div className="media-hero-gradient"></div>
          </motion.div>

          <div className="media-hero-container">
            <div className="media-hero-content">
              <motion.div
                style={{ y: titleY }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="media-title">Stories That Inspire</h1>
                <p className="media-tagline">✦ PRESS & MEDIA ✦</p>

                <div className="media-hero-actions">
                  <button
                    className="hero-btn-primary"
                    onClick={() => document.querySelector('.media-swipe-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Media
                  </button>

                  <div className="media-hero-stats">
                    <div className="media-stat-item">
                      <span className="media-stat-num">13+</span>
                      <span className="media-stat-label">Media Features</span>
                    </div>
                    <div className="media-stat-divider"></div>
                    <div className="media-stat-item">
                      <span className="media-stat-num">15+</span>
                      <span className="media-stat-label">Years of Impact</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="media-hero-visuals">
              <motion.div
                className="media-3d-scene"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className="media-3d-carousel">
                  <div className="media-3d-core"></div>

                  {['/v12.webp', '/v13.webp', '/v14.webp', '/v15.webp', '/v16.webp', '/v17.webp'].map((src, i) => (
                    <div
                      key={i}
                      className="media-3d-item"
                      style={{ transform: `rotateY(${i * 60}deg) translateZ(280px)` }}
                    >
                      <div className="media-3d-item-inner">
                        <img src={src} alt={`Media ${i + 1}`} />
                        <div className="media-3d-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="media-visuals-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                ✦ LATEST EVENT HIGHLIGHTS ✦
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
            onClick={() => {
              const swiperSection = document.querySelector('.media-swipe-section');
              swiperSection?.scrollIntoView({ behavior: 'smooth' });
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
        </section>



        {/* ── Media Swipe Section ── */}
        <section className="media-swipe-section">
          <div className="container-xl">
            <div className="media-grid-header luxurious-header">
              <div className="luxurious-divider"></div>
              <h2 className="section-heading">Media <span className="italic gold-text">Coverage</span></h2>
              <p className="media-swipe-desc">Trusted Stories. Real Impact.</p>
              <div className="luxurious-divider"></div>
            </div>
          </div>

          <div className="container-xl media-swipe-layout">
            {/* Center Swipe Area */}
            <div className="swipe-center-area">
              <div className="swipe-container-wrapper">
                <div className="swipe-container">
                  <AnimatePresence mode="popLayout">
                    {cards.map((item, index) => (
                      <SwipeCard
                        key={item.id}
                        item={item}
                        index={index}
                        cards={cards}
                        onSwipe={handleSwipe}
                        onExpand={setExpandedItem}
                      />
                    ))}
                  </AnimatePresence>

                  {cards.length === 0 && (
                    <motion.div
                      className="media-swipe-empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3>Looping...</h3>
                      <p>Fetching the deck again.</p>
                    </motion.div>
                  )}
                </div>

              </div>
            </div>

            {/* Premium Glassmorphic Data Rail */}
            <div className="layout-transfer-wire">
              {/* Left Connection Mechanism */}
              <div className="rail-node left-node">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>

              {/* The Main Rail */}
              <div className="data-rail-container">
                <div className="rail-glass-backdrop"></div>

                {/* The static energy line */}
                <div className="rail-baseline"></div>

                {/* The moving energy pulse */}
                <div className="rail-energy-pulse">
                  <div className="pulse-tail"></div>
                  <div className="pulse-head"></div>
                </div>

                {/* Elegant particles along the rail */}
                <div className="rail-particle rp-1"></div>
                <div className="rail-particle rp-2"></div>
                <div className="rail-particle rp-3"></div>
              </div>

              {/* Right Connection Mechanism */}
              <div className="rail-node right-node">
                <div className="node-core"></div>
                <div className="node-ring"></div>
                <div className="node-ripple"></div>
              </div>
            </div>

            {/* Right Sidebar (Saved) */}
            <div className="swipe-sidebar right-sidebar">
              <div className="sidebar-header">
                <h3>Saved Collection</h3>
                {likedCards.length > 0 && <span className="sidebar-count">{likedCards.length}</span>}
              </div>
              <div className="sidebar-list">
                <AnimatePresence>
                  {likedCards.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="sidebar-empty-state">
                      <div className="empty-icon-wrapper">
                        <Heart size={36} strokeWidth={1.5} className="empty-icon-pulse" />
                        <div className="empty-icon-glow"></div>
                      </div>
                      <h4>Your Vault is Empty</h4>
                      <p>Swipe right or tap the heart to archive premium stories to your collection.</p>

                      <div className="empty-skeletons">
                        <div className="transfer-wire">
                          <div className="glowing-orb"></div>
                        </div>
                        <div className="skeleton-card"></div>
                        <div className="skeleton-card skeleton-delay"></div>
                      </div>
                    </motion.div>
                  )}
                  {likedCards.map(c => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="sidebar-card"
                      onClick={() => setExpandedItem(c)}
                    >
                      <div className="sidebar-card-img-container">
                        <img src={c.image} alt={c.title} />
                        <div className="sidebar-card-overlay">
                          {getIconForType(c.type)}
                        </div>
                      </div>
                      <div className="sidebar-card-content">
                        <div className="sidebar-card-badges">
                          <span className="sidebar-card-type">{c.type}</span>
                        </div>
                        <h4>{c.title}</h4>
                        <div className="sidebar-card-meta">
                          <span>{c.date}</span>
                          <span className="dot">•</span>
                          <span>{c.duration || c.readTime || c.count}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

        {/* ── Press Contact Section ── */}
        <section className="media-contact-section">
          <div className="container-xl">
            <motion.div
              className="media-contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="media-contact-bg"></div>
              <div className="media-contact-grid">

                {/* Left Side Content */}
                <div className="media-contact-left">
                  <h2>Connect With Us!</h2>
                  <p>Donations are welcome and are exempted u/s 8-G and 12A of the Indian Income Tax Act, 1961.</p>

                  <div className="contact-details-grid">
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <Phone size={20} />
                      </div>
                      <span>+91-98310 19298</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <Mail size={20} />
                      </div>
                      <span>imrzak@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <MapPin size={20} />
                      </div>
                      <span>93, Phears Lane, Bowbazar, Kolkata 700 012</span>
                    </div>
                  </div>
                </div>

                {/* Right Side Images */}
                <div className="media-contact-images">
                  <div className="contact-img-wrapper img-1">
                    <img src="/s1.webp" alt="Community Event" />
                  </div>
                  <div className="contact-img-wrapper img-2">
                    <img src="/s2.webp" alt="Charity Drive" />
                  </div>
                  <div className="contact-img-wrapper img-3">
                    <img src="/s3.webp" alt="Donation Camp" />
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {expandedItem && (
            <motion.div
              className="media-expanded-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="media-expanded-backdrop" onClick={handleCloseModal}></div>
              <motion.div
                className="media-expanded-modal"
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              >
                <button className="modal-close-btn" onClick={handleCloseModal}>
                  <X size={24} />
                </button>

                <div className="modal-visual">
                  <img src={expandedItem.image} alt={expandedItem.title} />
                  <div className="modal-visual-gradient"></div>
                </div>

                <div className="modal-details">
                  <div className="modal-meta-row">
                    <span className="modal-meta-tag">
                      {getIconForType(expandedItem.type)} {expandedItem.type}
                    </span>
                    <span className="modal-meta-date">{expandedItem.date}</span>
                  </div>

                  <h2 className="modal-title">{expandedItem.title}</h2>

                  <div className="modal-description">
                    {expandedItem.modalHeading && (
                      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: 'var(--navy)', lineHeight: '1.4' }}>
                        {expandedItem.modalHeading}
                      </h4>
                    )}
                    {expandedItem.modalContent && (
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {expandedItem.modalContent}
                      </p>
                    )}
                  </div>

                  <div className="modal-action-row">
                    <button
                      className="modal-btn nav-btn"
                      onClick={() => {
                        const idx = MEDIA_ITEMS.findIndex(item => item.id === expandedItem?.id);
                        if (idx !== -1) setExpandedItem(MEDIA_ITEMS[(idx - 1 + MEDIA_ITEMS.length) % MEDIA_ITEMS.length]);
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="modal-btn primary"
                      onClick={() => {
                        const idx = MEDIA_ITEMS.findIndex(item => item.id === expandedItem?.id);
                        if (idx !== -1) setExpandedItem(MEDIA_ITEMS[(idx + 1) % MEDIA_ITEMS.length]);
                      }}
                    >
                      Next Story <ChevronRight size={20} />
                    </button>
                    <button
                      className="modal-btn secondary"
                      onClick={() => {
                        if (!likedCards.find(c => c.id === expandedItem.id)) {
                          setLikedCards(prev => [...prev, expandedItem]);
                        }
                      }}
                    >
                      <Heart size={18} fill={likedCards.find(c => c.id === expandedItem?.id) ? "var(--gold)" : "none"} color={likedCards.find(c => c.id === expandedItem?.id) ? "var(--gold)" : "currentColor"} /> Save
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
