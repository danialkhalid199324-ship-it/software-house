import Link from "next/link";
import { Reveal } from "./primitives";

export function CtaBand({
  title = "Have a system that needs building?",
  text = "Tell us the problem. We'll tell you honestly whether software, AI or automation is the right answer — and exactly what it would take.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink grid-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/25 blur-[140px]"
      />
      <div className="wrap relative py-24 text-center md:py-32">
        <Reveal>
          <h2 className="h-display mx-auto max-w-3xl text-3xl text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400 md:text-lg">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary !px-7 !py-3.5">
              Book a discovery call
            </Link>
            <Link href="/portfolio" className="btn-ghost-dark !px-7 !py-3.5">
              See our work
            </Link>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            No obligation · Fixed-scope proposals · Reply within 1 business day
          </p>
        </Reveal>
      </div>
    </section>
  );
}
