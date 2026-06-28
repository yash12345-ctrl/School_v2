import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, Award, Sparkles, Send, ArrowRight, CheckCircle2, ChevronDown, Users, TrendingUp, Calendar, ChevronDown as ScrollArrow } from 'lucide-react';
import './donate.css';

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000];

const ALLOCATION_FUNDS = [
  { id: 'general', title: 'General Alumni Fund', desc: 'Used where the need is greatest, supporting daily operations and urgent initiatives.' },
  { id: 'scholarship', title: 'Felix Raj Scholarship Fund', desc: 'Directly funds tuition, books, and accommodation for students from disadvantaged backgrounds.' },
  { id: 'infrastructure', title: 'Campus Modernization', desc: 'Upgrading smart classrooms, high-tech science labs, and sports infrastructure.' },
  { id: 'welfare', title: 'Community Outreach & Welfare', desc: 'Supports social projects, winter blanket distribution, and communal harmony programs.' }
];

const RECENT_DONORS = [
  { name: 'Dr. Amitav Ghosh', batch: "Class of '88", amount: '₹25,000', message: 'In memory of our wonderful school days. Keep up the great work!' },
  { name: 'Sneha Roy', batch: "Class of '12", amount: '$150', message: 'Proud to support the scholarship fund that helps shape future leaders.' },
  { name: 'Ananya Chatterjee', batch: "Class of '97", amount: '₹10,000', message: 'Delighted to see the community coming together for campus modernisation.' },
  { name: 'Vikramjit Singh', batch: "Class of '04", amount: '₹15,000', message: 'A small contribution towards our community welfare programs.' },
];

