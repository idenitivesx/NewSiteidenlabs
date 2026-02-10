"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[var(--width-wide)]">
        <nav
          className="mx-4 mt-4 flex items-center justify-between rounded-[var(--radius-lg)] border border-white/10 bg-primary/90 px-6 py-3.5 backdrop-blur-xl lg:mx-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-accent">
              <span className="text-sm font-bold text-primary">ID</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Idenlabs
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[var(--radius-sm)] px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-[var(--radius-sm)] px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
            >
              Log in
            </a>
            <a
              href="#contact"
              className="rounded-[var(--radius-md)] bg-accent px-5 py-2.5 text-[15px] font-semibold text-primary transition-all hover:bg-accent-light"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mx-4 mt-2 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-primary/95 backdrop-blur-xl lg:mx-6">
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[var(--radius-sm)] px-4 py-3 text-[15px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-white/10" />
              <a
                href="#contact"
                className="mt-1 rounded-[var(--radius-md)] bg-accent px-5 py-3 text-center text-[15px] font-semibold text-primary transition-all hover:bg-accent-light"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
