import type { ReactNode } from "react";
import { Reveal } from "./primitives";

export function LegalHero({
  title,
  intro,
  updated,
}: {
  title: string;
  intro: string;
  updated: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink grid-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]"
      />
      <div className="wrap relative pb-16 pt-36 md:pb-20 md:pt-44">
        <Reveal>
          <p className="eyebrow eyebrow-dark">Legal</p>
          <h1 className="h-display mt-5 max-w-3xl text-4xl leading-tight text-white md:text-[3.2rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">{intro}</p>
          <p className="mt-6 font-mono text-xs text-slate-500">
            Last updated: {updated}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-paper">
      <div className="wrap py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="h-display text-xl text-slate-900 md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-signal">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
