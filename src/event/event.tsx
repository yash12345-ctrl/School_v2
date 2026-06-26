import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Calendar, ArrowRight, MapPin, X, ChevronLeft, ChevronRight, Images, Grid, List, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './event.css';

/* ─────────────────── Particles ─────────────────── */
const Particles = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
    {[...Array(20)].map((_, i) => (
      <motion.div key={i}
        initial={{ opacity: 0, y: "100vh", x: `${Math.random() * 100}vw`, scale: Math.random() * 0.5 + 0.5 }}
        animate={{ opacity: [0, 0.6, 0], y: "-10vh" }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 10, ease: "linear" }}
        style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', backgroundColor: '#fcf6ba', boxShadow: '0 0 12px 2px rgba(212,175,55,0.6)' }}
      />
    ))}
  </div>
);

/* ─────────────────── Data ─────────────────── */
const EVENTS = [
  { id: 1, title: "Book Launch of “Magis Mantra”", date: "", location: "St. Xavier's University", category: "Cultural", year: 2023, description: "Celebrating the journey of Father Felix Raj, SJ, Vice-Chancellor St Xavier’s University.", images: ["/v2.png", "/v3.png", "/v4.png", "/e1.png"] },
  { id: 2, title: "Blanket Distribution", date: "", location: "Kolkata", category: "Awareness", year: 2023, description: "An initiative by FACES with Abdus Shokur Foundation and Anti-Hunger Squad Foundation.", images: ["/v9.png", "/v10.png", "/e2.png", "/e3.png"] },
  { id: 3, title: "Christmas Cake Mixing Ritual", date: "", location: "Kolkata", category: "Cultural", year: 2023, description: "NIPS, in association with FACES, celebrated the joyous festival of Christmas with the cake mixing ritual.", images: ["/e4.png", "/e5.png", "/e6.png",] },
  { id: 4, title: "Documentary by Zara Bhardwaj on Communal Harmony", date: "", location: "Kolkata", category: "Cultural", year: 2023, description: "Supported by FACES.", images: ["/e7.png", "/v11.png", "/e9.png", "/e10.png", "/e8.png"] },
  { id: 5, title: "Book Launch of 'Comarades and Comebacks' by Saira Shah Halim", date: "", location: "Kolkata", category: "Cultural", year: 2023, description: "Supported by FACES.", images: ["/e11.png", "/e12.png", "/e13.png", "/e14.png"] },
  { id: 6, title: "Education Summit", date: "", location: "Kolkata", category: "Summit", year: 2023, description: "Supported by FACES.", images: ["/v7.png", "/e15.png", "/e16.png", "/e17.png"] },
  { id: 7, title: "Book Launch of 'The Far Side'", date: "", location: "Kolkata", category: "Cultural", year: 2023, description: "Supported by FACES.", images: ["/e18.png", "/e19.png", "/e20.png", "/e21.png"] },
  { id: 8, title: "Gurukul Awards", date: "", location: "Kolkata", category: "Gala", year: 2023, description: "Supported by FACES.", images: ["/e22.png", "/e23.png", "/e24.png", "/e25.png"] },
  { id: 9, title: "Amity Half Marathon", date: "", location: "Kolkata", category: "Sports", year: 2022, description: "Supported by FACES.", images: ["/e26.png", "/e27.png", "/e28.png", "/e29.png"] },
  { id: 10, title: "The Creative Arts", date: "", location: "Kolkata", category: "Cultural", year: 2022, description: "Supported by FACES.", images: ["/v8.png", "/e30.png", "/e31.png", "/e32.png"] },
  { id: 11, title: "World Suicide Prevention Day Celebration", date: "", location: "Kolkata", category: "Awareness", year: 2022, description: "Supported by FACES.", images: ["/e33.png", "/e34.png", "/e35.png", "/e36.png"] },
  { id: 12, title: "Zard Sitara", date: "", location: "Kolkata", category: "Cultural", year: 2022, description: "Supported by FACES.", images: ["/e40.png", "/e41.png", "/e42.png", "/e43.png"] },
  { id: 13, title: "Walk Against the Killing of Girl Child", date: "", location: "Kolkata", category: "Awareness", year: 2022, description: "Supported by FACES.", images: ["/v6.png", "/e37.png", "/e38.png", "/e39.png"] },
];

