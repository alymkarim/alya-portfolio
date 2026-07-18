import {
  ArrowUpRight,
  BookOpen,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

function Contact() {
  return (
    <section className="section contact-editorial-section" id="contact">
      <div className="contact-blob contact-blob-large" />
      <div className="contact-blob contact-blob-small" />

      <div className="container">
        <div className="contact-editorial-card">
          <p className="section-label">Get in touch</p>

          <h2>
            Let's build something
            <span> useful.</span>
          </h2>

          <p className="contact-editorial-copy">
            I'm always interested in software engineering, backend, AI
            engineering and data-focused opportunities, collaborations and
            interesting projects.
          </p>

          <div className="contact-editorial-links">
            <a href="mailto:alya.maisarah_karim@outlook.com">
              <Mail size={20} />
              Email
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/alya-karim/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
              LinkedIn
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/alymkarim"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
              GitHub
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://medium.com/@alyamkarim97"
              target="_blank"
              rel="noreferrer"
            >
              <BookOpen size={20} />
              Medium
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://alya-portfolio-jade.vercel.app/Alya_M_Karim_CV.pdf"
              download="Alya_Karim_CV.pdf"
              type="application/pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={20} />
              Download CV
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;