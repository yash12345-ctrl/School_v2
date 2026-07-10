import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, CheckCircle2, ChevronDown, ChevronDown as ScrollArrow, Globe, BookOpen } from 'lucide-react';
import './donate.css';

const FAQS = [
  { q: 'Are donations tax-exempt?', a: 'Yes! All donations made to FACES Alumni Association are eligible for tax deduction under Section 80G of the Income Tax Act. A receipt with the 80G registration details will be automatically emailed to you.' },
  { q: 'Can I set up a recurring monthly donation?', a: 'Currently, our online portal supports one-time contributions. If you would like to set up a monthly recurring standing instruction, please contact our PR team at pr@facesalumni.org.' },
  { q: 'How are the funds utilized and audited?', a: 'Transparency is our core value. 100% of designated funds go directly to the respective projects (e.g. Scholarship Fund). We publish an audited annual financial report available to all registered members.' },
  { q: 'Do you accept international donations?', a: 'Yes. You can switch the currency selector to USD to contribute via international credit/debit cards or wire transfers.' }
];

export default function DonatePage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactDetails = {
    phone: '+91-98310 19298',
    email: 'imrzak@gmail.com',
    address: '93, Phears Lane, Bowbazar, Kolkata 700 012',
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const scrollToNext = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="donate-page">
      {/* ─── Page Block 1: Hero Header ─── */}
      <header className="donate-hero donate-page-block">
        <div className="donate-hero-bg-wrapper">
          <img src="/n22.webp" alt="Alumni campus" className="donate-hero-bg" />
          <div className="donate-hero-overlay"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="donate-hero-content"
        >
          <div className="donate-badge animate-float">
            <Heart size={14} className="heart-icon" />
            <span>Empower the Future</span>
          </div>
          <h1 className="donate-hero-title">Shaping Legacies Together</h1>
          <p className="donate-hero-subtitle">
            Your generous contributions fund student scholarships, infrastructure modernization, and social impact initiatives.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap" onClick={() => scrollToNext('.donate-form-page')}>
          <span className="scroll-text">Scroll to Details</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </header>

      {/* ─── Page Block 2: Bank Details & Sponsor Info ─── */}
      <section className="donate-page-block donate-form-page">
        <div className="container-lg">
          <div className="donate-grid">

            {/* Left Column: About FACES Organization Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="donate-info-panel"
            >
              <div>
                <h2 className="panel-title">FACES</h2>
                <div className="gold-divider" />
                <p className="panel-subtitle">Non-profit alumni association, est. 2006 — Kolkata</p>

                <div className="faces-bento-grid">
                  <div className="bento-box bento-large">
                    <span className="bento-number">18+</span>
                    <span className="bento-label">Years of Service</span>
                    <p className="bento-desc">Dedicated to community welfare and social upliftment since 2006.</p>
                  </div>

                  <div className="bento-box">
                    <span className="bento-icon"><Globe size={28} /></span>
                    <span className="bento-label">Global Alumni</span>
                  </div>

                  <div className="bento-box">
                    <span className="bento-icon"><BookOpen size={28} /></span>
                    <span className="bento-label">Education</span>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Bank Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="donate-bank-details-panel"
            >
              <div className="premium-bank-card-container">
                <div className="physical-bank-card">
                  {/* Holographic glare overlay */}
                  <div className="card-glare"></div>

                  <div className="card-top-row">
                    <div className="card-chip">
                      <div className="chip-line"></div>
                      <div className="chip-line"></div>
                      <div className="chip-line"></div>
                    </div>
                    <img src="/v1.webp" alt="FACES Logo" className="card-logo-img" />
                  </div>

                  <div className="card-number-group">
                    <span className="card-label">EMAIL</span>
                    <div className="card-number-flex">
                      <span className="card-value-large" style={{ fontSize: '1.15rem', fontFamily: 'var(--font-body)', letterSpacing: 'normal' }}>{contactDetails.email}</span>
                      <button
                        type="button"
                        className="icon-copy-btn"
                        onClick={() => handleCopy(contactDetails.email, 'email')}
                        aria-label="Copy Email"
                      >
                        {copiedField === 'email' ? <CheckCircle2 size={16} className="success-copy-icon" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="card-bottom-row" style={{ flexDirection: 'column', gap: '1rem' }}>
                    <div className="card-field">
                      <span className="card-label">PHONE</span>
                      <div className="card-number-flex">
                        <span className="card-value-small">{contactDetails.phone}</span>
                        <button
                          type="button"
                          className="icon-copy-btn"
                          onClick={() => handleCopy(contactDetails.phone, 'phone')}
                          aria-label="Copy Phone Number"
                        >
                          {copiedField === 'phone' ? <CheckCircle2 size={14} className="success-copy-icon" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                    <div className="card-field">
                      <span className="card-label">ADDRESS</span>
                      <div className="card-number-flex">
                        <span className="card-value-small" style={{ textTransform: 'none', fontSize: '0.8rem', lineHeight: '1.4', paddingRight: '1rem' }}>{contactDetails.address}</span>
                        <button
                          type="button"
                          className="icon-copy-btn"
                          onClick={() => handleCopy(contactDetails.address, 'address')}
                          aria-label="Copy Address"
                        >
                          {copiedField === 'address' ? <CheckCircle2 size={14} className="success-copy-icon" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                <p className="bank-card-note">Feel free to reach out to us for any queries or support.</p>

                {/* Toast Notification */}
                <AnimatePresence>
                  {copiedField && (
                    <motion.div
                      className="copy-toast"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    >
                      Copied to clipboard!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap dark-text" onClick={() => scrollToNext('.donate-faq-page')}>
          <span className="scroll-text">FAQs</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </section>

      {/* ─── Page Block 3: FAQ Accordion ─── */}
      <section className="donate-page-block donate-faq-page">
        <div className="container-lg">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="gold-divider-center" />

          <div className="faq-accordion">
            {FAQS.map((faq, index) => (
              <div key={index} className={`faq-item-premium ${faqOpenIndex === index ? 'open' : ''}`}>
                <button className="faq-question-premium" onClick={() => toggleFaq(index)}>
                  <div className="faq-question-text">
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{faq.q}</span>
                  </div>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={20} className="faq-arrow-premium" />
                  </div>
                </button>
                <AnimatePresence>
                  {faqOpenIndex === index && (
                    <motion.div
                      className="faq-answer-premium"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
