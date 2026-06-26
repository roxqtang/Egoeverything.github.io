import Image from "next/image";
import { ArrowUpRight, Eye, FileText, Workflow } from "lucide-react";
import { paperAssets } from "@/lib/content";

export function HeroFigurePanel() {
  return (
    <div className="relative overflow-hidden border border-ink/15 bg-[#efede6] p-3 shadow-hairline sm:p-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.055)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="relative z-10 border border-ink/15 bg-paper">
        <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            <Workflow aria-hidden="true" size={14} strokeWidth={1.7} />
            Figure-led overview
          </div>
          <a
            href={paperAssets.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:text-warm"
          >
            Full paper
            <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
          </a>
        </div>

        <div className="relative h-[270px] overflow-hidden bg-white sm:h-[360px] lg:h-[440px]">
          <Image
            src={paperAssets.pipeline}
            alt="EgoEverything data generation pipeline figure"
            width={690}
            height={520}
            className="h-full w-full object-cover object-top grayscale-[8%]"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-16 text-paper">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/60">
              Data collection procedure
            </p>
            <h2 className="mt-2 max-w-lg font-display text-2xl font-semibold leading-tight sm:text-4xl">
              Video summary, gaze sampling, multi-agent MCQ curation.
            </h2>
          </div>
        </div>

        <div className="grid border-t border-ink/15 sm:grid-cols-2">
          <div className="border-b border-ink/15 p-3 sm:border-b-0 sm:border-r">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="inline-flex items-center gap-2">
                <Eye aria-hidden="true" size={14} strokeWidth={1.7} />
                AR memory scene
              </span>
              Fig. 1
            </div>
            <Image
              src={paperAssets.overview}
              alt="AR long-context memory scenario from the paper"
              width={360}
              height={160}
              className="h-28 w-full border border-ink/10 bg-white object-contain"
            />
          </div>

          <div className="p-3">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="inline-flex items-center gap-2">
                <FileText aria-hidden="true" size={14} strokeWidth={1.7} />
                Example MCQ
              </span>
              Fig. 4
            </div>
            <Image
              src={paperAssets.mcq}
              alt="Multiple-choice question example from EgoEverything"
              width={530}
              height={380}
              className="h-28 w-full border border-ink/10 bg-white object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
