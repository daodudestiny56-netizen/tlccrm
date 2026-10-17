import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-4 py-28 sm:px-6 lg:px-10 lg:py-40">
      <h1 className="display text-[clamp(4.5rem,14vw,11rem)] uppercase">
        <span className="split-ink">Not here</span>
      </h1>
      <p className="mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
        This page doesn&rsquo;t exist. It may have moved, or the link may be mistyped.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-chosen-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-chosen-red-deep"
      >
        Back to the home page
      </Link>
    </section>
  );
}
