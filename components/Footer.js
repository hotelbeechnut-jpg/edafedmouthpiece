import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>
            Edafe<span>Dmouthpiece</span>
          </h3>
          <p>
            Nigerian On-Air Personality, MC, stand-up comedian, actor, football analyst
            podcaster, and content creator based in Port Harcourt.
          </p>
          <p className="footer-tagline">&ldquo;Always giving your event a meaning&rdquo;</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/booking">Book Me</Link>
          </div>
        </div>

        <div>
          <h4>More</h4>
          <div className="footer-links">
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="footer-links">
            <a href="https://tiktok.com/@comedian_mouthpiece" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram [INSERT LINK]
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook [INSERT LINK]
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Edafe Dmouthpiece. All rights reserved.</span>
        <span>Designed with purpose</span>
      </div>
    </footer>
  );
}
