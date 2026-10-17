import Link from "next/link";
import { fellowship, gatherings } from "@/data/fellowship";
import { telHref } from "@/data/people";
import { navLinks } from "@/data/nav";
import { GlobeMark } from "./Badge";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-10">
        <p className="display text-[clamp(3.5rem,13vw,11rem)] uppercase">
          <span className="split-ink-light">Jesus is Lord</span>
        </p>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <GlobeMark className="size-10" />
              <p className="font-semibold leading-snug">
                TLC Campus Fellowship
                <br />
                <span className="font-normal text-white/70">{fellowship.campus}</span>
              </p>
            </div>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
              A campus fellowship of {fellowship.name}, {fellowship.city}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white/60">Pages</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-chosen-red">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white/60">Every week</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {gatherings.slice(0, 4).map((g) => (
                <li key={g.day}>
                  <span className="font-semibold">{g.day}</span>{" "}
                  <span className="text-white/70">{g.time.split(" – ")[0]}</span>
                  <br />
                  <span className="text-white/70">{g.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white/60">Reach us</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li>
                <a href={`mailto:${fellowship.email}`} className="break-all hover:text-chosen-red">
                  {fellowship.email}
                </a>
              </li>
              <li>
                <a href={telHref(fellowship.phone)} className="hover:text-chosen-red">
                  {fellowship.phone}
                </a>
              </li>
              <li className="text-white/70">{fellowship.venue}</li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {fellowship.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full border border-white/25 px-3.5 py-1.5 text-sm hover:border-chosen-red hover:bg-chosen-red"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>&copy; TLC Campus Fellowship, OAU Ile-Ife.</p>
          <p>Profiles and contact details on this site are demo content.</p>
        </div>
      </div>
    </footer>
  );
}
