import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from '@/styles/Portfolio.module.css';

const sections = [
  {
    id: 'comedy',
    label: 'Comedy / MC',
    images: [
      { src: '/images/portfolio/comedy/portfolio-stage-mrlight-show.jpg', alt: 'Edafe Dmouthpiece performing stand-up comedy on stage at Mr. Light I Think I\'m Funny show' },
      { src: '/images/portfolio/comedy/portfolio-comedy-dynamic-mic.jpg', alt: 'Edafe Dmouthpiece with microphone, high-energy comedy performance' },
      { src: '/images/portfolio/comedy/portfolio-comedy-food-skit.jpg', alt: 'Edafe Dmouthpiece in comedic food skit, exaggerated expression' },
      { src: '/images/portfolio/comedy/portfolio-stage-justjoking-5.jpg', alt: 'Edafe Dmouthpiece performing at Just Joking 5.0 with Tboi' },
    ],
  },
  {
    id: 'hosting',
    label: 'Hosting / Events',
    images: [
      { src: '/images/portfolio/hosting/portfolio-hosting-white-suit-stage.jpg', alt: 'Edafe Dmouthpiece hosting a live event as MC in white suit' },
      { src: '/images/events/event-redcarpet-3golddishes-01.jpg', alt: 'Edafe Dmouthpiece at 3 Gold Dishes premiere red carpet' },
      { src: '/images/events/event-redcarpet-3golddishes-02.jpg', alt: 'Edafe Dmouthpiece at 3 Gold Dishes premiere with guest in traditional attire' },
      { src: '/images/events/event-justjoking-banner.jpg', alt: 'Edafe Dmouthpiece in front of Just Joking 5.0 event banner' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports Analysis',
    images: [
      { src: '/images/portfolio/sports/portfolio-sports-analyst-buststop.jpg', alt: 'Edafe Dmouthpiece as football analyst on Sports Buststop' },
      { src: '/images/portfolio/sports/portfolio-sports-team-nigeria65.jpg', alt: 'Edafe Dmouthpiece with Sports Buststop team, Nigeria at 65 branded graphic' },
    ],
  },
];

const flyers = [
  { src: '/images/branding/flyer-roundtable-of-laughter-5.jpg', alt: 'Event flyer featuring Edafe Dmouthpiece as confirmed comedian at Roundtable of Laughter 5.0' },
  { src: '/images/branding/flyer-real-upper-pikin.jpg', alt: 'Event flyer featuring Edafe Dmouthpiece at A Date with Real Upper Pikin' },
];

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Explore Edafe Dmouthpiece's portfolio across comedy, MC/hosting, radio OAP, sports analysis, and acting/events."
        path="/portfolio"
      />
      <Nav />

      <main>
        <section className="page-header">
          <div className="page-header-content">
            <span className="section-label">Portfolio</span>
            <h1>Work & Performances</h1>
            <p>
              A curated look at Edafe Dmouthpiece&apos;s work across comedy, radio, sports
              analysis, hosting, and events.
            </p>
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.id} className={`section ${section.id === 'sports' ? 'section-alt' : ''}`}>
            <div className="container">
              <span className="section-label">{section.label}</span>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                {section.id === 'comedy' && 'Comedy & MC Work'}
                {section.id === 'hosting' && 'Event Hosting & Appearances'}
                {section.id === 'sports' && 'Football Analysis'}
              </h2>
              <div className={styles.imageGrid}>
                {section.images.map((img, i) => (
                  <div key={i} className={`${styles.portfolioCard} ${i === 0 ? styles.featured : ''}`}>
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={i === 0 ? 800 : 400}
                        height={i === 0 ? 500 : 500}
                        className={styles.cardImage}
                      />
                    </div>
                    {section.id === 'sports' && (
                      <p className={styles.cardCaption}>
                        {i === 0 ? 'Sports Buststop — football analysis segment' : 'Nigeria @65 — Sports Buststop team edition'}
                      </p>
                    )}
                    {section.id === 'comedy' && (
                      <p className={styles.cardCaption}>
                        {i === 0 && 'Mr. Light "I Think I\'m Funny" show'}
                        {i === 1 && 'Studio session — 5Screens Media'}
                        {i === 2 && 'Skit content — personality reel'}
                        {i === 3 && 'Just Joking 5.0 with Tboi — Asaba'}
                      </p>
                    )}
                    {section.id === 'hosting' && (
                      <p className={styles.cardCaption}>
                        {i === 0 && 'Event MC — white suit, branded cap'}
                        {i === 1 && '"3 Gold Dishes" red carpet premiere'}
                        {i === 2 && '"3 Gold Dishes" — guest appearance'}
                        {i === 3 && 'Just Joking 5.0 event banner'}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Event flyers */}
        <section className="section section-alt">
          <div className="container">
            <span className="section-label">Event Lineups</span>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Confirmed Appearances</h2>
            <div className={styles.flyerGrid}>
              {flyers.map((flyer, i) => (
                <div key={i} className={styles.flyerCard}>
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    width={500}
                    height={700}
                    className={styles.flyerImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <div className="container">
            <h2 className="section-title light" style={{ marginBottom: '1rem' }}>
              Want to work together?
            </h2>
            <p className="section-subtitle light" style={{ margin: '0 auto 2rem' }}>
              Let&apos;s discuss your next event, show, or project.
            </p>
            <Link href="/booking" className="btn btn-primary">
              Book Edafe Dmouthpiece
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
