"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/data";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      <span className="relative grid h-7 w-7 place-items-center rounded-md bg-signal">
        <span className="block h-2.5 w-2.5 rotate-45 border-2 border-white" />
      </span>
      {site.name}
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(item.href)
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-4 !py-2">
            Start a project
          </Link>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-slate-900 transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-slate-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-slate-900 transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-fog"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2">
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
