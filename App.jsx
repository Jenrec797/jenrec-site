export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Jenrec</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Professional. Reliable. Modern.</p>
          <h1>Building strong digital experiences for growing brands.</h1>
          <p className="hero-text">
            Jenrec helps businesses present themselves with confidence through
            modern websites, clear messaging, and a professional online presence.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get Started
            </a>
            <a className="btn btn-secondary" href="#services">
              View Services
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-light" id="about">
          <div className="container two-col">
            <div>
              <p className="section-label">About Jenrec</p>
              <h2>A business-focused website built to make a strong first impression.</h2>
            </div>
            <div>
              <p>
                We believe every business deserves a website that feels polished,
                trustworthy, and easy to use. This site is designed to help
                Jenrec stand out with a modern layout, strong branding, and clear calls to action.
              </p>
              <p>
                Whether you are launching, rebuilding, or expanding your online presence,
                this website gives you a solid professional foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="services">
          <div className="container">
            <p className="section-label">Services</p>
            <h2 className="section-title">What Jenrec can offer</h2>

            <div className="cards">
              <div className="card">
                <h3>Website Development</h3>
                <p>
                  Clean, responsive websites built to look professional on desktop,
                  tablet, and mobile devices.
                </p>
              </div>

              <div className="card">
                <h3>Business Branding</h3>
                <p>
                  A stronger visual presence with clear messaging, confident design,
                  and a more polished brand identity.
                </p>
              </div>

              <div className="card">
                <h3>Digital Presence</h3>
                <p>
                  A website structure that helps customers understand who you are,
                  what you do, and how to contact you quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container stats">
            <div className="stat">
              <h3>Modern</h3>
              <p>Designed for a clean and current professional image.</p>
            </div>
            <div className="stat">
              <h3>Responsive</h3>
              <p>Works beautifully across phones, tablets, and desktops.</p>
            </div>
            <div className="stat">
              <h3>Scalable</h3>
              <p>Ready for future updates, extra pages, and business growth.</p>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="container cta-box">
            <div>
              <p className="section-label">Contact</p>
              <h2>Ready to turn Jenrec into a full premium business website?</h2>
              <p>
                This is the upgraded professional version. The next step can be adding
                your real business details, services, WhatsApp button, contact form,
                and custom branding.
              </p>
            </div>

            <div className="cta-actions">
              <a className="btn btn-primary" href="mailto:hello@jenrec.com">
                Email Us
              </a>
              <a className="btn btn-secondary" href="#">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Jenrec</strong>
            <p>Professional digital presence for a growing brand.</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
