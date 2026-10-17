import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { beliefs, fellowship, gatherings, units } from "@/data/fellowship";
import { advisers, executives } from "@/data/people";

export default function Home() {
  const sunday = gatherings[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-7 lg:pt-10">
            <p className="fade-late max-w-md text-[1.05rem] font-medium text-ink-soft">
              The Lord&rsquo;s Chosen Charismatic Revival Ministries, campus fellowship at Obafemi
              Awolowo University, <span className="whitespace-nowrap">Ile-Ife</span>
            </p>
            <h1 className="display mt-6 text-[clamp(5.2rem,17vw,14rem)] uppercase [&_.line-mask]:-mb-[0.1em]">
              <span className="line-mask">
                <span className="line-rise split-ink">Heaven</span>
              </span>
              <span className="line-mask">
                <span className="line-rise split-ink" style={{ animationDelay: "0.12s" }}>
                  at last.
                </span>
              </span>
            </h1>
            <p className="fade-late mt-8 max-w-lg font-serif text-[1.5rem] leading-[1.5]">
              Worship, the Word and prayer for students who want to live for Christ on campus and
              make heaven at the end of it all.
            </p>
            <div className="fade-late mt-10 flex flex-wrap gap-3">
              <Link
                href="/gatherings"
                className="rounded-full bg-chosen-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-chosen-red-deep"
              >
                See this week&rsquo;s gatherings
              </Link>
              <Link
                href="/executives"
                className="rounded-full border-2 border-navy px-7 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Meet the executives
              </Link>
            </div>
          </div>

          <div className="relative self-start lg:col-span-5">
            <div className="unveil arch relative aspect-[4/5] w-full bg-navy">
              <Image
                src="/images/scenes/crusade.jpg"
                alt="A crowd worshipping outdoors with hands raised"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <Badge
              id="hero-badge"
              className="fade-late absolute -bottom-8 -left-4 size-36 drop-shadow-xl sm:size-44 lg:-left-16 lg:size-52"
            />
          </div>
        </div>

        {/* Next service strip */}
        <div className="bg-navy text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
            <p className="text-white/70">Join us this {sunday.day}</p>
            <p className="display-soft text-3xl uppercase sm:text-4xl">{sunday.name}</p>
            <p className="font-medium">
              {sunday.time.split(" – ")[0]}, {sunday.venue}
            </p>
          </div>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display-soft text-5xl uppercase text-navy sm:text-6xl">Your week with us</h2>
            <p className="mt-5 max-w-sm font-serif text-[1.3rem] leading-[1.55] text-ink-soft">
              Five fixed points in a busy semester. Come to one, and you will find a family at all
              of them.
            </p>
            <Link href="/gatherings" className="mt-8 inline-block font-semibold text-chosen-red-deep underline decoration-2 underline-offset-4 hover:text-navy">
              Full schedule and venues
            </Link>
          </div>
          <ol className="lg:col-span-8">
            {gatherings.map((g) => (
              <li
                key={g.day}
                className="grid grid-cols-[6.5rem_1fr] gap-x-6 gap-y-1 border-t border-sky-line py-6 last:border-b sm:grid-cols-[9rem_1fr_auto]"
              >
                <p className="display text-3xl uppercase text-chosen-red sm:text-4xl">{g.day.slice(0, 3)}</p>
                <div>
                  <p className="text-xl font-semibold">{g.name}</p>
                  <p className="mt-1 text-ink-soft">{g.venue}</p>
                </div>
                <p className="col-start-2 font-medium text-navy sm:col-start-3 sm:text-right">{g.time}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scripture */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/scenes/prayer.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-10 lg:py-40">
          <blockquote>
            <p className="max-w-5xl font-serif text-[clamp(2.2rem,5.2vw,4.6rem)] leading-[1.12] italic">
              &ldquo;{fellowship.scripture.text}&rdquo;
            </p>
            <footer className="mt-10">
              <cite className="inline-block rounded-full bg-chosen-red px-5 py-2 text-lg font-semibold not-italic">
                {fellowship.scripture.reference}
              </cite>
              <span className="ml-4 text-white/70">The verse on every TLC badge</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="display-soft text-5xl uppercase text-navy sm:text-6xl lg:col-span-4">
            What we preach
          </h2>
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {beliefs.map((b) => (
              <div key={b.title} className="border-l-4 border-chosen-red pl-6">
                <dt className="display text-4xl uppercase">{b.title}</dt>
                <dd className="mt-3 max-w-xs font-serif text-[1.3rem] leading-[1.55] text-ink-soft">{b.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-sky">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-soft max-w-2xl text-5xl uppercase text-navy sm:text-6xl">
              Guided by staff, led by students
            </h2>
            <p className="max-w-sm font-serif text-[1.3rem] leading-[1.55] text-ink-soft">
              {advisers.length} members of staff advise the fellowship. {executives.length} students
              serve on this year&rsquo;s executive council.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {advisers.slice(0, 3).map((a) => (
              <Link key={a.id} href={`/advisers#${a.id}`} className="group">
                <div className="arch relative aspect-[4/5] bg-navy/10">
                  <Image
                    src={a.photo}
                    alt={`${a.title} ${a.name}`}
                    fill
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-sm font-semibold text-chosen-red-deep">{a.position}</p>
                <p className="mt-1 text-2xl font-semibold">
                  {a.title} {a.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-8 rounded-[2rem] bg-white p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex -space-x-4" aria-label="Executive council">
              {executives.slice(0, 9).map((e, i) => (
                <li
                  key={e.id}
                  className={`arch-sm relative h-20 w-16 shrink-0 ring-4 ring-white sm:h-24 sm:w-[4.6rem] ${
                    i >= 5 ? "max-sm:hidden" : ""
                  }`}
                >
                  <Image src={e.photo} alt={e.name} fill sizes="80px" className="object-cover" />
                </li>
              ))}
              <li className="arch-sm flex h-20 w-16 shrink-0 items-end justify-center bg-chosen-red pb-3 font-semibold text-white ring-4 ring-white sm:h-24 sm:w-[4.6rem]">
                <span className="sm:hidden">+{executives.length - 5}</span>
                <span className="max-sm:hidden">+{executives.length - 9}</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/advisers"
                className="rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                All staff advisers
              </Link>
              <Link
                href="/executives"
                className="rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                The executive council
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Freshers */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="arch relative aspect-[5/4] bg-navy/10 lg:aspect-[4/5]">
            <Image
              src="/images/scenes/congregation.jpg"
              alt="Students seated in a fellowship meeting"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="display text-[clamp(3.4rem,8vw,6.5rem)] uppercase text-navy">
              New to Great Ife?
            </h2>
            <p className="mt-6 max-w-lg font-serif text-[1.5rem] leading-[1.5] text-ink-soft">
              Whether you just got your admission letter or you are in your final year, there is a
              place for you here. Come on Sunday, then find a unit where your gifts can serve.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {units.map((u) => (
                <li key={u.name} className="rounded-full border border-sky-line bg-sky px-4 py-2 text-[0.95rem] font-medium">
                  {u.name}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-chosen-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-chosen-red-deep"
            >
              Tell us you&rsquo;re coming
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
