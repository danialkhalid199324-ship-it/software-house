import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, SectionHeader } from "@/components/primitives";
import { BuildLog } from "@/components/build-log";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";
import {
  services,
  industries,
  process,
  technologies,
  projects,
  stats,
  site,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `${site.name} — Custom Software, AI & Automation Engineering`,
  description: site.description,
};

const whyUs = [
  {
    title: "Engineers, not order-takers",
    text: "We interrogate the problem before writing code. If a focused automation solves what an expensive platform was quoted for elsewhere, that's what we'll recommend.",
  },
  {
    title: "Compliance-grade by default",
    text: "Audit logs, permissions, data residency and documentation are built in from day one — because we work in sectors where regulators read the fine print.",
  },
  {
    title: "AI with guardrails",
    text: "Every AI system we ship has human review points, evaluation and full logging. Useful automation, never an unaccountable black box.",
  },
  {
    title: "You own everything",
    text: "Source code, infrastructure, documentation and IP transfer to you. No lock-in, no hostage situations, no proprietary platforms you can't leave.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ Hero (dark) */}
      <section className="relative overflow-hidden bg-ink grid-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/20 blur-[160px]"
        />
        <div className="wrap relative grid items-center gap-14 pb-24 pt-36 md:grid-cols-2 md:pb-32 md:pt-44">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Software · AI · Automation</p>
            <h1 className="h-display mt-5 text-4xl leading-[1.08] text-white md:text-[3.6rem]">
              We engineer the systems your business runs on.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              TrivaSoft Technology builds custom software, AI solutions and
              automation — spanning web and mobile apps, client portals and full
              digital transformation — engineered to enterprise standards and
              delivered without the enterprise theatre.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary !px-7 !py-3.5">
                Start a project
              </Link>
              <Link href="/services" className="btn-ghost-dark !px-7 !py-3.5">
                Explore services
              </Link>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-carbon pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-slate-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <BuildLog />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- Trusted technology partner */}
      <section className="border-b border-slate-100 bg-paper">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="A trusted technology partner"
              title="One engineering team across your entire stack."
              lead="Most businesses juggle a web agency, an app developer, an automation freelancer and an 'AI guy'. We replace all four with one accountable partner who understands how the pieces fit together."
            />
          </div>
          <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
            {[
              {
                k: "Strategy before software",
                v: "Every engagement starts with your operations, not our tech preferences.",
              },
              {
                k: "Senior engineers only",
                v: "The people who scope your project are the people who build it.",
              },
              {
                k: "Transparent delivery",
                v: "Weekly demos of working software. You always know where things stand.",
              },
              {
                k: "Long-term partnership",
                v: "Most clients stay for years — we maintain and evolve what we build.",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display font-semibold text-slate-900">
                    {item.k}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- Services overview */}
      <section className="bg-fog">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="What we build"
              title="Thirteen capabilities. One accountable team."
              lead="From a single automation to a full enterprise platform — scoped honestly and engineered properly."
            />
            <Reveal>
              <Link href="/services" className="btn-ghost-light">
                All services →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card group flex h-full flex-col p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {s.group}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 group-hover:text-signal">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.summary}
                  </p>
                  <span className="mt-5 text-sm font-medium text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Why choose us */}
      <section className="bg-paper">
        <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Why choose us"
              title="Built like it's ours. Owned like it's yours."
              lead="Anyone can promise 'quality'. These are the four commitments we're happy to put in a contract."
            />
          </div>
          <div className="md:col-span-7">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="grid gap-2 py-7 md:grid-cols-[220px_1fr] md:gap-8">
                    <h3 className="font-display font-semibold text-slate-900">
                      {w.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {w.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Industries */}
      <section className="bg-ink grid-ink">
        <div className="wrap py-20 md:py-28">
          <SectionHeader
            dark
            eyebrow="Industries we serve"
            title="Deep in regulated, operations-heavy sectors."
            lead="We specialise where documentation, compliance and workflow complexity make generic software fail."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/industries#${ind.slug}`}
                  className="card-ink group block h-full p-6 transition-colors hover:border-signal/50"
                >
                  <h3 className="font-display font-semibold text-white group-hover:text-[#9DA0FF]">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {ind.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Process */}
      <section className="bg-paper">
        <div className="wrap py-20 md:py-28">
          <SectionHeader
            center
            eyebrow="How we work"
            title="A process with no surprises."
            lead="Five stages, each with a defined output. You always know what happens next and what it costs."
          />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-5">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block"
            />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <li className="relative">
                  <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-signal/40 bg-paper font-mono text-xs text-signal">
                    {p.step}
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured work — hidden until real projects exist. Route still live at
          /portfolio. Restore by removing the `false &&` guard below. */}
      {false && (
      <section className="bg-fog">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Featured work"
              title="Solutions engineered for real operations."
            />
            <Reveal>
              <Link href="/portfolio" className="btn-ghost-light">
                View all solutions →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/portfolio#${p.slug}`} className="card group block overflow-hidden">
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-ink grid-ink">
                    <span
                      aria-hidden
                      className="px-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400"
                    >
                      {p.title}
                    </span>
                    <div
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1/3 animate-beam bg-gradient-to-r from-transparent via-pulse/10 to-transparent"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 group-hover:text-signal">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ------------------------------------------------ Technologies */}
      <section className="overflow-hidden border-y border-slate-100 bg-paper py-14">
        <Reveal className="wrap">
          <p className="eyebrow eyebrow-light">Technologies we use</p>
        </Reveal>
        <div className="relative mt-8" aria-label="Technology stack">
          <div className="flex w-max animate-marquee gap-3 pr-3 [--tw-animate-duration:36s] hover:[animation-play-state:paused]">
            {[...technologies, ...technologies].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-fog px-5 py-2.5 font-mono text-xs text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
        </div>
      </section>

      {/* ------------------------------------------------ FAQ */}
      <section className="bg-fog">
        <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Straight answers."
              lead="The questions every prospective client asks — answered before the sales call."
            />
          </div>
          <Reveal className="md:col-span-8">
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA + contact */}
      <CtaBand />
      <section id="contact" className="bg-paper">
        <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              title="Tell us what's slowing your business down."
              lead="Describe the problem in plain language — we'll respond with an honest read on the right solution and a rough budget range."
            />
            <Reveal delay={0.1}>
              <p className="mt-8 font-mono text-xs leading-loose text-slate-500">
                {site.email}
                <br />
                {site.location}
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
