export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-[var(--spacing-5xl)]">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(212,168,83,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[var(--width-content)] px-6 text-center lg:px-12">
        <h2 className="mx-auto mb-5 max-w-[560px] text-white">
          Ready to see what{" "}
          <span className="text-accent">verified trust</span> looks like?
        </h2>
        <p className="mx-auto mb-10 max-w-[440px] text-lg text-white/50">
          Get a technical walkthrough with our engineering team. No sales
          deck — just your use case and our platform.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-8 py-4 text-[16px] font-semibold text-primary shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_4px_12px_rgba(212,168,83,0.25)] transition-all hover:bg-accent-light hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_6px_20px_rgba(212,168,83,0.35)]"
          >
            Schedule a technical demo
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/15 px-8 py-4 text-[16px] font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
          >
            Read the docs
          </a>
        </div>

        <p className="mt-8 text-[14px] text-white/30">
          No commitment required. Most teams integrate in under a week.
        </p>
      </div>
    </section>
  );
}
