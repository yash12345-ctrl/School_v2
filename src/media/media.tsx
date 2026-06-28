import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { Play, Camera, FileText, Image as ImageIcon, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './media.css';

const MEDIA_ITEMS = [
  { id: 1, type: 'Video', title: 'Aeternum Academy: A Legacy of Excellence', date: 'October 2023', category: 'Videos', image: '/v11.webp', duration: '4:30' },
  { id: 2, type: 'Article', title: 'The Future of Education: Leadership Summit Highlights', date: 'August 2023', category: 'Press', image: '/v7.webp', readTime: '5 min read' },
  { id: 3, type: 'Gallery', title: 'Annual Cultural Festival 2023', date: 'June 2023', category: 'Galleries', image: '/v8.webp', count: '45 Photos' },
  { id: 4, type: 'Article', title: 'Alumni Association Announces New Scholarship Program', date: 'May 2023', category: 'Press', image: '/v9.webp', readTime: '3 min read' },
  { id: 5, type: 'Video', title: 'Campus Tour: The New Science Wing', date: 'April 2023', category: 'Videos', image: '/v10.webp', duration: '2:15' },
  { id: 6, type: 'Gallery', title: 'Sports Meet & Marathon', date: 'March 2023', category: 'Galleries', image: '/v6.webp', count: '82 Photos' },
  { id: 7, type: 'Article', title: 'Innovation in Tech Seminar', date: 'February 2023', category: 'Press', image: '/v2.webp', readTime: '4 min read' },
  { id: 8, type: 'Video', title: 'Behind the Scenes: Annual Play', date: 'January 2023', category: 'Videos', image: '/v3.webp', duration: '5:10' },
  { id: 9, type: 'Gallery', title: 'Winter Art Exhibition', date: 'December 2022', category: 'Galleries', image: '/v4.webp', count: '60 Photos' },
  { id: 10, type: 'Article', title: 'Global Outreach Initiative Launched', date: 'November 2022', category: 'Press', image: '/v5.webp', readTime: '6 min read' },
  { id: 11, type: 'Video', title: 'Student Council Elections 2022', date: 'October 2022', category: 'Videos', image: '/v1.webp', duration: '3:45' },
  { id: 12, type: 'Gallery', title: 'Founders Day Celebrations', date: 'September 2022', category: 'Galleries', image: '/v12.webp', count: '100 Photos' },
  { id: 13, type: 'Article', title: 'Sustainability Campus Drive', date: 'August 2022', category: 'Press', image: '/e1.webp', readTime: '5 min read' },
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
}

const SwipeCard = ({ item, index, cards, onSwipe }: SwipeCardProps) => {
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
      onTap={isFront ? () => {
        setExitX(300);
        onSwipe('right', item);
      } : undefined}
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

export default function MediaPage() {
  const [cards, setCards] = useState([...MEDIA_ITEMS].reverse());
  const [likedCards, setLikedCards] = useState<any[]>([]);
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

          <div className="media-hero-content container-xl">
            <motion.div
              style={{ y: titleY }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <div className="media-badge">
                <span className="media-badge-dot"></span>
                PRESS & MEDIA
              </div>
              <h1 className="media-title">
                Stories That <span className="italic">Inspire</span>
              </h1>
              <p className="media-subtitle">
                Explore our latest news, exclusive interviews, and cinematic features that capture the essence of our vibrant community.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="media-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="scroll-line"></div>
          </motion.div>
        </section>



        {/* ── Media Swipe Section ── */}
        <section className="media-swipe-section">
          <div className="container-xl media-swipe-layout">



            {/* Center Swipe Area */}
            <div className="swipe-center-area">
              <div className="media-grid-header luxurious-header">
                <div className="luxurious-divider"></div>
                <h2 className="section-heading">Media <span className="italic gold-text">Coverage</span></h2>
                <p className="media-swipe-desc">Trusted Stories. Real Impact.</p>
                <div className="luxurious-divider"></div>
              </div>

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

            {/* Right Sidebar (Saved) */}
            <div className="swipe-sidebar right-sidebar">
              <div className="sidebar-header">
                <h3>Saved Collection</h3>
                {likedCards.length > 0 && <span className="sidebar-count">{likedCards.length}</span>}
              </div>
              <div className="sidebar-list">
                <AnimatePresence>
                  {likedCards.length === 0 && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="sidebar-empty-state">
                      <Heart size={32} className="empty-icon" />
                      <p>Swipe right or tap to save your favorite stories here.</p>
                    </motion.div>
                  )}
                  {likedCards.map(c => (
                    <motion.div key={c.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="sidebar-card">
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
              <div className="media-contact-content">
                <h2>Press & Inquiries</h2>
                <p>For media inquiries, interview requests, or access to our brand assets, please contact our public relations team.</p>
                <button className="btn-premium">
                  Contact PR Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
