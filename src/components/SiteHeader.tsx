"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { GlobeMark } from "./Badge";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
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
                    className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
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
          type="button"
          className="relative z-50 flex size-11 items-center justify-center rounded-full border border-sky-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45 text-white" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45 text-white" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-navy px-6 pt-24 pb-10 text-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
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
        <p className="mt-auto text-sm text-white/70">Jesus is Lord. Heaven at last.</p>
      </div>
    </header>
  );
}
