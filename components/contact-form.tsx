"use client";

import { useState } from "react";
import { services } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/25 transition";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-10 text-center">
        <p className="eyebrow eyebrow-light justify-center">Message sent</p>
        <h3 className="h-display mt-4 text-2xl text-slate-900">
          Thanks — we&apos;ll be in touch within one business day.
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          We&apos;ll review your enquiry and reply with next steps, usually a short
          discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-6 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Name
          <input name="name" required autoComplete="name" placeholder="Your full name" className={inputCls} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Work email
          <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Company
          <input name="company" placeholder="Company or organisation" className={inputCls} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          What do you need?
          <select name="service" className={inputCls} defaultValue="">
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
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Project budget (optional)
        <select name="budget" className={inputCls} defaultValue="">
          <option value="">Prefer not to say</option>
          <option>Under $10k</option>
          <option>$10k – $30k</option>
          <option>$30k – $80k</option>
          <option>$80k – $150k</option>
          <option>$150k+</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Tell us about the project
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What problem are you trying to solve? What does success look like?"
          className={inputCls}
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We reply within one business day. Your details are never shared.
        </p>
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          The message didn&apos;t send. Check your connection and try again, or email
          us directly.
        </p>
      )}
    </form>
  );
}
