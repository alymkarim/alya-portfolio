import { Bug } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Alya Karim</p>
        <p>Built with React, TypeScript and Vite.</p>
        <Link
          to="/#playground"
          className="footer-easter-egg"
          aria-label="Playground"
        >
          <Bug size={14} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
