const certifications = [
  {
    label: "SOC 2 Type II",
    description: "Audited annually",
  },
  {
    label: "ISO 27001",
    description: "Certified",
  },
  {
    label: "GDPR",
    description: "Fully compliant",
  },
  {
    label: "PCI DSS",
    description: "Level 1",
  },
  {
    label: "99.7% Uptime",
    description: "12-month average",
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-slate-200/60 bg-surface-card py-16">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        <div className="mb-8 text-center">
          <span className="label text-slate-400">
            Compliance & certifications
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {certifications.map((cert) => (
            <div key={cert.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-primary-50">
                <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-primary">
                  {cert.label}
                </div>
                <div className="text-[13px] text-slate-400">
                  {cert.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
