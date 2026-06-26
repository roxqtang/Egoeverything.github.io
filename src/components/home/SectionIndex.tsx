import { sectionIndex } from "@/lib/content";

export function SectionIndex() {
  return (
    <aside
      className="fixed left-7 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
      aria-label="Section index"
    >
      <div className="border-l border-ink/15 pl-4">
        {sectionIndex.map((item) => (
          <a
            key={item.number}
            href={item.href}
            className="group mb-5 grid grid-cols-[28px_1fr] gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted last:mb-0"
          >
            <span className="text-ink/35 transition group-hover:text-warm">
              {item.number}
            </span>
            <span className="transition group-hover:text-ink">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
