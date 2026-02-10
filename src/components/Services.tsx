const audiences = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3.42 19.17V4.97" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 3h16.5M5.25 3v18m13.5-18v18" />
      </svg>
    ),
    title: "Contractors & Trades",
    description:
      "Roofing, HVAC, electrical, plumbing, remodeling — we know the trades inside and out. Your site will bring in more calls and better jobs.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0A2.997 2.997 0 005.25 6H18.75A2.997 2.997 0 0021 9.349m-18 0V6a2.997 2.997 0 012.25-2.9h11.5A2.997 2.997 0 0121 6v3.349" />
      </svg>
    ),
    title: "Small Businesses & Local Shops",
    description:
      "Restaurants, salons, retail stores, professional services — we build sites that bring in customers and make your business look as good online as it is in person.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Anyone Who Needs a Website",
    description:
      "Personal brands, e-commerce, nonprofits, organizations, or something completely unique — if you need a website, we'll build it. No project is too big or too small.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-[var(--spacing-5xl)] bg-surface">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="label mb-4 inline-block text-primary-500">
            Who we work with
          </span>
          <h2 className="mx-auto mb-5 max-w-[600px]">
            We build websites for people who are too busy doing great work to
            worry about their{" "}
            <span className="text-primary-500">online presence</span>
          </h2>
        </div>

        {/* Audience cards — 3 column */}
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-8 text-center transition-all hover:border-primary-200 hover:shadow-[0_4px_24px_rgba(15,43,28,0.06)] lg:p-10"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-100">
                {item.icon}
              </div>

              <h3 className="mb-3">{item.title}</h3>
              <p className="text-[16px] leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
