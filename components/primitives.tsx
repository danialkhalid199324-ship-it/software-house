"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "eyebrow-dark" : "eyebrow-light"} ${center ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`h-display mt-4 text-3xl leading-tight md:text-[2.6rem] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
