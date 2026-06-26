import { failureFactors } from "@/lib/content";

export function FailureAnalysisPreview() {
  return (
    <section className="bg-ink px-4 py-16 text-paper sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-4 border-t border-paper/20 pt-5 lg:grid-cols-[0.42fr_1fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
            05 / Analysis
          </p>
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Why current models struggle.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-paper/62">
              EgoEverything exposes failure modes that matter for AR: memory over
              time, peripheral attention, fine-grained object evidence, and the
              difference between visible and behaviorally attended context.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-paper/18 bg-paper/18 md:grid-cols-2 xl:grid-cols-4">
          {failureFactors.map((factor, index) => (
            <article key={factor.title} className="bg-ink p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center border border-paper/20 text-xs font-semibold text-paper/65">
                  0{index + 1}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-warm">
                  {factor.marker}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold leading-tight">
                {factor.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-paper/58">
                {factor.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
