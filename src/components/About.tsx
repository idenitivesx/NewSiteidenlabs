const stats = [
  { value: "8+", label: "Years in production" },
  { value: "340+", label: "Enterprise clients" },
  { value: "195", label: "Countries supported" },
  { value: "24/7", label: "Engineering support" },
];

export default function About() {
  return (
    <section id="about" className="relative py-[var(--spacing-5xl)] bg-surface">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left — narrative */}
          <div>
            <span className="label mb-4 inline-block text-primary-500">
              About Idenlabs
            </span>
            <h2 className="mb-6">
              Built by compliance engineers,{" "}
              <span className="text-primary-500">not just developers</span>
            </h2>
            <div className="space-y-4 text-[16px] leading-relaxed text-slate-500">
              <p>
                Idenlabs was founded by a team that spent years inside regulated
                financial institutions — dealing with the same broken
                verification workflows, the same compliance bottlenecks, and the
                same vendor lock-in that slows everyone down.
              </p>
              <p>
                We built the platform we wished existed: fast enough for
                consumer fintech, thorough enough for banking, and flexible
                enough to handle the regulatory landscape as it actually is —
                not how vendors pretend it is.
              </p>
              <p>
                Every feature ships because a compliance officer needed it, not
                because a product manager thought it looked good on a roadmap.
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
