import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown, ChevronDown as ScrollArrow, Globe, BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import './contact.css';

const FAQS = [
  { q: 'Are donations tax-exempt?', a: 'Yes! All donations made to FACES Alumni Association are eligible for tax deduction under Section 80G of the Income Tax Act. A receipt with the 80G registration details will be automatically emailed to you.' },
  { q: 'Can I set up a recurring monthly donation?', a: 'Currently, our online portal supports one-time contributions. If you would like to set up a monthly recurring standing instruction, please contact our PR team at pr@facesalumni.org.' },
  { q: 'How are the funds utilized and audited?', a: 'Transparency is our core value. 100% of designated funds go directly to the respective projects (e.g. Scholarship Fund). We publish an audited annual financial report available to all registered members.' },
  { q: 'Do you accept international donations?', a: 'Yes. You can switch the currency selector to USD to contribute via international credit/debit cards or wire transfers.' }
];

export default function ContactPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

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
    <div className="contact-page">
      {/* ─── Page Block 1: Hero Header ─── */}
      <header className="contact-hero contact-page-block">
        <div className="contact-hero-bg-wrapper">
          <img src="/n22.webp" alt="Alumni campus" className="contact-hero-bg" />
          <div className="contact-hero-overlay"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-hero-content"
        >
          <div className="contact-badge animate-float">
            <Heart size={14} className="heart-icon" />
            <span>Empower the Future</span>
          </div>
          <h1 className="contact-hero-title">Shaping Legacies Together</h1>
          <p className="contact-hero-subtitle">
            Your generous contributions fund student scholarships, infrastructure modernization, and social impact initiatives.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap" onClick={() => scrollToNext('.contact-form-page')}>
          <span className="scroll-text">Scroll to Details</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </header>

      {/* ─── Page Block 2: Bank Details & Sponsor Info ─── */}
      <section className="contact-page-block contact-form-page">
        <div className="container-lg">
          <div className="contact-grid">

            {/* Left Column: About FACES Organization Information */}

            <div>
              <h2 className="panel-title">FACES</h2>
              
              <p className="panel-subtitle">Non-profit alumni association, est. 2006 — Kolkata</p>
              <div className="gold-divider" />
              <p>Donations are welcome and are exempted u/s 8-G and 12A of the Indian Income Tax Act, 1961.</p>

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

            {/* Right Column: Connect With Us */}
            <motion.div
              className="media-contact-card small-contact-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="media-contact-bg"></div>
              <div className="media-contact-left">
                <h2>Connect With Us!</h2>
               

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

              <div className="small-contact-images">
                <div className="contact-img-wrapper small-img-1 reload-trigger">
                  <img src="/s1.webp" alt="Community Event" />
                </div>
                <div className="contact-img-wrapper small-img-2">
                  <img src="/s2.webp" alt="Charity Drive" />
                </div>
                <div className="contact-img-wrapper small-img-3">
                  <img src="/s3.webp" alt="Donation Camp" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap dark-text" onClick={() => scrollToNext('.contact-faq-page')}>
          <span className="scroll-text">FAQs</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </section>
      {/* ─── Page Block 3: FAQ Accordion ─── */}
      <section className="contact-page-block contact-faq-page">
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
