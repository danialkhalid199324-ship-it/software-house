import type { Metadata } from "next";
import { Reveal, SectionHeader } from "@/components/primitives";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of custom software, AI and automation systems in production — built for NDIS providers, RTOs, healthcare and enterprise.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[640px] rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="wrap relative pb-20 pt-36 md:pb-24 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Selected work</p>
            <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
              Judged by what&apos;s running in production.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              A selection of engagements across software, AI and automation.
              Each follows the same structure: the problem, what we built, and
              what changed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap space-y-8 py-20 md:py-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.03}>
              <article
                id={p.slug}
                className="card scroll-mt-24 overflow-hidden"
              >
                <div className="relative flex h-56 items-center justify-center bg-ink grid-ink md:h-64">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    [ project visual placeholder ]
                  </span>
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/3 animate-beam bg-gradient-to-r from-transparent via-pulse/10 to-transparent"
                  />
                </div>
                <div className="grid gap-10 p-7 md:grid-cols-12 md:p-10">
                  <div className="md:col-span-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {p.category}
                    </p>
                    <h2 className="h-display mt-2 text-xl text-slate-900 md:text-2xl">
                      {p.title}
                    </h2>
                    <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-600">
                      <div>
                        <p className="eyebrow eyebrow-light">The problem</p>
                        <p className="mt-2">{p.problem}</p>
                      </div>
                      <div>
                        <p className="eyebrow eyebrow-light">What we built</p>
                        <p className="mt-2">{p.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="eyebrow eyebrow-light">Outcomes</p>
                    <ul className="mt-4 space-y-3">
                      {p.results.map((r) => (
                        <li
                          key={r}
                          className="rounded-lg border border-slate-200 bg-fog px-4 py-3 text-sm text-slate-700"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                    <p className="eyebrow eyebrow-light mt-7">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-fog">
        <div className="wrap py-16 md:py-20">
          <SectionHeader
            center
            eyebrow="A note on confidentiality"
            title="Much of our best work is under NDA."
            lead="The case studies above are representative placeholders. In a discovery call we can walk you through detailed, relevant examples — including systems similar to what you're planning."
          />
        </div>
      </section>

      <CtaBand
        title="Want a system like these?"
        text="Bring us the operational problem. We'll bring the architecture, the estimate and the delivery plan."
      />
    </>
  );
}
