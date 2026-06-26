const timelineFrames = [
  { label: "00:02", tone: "bg-ink/85", object: "cup", active: false },
  { label: "04:16", tone: "bg-cool/80", object: "menu", active: false },
  { label: "10:03", tone: "bg-warm/85", object: "sign", active: true },
  { label: "12:42", tone: "bg-ink/70", object: "table", active: false }
];

export function ConceptVisual() {
  return (
    <div className="relative overflow-hidden border border-ink/15 bg-[#efede6] p-4 shadow-hairline sm:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute left-6 top-6 h-28 w-28 rounded-full border border-cool/25 bg-cool/5 blur-2xl" />
      <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full border border-warm/20 bg-warm/10 blur-2xl" />

      <div className="relative z-10 flex items-center justify-between border-b border-ink/15 pb-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Egocentric Memory Trace
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">
            AR Recall Window
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          <span className="h-2 w-2 rounded-full bg-warm" />
          Live gaze
        </div>
      </div>

      <div className="relative mt-5 min-h-[430px]">
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute left-[12%] top-[12%] h-[72%] w-px bg-ink/10" />
          <div className="absolute left-[38%] top-[8%] h-[78%] w-px bg-ink/10" />
          <div className="absolute left-[64%] top-[16%] h-[68%] w-px bg-ink/10" />
          <div className="absolute left-[88%] top-[7%] h-[80%] w-px bg-ink/10" />
        </div>

        <div className="grid gap-3 sm:grid-cols-4">
          {timelineFrames.map((frame, index) => (
            <div
              key={frame.label}
              className={`relative h-36 overflow-hidden border border-ink/15 ${frame.tone}`}
            >
              <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_30%_24%,#fff_0,transparent_23%),linear-gradient(135deg,transparent_0_40%,rgba(255,255,255,.48)_40%_42%,transparent_42%)]" />
              <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-white/78">
                <span>F{index + 1}</span>
                <span>{frame.label}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div className="h-8 w-10 border border-white/55 bg-white/10" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                  {frame.object}
                </span>
              </div>
              {frame.active ? (
                <>
                  <div className="absolute left-[47%] top-[41%] h-6 w-6 rounded-full border border-white/80 bg-warm shadow-[0_0_0_8px_rgba(230,80,47,.28),0_0_0_18px_rgba(230,80,47,.11)] gaze-pulse" />
                  <div className="absolute left-[26%] top-[20%] h-20 w-24 border border-white bg-white/5">
                    <span className="absolute -top-5 left-0 bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-ink">
                      restaurant sign
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-ink/15 bg-paper/82 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                Temporal Query
              </p>
              <span className="border border-warm/30 bg-warm/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-warm">
                10m recall
              </span>
            </div>
            <p className="font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              &quot;What was the name of the restaurant I saw 10 minutes ago?&quot;
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted">
              <span className="border-t border-ink/15 pt-2">Gaze anchor</span>
              <span className="border-t border-ink/15 pt-2">Object trace</span>
              <span className="border-t border-ink/15 pt-2">Memory QA</span>
            </div>
          </div>

          <div className="border border-ink/15 bg-ink p-4 text-paper">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/55">
              Reasoning Stack
            </p>
            <div className="mt-4 space-y-3">
              {["Video stream", "Gaze path", "Recall interval", "Answer choice"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center border border-paper/20 text-[10px] font-semibold text-paper/70">
                      0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-paper/16" />
                    <span className="w-28 text-right text-xs font-semibold uppercase tracking-[0.12em] text-paper/75">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
