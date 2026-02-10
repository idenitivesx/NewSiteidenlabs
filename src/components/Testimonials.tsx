const testimonials = [
  {
    quote:
      "I put off getting a website for years because every agency wanted thousands of dollars and months of my time. Iden Labs had my site live in 10 days and I started getting calls the first week.",
    name: "Mike Rivera",
    role: "Owner",
    company: "Rivera Roofing & Siding",
    metric: "3x more inquiries",
  },
  {
    quote:
      "They made the whole process painless. I told them about my salon, they sent me a beautiful design, I approved it, and it was done. My clients love the online booking.",
    name: "Ashley Kim",
    role: "Owner",
    company: "Glow Studio",
    metric: "Online booking added",
  },
  {
    quote:
      "We needed a site fast for a fundraiser and they delivered in under a week. Professional, responsive, and the donation page worked flawlessly. We raised 40% more than expected.",
    name: "David Thompson",
    role: "Director",
    company: "Central Ohio Youth Alliance",
    metric: "40% more donations",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-[var(--spacing-5xl)] bg-surface">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="label mb-4 inline-block text-primary-500">
            What clients say
          </span>
          <h2 className="mx-auto mb-5 max-w-[600px]">
            Real results from{" "}
            <span className="text-primary-500">real businesses</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-8"
            >
              {/* Metric badge */}
              <div className="mb-6 inline-flex self-start rounded-full bg-accent-50 px-3.5 py-1.5 text-[13px] font-semibold text-accent-dark">
                {t.metric}
              </div>

              {/* Quote */}
              <blockquote className="mb-8 flex-1 text-[16px] leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-[13px] font-semibold text-primary-600">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-primary">
                    {t.name}
                  </div>
                  <div className="text-[13px] text-slate-400">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
