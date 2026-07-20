import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium no-underline transition-colors duration-200 ${
      isActive ? "text-accent" : "text-text-muted hover:text-text-primary"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border-subtle bg-bg/85 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="app-container-wide flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="Alexandre Benoit — home"
            className={`inline-flex whitespace-nowrap font-serif text-xl font-bold tracking-tight text-text-primary no-underline md:text-2xl ${
              isScrolled ? "brand-collapsed" : ""
            }`}
          >
            {"Alexandre Benoit".split("").map((char, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`brand-char ${
                  i === 0 || i === 10 ? "brand-keep" : "brand-collapse"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <span className="h-5 w-px bg-border-warm" />
            <SocialLinks />
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-bg transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-serif text-3xl font-bold no-underline transition-colors ${
                  isActive ? "text-accent" : "text-text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <SocialLinks size="h-7 w-7" className="mt-6 gap-6" />
        </nav>
      </div>
    </>
  );
}
