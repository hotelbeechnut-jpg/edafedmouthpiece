import { useState } from 'react';
import Image from 'next/image';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FormSuccess from '@/components/FormSuccess';
import styles from '@/styles/Booking.module.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.eventType.trim()) errs.eventType = 'Event type is required';
    if (!formData.location.trim()) errs.location = 'Location is required';
    if (!formData.message.trim()) errs.message = 'Please provide event details';
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
        <Seo title="Booking" description="Book Edafe Dmouthpiece for your next event — comedy, MC, radio, or media appearance." path="/booking" />
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
        title="Booking"
        description="Book Edafe Dmouthpiece for your next event — MC, comedy, radio, sports analysis, or media appearance. Get in touch today."
        path="/booking"
      />
      <Nav />

      <main>
        <section className="page-header">
          <div className="page-header-content">
            <span className="section-label">Booking</span>
            <h1>Book Edafe Dmouthpiece</h1>
            <p>
              Ready to bring energy, humour, and professionalism to your next event?
              Fill out the form below and I&apos;ll get back to you promptly.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.bookingGrid}>
              <div className={styles.formSection}>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Inquiry Form</h2>
                <p className="section-subtitle" style={{ marginBottom: '2rem', fontSize: '1rem' }}>
                  Tell me about your event and I&apos;ll respond within 24&ndash;48 hours.
                </p>

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

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="eventType">Event Type *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        className={`form-select ${errors.eventType ? 'error' : ''}`}
                        value={formData.eventType}
                        onChange={handleChange}
                      >
                        <option value="">Select event type</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Comedy Show">Comedy Show</option>
                        <option value="MC / Hosting">MC / Hosting</option>
                        <option value="Radio Appearance">Radio Appearance</option>
                        <option value="Sports Panel / Analysis">Sports Panel / Analysis</option>
                        <option value="Acting / Content">Acting / Content</option>
                        <option value="Private Party">Private Party</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.eventType && <p className="form-error">{errors.eventType}</p>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">Event Date</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="location">Location *</label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        className={`form-input ${errors.location ? 'error' : ''}`}
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State, Country"
                      />
                      {errors.location && <p className="form-error">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      className="form-select"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₦100,000">Under ₦100,000</option>
                      <option value="₦100,000 - ₦250,000">₦100,000 - ₦250,000</option>
                      <option value="₦250,000 - ₦500,000">₦250,000 - ₦500,000</option>
                      <option value="₦500,000 - ₦1,000,000">₦500,000 - ₦1,000,000</option>
                      <option value="Above ₦1,000,000">Above ₦1,000,000</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Event Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your event — theme, audience size, what you need from me, etc."
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Inquiry
                  </button>
                </form>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <Image
                    src="/images/branding/flyer-roundtable-of-laughter-5.jpg"
                    alt="Event flyer featuring Edafe Dmouthpiece as confirmed comedian/MC"
                    width={400}
                    height={560}
                    className={styles.infoImage}
                  />
                </div>

                <div className={styles.contactShortcuts}>
                  <h3>Quick Contact</h3>
                  <div className={styles.shortcut}>
                    <span className={styles.shortcutIcon}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <p>+234 911 517 0226</p>
                    </div>
                  </div>
                  <div className={styles.shortcut}>
                    <span className={styles.shortcutIcon}>💬</span>
                    <div>
                      <strong>WhatsApp</strong>
                      <p>+234 911 517 0226</p>
                    </div>
                  </div>
                  <div className={styles.shortcut}>
                    <span className={styles.shortcutIcon}>✉️</span>
                    <div>
                      <strong>Email</strong>
                      <p>[INSERT EMAIL ADDRESS]</p>
                    </div>
                  </div>
                </div>

                <div className={styles.flyerCard}>
                  <Image
                    src="/images/branding/flyer-real-upper-pikin.jpg"
                    alt="Event flyer featuring Edafe Dmouthpiece at A Date with Real Upper Pikin"
                    width={400}
                    height={560}
                    className={styles.infoImage}
                  />
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
