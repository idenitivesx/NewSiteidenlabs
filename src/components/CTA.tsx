export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-[var(--spacing-5xl)]">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(212,168,83,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[var(--width-content)] px-6 text-center lg:px-12">
        <h2 className="mx-auto mb-5 max-w-[560px] text-white">
          Ready to get a website that{" "}
          <span className="text-accent">actually works</span>?
        </h2>
        <p className="mx-auto mb-10 max-w-[440px] text-lg text-white/50">
          Tell us about your business and we&apos;ll build you something you&apos;re
          proud of. No tech jargon, no hassle.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-8 py-4 text-[16px] font-semibold text-primary shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_4px_12px_rgba(212,168,83,0.25)] transition-all hover:bg-accent-light hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_6px_20px_rgba(212,168,83,0.35)]"
          >
            Get My Free Consultation
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:6144075190"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/15 px-8 py-4 text-[16px] font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (614) 407-5190
          </a>
        </div>

        <p className="mt-8 text-[14px] text-white/30">
          100% free consultation. If we can&apos;t help you, we&apos;ll tell you.
        </p>
      </div>
    </section>
  );
}
