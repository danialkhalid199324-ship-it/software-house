import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-ink grid-ink px-6 pt-16">
      <div className="text-center">
        <p className="eyebrow eyebrow-dark justify-center">404</p>
        <h1 className="h-display mt-4 text-3xl text-white md:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-slate-400">
          The link may be outdated. Head back and try from there.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
