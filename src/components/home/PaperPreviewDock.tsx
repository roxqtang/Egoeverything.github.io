import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { paperAssets } from "@/lib/content";

export function PaperPreviewDock() {
  return (
    <a
      href={paperAssets.pdf}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 left-5 z-50 hidden w-[230px] border border-ink/15 bg-paper/92 p-2 text-ink shadow-hairline backdrop-blur-xl transition hover:-translate-y-1 hover:border-ink sm:block"
      aria-label="Open full EgoEverything paper PDF"
    >
      <div className="grid grid-cols-[52px_1fr] gap-3">
        <div className="relative overflow-hidden border border-ink/15 bg-white">
          <Image
            src={paperAssets.overview}
            alt=""
            width={360}
            height={160}
            className="h-14 w-full object-cover object-left"
          />
        </div>
        <div>
          <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            <BookOpen aria-hidden="true" size={12} strokeWidth={1.7} />
            Full paper
          </p>
          <p className="mt-1 text-sm font-semibold leading-tight">
            Preview PDF
            <ArrowUpRight
              aria-hidden="true"
              size={14}
              strokeWidth={1.7}
              className="ml-1 inline transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </p>
        </div>
      </div>
    </a>
  );
}
