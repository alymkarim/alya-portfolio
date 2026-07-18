import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
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
        <a className="brand" href="#top" aria-label="Go to top">
          AK<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={open ? "nav-links nav-links-open" : "nav-links"}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
