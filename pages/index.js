import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Edafe Dmouthpiece — Nigerian On-Air Personality, MC, stand-up comedian, actor, football analyst podcaster, and content creator. Always giving your event a meaning."
        path="/"
      />
      <Nav />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTagline}>MC · Comedian · OAP · Analyst</span>
            <h1 className={styles.heroTitle}>
              Edafe&nbsp;<span className={styles.gold}>Dmouthpiece</span>
            </h1>
            <p className={styles.heroSubtitle}>
              &ldquo;Always giving your event a meaning&rdquo;
            </p>
            <p className={styles.heroDesc}>
              Nigerian On-Air Personality, MC, stand-up comedian, actor, football analyst
              podcaster, and content creator based in Port Harcourt, Nigeria.
            </p>
            <div className={styles.heroCta}>
              <Link href="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/headshots/headshot-formal-blue-suit-01.jpg"
              alt="Edafe Dmouthpiece, Nigerian OAP and comedian, studio portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </section>

        {/* Roles strip */}
        <section className={`section ${styles.roles}`}>
          <div className="container">
            <div className={styles.rolesGrid}>
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>🎤</div>
                <h3>MC / Comedian</h3>
                <p>High-energy event hosting and stand-up comedy for corporate events, private parties, and shows.</p>
              </div>
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>📻</div>
                <h3>On-Air Personality</h3>
                <p>Radio presenter at Crown 94.7 FM, bringing vibrant conversation and entertainment to the airwaves.</p>
              </div>
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>⚽</div>
                <h3>Football Analyst</h3>
                <p>Sports analyst and podcaster on Sports Buststop, delivering sharp football commentary and analysis.</p>
              </div>
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>🎭</div>
                <h3>Actor / Content Creator</h3>
                <p>On-screen talent and digital content creator with appearances in events, skits, and productions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section className={`section ${styles.featured}`}>
          <div className="container">
            <div className={styles.featuredGrid}>
              <div className={styles.featuredImageWrap}>
                <Image
                  src="/images/portfolio/comedy/portfolio-comedy-dynamic-mic.jpg"
                  alt="Edafe Dmouthpiece performing stand-up comedy on stage"
                  width={600}
                  height={750}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredContent}>
                <span className="section-label">The Performer</span>
                <h2 className="section-title">Bringing energy<br />to every stage</h2>
                <p>
                  From red-carpet premieres to sold-out comedy shows, Edafe Dmouthpiece commands
                  the stage with charisma, wit, and a presence that leaves audiences wanting more.
                  Whether hosting a corporate gala or delivering punchlines at a comedy night, every
                  event gets the treatment it deserves.
                </p>
                <Link href="/about" className="btn btn-outline-dark" style={{ marginTop: '1.5rem' }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className={`section-dark ${styles.ctaSection}`}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>Book Your Event</span>
            <h2 className="section-title light" style={{ maxWidth: 640, margin: '0 auto 1rem' }}>
              Ready to make your event unforgettable?
            </h2>
            <p className="section-subtitle light" style={{ margin: '0 auto 2.5rem' }}>
              Whether it&apos;s a corporate event, comedy night, radio appearance, or media project —
              let&apos;s work together.
            </p>
            <Link href="/booking" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
