import { NextResponse } from "next/server";

// Wire this to your provider before launch, e.g.:
//  - Resend / Postmark / SES for email notification
//  - Your CRM or an automation webhook (Zapier / n8n) for lead capture
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Example webhook forward (uncomment and set CONTACT_WEBHOOK_URL in env):
  // await fetch(process.env.CONTACT_WEBHOOK_URL!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
  // });

  console.log("[contact enquiry]", body);
  return NextResponse.json({ ok: true });
}
