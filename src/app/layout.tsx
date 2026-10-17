import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Lord's Chosen, OAU Campus Fellowship",
    template: "%s | TLC OAU Campus Fellowship",
  },
  description:
    "The Lord's Chosen Charismatic Revival Ministries campus fellowship at Obafemi Awolowo University, Ile-Ife, Osun State.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-chosen-red px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
