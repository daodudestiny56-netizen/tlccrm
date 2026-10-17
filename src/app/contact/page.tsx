import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { fellowship } from "@/data/fellowship";
import { telHref } from "@/data/people";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the TLC campus fellowship at Obafemi Awolowo University, Ile-Ife.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={["Talk", "to us"]}
        intro={
          <p>
            Planning your first visit, carrying a prayer request, or ready to serve in a unit? Send
            a message and someone from the fellowship will get back to you.
          </p>
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="space-y-10 lg:col-span-5">
            <div>
              <h2 className="text-sm font-semibold text-ink-soft">Email</h2>
              <a href={`mailto:${fellowship.email}`} className="mt-2 block text-2xl font-semibold break-all text-navy hover:text-chosen-red">
                {fellowship.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-ink-soft">Phone</h2>
              <a href={telHref(fellowship.phone)} className="mt-2 block text-2xl font-semibold text-navy hover:text-chosen-red">
                {fellowship.phone}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-ink-soft">Sunday venue</h2>
              <p className="mt-2 text-2xl font-semibold">{fellowship.venue}</p>
              <p className="mt-1 text-ink-soft">{fellowship.city}</p>
            </div>
            <div>
              <div className="arch overflow-hidden border border-sky-line bg-sky">
                <iframe
                  title="Map of Obafemi Awolowo University, Ile-Ife"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=4.505%2C7.502%2C4.545%2C7.535&layer=mapnik&marker=7.5185%2C4.5240"
                  className="aspect-square w-full"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=7.5185&mlon=4.5240#map=15/7.5185/4.5240"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-chosen-red"
              >
                Open the campus map
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
