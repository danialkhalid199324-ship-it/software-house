import type { Metadata } from "next";
import { Reveal, SectionHeader } from "@/components/primitives";
import { CtaBand } from "@/components/cta-band";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "A software engineering company focused on solving business problems with technology — custom software, AI and automation built to enterprise standards.",
};

const principles = [
  {
    title: "The problem comes first",
    text: "We're not attached to any technology. The question is always what removes the most operational drag for the least complexity — sometimes that's a platform, sometimes it's a two-week automation.",
  },
  {
    title: "Boring reliability beats clever fragility",
    text: "Production systems earn trust by working every day. We choose proven tools, write tests, and design for the 3am failure case, because someone's business depends on it.",
  },
  {
    title: "Compliance is a feature, not friction",
    text: "Audit trails, permissions and documentation are designed in from the first commit. When the regulator or the auditor asks, the answer is already in the system.",
  },
  {
    title: "AI is an employee, not magic",
    text: "We deploy AI the way you'd onboard staff: defined responsibilities, supervision, review of its work, and a log of everything it does.",
  },
  {
    title: "Honesty over billable hours",
    text: "If your problem doesn't need custom software, we'll say so and point you at the off-the-shelf answer. Long-term trust is worth more than a project fee.",
  },
  {
    title: "Handover, not hostage",
    text: "Everything is documented and transferable. Clients stay because the work is good — never because leaving is hard.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[640px] rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="wrap relative pb-20 pt-36 md:pb-24 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">About us</p>
            <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
              An engineering company, built around business problems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              TrivaSoft Technology helps businesses work more efficiently through
              custom software, automation and AI — starting from how your
              operation actually runs, not from a technology we&apos;re trying to
              sell.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionHeader eyebrow="What we do" title="Turning operational drag into working software." />
          </div>
          <Reveal className="space-y-5 text-slate-600 md:col-span-7" delay={0.08}>
            <p className="text-base leading-relaxed md:text-lg">
              Most businesses lose hours every day to work that software should
              be doing — re-keying data between systems, chasing paperwork,
              assembling reports and preparing compliance evidence by hand. The
              right system gives that time back; the wrong one just becomes
              another job to manage.
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              TrivaSoft Technology is a software house that starts from the
              operation, not the technology. Every engagement begins by mapping
              how work actually flows through your business. Only then do we
              decide what to build — and, just as importantly, what not to — so
              you invest in the software that genuinely moves the needle.
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              We design, build and support custom platforms, AI agents and
              automation for organisations of every size, from single-site
              providers to national enterprises. The common thread is efficiency:
              in every project, the goal is software that does real operational
              work and keeps doing it, reliably, every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-carbon bg-ink">
        <div className="wrap grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-center md:text-left">
                <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-fog">
        <div className="wrap py-20 md:py-28">
          <SectionHeader
            eyebrow="How we think"
            title="Six principles we won't compromise on."
            lead="These aren't values-poster words. They're the decision rules our engineers apply on every project."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <div className="card h-full p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with an engineering partner, not a vendor."
        text="If any of this sounds like the kind of company you want building your systems, let's talk."
      />
    </>
  );
}
