import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, SectionHeader } from "@/components/primitives";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, AI agents, business automation, CRM systems, enterprise software, API integrations and cloud solutions — engineered by one accountable team.",
};

const groups = [
  {
    id: "Build",
    label: "Build",
    lead: "Products your customers and staff touch every day — engineered for performance, usability and longevity.",
  },
  {
    id: "Intelligence",
    label: "Intelligence & Automation",
    lead: "Systems that do the work: AI agents, automated pipelines and client management built around your operation.",
  },
  {
    id: "Operate",
    label: "Operate & Scale",
    lead: "The infrastructure layer — integrations, cloud, enterprise hardening and the support that keeps it all running.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[640px] rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="wrap relative pb-20 pt-36 md:pb-24 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Services</p>
            <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
              Everything required to design, build and run serious software.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Twelve capabilities across three disciplines. Engage us for a
              single automation or the whole stack — the engineering standard
              is the same.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <nav
              className="mt-10 flex flex-wrap gap-2"
              aria-label="Service groups"
            >
              {groups.map((g) => (
                <a
                  key={g.id}
                  href={`#group-${g.id.toLowerCase()}`}
                  className="rounded-full border border-carbon px-4 py-2 font-mono text-xs text-slate-300 transition-colors hover:border-signal hover:text-white"
                >
                  {g.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={`group-${g.id.toLowerCase()}`}
          className={`scroll-mt-24 ${gi % 2 ? "bg-fog" : "bg-paper"}`}
        >
          <div className="wrap py-20 md:py-24">
            <SectionHeader eyebrow={`Discipline ${gi + 1} of 3`} title={g.label} lead={g.lead} />
            <div className="mt-12 space-y-6">
              {services
                .filter((s) => s.group === g.id)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={i * 0.04}>
                    <article
                      id={s.slug}
                      className="card grid scroll-mt-24 gap-8 p-7 md:grid-cols-12 md:p-10"
                    >
                      <div className="md:col-span-7">
                        <h3 className="h-display text-xl text-slate-900 md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 font-medium text-slate-700">
                          {s.summary}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {s.detail}
                        </p>
                        <Link
                          href={`/contact?service=${s.slug}`}
                          className="mt-6 inline-block text-sm font-medium text-signal hover:text-signal-deep"
                        >
                          Discuss {s.title.toLowerCase()} →
                        </Link>
                      </div>
                      <div className="md:col-span-5">
                        <p className="eyebrow eyebrow-light">What you get</p>
                        <ul className="mt-4 space-y-2.5">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex gap-3 text-sm text-slate-600"
                            >
                              <span
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-signal"
                                aria-hidden
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which service you need?"
        text="That's normal — most problems span several. Book a discovery call and we'll map the right combination for your situation."
      />
    </>
  );
}
