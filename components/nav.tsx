"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/data";

// Transparent-background logo (icon + "TrivaSoft" wordmark only; the "Technology"
// line is dropped from the mark — the full company name lives on elsewhere in
// metadata, footer text and JSON-LD). Two same-sized variants: a dark wordmark
// for light surfaces and a white wordmark for dark surfaces (the footer, and the
// header while it is transparent over the dark hero). `dark` selects the variant;
// `className` sets the rendered size (header default; the footer passes a larger height).
export function Logo({
  dark = false,
  className = "h-[54px] w-auto",
}: {
  dark?: boolean;
  className?: string;
}) {
  const src = dark ? "/Logo-TrivaSoft-onDark.png" : "/Logo-TrivaSoft.png";
  return (
    <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
      <Image
        src={src}
        alt={site.name}
        width={891}
        height={654}
        priority
        className={className}
      />
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Header is transparent over the dark hero only while at the top of the page
  // and the mobile menu is closed. In that state, foreground text/icons must be
  // light to stay readable; once scrolled (white bg) or the menu is open (white
  // panel), they switch back to dark.
  const light = !scrolled && !open;

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
        <Logo dark={light} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                light
                  ? pathname.startsWith(item.href)
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                  : pathname.startsWith(item.href)
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-4 !py-2">
            Book a Consultation
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
              className={`absolute left-0 top-0 h-0.5 w-full transition-transform ${
                light ? "bg-white" : "bg-slate-900"
              } ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full transition-opacity ${
                light ? "bg-white" : "bg-slate-900"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full transition-transform ${
                light ? "bg-white" : "bg-slate-900"
              } ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
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
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
