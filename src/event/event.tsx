import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, MapPin, Users, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './event.css';

const Particles = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: "100vh", 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.6, 0], 
            y: "-10vh",
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: '#fcf6ba',
            boxShadow: '0 0 12px 2px rgba(212,175,55,0.6)'
          }}
        />
      ))}
    </div>
  );
};

export default function EventPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="event-page-container" ref={containerRef}>
      <motion.div 
        className="custom-cursor" 
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <Navbar />
      
      <main className="event-main" style={{ paddingTop: 0 }}>
        {/* Advanced Apple-Style Hero Section */}
        <section className="event-hero-advanced">
          {/* Premium Animated Background Layers */}
          <div className="event-premium-bg">
            <img src="/v1.jpeg" className="event-bg-image" alt="" />
            <div className="event-bg-gradient-1" />
            <div className="event-bg-gradient-2" />
            <div className="event-bg-gradient-3" />
            <div className="event-noise-texture" />
            <div className="event-glass-blur" />
          </div>
          <Particles />
          
          <div className="event-hero-split container-xl">
            <div className="event-hero-left">
              <div className="event-hero-floating-cards">
                <motion.div style={{ y: y1 }} className="event-floating-card floating-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotate: 2, scale: 1.02 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Next Event</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Annual Gala Dinner</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 500, fontSize: '0.9rem' }}>June 28</span>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.75rem', color: '#fff' }}>2 Days Left</span>
              </div>
              <div style={{ height: 4, width: '100%', borderRadius: 2, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                 <div style={{ height: '100%', width: '85%', background: 'var(--gold)', borderRadius: 2 }} />
              </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="event-floating-card floating-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotate: -2, scale: 1.02 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                >
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Attendance</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>500+</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #e8e6e0, #9a9690)', border: '2px solid rgba(25,25,30,1)', marginLeft: '-0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#000' }}>
                      👤
                    </div>
                  ))}
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gold)', border: '2px solid rgba(25,25,30,1)', marginLeft: '-0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#000', fontWeight: 'bold' }}>
                    +
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 500 }}>
                  +35 Joined Today
                </div>
              </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: y3 }} className="event-floating-card floating-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotate: 2, scale: 1.02 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                >
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={16} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>Global Reach</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Multiple Chapters</div>
                </div>
              </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: y4 }} className="event-floating-card floating-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotate: -2, scale: 1.02 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
                >
              <div style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>15+</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Workshops & Gatherings hosted every year.
              </div>
                </motion.div>
              </motion.div>
            </motion.div>
              </div>
            </div>

            <div className="event-hero-right">
              <motion.div 
                style={{ opacity, scale }}
                className="event-hero-content"
              >
                <div className="title-soft-glow" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="event-hero-badge"
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }} />
              Discover Experiences
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="event-hero-title"
            >
              <span>Extraordinary</span>
              <span className="italic">Gatherings</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="event-hero-subtitle"
              style={{ marginBottom: '4rem' }}
            >
              Immerse yourself in world-class events, workshops, and exclusive alumni meetups designed to foster connection, innovation, and lifelong learning across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'relative' }}
            >
              <div className="button-soft-glow" />
              <button className="btn-apple-glow" onClick={() => {
                document.querySelector('.event-list-section')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Calendar <ArrowRight size={20} />
              </button>
            </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Organized Events Section */}
        <section className="event-list-section">
          <div className="container-xl">
            
            {/* Segmented Controls (Tabs) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="event-tabs"
            >
              {['upcoming', 'past', 'workshops'].map(tab => (
                <button 
                  key={tab}
                  className={`event-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Featured Event (Always the first most important event) */}
                {activeTab === 'upcoming' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="featured-event-card"
                  >
                    <div className="featured-event-image">
                      <img src="/v11.png" alt="Featured Event" />
                    </div>
                    <div className="featured-event-content">
                      <div className="featured-event-badge">Featured Event</div>
                      <h2 className="featured-event-title">Annual General Meeting & Gala</h2>
                      <div className="event-meta">
                        <div className="event-meta-item">
                          <Calendar size={18} color="var(--gold)" />
                          <span>Oct 14, 2026</span>
                        </div>
                        <div className="event-meta-item">
                          <Clock size={18} color="var(--gold)" />
                          <span>6:00 PM IST</span>
                        </div>
                        <div className="event-meta-item">
                          <MapPin size={18} color="var(--gold)" />
                          <span>ITC Royal Bengal, Kolkata</span>
                        </div>
                      </div>
                      <p className="featured-event-desc">
                        Join alumni leaders, distinguished guests, and members from across the city for an exclusive evening of networking, strategic planning, and celebration of our collective impact.
                      </p>
                      <button className="btn-dark" style={{ alignSelf: 'flex-start', padding: '1rem 2rem', borderRadius: '100px', background: 'var(--navy)', color: 'white', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Section Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="section-header"
                >
                  <h2>{activeTab === 'upcoming' ? 'More Upcoming' : activeTab === 'past' ? 'Past Highlights' : 'Workshops & Seminars'}</h2>
                  <div style={{ color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    View All Calendar <ArrowRight size={16} />
                  </div>
                </motion.div>

                {/* Events Grid */}
                <div className="event-grid">
                  {[
                    {
                      date: activeTab === 'past' ? "SEP 10, 2026" : "NOV 02, 2026",
                      title: activeTab === 'workshops' ? "Leadership Seminar" : "Cyber Security Workshop",
                      desc: "A special interactive session focusing on modern digital safety for school students and faculty members.",
                      image: "/v10.png"
                    },
                    {
                      date: activeTab === 'past' ? "AUG 15, 2026" : "DEC 15, 2026",
                      title: activeTab === 'workshops' ? "Tech & Innovation Series" : "End of Year Mixer",
                      desc: "Celebrating the achievements of our partner associations with an elegant dinner and awards ceremony.",
                      image: "/v6.png"
                    },
                    {
                      date: activeTab === 'past' ? "JUL 05, 2026" : "JAN 20, 2027",
                      title: activeTab === 'workshops' ? "Career Counseling" : "Alumni Sports Meet",
                      desc: "A day filled with friendly competition and sportsmanship among alumni members across Kolkata.",
                      image: "/v7.png"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="event-card"
                    >
                      <div className="event-image-placeholder">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="event-content">
                        <div className="event-date">{item.date}</div>
                        <h3 className="event-title">{item.title}</h3>
                        <p className="event-desc">{item.desc}</p>
                        <button className="btn-glass">View Details</button>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
