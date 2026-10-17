import { telHref } from "@/data/people";

type Row = { label: string; value: string; href?: string };

/** Labelled detail rows for a profile. Email and phone become tappable links. */
export function DetailList({ rows, compact = false }: { rows: Row[]; compact?: boolean }) {
  return (
    <dl className={compact ? "divide-y divide-sky-line text-[0.95rem]" : "divide-y divide-sky-line"}>
      {rows.map((row) => (
        <div
          key={row.label}
          className={`grid grid-cols-[6.5rem_1fr] gap-4 ${compact ? "py-2.5" : "py-3.5"}`}
        >
          <dt className="text-ink-soft">{row.label}</dt>
          <dd className="min-w-0 font-medium break-words">
            {row.href ? (
              <a
                href={row.href}
                className="text-navy underline decoration-sky-line decoration-2 underline-offset-4 hover:decoration-chosen-red"
              >
                {row.href.startsWith("mailto:") ? <BreakableEmail email={row.value} /> : row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Lets long addresses wrap before the @ rather than mid-word. */
function BreakableEmail({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at < 0) return email;
  return (
    <>
      {email.slice(0, at)}
      <wbr />
      {email.slice(at)}
    </>
  );
}

export const emailRow = (email: string): Row => ({ label: "Email", value: email, href: `mailto:${email}` });
export const phoneRow = (phone: string): Row => ({ label: "Phone", value: phone, href: telHref(phone) });
