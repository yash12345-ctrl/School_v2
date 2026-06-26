import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, ArrowUpRight, Camera, FileText, Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './media.css';

const MEDIA_CATEGORIES = ['All', 'Press', 'Videos', 'Galleries'];

const MEDIA_ITEMS = [
  { id: 1, type: 'Video', title: 'Aeternum Academy: A Legacy of Excellence', date: 'October 2023', category: 'Videos', image: '/v11.png', duration: '4:30' },
  { id: 2, type: 'Article', title: 'The Future of Education: Leadership Summit Highlights', date: 'August 2023', category: 'Press', image: '/v7.png', readTime: '5 min read' },
  { id: 3, type: 'Gallery', title: 'Annual Cultural Festival 2023', date: 'June 2023', category: 'Galleries', image: '/v8.png', count: '45 Photos' },
  { id: 4, type: 'Article', title: 'Alumni Association Announces New Scholarship Program', date: 'May 2023', category: 'Press', image: '/v9.png', readTime: '3 min read' },
  { id: 5, type: 'Video', title: 'Campus Tour: The New Science Wing', date: 'April 2023', category: 'Videos', image: '/v10.png', duration: '2:15' },
  { id: 6, type: 'Gallery', title: 'Sports Meet & Marathon', date: 'March 2023', category: 'Galleries', image: '/v6.png', count: '82 Photos' },
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'Video': return <Play size={14} />;
    case 'Article': return <FileText size={14} />;
    case 'Gallery': return <ImageIcon size={14} />;
    default: return <Camera size={14} />;
  }
};

export default function MediaPage() {
  const [filter, setFilter] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const filteredItems = filter === 'All' ? MEDIA_ITEMS : MEDIA_ITEMS.filter(item => item.category === filter);

  return (
    <div className="media-page-wrapper">
      <Navbar />

      <main className="media-main">
        {/* ── Cinematic Hero Section ── */}
        <section className="media-hero" ref={heroRef}>
          <motion.div className="media-hero-bg-wrapper" style={{ scale: heroScale, opacity: heroOpacity }}>
            <img src="/n1.png" alt="Media Background" className="media-hero-bg-img" />
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



        {/* ── Media Grid Section ── */}
        <section className="media-grid-section">
          <div className="container-xl">
            <div className="media-grid-header">
              <h2 className="section-heading">Media <span className="italic gold-text">Archive</span></h2>

              <div className="media-filters">
                {MEDIA_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`media-filter-btn ${filter === cat ? 'active' : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="media-bento-grid">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`media-card-wrap ${idx === 0 || idx === 3 ? 'media-card-large' : 'media-card-normal'}`}
                  >
                    <div className="media-card">
                      <div className="media-card-img-wrap">
                        <img src={item.image} alt={item.title} className="media-card-img" />
                        <div className="media-card-overlay"></div>
                        <div className="media-card-type">
                          {getIconForType(item.type)}
                          {item.type}
                        </div>

                        <div className="media-card-hover-action">
                          {item.type === 'Video' ? <Play size={24} fill="currentColor" /> : <ArrowUpRight size={24} />}
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
                        <div className="media-card-link">
                          Explore <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
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
