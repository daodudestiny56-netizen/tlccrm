import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { PageHero } from "@/components/PageHero";
import { beliefs, fellowship } from "@/data/fellowship";

export const metadata: Metadata = {
  title: "About",
  description: "The story of The Lord's Chosen and its campus fellowship at Obafemi Awolowo University.",
};

const badgeParts = [
  {
    term: "The globe",
    detail: "The gospel is for the whole world, and that includes every hall and faculty on this campus.",
  },
  {
    term: "Heaven at Last",
    detail: "The ministry's watchword. Every sermon, song and prayer points to the same end.",
  },
  {
    term: "Matthew 6:33",
    detail: "Seek the kingdom first. For a student, that means God before grades, not instead of them.",
  },
  {
    term: "Jesus is Lord",
    detail: "The confession members greet each other with, on campus and everywhere else.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={["Who", "we are"]}
        intro={
          <p>
            A campus fellowship of {fellowship.name}: students and staff at {fellowship.campus}{" "}
            who gather to worship, pray and live holy lives while they study.
          </p>
        }
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="arch relative aspect-[4/5] bg-navy lg:col-span-5">
            <Image
              src="/images/scenes/worship-stage.jpg"
              alt="A congregation worshipping before a lit stage"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            <div>
              <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">The ministry</h2>
              <p className="mt-5 font-serif text-[1.3rem] leading-[1.55] text-ink-soft">
                The Lord&rsquo;s Chosen Charismatic Revival Ministries began in Lagos in 2002 under
                Pastor Lazarus Muoka, and has its headquarters at Ijesha, Lagos. It is a revival
                ministry: it calls people to repent, to live holy lives and to prepare for heaven,
                and it holds crusades across Nigeria and beyond.
              </p>
            </div>
            <div>
              <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">The campus fellowship</h2>
              <p className="mt-5 font-serif text-[1.3rem] leading-[1.55] text-ink-soft">
                On the OAU campus in Ile-Ife, the fellowship brings that same message to students.
                We meet on Sundays for worship, through the week for Bible study and prayer, and
                in the halls for evangelism. Staff advisers guide the work and a student executive
                council leads it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/advisers"
                className="rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Meet our staff advisers
              </Link>
              <Link
                href="/executives"
                className="rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Meet the executive council
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The badge */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="flex justify-center lg:col-span-5">
            <Badge id="about-badge" className="w-full max-w-[22rem]" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(3rem,7vw,5.5rem)] uppercase">
              <span className="split-ink-light">The badge we carry</span>
            </h2>
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {badgeParts.map((p) => (
                <div key={p.term} className="border-t border-white/20 pt-5">
                  <dt className="text-xl font-semibold">{p.term}</dt>
                  <dd className="mt-2 font-serif text-[1.15rem] leading-[1.5] text-white/75">{p.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">What we preach</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((b) => (
            <li key={b.title} className="rounded-[1.75rem] bg-sky p-7">
              <h3 className="display text-4xl uppercase">
                <span className="split-ink">{b.title}</span>
              </h3>
              <p className="mt-4 font-serif text-[1.3rem] leading-[1.55] text-ink-soft">{b.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
