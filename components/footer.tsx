import Link from "next/link";
import { site, services, industries } from "@/lib/data";
import { Logo } from "./nav";

export function Footer() {
  return (
    <footer className="border-t border-carbon bg-ink text-slate-400">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {site.description}
          </p>
          <p className="mt-6 font-mono text-xs text-slate-500">
            {site.location}
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-slate-300">
              {site.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow eyebrow-dark">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-signal hover:text-white">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow eyebrow-dark">Industries</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries#${i.slug}`} className="hover:text-white">
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow eyebrow-dark">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            {/* Work link hidden until real projects exist — route still live at /portfolio */}
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-carbon">
        <div className="wrap flex flex-col gap-4 py-6 font-mono text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms &amp; Conditions
            </Link>
          </div>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            all systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
