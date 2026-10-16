
import { Sun, Moon } from "lucide-react";
import "./../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" aria-label="Go to home">
        <span className="navbar-logo-mark">D</span>
        <span className="navbar-logo-text">
          <span className="navbar-logo-text">
            Dhana Lakshmi<span>.dev</span>
          </span>
        </span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="navbar-theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <Sun size={20} className="theme-icon" />
        ) : (
          <Moon size={20} className="theme-icon" />
        )}
      </button>
    </header>
  );
}

export default Navbar;
