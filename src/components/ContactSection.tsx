"use client";

import { useState } from "react";

export default function ContactSection() {
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

  return (
    <section id="contact" className="relative py-[var(--spacing-5xl)] bg-surface-warm">
      <div className="mx-auto max-w-[var(--width-content)] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          {/* Left — Info */}
          <div>
            <span className="label mb-4 inline-block text-primary-500">
              Get in touch
            </span>
            <h2 className="mb-5">
              Let&apos;s talk about{" "}
              <span className="text-primary-500">your project</span>
            </h2>
            <p className="mb-8 text-[16px] leading-relaxed text-slate-500">
              Fill out the form and we&apos;ll get back to you within 24 hours. Or
              if you prefer, reach out directly:
            </p>

            <div className="space-y-4">
              <a
                href="tel:6144075190"
                className="flex items-center gap-3 text-[16px] text-primary transition-colors hover:text-primary-500"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-primary-50">
                  <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                (614) 407-5190
              </a>
              <a
                href="mailto:hello@idenlabs.io"
                className="flex items-center gap-3 text-[16px] text-primary transition-colors hover:text-primary-500"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-primary-50">
                  <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                hello@idenlabs.io
              </a>
            </div>

            {/* Trust reminder */}
            <div className="mt-10 rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-accent-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                <span className="text-[14px] font-semibold text-primary">
                  No risk, no obligation
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-slate-500">
                This consultation is 100% free. We&apos;ll discuss your project,
                give you honest advice, and if we&apos;re not the right fit,
                we&apos;ll tell you. Money-back guarantee on all packages.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          {submitted ? (
            <div className="rounded-[var(--radius-xl)] border border-slate-200/80 bg-surface-card p-10 text-center shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                <svg className="h-7 w-7 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-primary">Thank you!</h3>
              <p className="text-slate-500">
                We&apos;ve received your request. We&apos;ll be in touch within
                24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-xl)] border border-slate-200/80 bg-surface-card p-8 shadow-lg lg:p-10"
            >
              <h3 className="mb-6 text-primary">Send Us a Message</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[14px] font-medium text-slate-700"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
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

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[14px] font-medium text-slate-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
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

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-[14px] font-medium text-slate-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="(614) 407-5190"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-type"
                    className="mb-1.5 block text-[14px] font-medium text-slate-700"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full appearance-none rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  >
                    <option value="">Select a type</option>
                    <option value="basic">Basic Site ($299)</option>
                    <option value="starter">Starter Website ($499)</option>
                    <option value="business">Business Website ($999)</option>
                    <option value="custom">Custom Project</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[14px] font-medium text-slate-700"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="What does your business do? What do you need?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-[var(--radius-md)] border border-slate-200 bg-surface px-4 py-3 text-[15px] text-primary placeholder-slate-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

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
          )}
        </div>
      </div>
    </section>
  );
}
