import type { ReactNode } from "react";

type PageHeroProps = {
  title: string[];
  intro: ReactNode;
  aside?: ReactNode;
};

/** Opening block for inner pages: split-ink title with the intro beside it. */
export function PageHero({ title, intro, aside }: PageHeroProps) {
  return (
    <section className="border-b border-sky-line/70 bg-sky">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-14 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-10 lg:pt-24 lg:pb-20">
        <h1 className="display text-[clamp(3.6rem,11vw,9.5rem)] uppercase lg:col-span-7">
          {title.map((line, i) => (
            <span key={line} className="line-mask">
              <span className="line-rise split-ink" style={{ animationDelay: `${i * 0.1}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div className="fade-late max-w-md font-serif text-[1.3rem] leading-[1.55] text-ink-soft lg:col-span-5 lg:justify-self-end">
          {intro}
          {aside}
        </div>
      </div>
    </section>
  );
}