const CAT_COLOR: Record<string, string> = {
  Gala: 'rgba(201,168,76,0.18)', Summit: 'rgba(100,140,255,0.18)', Dialogue: 'rgba(180,100,255,0.18)',
  Awareness: 'rgba(255,120,100,0.18)', Workshop: 'rgba(80,200,180,0.18)', Sports: 'rgba(100,220,100,0.18)',
  Cultural: 'rgba(255,180,80,0.18)', Seminar: 'rgba(120,160,255,0.18)',
};
const CAT_TEXT: Record<string, string> = {
  Gala: '#c9a84c', Summit: '#7898ff', Dialogue: '#c064ff',
  Awareness: '#ff7864', Workshop: '#4ad4bc', Sports: '#64dc64',
  Cultural: '#ffb840', Seminar: '#80a4ff',
};

/* ─────────────────── 3D Tilt Card ─────────────────── */
function TiltCard({ event, onClick, featured = false }: { event: typeof EVENTS[0], onClick: () => void, featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['8deg', '-8deg']), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-8deg', '8deg']), { stiffness: 300, damping: 30 });

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={`egc-tilt-wrapper ${featured ? 'egc-featured' : ''}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ scale: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="event-gallery-card">
        <div className="egc-image-wrap">
          <img src={event.images[0]} alt={event.title} className="egc-img" />
          <div className="egc-img-overlay" />
          {/* Animated shimmer line */}
          <div className="egc-shimmer" />
          <span className="egc-photo-count"><Images size={11} /> {event.images.length}</span>
          <span className="egc-category" style={{ background: CAT_COLOR[event.category], color: CAT_TEXT[event.category] }}>
            {event.category}
          </span>
          <div className="egc-hover-cta">
            <span>View Full Story</span><ArrowRight size={14} />
          </div>
          {featured && (
            <div className="egc-featured-label">
              <Award size={13} /> Featured
            </div>
          )}
        </div>
        <div className="egc-content">
          <div className="egc-date"><Calendar size={11} /> {event.date}</div>
          <h3 className="egc-title">{event.title}</h3>
          <div className="egc-location"><MapPin size={11} /> {event.location}</div>
          <p className="egc-excerpt">{event.description.slice(0, 80)}…</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────── Fullscreen Photo Viewer ─────────────────── */
function PhotoViewer({ images, startIdx, onClose }: { images: string[], startIdx: number, onClose: () => void }) {
  const [idx, setIdx] = useState(startIdx);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setIdx(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);
  return (
    <motion.div className="photo-viewer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="photo-viewer-inner" initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} onClick={e => e.stopPropagation()}>
        <button className="photo-viewer-close" onClick={onClose}><X size={22} /></button>
        <AnimatePresence mode="wait">
          <motion.img key={idx} src={images[idx]} className="photo-viewer-img"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} />
        </AnimatePresence>
        <button className="photo-viewer-nav left" onClick={() => setIdx(i => Math.max(i - 1, 0))} disabled={idx === 0}><ChevronLeft size={28} /></button>
        <button className="photo-viewer-nav right" onClick={() => setIdx(i => Math.min(i + 1, images.length - 1))} disabled={idx === images.length - 1}><ChevronRight size={28} /></button>
        <div className="photo-viewer-dots">
          {images.map((_, i) => <button key={i} className={`pvd ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />)}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────── Event Modal ─────────────────── */
