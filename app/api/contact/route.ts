import { NextResponse } from "next/server";
import { site } from "@/lib/data";

// Enquiries are delivered to hello@trivasofttechnology.com.au (override with
// CONTACT_TO). Delivery channels are configured via environment variables:
//   - RESEND_API_KEY      → send an email via Resend's REST API (no SDK needed)
//   - CONTACT_FROM        → verified sender, e.g. "TrivaSoft <noreply@trivasofttechnology.com.au>"
//   - CONTACT_WEBHOOK_URL → optional CRM / automation webhook (Zapier / n8n / Make)
// If no channel is configured, the enquiry is logged (dev) and, in production,
// the request fails so a misconfiguration is caught rather than silently losing leads.

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const name = clean(body?.name);
  const email = clean(body?.email);
  const service = clean(body?.service);
  const message = clean(body?.message);
  const company = clean(body?.company);
  const phone = clean(body?.phone);
  const budget = clean(body?.budget);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailValid || !service || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid required fields" },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO || site.email;
  const from =
    process.env.CONTACT_FROM ||
    "TrivaSoft Website <noreply@trivasofttechnology.com.au>";

  const payload = {
    name,
    email,
    phone,
    company,
    service,
    budget,
    message,
    receivedAt: new Date().toISOString(),
  };

  const text = [
    "New enquiry from the TrivaSoft Technology website",
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "—"}`,
    `Company:  ${company || "—"}`,
    `Service:  ${service}`,
    `Budget:   ${budget || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    let delivered = false;

    // 1) Optional CRM / automation webhook
    if (process.env.CONTACT_WEBHOOK_URL) {
      const res = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      delivered = true;
    }

    // 2) Email via Resend REST API
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `New enquiry — ${service}`,
          text,
        }),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(`Email provider responded ${res.status} ${detail}`);
      }
      delivered = true;
    }

    if (!delivered) {
      if (process.env.NODE_ENV === "production") {
        console.error(
          "[contact] No delivery channel configured. Set RESEND_API_KEY or CONTACT_WEBHOOK_URL."
        );
        return NextResponse.json(
          { ok: false, error: "Contact delivery is not configured" },
          { status: 500 }
        );
      }
      console.warn(
        "[contact] Dev mode — no delivery channel configured; enquiry logged only:",
        payload
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }
}
