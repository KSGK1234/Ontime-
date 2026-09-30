import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, FadeUp, EASE } from "./reveal";

const OUTCOMES = [
  {
    title: "Better resource decisions",
    desc: "Understand skills, availability and workload before assigning work.",
    outcome: "Right work to the right person",
    items: ["Skills match before assignment", "Availability & workload snapshot", "Overload warning before hand-off"],
  },
  {
    title: "Earlier risk visibility",
    desc: "Identify aging work, blockers, rework and changing execution patterns.",
    outcome: "Spot delivery risks earlier",
    items: ["Aging work flagged automatically", "Blocker alerts with downstream impact", "Rework trend signals"],
  },
  {
    title: "Better project control",
    desc: "Connect tasks, dependencies and milestones instead of managing them separately.",
    outcome: "More predictable project execution",
    items: ["Tasks linked to dependencies", "Milestones tied to execution", "One view instead of status pings"],
  },
  {
    title: "Data-driven decisions",
    desc: "Use actual execution signals rather than relying only on memory, assumptions or manual status updates.",
    outcome: "Better delivery decisions",
    items: ["Execution signals replace guesswork", "Historical pace vs current plan", "Live capacity over manual updates"],
  },
  {
    title: "Continuous improvement",
    desc: "Understand cycle time, WIP, bottlenecks, rework and other execution patterns.",
    outcome: "Improve the way projects are delivered",
    items: ["Cycle time patterns", "WIP and bottleneck trends", "Rework hotspots over time"],
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="border-t border-line px-5 py-16 md:px-10 md:py-20">
      <FadeUp>
        <Eyebrow num="05">Business Outcomes</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tighter leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
          From features to business outcomes
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
        {OUTCOMES.map((o, i) => (
          <motion.div
            key={o.title}
            data-testid={`outcome-row-${o.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
            className={`group h-full bg-white transition-colors duration-300 hover:bg-brand ${
              i === OUTCOMES.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex h-full flex-col p-8 md:p-10">
              <span className="font-mono text-xs tracking-[0.2em] text-zinc-300 transition-colors duration-300 group-hover:text-white/70">
                O.0{i + 1}
              </span>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-white md:text-3xl">
                  {o.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-200 md:text-base">
                  {o.desc}
                </p>
                <ul className="mt-5">
                  {o.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-line py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 transition-colors duration-300 group-hover:border-white/25 group-hover:text-zinc-200"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand transition-colors duration-300 group-hover:bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-3 border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-300 group-hover:border-white/40 group-hover:text-white">
                  <ArrowRight
                    size={13}
                    className="text-brand transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                  {o.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
