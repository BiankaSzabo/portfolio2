import { useState } from "react";
import { Link, Outlet } from "react-router";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/#contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-300 mx-auto px-4 md:px-8 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
            <FaCode className="text-xl text-primary" />
            <span>Bianka's Portfolio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110 hover:shadow-md transition-all"
          >
            Get in Touch
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground text-xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-foreground py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-300 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
            <FaCode className="text-xl text-primary" />
            <span>Bianka's Portfolio</span>
          </Link>
          <p className="text-sm text-muted-foreground m-0">
            © 2026 Bianka Szabó | Frontend Developer. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
