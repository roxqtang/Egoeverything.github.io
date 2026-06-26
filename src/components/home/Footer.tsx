import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-paper px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold uppercase tracking-[0.12em] text-ink">
            EgoEverything
          </p>
          <p className="mt-1">
            Human behavior-inspired long-context egocentric video understanding
            in AR.
          </p>
        </div>
        <a
          href="#overview"
          className="inline-flex w-fit items-center gap-2 border border-ink/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
        >
          Back to top
          <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
        </a>
      </div>
    </footer>
  );
}
