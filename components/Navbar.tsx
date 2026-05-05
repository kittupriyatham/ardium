"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Why Dubai Mall", href: "#why" },
  { label: "Retail", href: "#retail" },
  { label: "Luxury", href: "#luxury" },
  { label: "Dining", href: "#dining" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-6"
        }`}
        style={{
          background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span
              className="font-display text-xl tracking-[0.2em] text-white"
            >
              ARDIUM
            </span>
            <span style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.3em" }} className="font-light">
              DUBAI MALL
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/60 hover:text-white transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-light"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#cta")}
              className="hidden md:block text-xs tracking-[0.15em] uppercase px-5 py-2 transition-all duration-300"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "var(--gold)";
                (e.target as HTMLElement).style.color = "#080808";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "var(--gold)";
              }}
            >
              Partner With Us
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
            >
              <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-10 lg:hidden"
          style={{ background: "rgba(8,8,8,0.97)" }}
        >
          {links.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-display text-3xl text-white/80 hover:text-white py-4 text-left transition-colors border-b border-white/5"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#cta")}
            className="mt-8 text-sm tracking-widest uppercase px-6 py-3 w-fit"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            Partner With Us
          </button>
        </div>
      )}
    </>
  );
}