const FAQS = [
  { q: 'Are donations tax-exempt?', a: 'Yes! All donations made to FACES Alumni Association are eligible for tax deduction under Section 80G of the Income Tax Act. A receipt with the 80G registration details will be automatically emailed to you.' },
  { q: 'Can I set up a recurring monthly donation?', a: 'Currently, our online portal supports one-time contributions. If you would like to set up a monthly recurring standing instruction, please contact our PR team at pr@facesalumni.org.' },
  { q: 'How are the funds utilized and audited?', a: 'Transparency is our core value. 100% of designated funds go directly to the respective projects (e.g. Scholarship Fund). We publish an audited annual financial report available to all registered members.' },
  { q: 'Do you accept international donations?', a: 'Yes. You can switch the currency selector to USD to contribute via international credit/debit cards or wire transfers.' }
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedFund, setSelectedFund] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    message: '',
  });
  
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getActiveAmount = () => {
    if (selectedAmount === 'custom') {
      return parseFloat(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handlePresetSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomFocus = () => {
    setSelectedAmount('custom');
  };

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
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
          <span className="scroll-text">Scroll to Donate</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </header>

      {/* ─── Page Block 2: Stats + Form ─── */}
      <section className="donate-page-block donate-form-page">
        <div className="container-lg">
          {/* Donation Progress Stats */}
          <div className="stats-container">
            <div className="stat-card">
              <TrendingUp className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">₹6.8L / $8.5K</span>
                <span className="stat-label">Total Raised This Term</span>
              </div>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">142</span>
                <span className="stat-label">Active Alumni Donors</span>
              </div>
            </div>
            <div className="stat-card">
              <Calendar className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">100%</span>
                <span className="stat-label">Transparency & Audit</span>
              </div>
            </div>
          </div>

          {/* Main Donation Grid */}
          <div className="donate-grid">
            {/* Left Panel: Impact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="donate-info-panel"
            >
              <div>
                <h2 className="panel-title">Why Your Support Matters</h2>
                <div className="gold-divider" />
                
                <div className="impact-points">
                  <div className="impact-point">
                    <div className="impact-icon-wrap">
                      <Award size={20} />
                    </div>
                    <div className="impact-text">
                      <h3>Scholarship Programs</h3>
                      <p>Enabling deserving students from underprivileged backgrounds to access quality education.</p>
                    </div>
                  </div>

                  <div className="impact-point">
                    <div className="impact-icon-wrap">
                      <Sparkles size={20} />
                    </div>
                    <div className="impact-text">
                      <h3>Campus Development</h3>
                      <p>Upgrading laboratories, libraries, and classroom spaces to create a modern learning environment.</p>
                    </div>
                  </div>

                  <div className="impact-point">
                    <div className="impact-icon-wrap">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="impact-text">
                      <h3>Social Responsibility</h3>
                      <p>Funding our social outreach initiatives, blanket distribution, and communal harmony events.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="donate-security-note">
                <ShieldCheck className="shield-icon" size={24} />
                <div>
                  <h4>Secure Contribution Portal</h4>
                  <p>All contributions are processed securely. You will receive an 80G tax exemption certificate via email.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="donate-form-panel"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="donation-form"
                    onSubmit={handleSubmit}
                    className="donate-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="form-section-title">Select Donation Amount</h3>
                    
                    {/* Currency Selector */}
                    <div className="currency-selector">
                      <button
                        type="button"
                        className={currency === 'INR' ? 'active' : ''}
                        onClick={() => setCurrency('INR')}
                      >
                        INR (₹)
                      </button>
                      <button
                        type="button"
                        className={currency === 'USD' ? 'active' : ''}
                        onClick={() => setCurrency('USD')}
                      >
                        USD ($)
                      </button>
                    </div>

                    {/* Presets Grid */}
                    <div className="amount-presets">
                      {PRESET_AMOUNTS.map((amt) => {
                        const displayAmt = currency === 'INR' ? `₹${amt.toLocaleString('en-IN')}` : `$${(amt / 80).toFixed(0)}`;
                        return (
                          <button
                            key={amt}
                            type="button"
                            className={`preset-btn ${selectedAmount === amt ? 'active' : ''}`}
                            onClick={() => handlePresetSelect(amt)}
                          >
                            {displayAmt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Amount Input */}
                    <div className={`custom-amount-field ${selectedAmount === 'custom' ? 'active' : ''}`}>
                      <span className="currency-symbol">{currency === 'INR' ? '₹' : '$'}</span>
                      <input
                        type="number"
                        placeholder="Enter Custom Amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        onFocus={handleCustomFocus}
                        min="1"
                      />
                    </div>

                    {/* Allocation Fund Selector */}
                    <h3 className="form-section-title" style={{ marginTop: '2.5rem' }}>Direct My Contribution to</h3>
                    <div className="fund-allocations">
                      {ALLOCATION_FUNDS.map((fund) => (
                        <div
                          key={fund.id}
                          className={`fund-card ${selectedFund === fund.id ? 'active' : ''}`}
                          onClick={() => setSelectedFund(fund.id)}
                        >
                          <div className="fund-checkbox">
                            {selectedFund === fund.id && <CheckCircle2 size={16} />}
                          </div>
                          <div className="fund-info">
                            <h4>{fund.title}</h4>
                            <p>{fund.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="form-section-title" style={{ marginTop: '2.5rem' }}>Donor Information</h3>
                    
                    <div className="form-grid">
                      <div className="input-group">
                        <label htmlFor="donor-name">Full Name</label>
                        <input
                          id="donor-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="input-group">
                        <label htmlFor="donor-email">Email Address</label>
                        <input
                          id="donor-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="input-group">
                        <label htmlFor="donor-batch">Batch / Year (Optional)</label>
                        <input
                          id="donor-batch"
                          type="text"
                          value={formData.batch}
                          onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                          placeholder="e.g. Class of 2012"
                        />
                      </div>

                      <div className="input-group full-width">
                        <label htmlFor="donor-message">Message of Support (Optional)</label>
                        <textarea
                          id="donor-message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Share a message with the school community..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="submit-donation-btn"
                      disabled={isSubmitting || getActiveAmount() <= 0}
                    >
                      {isSubmitting ? (
                        <span className="loader">Processing Secure Payment...</span>
                      ) : (
                        <>
                          <span>Contribute {currency === 'INR' ? '₹' : '$'}{getActiveAmount().toLocaleString()}</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thank-you"
                    className="donation-success-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="success-icon-wrap">
                      <Heart size={48} className="heart-pulse-icon" />
                    </div>
                    <h2>Thank You, {formData.name}!</h2>
                    <p className="success-desc">
                      Your contribution of <strong>{currency === 'INR' ? '₹' : '$'}{getActiveAmount().toLocaleString()}</strong> towards the <strong>{ALLOCATION_FUNDS.find(f => f.id === selectedFund)?.title}</strong> has been received with gratitude. A secure confirmation and your 80G tax certificate has been sent to <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      className="back-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', batch: '', message: '' });
                        setSelectedAmount(2500);
                        setSelectedFund('general');
                      }}
                    >
                      <span>Make Another Contribution</span>
                      <Send size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap dark-text" onClick={() => scrollToNext('.donate-wall-page')}>
          <span className="scroll-text">Wall of Honor</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </section>

      {/* ─── Page Block 3: Wall of Honor ─── */}
      <section className="donate-page-block donate-wall-page">
        <div className="container-lg">
          <h2 className="section-title text-center text-white">Wall of Honor</h2>
          <div className="gold-divider-center" />
          <p className="section-subtitle text-center text-gold-light">We express our deepest gratitude to our recent alumni contributors.</p>

          <div className="donors-grid">
            {RECENT_DONORS.map((donor, idx) => (
              <motion.div
                key={idx}
                className="donor-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="donor-card-header">
                  <div>
                    <h4>{donor.name}</h4>
                    <span>{donor.batch}</span>
                  </div>
                  <div className="donor-amount">{donor.amount}</div>
                </div>
                <p className="donor-message">"{donor.message}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-wrap" onClick={() => scrollToNext('.donate-faq-page')}>
          <span className="scroll-text">FAQs</span>
          <ScrollArrow className="scroll-arrow-icon" size={16} />
        </div>
      </section>

      {/* ─── Page Block 4: FAQ Accordion ─── */}
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
