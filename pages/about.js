import Image from 'next/image';
import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Edafe Dmouthpiece — his journey from Port Harcourt to becoming a leading OAP, MC, comedian, and content creator in Nigeria."
        path="/about"
      />
      <Nav />

      <main>
        <section className="page-header">
          <div className="page-header-content">
            <span className="section-label">About</span>
            <h1>The Man Behind the Mic</h1>
            <p>
              From radio waves to comedy stages, Edafe Dmouthpiece brings versatility,
              energy, and purpose to every platform he touches.
            </p>
          </div>
        </section>

        {/* Bio section */}
        <section className="section">
          <div className="container">
            <div className={styles.bioGrid}>
              <div className={styles.bioImageWrap}>
                <Image
                  src="/images/headshots/headshot-formal-beige-vest.jpg"
                  alt="Edafe Dmouthpiece, Nigerian OAP and comedian, studio portrait"
                  width={500}
                  height={600}
                  className={styles.bioImage}
                />
              </div>
              <div className={styles.bioContent}>
                <h2 className="section-title">Edafe Omadevwe</h2>
                <p className={styles.bioTagline}>
                  &ldquo;Always giving your event a meaning&rdquo;
                </p>
                <p>
                  Known professionally as <strong>Edafe Dmouthpiece</strong>, Edafe Omadevwe
                  is a multi-talented Nigerian entertainer and media personality based in
                  Port Harcourt, Rivers State. His career spans on-air presentation, event
                  hosting, stand-up comedy, acting, football analysis, and content creation.
                </p>
                <p>
                  As an On-Air Personality at <strong>Crown 94.7 FM</strong>, Edafe has built
                  a loyal audience through his engaging style and authentic connection with
                  listeners. His work as an MC and stand-up comedian has taken him across
                  Nigeria, headlining major events and comedy shows.
                </p>
                <p>
                  Beyond entertainment, Edafe is a passionate football analyst and podcaster
                  with <strong>Sports Buststop</strong>, where he delivers sharp, insightful
                  commentary on the beautiful game. His versatility also extends to acting
                  and content creation, making him one of the most dynamic emerging talents
                  from the Niger Delta region.
                </p>
                <div className={styles.bioDetails}>
                  <div className={styles.bioDetail}>
                    <span className={styles.detailLabel}>Education</span>
                    <p>Port Harcourt International School<br />Delta State University, Abraka</p>
                  </div>
                  <div className={styles.bioDetail}>
                    <span className={styles.detailLabel}>Base</span>
                    <p>Port Harcourt, Rivers State, Nigeria</p>
                  </div>
                  <div className={styles.bioDetail}>
                    <span className={styles.detailLabel}>Status</span>
                    <p>Self-employed / Independent Artist</p>
                  </div>
                  <div className={styles.bioDetail}>
                    <span className={styles.detailLabel}>Associated With</span>
                    <p>Crown 94.7 FM · Sports Buststop · 5Screens Media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal story section */}
        <section className="section section-alt">
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <span className="section-label">The Journey</span>
                <h2 className="section-title">My Story</h2>
                <p>
                  [INSERT NARRATIVE — Edafe's personal brand story, how he got started in
                  entertainment, what drives him, and his vision for the future. This section
                  should be written in first person and reflect his authentic voice.]
                </p>
                <p>
                  [INSERT DETAILS — Early influences, breakthrough moments, key mentors, and
                  the philosophy behind "Always giving your event a meaning."]
                </p>
              </div>
              <div className={styles.storyImageWrap}>
                <Image
                  src="/images/headshots/headshot-editorial-newspaper-bg.jpg"
                  alt="Edafe Dmouthpiece, Nigerian OAP and comedian, editorial portrait"
                  width={500}
                  height={650}
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="section">
          <div className="container">
            <span className="section-label">Moments</span>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Through the Lens</h2>
          </div>
          <div className={styles.galleryStrip}>
            <div className={styles.galleryItem}>
              <Image
                src="/images/headshots/casual-native-attire.jpg"
                alt="Edafe Dmouthpiece in casual native attire"
                width={300}
                height={380}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/headshots/headshot-green-vest-smiling.jpg"
                alt="Edafe Dmouthpiece, warm smiling studio portrait"
                width={300}
                height={380}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/headshots/headshot-formal-blue-suit-02.jpg"
                alt="Edafe Dmouthpiece, Nigerian OAP and comedian, studio portrait"
                width={300}
                height={380}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/portfolio/hosting/portfolio-hosting-white-suit-stage.jpg"
                alt="Edafe Dmouthpiece hosting a live event as MC"
                width={300}
                height={380}
                className={styles.galleryImage}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
