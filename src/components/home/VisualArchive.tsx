import Image from "next/image";
import { ArrowUpRight, BarChart3, FileText } from "lucide-react";
import { paperAssets, paperVisuals } from "@/lib/content";
import { SectionHeader } from "@/components/home/SectionHeader";

export function VisualArchive() {
  return (
    <section
      id="figures"
      className="border-b border-ink/15 bg-[#f0eee7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          eyebrow="02 / Paper Figures"
          title="Let the paper explain the benchmark at a glance."
          description="Instead of hiding the figures behind a PDF link, the homepage surfaces the core artifacts: the generation pipeline, MCQ evidence layout, category distributions, and evaluation snapshot."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="border border-ink/15 bg-paper p-3">
            <div className="flex items-center justify-between border-b border-ink/15 px-2 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              <span>{paperVisuals[0].figure} / {paperVisuals[0].title}</span>
              <a
                href={paperAssets.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-ink hover:text-warm"
              >
                Open PDF
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
              </a>
            </div>
            <div className="mt-3 overflow-hidden border border-ink/10 bg-white">
              <Image
                src={paperVisuals[0].image}
                alt={paperVisuals[0].title}
                width={690}
                height={520}
                className="h-[360px] w-full object-cover object-top sm:h-[520px]"
              />
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
              {paperVisuals[0].description}
            </p>
          </article>

          <div className="grid gap-4">
            {paperVisuals.slice(1).map((visual) => (
              <article
                key={visual.title}
                className="grid gap-3 border border-ink/15 bg-paper p-3 sm:grid-cols-[0.95fr_1fr]"
              >
                <div className="overflow-hidden border border-ink/10 bg-white">
                  <Image
                    src={visual.image}
                    alt={visual.title}
                    width={530}
                    height={380}
                    className="h-48 w-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-warm">
                      {visual.figure}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">
                      {visual.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {visual.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="border border-ink/15 bg-ink p-4 text-paper">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/60">
              <span className="inline-flex items-center gap-2">
                <BarChart3 aria-hidden="true" size={14} strokeWidth={1.7} />
                Distribution
              </span>
              Fig. 6
            </div>
            <Image
              src={paperAssets.objectDistribution}
              alt="Distribution of target object categories"
              width={570}
              height={245}
              className="h-56 w-full border border-paper/15 bg-white object-contain"
            />
          </article>
          <article className="border border-ink/15 bg-paper p-4">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              <span className="inline-flex items-center gap-2">
                <FileText aria-hidden="true" size={14} strokeWidth={1.7} />
                Evaluation table
              </span>
              Table 1
            </div>
            <Image
              src={paperAssets.resultsTable}
              alt="Performance comparison table from EgoEverything"
              width={420}
              height={210}
              className="h-56 w-full border border-ink/10 bg-white object-contain"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
