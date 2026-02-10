const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Call or text us, or fill out the form. We'll ask a few simple questions about your business or project. That's it.",
  },
  {
    number: "02",
    title: "We Build It For You",
    description:
      "You don't touch a thing. No software to learn, no words to write. We build your site, you approve it, done.",
  },
  {
    number: "03",
    title: "You Start Getting Results",
    description:
      "Your site goes live and works around the clock — bringing in calls, inquiries, members, or whatever success looks like for you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="work" className="relative py-[var(--spacing-5xl)] bg-surface-warm">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="label mb-4 inline-block text-primary-500">
            Our process
          </span>
          <h2 className="mx-auto mb-5 max-w-[600px]">
            Here&apos;s How It Works
          </h2>
          <p className="mx-auto max-w-[520px] text-lg text-slate-500">
            You run your business. We handle the website. The whole thing takes
            less time than you&apos;d expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-8 text-center transition-all hover:border-primary-200 hover:shadow-[0_4px_24px_rgba(15,43,28,0.06)] lg:p-10"
            >
              {/* Step number */}
              <div className="mb-4 text-4xl font-bold tracking-tight text-accent">
                {step.number}
              </div>

              <h3 className="mb-3">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-slate-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-lg font-semibold text-primary">
            Ready to get started? It only takes a couple of minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-7 py-3.5 text-[16px] font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl"
            >
              Get My Free Consultation
            </a>
            <span className="text-[15px] text-slate-400">
              Free. No strings attached.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