function EventModal({ event, onClose, onPrev, onNext, hasPrev, hasNext }: {
  event: typeof EVENTS[0]; onClose: () => void; onPrev: () => void; onNext: () => void; hasPrev: boolean; hasNext: boolean;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => { setActiveImg(0); }, [event]);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape' && !viewerOpen) onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [viewerOpen]);

  return (
    <>
      <motion.div className="event-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className="event-modal-drawer"
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 34 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>

          {/* Main image */}
          <div className="modal-gallery-main" onClick={() => setViewerOpen(true)} style={{ cursor: 'zoom-in' }}>
            <AnimatePresence mode="wait">
              <motion.img key={activeImg} src={event.images[activeImg]} className="modal-main-img"
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} />
            </AnimatePresence>
            <div className="modal-img-gradient" />
            <span className="modal-category-badge" style={{ background: CAT_COLOR[event.category], color: CAT_TEXT[event.category] }}>{event.category}</span>
            <span className="modal-img-counter"><Images size={12} /> {activeImg + 1} / {event.images.length}</span>
            <div className="modal-zoom-hint">Click to enlarge</div>
          </div>

          {/* Thumbnails */}
          <div className="modal-thumbnails">
            {event.images.map((src, i) => (
              <button key={i} className={`modal-thumb ${i === activeImg ? 'active' : ''}`} onClick={() => setActiveImg(i)}>
                <img src={src} alt="" />
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="modal-content">
            <div className="modal-content-top">
              <span className="modal-year-badge">{event.date.split(',')[1]?.trim()}</span>
            </div>
            <h2 className="modal-title">{event.title}</h2>
            <div className="modal-meta">
              <span><Calendar size={14} /> {event.date}</span>
              <span><MapPin size={14} /> {event.location}</span>
            </div>
            <div className="modal-divider" />
            <p className="modal-desc">{event.description}</p>
          </div>

          {/* Nav */}
          <div className="modal-nav">
            <button className="modal-nav-btn" onClick={onPrev} disabled={!hasPrev}><ChevronLeft size={16} /> Previous</button>
            <button className="modal-nav-btn" onClick={onNext} disabled={!hasNext}>Next <ChevronRight size={16} /></button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {viewerOpen && <PhotoViewer images={event.images} startIdx={activeImg} onClose={() => setViewerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────── Legacy Stats Section ─────────────────── */
function LegacyStatsSection() {
  const stats = [
    { value: '13+', title: 'Major Events', sub: 'Landmark gatherings hosted' },
    { value: '2001', title: 'Established', sub: 'The foundation of our journey' },
    { value: '2K+', title: 'Alumni Engaged', sub: 'Connected members worldwide' },
    { value: '8', title: 'Categories', sub: 'Diverse areas of focus' },
  ];

  return (
    <section className="legacy-stats-section">
      <div className="container-xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="legacy-stats-header">
          <div className="legacy-eyebrow">✦ A LEGACY IN NUMBERS</div>
          <h2 className="legacy-title">Decades of <span className="italic">Measured</span> Excellence</h2>
        </motion.div>

        <div className="legacy-stats-grid">
          {stats.map((s, i) => (
            <motion.div key={i} className="legacy-stat-card"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="legacy-stat-line" />
              <div className="legacy-stat-value">{s.value}</div>
              <h3 className="legacy-stat-title">{s.title}</h3>
              <p className="legacy-stat-sub">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} className="legacy-footer">
          <p className="legacy-quote">"Excellence is not a destination. It is the continuous journey that never ends."</p>
          <div className="legacy-charter">— FOUNDING CHARTER, AETERNUM ACADEMY, 1974</div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── Main Page ─────────────────── */
export default function EventPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const categories = ['All', ...Array.from(new Set(EVENTS.map(e => e.category)))];
  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.category === filter);

  const selectedEvent = selectedIdx !== null ? EVENTS[selectedIdx] : null;
  const selInFiltered = selectedEvent ? filtered.findIndex(e => e.id === selectedEvent.id) : -1;
  const goNext = () => { if (selInFiltered < filtered.length - 1) setSelectedIdx(EVENTS.indexOf(filtered[selInFiltered + 1])); };
  const goPrev = () => { if (selInFiltered > 0) setSelectedIdx(EVENTS.indexOf(filtered[selInFiltered - 1])); };

  return (
    <div className="event-page-container" ref={containerRef}>
      <Navbar />
      <main className="event-main" style={{ paddingTop: 0 }}>

        {/* ── Hero ── */}
        <section className="event-hero-advanced" ref={heroRef}>
          <div className="event-premium-bg">
            <div className="event-bg-gradient-1" /><div className="event-bg-gradient-2" /><div className="event-bg-gradient-3" />
            <div className="event-noise-texture" /><div className="event-glass-blur" />
          </div>
          <Particles />
          <div className="event-hero-split container-xl">
            <div className="event-hero-left">
              <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    position: 'relative', width: '90%', height: '90%', borderRadius: '24px', overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 100px rgba(201,168,76,0.3)', zIndex: 1, border: '1px solid rgba(201,168,76,0.5)'
                  }}>
                  <img src="/v11.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: '#0a1628', opacity: 0.25, pointerEvents: 'none', mixBlendMode: 'multiply' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,22,40,0.6),transparent)', pointerEvents: 'none' }} />
                </motion.div>
              </div>
            </div>
            <div className="event-hero-right">
              <motion.div style={{ opacity, scale }} className="event-hero-content">
                <div className="title-soft-glow" />
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="event-hero-badge" style={{ marginLeft: '8rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }} />
                  Discover Experiences
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="event-hero-title">
                  <span>Extraordinary</span>
                  <span className="italic">Gatherings</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="event-hero-subtitle" style={{ marginBottom: '4rem' }}>
                  Immerse yourself in world-class events, workshops, and exclusive alumni meetups designed to foster connection, innovation, and lifelong learning.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }} style={{ position: 'relative', marginLeft: '8rem' }}>
                  <div className="button-soft-glow" />
                  <button className="btn-apple-glow" onClick={() => document.querySelector('.events-gallery-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    Explore All Events <ArrowRight size={20} />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats Section ── */}
        <LegacyStatsSection />

        {/* ── Gallery ── */}
        <section className="events-gallery-section">
          <div className="container-xl">

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="gallery-section-header">
              <div className="gallery-section-label"><span className="gallery-label-dot" />All Events</div>
              <h2 className="gallery-section-title">13 Landmark <span className="italic" style={{ color: 'var(--gold)' }}>Moments</span></h2>
              <p className="gallery-section-sub">Click any card to explore the full story — photos, highlights & details.</p>
            </motion.div>

            {/* Controls row */}
            <div className="gallery-controls-row">
              <div className="gallery-filters">
                {categories.map(cat => (
                  <button key={cat} className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                ))}
              </div>
              <div className="view-toggle">
                <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')}><Grid size={16} /></button>
                <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}><List size={16} /></button>
              </div>
            </div>

            {/* ── GRID VIEW ── */}
            {view === 'grid' && (
              <motion.div layout className="events-bento-grid">
                <AnimatePresence>
                  {filtered.map((event, idx) => (
                    <motion.div key={event.id} layout
                      initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.4, delay: idx * 0.035 }}
                      className={`bento-cell ${idx === 0 ? 'bento-featured' : idx % 5 === 3 ? 'bento-wide' : 'bento-normal'}`}
                    >
                      <TiltCard event={event} featured={idx === 0} onClick={() => setSelectedIdx(EVENTS.indexOf(event))} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── LIST VIEW ── */}
            {view === 'list' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="events-list-view">
                <AnimatePresence>
                  {filtered.map((event, idx) => (
                    <motion.div key={event.id}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="event-list-item"
                      onClick={() => setSelectedIdx(EVENTS.indexOf(event))}
                    >
                      <div className="eli-img"><img src={event.images[0]} alt={event.title} /></div>
                      <div className="eli-content">
                        <span className="eli-category" style={{ color: CAT_TEXT[event.category] }}>{event.category}</span>
                        <h3 className="eli-title">{event.title}</h3>
                        <p className="eli-desc">{event.description.slice(0, 120)}…</p>
                        <div className="eli-meta">
                          <span><Calendar size={12} />{event.date}</span>
                          <span><MapPin size={12} />{event.location}</span>
                        </div>
                      </div>
                      <div className="eli-arrow"><ArrowRight size={18} /></div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="gallery-count-label">
              Showing {filtered.length} of {EVENTS.length} events
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedIdx(null)}
            onNext={goNext} onPrev={goPrev}
            hasNext={selInFiltered < filtered.length - 1} hasPrev={selInFiltered > 0} />
        )}
      </AnimatePresence>
    </div>
  );
}
