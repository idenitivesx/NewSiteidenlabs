const testimonials = [
  {
    quote:
      "Switching to Idenlabs cut our manual review queue by 74% in the first month. Our compliance team finally has time to focus on edge cases instead of routine checks.",
    name: "Rachel Torres",
    role: "Head of Compliance",
    company: "Meridian Financial",
    metric: "74% fewer manual reviews",
  },
  {
    quote:
      "We evaluated five vendors. Idenlabs was the only one that could handle our document volume without degraded accuracy. The API is clean and the support team actually understands compliance.",
    name: "James Okoro",
    role: "CTO",
    company: "PayBridge",
    metric: "5x document throughput",
  },
  {
    quote:
      "Our onboarding drop-off rate went from 31% to 12% after integrating Idenlabs. Faster verification means more customers actually complete signup.",
    name: "Sarah Chen",
    role: "VP Product",
    company: "NovaPay",
    metric: "19% drop-off reduction",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="relative py-[var(--spacing-5xl)] bg-surface-warm">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="label mb-4 inline-block text-primary-500">
            Client outcomes
          </span>
          <h2 className="mx-auto mb-5 max-w-[600px]">
            Measured results,{" "}
            <span className="text-primary-500">not promises</span>
          </h2>
          <p className="mx-auto max-w-[480px] text-lg text-slate-500">
            These are real numbers from production deployments — not projections
            from a sales deck.
          </p>
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
                {/* Avatar placeholder — initials */}
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
