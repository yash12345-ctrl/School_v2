import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, Copy, CheckCircle2, ChevronDown, ChevronDown as ScrollArrow } from 'lucide-react';
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

  const bankDetails = {
    bankName: 'Indian Overseas Bank',
    branch: 'Indian exchange place',
    accountNumber: '22690200000422',
    ifscCode: 'IOBA0000015',
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
          <img src="/n2.webp" alt="Alumni campus" className="donate-hero-bg" />
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
                <h2 className="panel-title">About FACES</h2>
                <div className="gold-divider" />
                <p className="panel-subtitle">Non-profit alumni association, est. 2006 — Kolkata</p>
                
                <div className="highlight-list">
                  <div className="highlight-item">
                    <span className="highlight-star">✦</span>
                    <span>Alumni network across multi-disciplinary schools &amp; colleges</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-star">✦</span>
                    <span>Social, cultural &amp; philanthropic initiatives for weaker sections</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-star">✦</span>
                    <span>Awareness drives — gender equality, girl child education, civic issues</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-star">✦</span>
                    <span>18+ years of community service &amp; landmark campaigns</span>
                  </div>
                </div>
              </div>

              <div className="donate-security-note">
                <ShieldCheck className="shield-icon" size={24} />
                <div>
                  <h4>Tax Exemption & Audits</h4>
                  <p>All direct bank transfers qualify for 80G tax exemptions. Send your transfer receipt to pr@facesalumni.org to request your certificate.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Bank Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="donate-bank-details-panel"
            >
              <div className="bank-details-card">
                <div className="card-header-block">
                  <h3 className="bank-card-title">BANK DETAILS</h3>
                  <p className="bank-card-subtitle">Instant domestic transfers directly to our NGO account.</p>
                </div>

                <div className="details-fields-list">
                  
                  {/* Field: Bank Name */}
                  <div className="detail-item-field">
                    <div className="field-info-wrap">
                      <span className="field-label">BANK NAME</span>
                      <span className="field-value">{bankDetails.bankName}</span>
                    </div>
                    <button
                      type="button"
                      className="copy-field-btn"
                      onClick={() => handleCopy(bankDetails.bankName, 'bankName')}
                      aria-label="Copy Bank Name"
                    >
                      {copiedField === 'bankName' ? <CheckCircle2 size={18} className="success-copy-icon" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Field: Branch */}
                  <div className="detail-item-field">
                    <div className="field-info-wrap">
                      <span className="field-label">BRANCH</span>
                      <span className="field-value">{bankDetails.branch}</span>
                    </div>
                    <button
                      type="button"
                      className="copy-field-btn"
                      onClick={() => handleCopy(bankDetails.branch, 'branch')}
                      aria-label="Copy Branch Name"
                    >
                      {copiedField === 'branch' ? <CheckCircle2 size={18} className="success-copy-icon" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Field: Account Number */}
                  <div className="detail-item-field">
                    <div className="field-info-wrap">
                      <span className="field-label">ACCOUNT NUMBER</span>
                      <span className="field-valueHighlight">{bankDetails.accountNumber}</span>
                    </div>
                    <button
                      type="button"
                      className="copy-field-btn"
                      onClick={() => handleCopy(bankDetails.accountNumber, 'accountNumber')}
                      aria-label="Copy Account Number"
                    >
                      {copiedField === 'accountNumber' ? <CheckCircle2 size={18} className="success-copy-icon" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Field: IFSC Code */}
                  <div className="detail-item-field">
                    <div className="field-info-wrap">
                      <span className="field-label">IFSC CODE</span>
                      <span className="field-valueHighlight">{bankDetails.ifscCode}</span>
                    </div>
                    <button
                      type="button"
                      className="copy-field-btn"
                      onClick={() => handleCopy(bankDetails.ifscCode, 'ifscCode')}
                      aria-label="Copy IFSC Code"
                    >
                      {copiedField === 'ifscCode' ? <CheckCircle2 size={18} className="success-copy-icon" /> : <Copy size={18} />}
                    </button>
                  </div>

                </div>

                {/* Toast Notification */}
                <AnimatePresence>
                  {copiedField && (
                    <motion.div
                      className="copy-toast"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
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
              <div key={index} className={`faq-item ${faqOpenIndex === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-arrow" />
                </button>
                <AnimatePresence>
                  {faqOpenIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
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
