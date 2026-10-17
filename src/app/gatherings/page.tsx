import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoNote } from "@/components/DemoNote";
import { PageHero } from "@/components/PageHero";
import { gatherings, units } from "@/data/fellowship";

export const metadata: Metadata = {
  title: "Gatherings",
  description: "Weekly services, Bible study, prayer and evangelism of the TLC campus fellowship at OAU.",
};

export default function GatheringsPage() {
  return (
    <>
      <PageHero
        title={["Gather", "with us"]}
        intro={
          <p>
            Everything happens on campus and everyone is welcome, whether it is your first week at
            OAU or your last. Come as you are; you will leave with a family.
          </p>
        }
        aside={<DemoNote>Times and venues are placeholders until the fellowship confirms this semester&rsquo;s schedule.</DemoNote>}
      />

      {/* Schedule */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">The week</h2>
        <ol className="mt-12 space-y-4">
          {gatherings.map((g, i) => (
            <li
              key={g.day}
              className={`grid gap-6 rounded-[1.75rem] p-6 sm:p-8 md:grid-cols-12 md:items-center ${
                i === 0 ? "bg-navy text-white" : "bg-sky"
              }`}
            >
              <p
                className={`display text-6xl uppercase md:col-span-3 lg:text-7xl ${
                  i === 0 ? "text-white" : "text-chosen-red"
                }`}
              >
                {g.day}
              </p>
              <div className="md:col-span-5">
                <h3 className="text-2xl font-semibold">{g.name}</h3>
                <p className={`mt-2 leading-relaxed ${i === 0 ? "text-white/75" : "text-ink-soft"}`}>{g.note}</p>
              </div>
              <dl className="grid grid-cols-2 gap-4 md:col-span-4 md:text-right">
                <div>
                  <dt className={i === 0 ? "text-sm text-white/60" : "text-sm text-ink-soft"}>Time</dt>
                  <dd className="mt-1 font-semibold">{g.time}</dd>
                </div>
                <div>
                  <dt className={i === 0 ? "text-sm text-white/60" : "text-sm text-ink-soft"}>Venue</dt>
                  <dd className="mt-1 font-semibold">{g.venue}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      {/* Photo band */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-10">
        {[
          { src: "/images/scenes/choir.jpg", alt: "A worship leader singing on stage" },
          { src: "/images/scenes/praise.jpg", alt: "Worshippers raising their hands" },
          { src: "/images/scenes/worship-hands.jpg", alt: "A worshipper with arms raised toward the light" },
        ].map((img, i) => (
          <div key={img.src} className={`arch relative aspect-[3/4] bg-navy ${i === 1 ? "sm:translate-y-10" : ""}`}>
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      {/* Units */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">Find your unit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Every member serves somewhere. Pick a unit that fits your gifts and the coordinator
              will take it from there.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-chosen-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-chosen-red-deep"
            >
              Ask to join a unit
            </Link>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {units.map((u) => (
              <li key={u.name} className="border-t border-sky-line py-5">
                <h3 className="text-xl font-semibold">{u.name}</h3>
                <p className="mt-1 text-ink-soft">{u.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
