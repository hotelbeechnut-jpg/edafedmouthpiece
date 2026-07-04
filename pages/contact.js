import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FormSuccess from '@/components/FormSuccess';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <>
        <Seo title="Contact" description="Get in touch with Edafe Dmouthpiece for bookings, collaborations, or media inquiries." path="/contact" />
        <Nav />
        <main className="section" style={{ paddingTop: 'calc(var(--nav-height) + 4rem)' }}>
          <div className="container">
            <div className={styles.formWrap}>
              <FormSuccess />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Edafe Dmouthpiece — OAP, MC, comedian, actor, and content creator based in Port Harcourt, Nigeria."
        path="/contact"
      />
      <Nav />

      <main>
        <section className="page-header">
          <div className="page-header-content">
            <span className="section-label">Contact</span>
            <h1>Get in Touch</h1>
            <p>
              Have a question, collaboration idea, or want to book Edafe for your next
              event? Reach out — I&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.formSection}>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Send a Message</h2>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="form-error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.portraitWrap}>
                  <Image
                    src="/images/headshots/headshot-formal-beige-vest.jpg"
                    alt="Edafe Dmouthpiece, Nigerian OAP and comedian"
                    width={400}
                    height={500}
                    className={styles.portrait}
                  />
                </div>

                <div className={styles.contactInfo}>
                  <h3>Contact Information</h3>
                  <div className={styles.infoItem}>
                    <strong>Location</strong>
                    <p>Port Harcourt, Rivers State, Nigeria</p>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Phone</strong>
                    <p>+234 911 517 0226</p>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Email</strong>
                    <p>[INSERT EMAIL ADDRESS]</p>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>WhatsApp</strong>
                    <p>+234 911 517 0226</p>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h3>Follow</h3>
                  <div className={styles.socialGrid}>
                    <a href="https://tiktok.com/@comedian_mouthpiece" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                      <span className={styles.socialIcon}>🎵</span>
                      <span>TikTok</span>
                      <span className={styles.socialHandle}>@comedian_mouthpiece</span>
                    </a>
                    <a href="https://www.instagram.com/comedian_dmouthpiece" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                      <span className={styles.socialIcon}>📸</span>
                      <span>Instagram</span>
                      <span className={styles.socialHandle}>@comedian_dmouthpiece</span>
                    </a>
                    <a href="https://www.facebook.com/ikuta.oddo" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                      <span className={styles.socialIcon}>👍</span>
                      <span>Facebook</span>
                      <span className={styles.socialHandle}>ikuta.oddo</span>
                    </a>
                  </div>
                </div>

                <div className={styles.mapPlaceholder}>
                  <strong>📍 Port Harcourt, Nigeria</strong>
                  <p>[INSERT EMBEDDED MAP OR MAP LINK]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
