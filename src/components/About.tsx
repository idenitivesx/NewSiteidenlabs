const stats = [
  { value: "50+", label: "Websites delivered" },
  { value: "2 wk", label: "Average turnaround" },
  { value: "100%", label: "Client satisfaction" },
  { value: "0", label: "Long-term contracts" },
];

export default function About() {
  return (
    <section id="about" className="relative py-[var(--spacing-5xl)] bg-surface-warm">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left — narrative */}
          <div>
            <span className="label mb-4 inline-block text-primary-500">
              About Iden Labs
            </span>
            <h2 className="mb-6">
              We build websites that{" "}
              <span className="text-primary-500">work as hard</span> as you do
            </h2>
            <div className="space-y-4 text-[16px] leading-relaxed text-slate-500">
              <p>
                Iden Labs started because we saw too many small businesses
                getting ripped off by agencies that charge thousands for sites
                that don&apos;t convert. Or worse — getting stuck with DIY
                builders that look like everyone else&apos;s.
              </p>
              <p>
                We keep it simple: you tell us about your business, we build
                you a professional website that brings in real results. No tech
                jargon, no monthly retainers, no surprises on the invoice.
              </p>
              <p>
                Every site we build is custom-designed, mobile-friendly, and
                optimized to actually do something — whether that&apos;s
                getting phone calls, booking appointments, or selling products.
              </p>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-8 text-center"
              >
                <div className="mb-2 text-4xl font-bold tracking-tight text-primary">
                  {stat.value}
                </div>
                <div className="text-[14px] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
