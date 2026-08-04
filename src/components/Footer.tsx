import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Alya Karim</p>
        <p>Built with React, TypeScript and Vite.</p>
        <nav aria-label="Footer">
          <Link to="/articles">Articles</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;