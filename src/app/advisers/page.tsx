import type { Metadata } from "next";
import Image from "next/image";
import { DetailList, emailRow, phoneRow } from "@/components/DetailList";
import { DemoNote } from "@/components/DemoNote";
import { PageHero } from "@/components/PageHero";
import { advisers, type Adviser } from "@/data/people";

export const metadata: Metadata = {
  title: "Staff advisers",
  description: "Members of staff at Obafemi Awolowo University who advise the TLC campus fellowship.",
};

const rowsFor = (a: Adviser) => [
  { label: "Position", value: a.position },
  { label: "Department", value: a.department },
  { label: "Unit", value: a.unit },
  emailRow(a.email),
  phoneRow(a.phone),
];

export default function AdvisersPage() {
  const [lead, ...rest] = advisers;

  return (
    <>
      <PageHero
        title={["Staff", "advisers"]}
        intro={
          <p>
            Lecturers and university staff who stand with the fellowship: they counsel the
            executives, keep us accountable to the university, and pray for the students in their
            care.
          </p>
        }
        aside={
          <DemoNote>
            Demo profiles. Names, photographs and contact details are placeholders until the
            fellowship confirms its advisers.
          </DemoNote>
        }
      />

      {/* Senior adviser */}
      <section id={lead.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="arch relative aspect-[4/5] bg-sky lg:col-span-5">
            <Image
              src={lead.photo}
              alt={`Portrait of ${lead.title} ${lead.name}`}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="inline-block rounded-full bg-chosen-red px-4 py-1.5 text-sm font-semibold text-white">
              {lead.position}
            </p>
            <h2 className="display mt-6 text-[clamp(3rem,7vw,5.6rem)] uppercase text-navy">
              <span className="block text-[0.5em] text-ink-soft">{lead.title}</span>
              {lead.name}
            </h2>
            <div className="mt-8">
              <DetailList rows={rowsFor(lead)} />
            </div>
          </div>
        </div>
      </section>

      {/* Other advisers */}
      <section className="bg-sky">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <h2 className="display-soft text-4xl uppercase text-navy sm:text-5xl">Advisers by portfolio</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {rest.map((a) => (
              <li
                key={a.id}
                id={a.id}
                className="grid scroll-mt-24 gap-6 rounded-[1.75rem] bg-white p-5 sm:grid-cols-[11rem_1fr] sm:p-6"
              >
                <div className="arch relative aspect-[4/5] w-40 bg-sky sm:w-full">
                  <Image
                    src={a.photo}
                    alt={`Portrait of ${a.title} ${a.name}`}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl leading-tight font-semibold">
                    <span className="text-ink-soft">{a.title}</span> {a.name}
                  </h3>
                  <div className="mt-3">
                    <DetailList compact rows={rowsFor(a)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
