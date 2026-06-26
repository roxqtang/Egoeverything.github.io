import { stats } from "@/lib/content";
import { SectionHeader } from "@/components/home/SectionHeader";

export function StatsGrid() {
  return (
    <section id="dataset" className="bg-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          eyebrow="02 / Dataset"
          title="A gaze-grounded archive for AR memory research."
          description="EgoEverything combines long-context egocentric video with human attention traces and reviewed multiple-choice questions, making it practical to test what AR assistants can remember, localize, and reason about."
        />

        <div className="mt-10 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={`${stat.value}-${stat.label}`}
              className="min-h-56 border-b border-r border-ink/15 bg-paper p-5 transition hover:bg-white/55"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="font-display text-6xl font-black uppercase leading-none text-ink sm:text-7xl">
                    {stat.value}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-8 max-w-xs text-sm leading-6 text-muted">
                  {stat.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
