"use client";

import { useState, type FormEvent } from "react";
import { units } from "@/data/fellowship";

const fieldClass =
  "mt-2 w-full rounded-2xl border-2 border-sky-line bg-white px-4 py-3 text-base outline-none placeholder:text-ink-soft/60 focus:border-navy";

/** Front-end only: the message is not sent anywhere until a backend is connected. */
export function ContactForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSentTo(String(data.get("name") || "friend").split(" ")[0]);
    e.currentTarget.reset();
  };

  if (sentTo) {
    return (
      <div className="rounded-[1.75rem] bg-navy p-8 text-white sm:p-10" role="status">
        <p className="display text-5xl uppercase">
          <span className="split-ink-light">Message ready, {sentTo}</span>
        </p>
        <p className="mt-4 max-w-md font-serif text-[1.3rem] leading-[1.55] text-white/80">
          This demo site doesn&rsquo;t send messages yet. Once the fellowship connects an inbox, a
          member of the welfare unit will reply within two days.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="mt-8 rounded-full border-2 border-white/40 px-6 py-3 font-semibold hover:border-white"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-sky p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-medium">
          Full name
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Adaeze Bello" />
        </label>
        <label className="block font-medium">
          Phone number
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+234 800 000 0000" />
        </label>
        <label className="block font-medium sm:col-span-2">
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@student.oauife.edu.ng" />
        </label>
        <label className="block font-medium">
          I&rsquo;m writing about
          <select name="topic" className={fieldClass} defaultValue="visit">
            <option value="visit">Visiting on Sunday</option>
            <option value="prayer">A prayer request</option>
            <option value="unit">Joining a unit</option>
            <option value="welfare">Welfare or counselling</option>
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="block font-medium">
          Unit (optional)
          <select name="unit" className={fieldClass} defaultValue="">
            <option value="">Not sure yet</option>
            {units.map((u) => (
              <option key={u.name}>{u.name}</option>
            ))}
          </select>
        </label>
        <label className="block font-medium sm:col-span-2">
          Message
          <textarea name="message" required rows={5} className={fieldClass} placeholder="Tell us a little about yourself and how we can help." />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 rounded-full bg-chosen-red px-8 py-4 font-semibold text-white transition-colors hover:bg-chosen-red-deep"
      >
        Send message
      </button>
    </form>
  );
}
