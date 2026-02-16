import { useState } from "react";
import "./App.css";

export const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <div className="profile-card">
          <div className="profile-image-wrapper">
            <img
              className="profile-image"
              src="avatar.jpeg"
              alt="Georgi Krastev"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Georgi Krastev</h1>
            <p className="profile-title">Software Developer</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/georgi-krastev-79259a124/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://github.com/georgi-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                gh
              </a>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Sofia, Bulgaria</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
            </div>
            <button className="download-cv-btn">
              <span className="download-icon">⬇</span>
              Download CV
            </button>
          </div>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            About
          </button>
          <button
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            Resume
          </button>
          <button
            className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Portfolio
          </button>
          <button
            className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <nav className="top-nav">
          <button
            className={`top-nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            About
          </button>
          <button
            className={`top-nav-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            Resume
          </button>
          <button
            className={`top-nav-item ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Portfolio
          </button>
          <button
            className={`top-nav-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        <section id="home" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="section-content">
            <p>
              I'm a passionate software developer from Sofia, Bulgaria, dedicated
              to creating innovative solutions and writing clean, maintainable code.
              With a focus on web development and modern technologies, I strive to
              build functional, user-friendly, and attractive applications.
            </p>
            <p>
              My design philosophy centers around creating simple, beautiful, and
              intuitive user experiences. I believe in continuous learning and
              staying up-to-date with the latest technologies and best practices
              in software development.
            </p>
          </div>

          <h2 className="section-title">What I'm Doing</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">Web Design</h3>
              <p className="service-description">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                High-quality development of sites at the professional level.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">Mobile Apps</h3>
              <p className="service-description">
                Professional development of applications for iOS and Android.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Performance</h3>
              <p className="service-description">
                Optimizing applications for speed, efficiency, and scalability.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">Resume</h2>
          <div className="section-content">
            <p>Resume content goes here...</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-content">
            <div className="project-card">
              <h3>Project Title</h3>
              <p>Project description goes here...</p>
            </div>
            <div className="project-card">
              <h3>Project Title</h3>
              <p>Project description goes here...</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="section-content">
            <p>Feel free to reach out to me through the links in the sidebar!</p>
          </div>
        </section>
      </main>
    </div>
  );
};
