"use client";

import { useState } from "react";

const navLinksLeft = [
  { label: "Home", href: "#" },
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

const navLinksRight = [
  { label: "About", href: "#about" },
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
          {/* Left links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinksLeft.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="rounded-[var(--radius-sm)] px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-accent">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.13 9.37-7 10.5-3.87-1.13-7-5.67-7-10.5V6.3l7-3.12z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              IDEN
            </span>
          </a>

          {/* Right links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinksRight.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="rounded-[var(--radius-sm)] px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-[var(--radius-md)] bg-accent px-5 py-2.5 text-[15px] font-semibold text-primary transition-all hover:bg-accent-light"
            >
              Free Consultation
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
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <a
                  key={link.href + link.label}
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
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
