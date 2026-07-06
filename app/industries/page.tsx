import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, SectionHeader } from "@/components/primitives";
import { CtaBand } from "@/components/cta-band";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Software, AI and automation for NDIS providers, RTOs, healthcare, professional services, SMBs and enterprise — sectors where compliance and documentation are non-negotiable.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-0 h-[420px] w-[640px] rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="wrap relative pb-20 pt-36 md:pb-24 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Industries</p>
            <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
              We specialise where the stakes are operational.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Regulated, documentation-heavy sectors are where generic software
              breaks and where good engineering pays for itself fastest. That&apos;s
              where we work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap space-y-6 py-20 md:py-24">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <article
                id={ind.slug}
                className="card grid scroll-mt-24 gap-8 p-7 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Sector focus
                  </p>
                  <h2 className="h-display mt-3 text-xl text-slate-900 md:text-2xl">
                    {ind.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {ind.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block text-sm font-medium text-signal hover:text-signal-deep"
                  >
                    Talk to us about your {ind.title.toLowerCase()} project →
                  </Link>
                </div>
                <div className="md:col-span-6">
                  <p className="eyebrow eyebrow-light">Where we help</p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
                    {ind.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-slate-600">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-signal"
                          aria-hidden
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-fog">
        <div className="wrap py-20 md:py-24">
          <SectionHeader
            center
            eyebrow="Why sector depth matters"
            title="Domain knowledge is half the engineering."
            lead="A developer who doesn't understand NDIS Practice Standards, ASQA evidence requirements or clinical privacy obligations will build you a liability. We've done the homework, so discovery starts at the real problems — not a glossary lesson."
          />
        </div>
      </section>

      <CtaBand
        title="Don't see your industry?"
        text="The sectors above are where we're deepest, not a boundary. If your operation runs on complex workflows and documentation, we'll be at home in it."
      />
    </>
  );
}
