"use client";

import { useState } from "react";
import { EMAIL, EMAIL_HREF, LOCATION, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-border bg-bg px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Contact
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Have a question or ready to schedule? Reach out directly or fill
              out the form and we will get back to you promptly.
            </p>

            <address className="mt-10 space-y-4 not-italic">
              <p className="text-base text-text-primary">
                <span className="block text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Location
                </span>
                {LOCATION}
              </p>
              <p>
                <span className="block text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Phone
                </span>
                <a
                  href={PHONE_HREF}
                  className="text-base font-semibold text-accent hover:text-accent-hover"
                >
                  {PHONE}
                </a>
              </p>
              <p>
                <span className="block text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Email
                </span>
                <a
                  href={EMAIL_HREF}
                  className="text-base font-semibold text-accent hover:text-accent-hover"
                >
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>

          <div>
            {submitted ? (
              <div className="border border-success/30 bg-success/5 p-8">
                <p className="font-display text-xl font-bold text-success">
                  Message sent
                </p>
                <p className="mt-3 text-base text-text-secondary">
                  Thank you for reaching out. A member of our team will respond
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    style={{ borderRadius: "var(--radius-input)" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    style={{ borderRadius: "var(--radius-input)" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    style={{ borderRadius: "var(--radius-input)" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full resize-none border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    style={{ borderRadius: "var(--radius-input)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-press w-full bg-accent py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
