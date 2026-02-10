const plans = [
  {
    name: "Basic Site",
    price: "$299",
    description:
      "A simple, clean one-page website to get you online fast. Great for personal brands, side projects, event pages, or anyone who just needs a solid web presence.",
    features: [
      "1 page (scrollable sections)",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    popular: false,
  },
  {
    name: "Starter Website",
    price: "$499",
    description:
      "A professional multi-page website for small businesses and organizations getting started online. Everything you need to look legit and start getting calls.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form",
      "Google-ready setup",
      "Social media links",
      "2 rounds of revisions",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    price: "$999",
    description:
      "Built to bring in business. Everything in Starter, plus the extras that turn visitors into customers or supporters. Our most popular option.",
    features: [
      "Up to 10 pages",
      "Mobile-friendly design",
      "Contact form with notifications",
      "Google-ready setup",
      "Speed optimization",
      "Blog or news section",
      "3 rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Custom Project",
    price: "Let's Talk",
    description:
      "For businesses and organizations that need something specific. Booking systems, online stores, member portals, or anything else your situation calls for.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce, booking, or portals",
      "Advanced integrations",
      "Priority support",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-[var(--spacing-5xl)] bg-surface">
      <div className="mx-auto max-w-[var(--width-wide)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="label mb-4 inline-block text-primary-500">
            Pricing
          </span>
          <h2 className="mx-auto mb-5 max-w-[600px]">Website Packages</h2>
          <p className="mx-auto max-w-[560px] text-lg text-slate-500">
            A one-time investment in a website that works for your business or
            organization. Every package includes a custom design — no
            cookie-cutter templates.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[var(--radius-lg)] border bg-surface-card p-8 transition-all hover:shadow-[0_4px_24px_rgba(15,43,28,0.06)] ${
                plan.popular
                  ? "border-primary-500 shadow-[0_0_0_1px_var(--color-primary-500)]"
                  : "border-slate-200/80"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <div className="mb-4 text-4xl font-bold tracking-tight text-primary">
                  {plan.price}
                </div>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[14px] text-slate-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="10" cy="10" r="4" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block rounded-[var(--radius-md)] px-6 py-3 text-center text-[15px] font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-white shadow-lg hover:bg-primary-600 hover:shadow-xl"
                    : "border border-slate-200 bg-surface text-primary hover:border-primary-200 hover:bg-primary-50"
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
