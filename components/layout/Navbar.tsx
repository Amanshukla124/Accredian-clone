"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programs", href: "#features" },
  { label: "Platform", href: "#features" },
  { label: "Partners", href: "#partners" },
  { label: "Case Studies", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[62px]">

          {/* Wordmark */}
          <a href="/" className="flex items-center gap-3 group" id="nav-logo">
            <img src="/logo.webp" alt="Accredian Logo" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-[var(--ink-muted)] text-sm font-medium hover:text-[var(--ink)] transition-colors"
              id="nav-login"
            >
              Sign in
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn btn-primary text-sm px-5 py-2.5"
              id="nav-get-demo"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            id="nav-mobile-menu-toggle"
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  id={`nav-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] font-medium border-b border-[var(--border)] last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn btn-primary w-full mt-4 justify-center"
                id="nav-mobile-get-demo"
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
