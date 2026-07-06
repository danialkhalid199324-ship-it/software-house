"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Line = { t: string; tone?: "dim" | "ok" | "accent" };

const SCRIPT: Line[] = [
  { t: "$ meridian deploy --env production", tone: "accent" },
  { t: "→ compiling client-portal (next build)", tone: "dim" },
  { t: "✓ 214 routes · 0 type errors", tone: "ok" },
  { t: "→ running compliance checks", tone: "dim" },
  { t: "✓ audit-log · permissions · data-residency: au", tone: "ok" },
  { t: "→ deploying ai-agent: enquiry-triage v2.4", tone: "dim" },
  { t: "✓ guardrails active · human review: on", tone: "ok" },
  { t: "→ syncing crm → invoicing pipeline", tone: "dim" },
  { t: "✓ 1,382 records reconciled · 0 exceptions", tone: "ok" },
  { t: "✓ live in 38s — all systems operational", tone: "accent" },
];

export function BuildLog() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? SCRIPT.length : 0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (reduce) return;
    timer.current = setInterval(() => {
      setCount((c) => {
        if (c >= SCRIPT.length) {
          clearInterval(timer.current);
          // pause, then loop
          setTimeout(() => setCount(0), 5000);
          setTimeout(() => {
            timer.current = setInterval(
              () => setCount((n) => Math.min(n + 1, SCRIPT.length)),
              620
            );
          }, 5200);
          return c;
        }
        return c + 1;
      });
    }, 620);
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <div className="card-ink relative overflow-hidden shadow-glow">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-carbon px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">
          deploy · production
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> live
        </span>
      </div>
      <div className="min-h-[300px] px-5 py-4 font-mono text-[12.5px] leading-[1.9] md:text-[13px]">
        {SCRIPT.slice(0, count).map((l, i) => (
          <div
            key={i}
            className={
              l.tone === "ok"
                ? "text-emerald-400"
                : l.tone === "accent"
                ? "text-[#9DA0FF]"
                : "text-slate-500"
            }
          >
            {l.t}
          </div>
        ))}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#9DA0FF]" />
      </div>
      {/* beam sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-beam bg-gradient-to-r from-transparent via-signal/10 to-transparent"
      />
    </div>
  );
}
