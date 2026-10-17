"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DetailList, emailRow, phoneRow } from "@/components/DetailList";
import { executives, faculties, telHref } from "@/data/people";

type View = "cards" | "table";

export function ExecutiveDirectory() {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState<string>("All");
  const [view, setView] = useState<View>("cards");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return executives.filter((e) => {
      const inFaculty = faculty === "All" || e.faculty === faculty;
      const matches =
        !q || [e.name, e.position, e.department, e.faculty, e.level].some((v) => v.toLowerCase().includes(q));
      return inFaculty && matches;
    });
  }, [query, faculty]);

  const reset = () => {
    setQuery("");
    setFaculty("All");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      {/* Controls */}
      <div className="flex flex-col gap-6 border-b border-sky-line pb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative block w-full md:max-w-md">
            <span className="sr-only">Search executives</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-ink-soft"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, position or department"
              className="w-full rounded-full border-2 border-sky-line bg-white py-3.5 pr-5 pl-13 text-base outline-none placeholder:text-ink-soft/70 focus:border-navy"
            />
          </label>

          <div role="group" aria-label="Layout" className="inline-flex self-start rounded-full bg-sky p-1 md:self-auto">
            {(["cards", "table"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  view === v ? "bg-navy text-white" : "text-ink hover:text-navy"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Filter by faculty" className="flex flex-wrap gap-2">
          {["All", ...faculties].map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={faculty === f}
              onClick={() => setFaculty(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                faculty === f
                  ? "border-chosen-red bg-chosen-red text-white"
                  : "border-sky-line bg-white text-ink hover:border-navy"
              }`}
            >
              {f === "All" ? "All faculties" : f}
            </button>
          ))}
        </div>

        <p className="text-ink-soft" aria-live="polite">
          Showing {results.length} of {executives.length} executives
        </p>
      </div>

      {results.length === 0 ? (
        <div className="py-24 text-center">
          <p className="display-soft text-4xl uppercase text-navy">No executive matches that search</p>
          <p className="mt-3 text-lg text-ink-soft">Try a different name or position, or show all faculties.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-deep"
          >
            Clear search and filters
          </button>
        </div>
      ) : view === "cards" ? (
        <ul className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((e) => (
            <li key={e.id} id={e.id} className="scroll-mt-24">
              <div className="arch relative aspect-[4/5] bg-sky">
                <Image
                  src={e.photo}
                  alt={`Portrait of ${e.name}`}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-sm font-semibold text-chosen-red-deep">{e.position}</p>
              <h3 className="mt-1 text-2xl leading-tight font-semibold">{e.name}</h3>
              <div className="mt-3">
                <DetailList
                  compact
                  rows={[
                    { label: "Department", value: e.department },
                    { label: "Faculty", value: e.faculty },
                    { label: "Level", value: e.level },
                    emailRow(e.email),
                    phoneRow(e.phone),
                  ]}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-sky-line">
          <table className="w-full min-w-[60rem] text-left text-[0.95rem]">
            <thead className="bg-sky text-ink-soft">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium">Executive</th>
                <th scope="col" className="px-5 py-4 font-medium">Department</th>
                <th scope="col" className="px-5 py-4 font-medium">Faculty</th>
                <th scope="col" className="px-5 py-4 font-medium">Level</th>
                <th scope="col" className="px-5 py-4 font-medium">Email</th>
                <th scope="col" className="px-5 py-4 font-medium">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-line">
              {results.map((e) => (
                <tr key={e.id} className="hover:bg-sky/50">
                  <th scope="row" className="px-5 py-3 font-normal">
                    <div className="flex items-center gap-4">
                      <div className="arch-sm relative h-14 w-11 shrink-0 bg-sky">
                        <Image src={e.photo} alt="" fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold">{e.name}</p>
                        <p className="text-sm text-chosen-red-deep">{e.position}</p>
                      </div>
                    </div>
                  </th>
                  <td className="px-5 py-3">{e.department}</td>
                  <td className="px-5 py-3">{e.faculty}</td>
                  <td className="px-5 py-3 whitespace-nowrap">{e.level}</td>
                  <td className="px-5 py-3">
                    <a href={`mailto:${e.email}`} className="text-navy underline decoration-sky-line underline-offset-4 hover:decoration-chosen-red">
                      {e.email}
                    </a>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <a href={telHref(e.phone)} className="text-navy hover:text-chosen-red">
                      {e.phone}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
