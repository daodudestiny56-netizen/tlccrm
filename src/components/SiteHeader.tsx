"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/nav";
import { GlobeMark } from "./Badge";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    openButton.current?.focus();
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-sky-line/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-3" aria-label="TLC OAU Campus Fellowship, home">
            <GlobeMark className="size-10 shrink-0 transition-transform duration-500 group-hover:rotate-[20deg]" />
            <span className="leading-none">
              <span className="display block text-[1.35rem] uppercase">
                <span className="split-ink">The Lord&rsquo;s Chosen</span>
              </span>
              <span className="mt-1 block text-[0.78rem] font-medium text-ink-soft">
                OAU Campus Fellowship, Ile-Ife
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                        active ? "bg-navy text-white" : "text-ink hover:bg-sky"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/gatherings"
            className="hidden rounded-full bg-chosen-red px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-chosen-red-deep lg:inline-block"
          >
            Plan a visit
          </Link>

          <button
            ref={openButton}
            type="button"
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border border-sky-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </button>
        </div>
      </header>

      {/* Lives outside the header: backdrop-blur would otherwise trap position: fixed */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-50 flex flex-col bg-navy px-4 pb-10 text-white transition-[opacity,visibility] duration-300 sm:px-6 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-18 items-center justify-between">
          <GlobeMark className="size-10" />
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            className="flex size-11 items-center justify-center rounded-full border border-white/30"
          >
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-8">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`display block py-2 text-[3.2rem] uppercase ${
                    pathname === link.href ? "text-chosen-red" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/gatherings"
          onClick={() => setOpen(false)}
          className="mt-auto self-start rounded-full bg-chosen-red px-7 py-3.5 font-semibold"
        >
          Plan a visit
        </Link>
      </div>
    </>
  );
}
