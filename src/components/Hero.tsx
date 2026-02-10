"use client";

import { useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-primary">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(26,107,74,0.15)_0%,_transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/[0.03] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-[var(--width-wide)] items-center px-6 pt-28 pb-20 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Left — Message block */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <div className="label mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Web design that drives revenue
            </div>

            {/* H1 */}
            <h1 className="mb-6 text-white">
              Professional Websites That{" "}
              <span className="text-accent">Actually Grow</span> Your Business
            </h1>

            {/* Value subtext */}
            <p className="mb-8 max-w-[480px] text-lg leading-relaxed text-white/60">
              Whether you&apos;re a small business, a local organization, or
              anyone who needs a professional website — we build sites that bring
              in real results. No tech jargon, no long contracts, no headaches.
            </p>

            {/* Proof points */}
            <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-white/40">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Money-Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Live in 2 Weeks
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Hidden Fees
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-7 py-3.5 text-[16px] font-semibold text-primary shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_4px_12px_rgba(212,168,83,0.25)] transition-all hover:bg-accent-light hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_6px_20px_rgba(212,168,83,0.35)]"
              >
                Get My Free Consultation
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/15 px-7 py-3.5 text-[16px] font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
              >
                See Our Work
              </a>
            </div>

            <p className="mt-5 text-[14px] text-white/30">
              100% free, no obligation. If we can&apos;t help you, we&apos;ll tell you.
            </p>
          </div>

          {/* Right — Contact form */}
          <ConsultationForm />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}

function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white p-8 text-center shadow-2xl lg:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
          <svg className="h-7 w-7 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-primary">Thank you!</h3>
        <p className="text-slate-500">
          We&apos;ve received your request. We&apos;ll be in touch within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-xl)] border border-white/10 bg-white p-8 shadow-2xl lg:p-10"
    >
      <h3 className="mb-6 text-primary">Get Your Free Consultation</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-[14px] font-medium text-slate-700"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[14px] font-medium text-slate-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[14px] font-medium text-slate-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(614) 407-5190"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-1.5 block text-[14px] font-medium text-slate-700"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full appearance-none rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="">Select a type</option>
            <option value="basic">Basic Site</option>
            <option value="starter">Starter Website</option>
            <option value="business">Business Website</option>
            <option value="custom">Custom Project</option>
            <option value="redesign">Website Redesign</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-[14px] font-medium text-slate-700"
        >
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="What does your business do? What do you need?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full resize-none rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-6 w-full rounded-[var(--radius-md)] bg-primary px-6 py-3.5 text-[16px] font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl"
      >
        Get My Free Consultation
      </button>

      <p className="mt-3 text-center text-[13px] text-slate-400">
        Takes 2 minutes. No commitment.
      </p>
    </form>
  );
}
