"use client";

import { useCallback, useEffect, useState } from "react";
import { PHONE, PHONE_HREF, SERVICE_TYPES, type ServiceType } from "@/lib/constants";

type Urgency = "Emergency now" | "This week" | "Flexible";
type TimeWindow = "Morning" | "Afternoon" | "Evening";

type FormData = {
  service: ServiceType | "";
  urgency: Urgency | "";
  timeWindow: TimeWindow | "";
  name: string;
  phone: string;
  address: string;
  notes: string;
};

const INITIAL_FORM: FormData = {
  service: "",
  urgency: "",
  timeWindow: "",
  name: "",
  phone: "",
  address: "",
  notes: "",
};

const URGENCY_OPTIONS: Urgency[] = ["Emergency now", "This week", "Flexible"];
const TIME_OPTIONS: TimeWindow[] = ["Morning", "Afternoon", "Evening"];

function generateConfirmationId() {
  return `HVAC-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

type AiSchedulerProps = {
  embedded?: boolean;
};

export default function AiScheduler({ embedded = false }: AiSchedulerProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [thinking, setThinking] = useState(false);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [confirmationId, setConfirmationId] = useState("");

  const isEmergency = form.urgency === "Emergency now";
  const totalSteps = 5;

  const advance = useCallback((delay = 400) => {
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setStep((s) => s + 1);
    }, delay);
  }, []);

  const reset = useCallback(() => {
    setForm(INITIAL_FORM);
    setStep(0);
    setConfirmationId("");
    setThinking(false);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(reset, 300);
  }, [reset]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-scheduler", handler);
    return () => window.removeEventListener("open-scheduler", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleServiceSelect = (service: ServiceType) => {
    setForm((f) => ({ ...f, service }));
    advance();
  };

  const handleUrgencySelect = (urgency: Urgency) => {
    setForm((f) => ({ ...f, urgency, timeWindow: urgency === "Emergency now" ? "" : f.timeWindow }));
    advance();
  };

  const handleTimeSelect = (timeWindow: TimeWindow) => {
    setForm((f) => ({ ...f, timeWindow }));
    advance();
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationId(generateConfirmationId());
    advance(600);
  };

  const progressPercent = ((step + 1) / totalSteps) * 100;

  const panel = open && (
    <>
      <div
        className="fixed inset-0 z-[60] bg-text-primary/40 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="scheduler-title"
        className="scheduler-panel-enter fixed inset-x-0 bottom-0 z-[70] flex max-h-[90svh] flex-col bg-surface-elevated shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:max-h-[640px]"
        style={{ borderRadius: "var(--radius-scheduler)" }}
      >
        <header className="flex items-start justify-between border-b border-border px-6 py-5">
          <div>
            <h2 id="scheduler-title" className="font-display text-lg font-bold text-text-primary">
              Schedule Service
            </h2>
            <p className="mt-0.5 text-xs text-text-secondary">
              AI-assisted · Human-backed
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Close scheduler"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </header>

        <div className="h-0.5 w-full bg-border">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {thinking && (
            <div className="mb-4">
              <div className="h-0.5 w-full overflow-hidden bg-border">
                <div className="thinking-line h-full w-full bg-accent" />
              </div>
            </div>
          )}

          {!thinking && step === 0 && (
            <div>
              <p className="text-sm font-medium text-text-primary">
                What type of service do you need?
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICE_TYPES.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    className="border border-border bg-bg px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-muted"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!thinking && step === 1 && (
            <div>
              <p className="text-sm font-medium text-text-primary">
                How urgent is this request?
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {URGENCY_OPTIONS.map((urgency) => (
                  <button
                    key={urgency}
                    type="button"
                    onClick={() => handleUrgencySelect(urgency)}
                    className={`border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      urgency === "Emergency now"
                        ? "border-accent bg-accent-muted text-text-primary hover:bg-accent-muted"
                        : "border-border bg-bg text-text-primary hover:border-accent"
                    }`}
                  >
                    {urgency}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!thinking && step === 2 && !isEmergency && (
            <div>
              <p className="text-sm font-medium text-text-primary">
                What time of day works best?
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {TIME_OPTIONS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleTimeSelect(time)}
                    className="border border-border bg-bg px-4 py-3 text-left text-sm font-medium text-text-primary transition-colors hover:border-accent"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!thinking && step === 2 && isEmergency && (
            <div>
              <div className="border border-accent bg-accent-muted p-4">
                <p className="text-sm font-semibold text-text-primary">
                  For emergencies, call now
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 block font-display text-2xl font-bold text-accent hover:text-accent-hover"
                >
                  {PHONE}
                </a>
                <p className="mt-2 text-xs text-text-secondary">
                  We can still collect your details to dispatch faster.
                </p>
              </div>
              <button
                type="button"
                onClick={() => advance(200)}
                className="btn-press mt-4 w-full bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                Continue with details
              </button>
            </div>
          )}

          {!thinking && step === 3 && (
            <form onSubmit={handleSubmitDetails}>
              <p className="text-sm font-medium text-text-primary">
                Tell us how to reach you
              </p>
              {isEmergency && (
                <div className="mt-3 border border-accent bg-accent-muted p-3">
                  <p className="text-xs font-semibold text-text-primary">
                    Emergency? Call immediately:
                  </p>
                  <a href={PHONE_HREF} className="text-sm font-bold text-accent">
                    {PHONE}
                  </a>
                </div>
              )}
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                  style={{ borderRadius: "var(--radius-input)" }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                  style={{ borderRadius: "var(--radius-input)" }}
                />
                <input
                  type="text"
                  required
                  placeholder="Address or ZIP (Atlanta area)"
                  value={form.address}
                  onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  className="w-full border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                  style={{ borderRadius: "var(--radius-input)" }}
                />
                <textarea
                  placeholder="Brief notes (optional)"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  className="w-full resize-none border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
                  style={{ borderRadius: "var(--radius-input)" }}
                />
              </div>
              <button
                type="submit"
                className="btn-press mt-6 w-full bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                Review request
              </button>
            </form>
          )}

          {!thinking && step === 4 && (
            <div>
              <p className="text-sm font-medium text-text-primary">Request summary</p>
              <dl className="mt-4 space-y-3 border border-border bg-bg p-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-text-secondary">Service</dt>
                  <dd className="font-medium text-text-primary">{form.service}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-secondary">Urgency</dt>
                  <dd className="font-medium text-text-primary">{form.urgency}</dd>
                </div>
                {form.timeWindow && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-text-secondary">Preferred window</dt>
                    <dd className="font-medium text-text-primary">{form.timeWindow}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="text-text-secondary">Name</dt>
                  <dd className="font-medium text-text-primary">{form.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-secondary">Phone</dt>
                  <dd className="font-medium text-text-primary">{form.phone}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-secondary">Location</dt>
                  <dd className="font-medium text-text-primary">{form.address}</dd>
                </div>
                {form.notes && (
                  <div>
                    <dt className="text-text-secondary">Notes</dt>
                    <dd className="mt-1 font-medium text-text-primary">{form.notes}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 border border-success/30 bg-success/5 p-4">
                <p className="text-sm font-semibold text-success">Request received</p>
                <p className="mt-1 font-display text-lg font-bold text-text-primary">
                  {confirmationId}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  A team member will confirm your appointment shortly.
                </p>
              </div>

              {isEmergency && (
                <div className="mt-4 border border-accent bg-accent-muted p-4">
                  <p className="text-sm font-semibold text-text-primary">
                    Need immediate help?
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-1 block font-display text-xl font-bold text-accent"
                  >
                    Call {PHONE}
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={close}
                className="btn-press mt-6 w-full border border-border bg-bg py-3 text-sm font-semibold text-text-primary hover:bg-surface"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (embedded) {
    return (
      <section id="schedule" className="border-t border-border bg-surface-elevated px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Schedule
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                Book service in minutes
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Our AI-assisted scheduler walks you through the essentials. A real
                team member confirms every appointment - no automated runaround.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn-press mt-8 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-hover"
              >
                Open Scheduler
              </button>
            </div>
            <div className="border border-border bg-bg p-8 lg:p-10">
              <ol className="space-y-6">
                {[
                  "Select your service type",
                  "Tell us how urgent it is",
                  "Pick a preferred time window",
                  "Share your contact details",
                  "Review and confirm",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent-muted font-display text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {panel}
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-press fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-text-primary text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-text-primary/90 sm:bottom-8 sm:right-8"
            aria-label="Open schedule panel"
          >
            Book
          </button>
        )}
      </section>
    );
  }

  return (
    <>
      {panel}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-press fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-text-primary text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-text-primary/90 sm:bottom-8 sm:right-8"
        aria-label="Open schedule panel"
      >
        Book
      </button>
    </>
  );
}

export function openScheduler() {
  window.dispatchEvent(new Event("open-scheduler"));
}
