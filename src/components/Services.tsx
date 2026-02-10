const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "Identity Verification",
    description:
      "Document scanning, biometric matching, and liveness detection in a single API call. Supports 195+ countries and 6,000+ document types.",
    features: ["Document OCR", "Face match", "Liveness check"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "KYC / AML Compliance",
    description:
      "Automated screening against global sanctions lists, PEP databases, and adverse media. Continuous monitoring keeps you compliant as regulations change.",
    features: ["Sanctions screening", "PEP checks", "Ongoing monitoring"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Fraud Prevention",
    description:
      "Real-time risk scoring, device fingerprinting, and behavioral analytics that catch synthetic identities and account takeover attempts before they cost you.",
    features: ["Risk scoring", "Device intelligence", "Behavioral analysis"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Developer Platform",
    description:
      "RESTful APIs, SDKs for every major platform, and pre-built UI components. Go from integration to production in days, not months.",
    features: ["REST API", "Native SDKs", "No-code flows"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-[var(--spacing-5xl)] bg-surface">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 max-w-[520px]">
          <span className="label mb-4 inline-block text-primary-500">
            What we do
          </span>
          <h2 className="mb-5">
            Infrastructure for trust,{" "}
            <span className="text-primary-500">built for scale</span>
          </h2>
          <p className="text-lg text-slate-500">
            Every service is designed to reduce manual review, cut onboarding
            friction, and keep your compliance posture airtight.
          </p>
        </div>

        {/* Service cards — 2x2 grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-8 transition-all hover:border-primary-200 hover:shadow-[0_4px_24px_rgba(15,43,28,0.06)] lg:p-10"
            >
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-100">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3">{service.title}</h3>
              <p className="mb-6 text-[16px] leading-relaxed text-slate-500">
                {service.description}
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-primary-50 px-3 py-1 text-[13px] font-medium text-primary-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Subtle arrow indicator */}
              <div className="absolute right-8 top-8 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary-400 lg:right-10 lg:top-10">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
