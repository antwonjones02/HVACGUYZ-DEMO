"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-surface-elevated/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className={`font-display text-lg font-extrabold tracking-tight lg:text-xl ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
        >
          HVAC Guyz ATL
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-text-secondary hover:text-text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_HREF}
          className={`hidden text-sm font-semibold transition-colors md:block ${
            scrolled
              ? "text-accent hover:text-accent-hover"
              : "text-white hover:text-accent-muted"
          }`}
        >
          {PHONE}
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-5 transition-transform ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 transition-opacity ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 transition-transform ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface-elevated px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PHONE_HREF}
                className="block text-base font-semibold text-accent"
              >
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
