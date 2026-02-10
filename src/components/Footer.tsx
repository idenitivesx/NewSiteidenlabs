const footerLinks = {
  Services: [
    { label: "Basic Site", href: "#pricing" },
    { label: "Starter Website", href: "#pricing" },
    { label: "Business Website", href: "#pricing" },
    { label: "Custom Project", href: "#pricing" },
    { label: "Website Redesign", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-surface-card pb-24 md:pb-0">
      <div className="mx-auto max-w-[var(--width-content)] px-6 py-16 lg:px-12">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-primary">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.13 9.37-7 10.5-3.87-1.13-7-5.67-7-10.5V6.3l7-3.12z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">
                IDEN
              </span>
            </div>
            <p className="mb-4 max-w-[260px] text-[15px] leading-relaxed text-slate-400">
              Professional websites for small businesses, contractors, and
              organizations. Built to bring in real results.
            </p>
            <a
              href="tel:6144075190"
              className="text-[15px] font-medium text-primary-500 transition-colors hover:text-primary"
            >
              (614) 407-5190
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-[14px] font-semibold text-primary">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-slate-400 transition-colors hover:text-primary-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-slate-200/60" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[13px] text-slate-400">
            &copy; {new Date().getFullYear()} Iden Labs. All rights reserved.
          </p>
          <p className="text-[13px] text-slate-400">
            Columbus, Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}
