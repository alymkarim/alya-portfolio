import {
  ArrowDown,
  BookOpen,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <h1>
            Hi, I'm <span>Alya Karim.</span>
          </h1>

          <h2>Still thinking like a physicist. Now building software.</h2>

          <p className="hero-copy">
            I enjoy building software where AI meets engineering. 
            My background spans applied physics, machine learning and full-stack development, 
            with a focus on creating intelligent systems that people can actually use.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              View projects <ArrowDown size={18} />
            </a>

            <a
              className="button secondary-button"
              href="/public/Alya_M_Karim_CV.pdf"
              download="Alya_M_Karim_CV.pdf"
              aria-label="Download Alya Karim CV as PDF"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="mailto:alyamkarim97@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>

            <a
              href="https://github.com/alymkarim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/alya-karim/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href="https://medium.com/@alyamkarim97"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <BookOpen />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-placeholder">
            <img
              src="/project-images/me2.jpg"
              alt="Alya Karim"
              className="profile-image"
            />
          </div>

          <div>
            <p>Currently focused on</p>
            <strong>Full-stack AI products</strong>
          </div>

          <div>
            <p>Based in</p>
            <strong>Dublin, Ireland 🇮🇪</strong>
          </div>

          <div>
            <p>Open to</p>
            <strong>Software, AI & Data roles</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;