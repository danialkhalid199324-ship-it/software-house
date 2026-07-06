import type { Metadata } from "next";
import { Reveal, SectionHeader } from "@/components/primitives";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project. Tell us the operational problem and we'll respond within one business day with an honest read on the right solution.",
};

const expectations = [
  {
    k: "Within 1 business day",
    v: "A reply from an engineer — not an autoresponder or a salesperson.",
  },
  {
    k: "A 30-minute discovery call",
    v: "We map the problem, constraints and what success looks like.",
  },
  {
    k: "A fixed, itemised proposal",
    v: "Scope, timeline and cost in writing. No open-ended hourly billing.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="wrap relative pb-16 pt-36 md:pb-20 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Contact</p>
            <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
              Let&apos;s scope the system your business needs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              The more plainly you describe the problem, the better our first
              answer will be. No jargon required.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="What happens next"
              title="A defined path from enquiry to proposal."
            />
            <div className="mt-8 space-y-5">
              {expectations.map((e, i) => (
                <Reveal key={e.k} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-signal/40 font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-slate-900">
                        {e.k}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {e.v}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="card mt-10 p-6">
                <p className="eyebrow eyebrow-light">Direct</p>
                <p className="mt-4 font-mono text-sm leading-loose text-slate-600">
                  <a href={`mailto:${site.email}`} className="hover:text-signal">
                    {site.email}
                  </a>
                  <br />
                  {site.phone}
                  <br />
                  {site.location}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
