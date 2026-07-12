"use client";

import { useState } from "react";
import { services } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/25 transition";
const inputErrCls = "border-red-400 focus:border-red-500 focus:ring-red-500/20";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <span id={id} className="text-xs font-normal text-red-600">
      {msg}
    </span>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.name?.trim()) e.name = "Please enter your name.";
    if (!data.email?.trim()) e.email = "Please enter your email address.";
    else if (!emailRe.test(data.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!data.service?.trim()) e.service = "Please select what you need.";
    if (!data.message?.trim())
      e.message = "Please tell us a little about your project.";
    return e;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      const first = Object.keys(found)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-10 text-center">
        <p className="eyebrow eyebrow-light justify-center">Message sent</p>
        <h3 className="h-display mt-4 text-2xl text-slate-900">
          Thank you — your enquiry is on its way.
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          A member of our team will review it and reply within one business day,
          usually to arrange a short discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-6 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className={`${inputCls} ${errors.name ? inputErrCls : ""}`}
          />
          <FieldError id="err-name" msg={errors.name} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Work email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={`${inputCls} ${errors.email ? inputErrCls : ""}`}
          />
          <FieldError id="err-email" msg={errors.email} />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Company <span className="font-normal text-slate-400">(optional)</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company or organisation"
            className={inputCls}
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Phone <span className="font-normal text-slate-400">(optional)</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Best number to reach you"
            className={inputCls}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Service required
          <select
            name="service"
            required
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "err-service" : undefined}
            className={`${inputCls} ${errors.service ? inputErrCls : ""}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option>Not sure yet — need advice</option>
          </select>
          <FieldError id="err-service" msg={errors.service} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Project budget{" "}
          <span className="font-normal text-slate-400">(optional)</span>
          <select name="budget" className={inputCls} defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $10k</option>
            <option>$10k – $30k</option>
            <option>$30k – $80k</option>
            <option>$80k – $150k</option>
            <option>$150k+</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Tell us about the project
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What problem are you trying to solve? What does success look like?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={`${inputCls} ${errors.message ? inputErrCls : ""}`}
        />
        <FieldError id="err-message" msg={errors.message} />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We reply within one business day. Your details are never shared.
        </p>
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Sorry — we couldn&apos;t send your message just now. Please try again,
          or email us directly at{" "}
          <a href="mailto:hello@trivasofttechnology.com.au" className="underline">
            hello@trivasofttechnology.com.au
          </a>
          .
        </p>
      )}
    </form>
  );
}
