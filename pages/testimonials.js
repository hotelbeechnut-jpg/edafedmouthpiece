import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from '@/styles/Testimonials.module.css';

const testimonials = [
  {
    quote: '[INSERT TESTIMONIAL — A brief but impactful quote about working with Edafe Dmouthpiece as an MC, comedian, or personality.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
  {
    quote: '[INSERT TESTIMONIAL — Second testimonial highlighting Edafe\'s professionalism, energy, or crowd engagement.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
  {
    quote: '[INSERT TESTIMONIAL — Third testimonial, ideally from a corporate client, radio colleague, or event organizer.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
  {
    quote: '[INSERT TESTIMONIAL — Fourth testimonial showcasing versatility across sports, comedy, or media work.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
  {
    quote: '[INSERT TESTIMONIAL — Fifth testimonial from a notable public appearance or event.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
  {
    quote: '[INSERT TESTIMONIAL — Sixth testimonial emphasizing personality, reliability, or audience connection.]',
    name: '[INSERT NAME]',
    title: '[INSERT TITLE / ORGANIZATION]',
    event: '[INSERT EVENT NAME]',
  },
];

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="What clients and event organizers say about working with Edafe Dmouthpiece — Nigeria's versatile OAP, MC, and comedian."
        path="/testimonials"
      />
      <Nav />

      <main>
        <section className="page-header">
          <div className="page-header-content">
            <span className="section-label">Testimonials</span>
            <h1>What People Say</h1>
            <p>
              Feedback from event organizers, clients, and colleagues who have worked
              with Edafe Dmouthpiece.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <blockquote className={styles.quote}>{t.quote}</blockquote>
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      <Image
                        src="/images/headshots/headshot-green-vest-smiling.jpg"
                        alt="Edafe Dmouthpiece"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <strong className={styles.name}>{t.name}</strong>
                      <span className={styles.role}>{t.title}</span>
                      <span className={styles.eventMeta}>{t.event}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <div className="container">
            <h2 className="section-title light" style={{ marginBottom: '1rem' }}>
              Be the next to leave a review
            </h2>
            <p className="section-subtitle light" style={{ margin: '0 auto 2rem' }}>
              Worked with Edafe? Share your experience.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Share Your Feedback
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
