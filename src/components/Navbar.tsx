import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const anchorLinks = [
  "featured",
  "projects",
  "experience",
  "education",
  "skills",
  "articles",
  "playground",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link className="brand" to="/" aria-label="Go to home">
          AK<span>.</span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={open ? "nav-links nav-links-open" : "nav-links"}>
          {anchorLinks.map((link) => (
            <Link
              key={link}
              to={`/#${link}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;