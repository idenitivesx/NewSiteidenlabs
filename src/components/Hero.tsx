export default function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-primary">
      {/* Background texture — subtle gradient + grain */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(26,107,74,0.15)_0%,_transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/[0.03] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-[var(--width-wide)] items-center px-6 pt-28 pb-20 lg:px-12">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Left — Message block */}
          <div className="max-w-[640px]">
            {/* Eyebrow */}
            <div className="label mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted by regulated industries
            </div>

            {/* H1 — Outcome-first headline */}
            <h1 className="mb-6 text-white">
              Verify identities.{" "}
              <span className="text-accent">Protect revenue.</span>
            </h1>

            {/* Value subtext */}
            <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-white/60">
              Enterprise identity verification and compliance infrastructure
              that reduces fraud losses, accelerates onboarding, and keeps you
              ahead of regulatory requirements.
            </p>

            {/* Proof line */}
            <div className="mb-10 flex items-center gap-6 text-[15px] text-white/40">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SOC 2 Type II
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                99.7% uptime
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                GDPR ready
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary CTA — solid accent */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-7 py-3.5 text-[16px] font-semibold text-primary shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_4px_12px_rgba(212,168,83,0.25)] transition-all hover:bg-accent-light hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_6px_20px_rgba(212,168,83,0.35)]"
              >
                Start verification
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Secondary CTA — ghost */}
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/15 px-7 py-3.5 text-[16px] font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right — Metric cards (visual proof, not decoration) */}
          <div className="hidden lg:block">
            <div className="grid gap-4">
              {/* Top row */}
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  value="2.4M+"
                  label="Verifications this year"
                  accent
                />
                <MetricCard
                  value="<3s"
                  label="Average verification time"
                />
              </div>
              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  value="98.6%"
                  label="First-pass approval rate"
                />
                <MetricCard
                  value="340+"
                  label="Enterprise clients"
                  accent
                />
              </div>
              {/* Wide card */}
              <div className="rounded-[var(--radius-lg)] border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="label text-green-400/80">System operational</span>
                </div>
                <div className="flex items-end gap-1">
                  {/* Fake uptime bars */}
                  {Array.from({ length: 30 }, (_, i) => (
                    <div
                      key={i}
                      className="w-full rounded-sm bg-green-400/30"
                      style={{ height: `${16 + Math.random() * 20}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}

function MetricCard({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
      <div
        className={`mb-1 text-3xl font-bold tracking-tight ${
          accent ? "text-accent" : "text-white"
        }`}
      >
        {value}
      </div>
      <div className="text-[14px] text-white/40">{label}</div>
    </div>
  );
}
