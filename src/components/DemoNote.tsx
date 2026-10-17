export function DemoNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 flex items-start gap-3 rounded-2xl border border-chosen-red/30 bg-white px-4 py-3 font-sans text-[0.92rem] leading-snug text-ink">
      <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-chosen-red" />
      <span>{children}</span>
    </p>
  );
}
