import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, FadeUp, EASE } from "./reveal";

const OUTCOMES = [
  {
    title: "Better resource decisions",
    desc: "Understand skills, availability and workload before assigning work.",
    outcome: "Right work to the right person",
    items: [
      "Skills & ownership mapped per person",
      "Availability, workload & leave in one view",
      "Smart Assign suggests the right person",
    ],
  },
  {
    title: "Earlier risk visibility",
    desc: "Identify aging work, blockers, rework and changing execution patterns.",
    outcome: "Spot delivery risks earlier",
    items: [
      "Aging work surfaced early",
      "Blocked tasks & downstream impact",
      "Rework pace vs delivery pace",
    ],
  },
  {
    title: "Better project control",
    desc: "Connect tasks, dependencies and milestones instead of managing them separately.",
    outcome: "More predictable project execution",
    items: [
      "Dependencies linked to delivery dates",
      "Milestones connected to task execution",
      "One execution dashboard",
    ],
  },
  {
    title: "Data-driven decisions",
    desc: "Use actual execution signals rather than relying only on memory, assumptions or manual status updates.",
    outcome: "Better delivery decisions",
    items: [
      "Your own execution data, not benchmarks",
      "Historical delivery pace in every estimate",
      "Live signals over manual status updates",
    ],
  },
  {
    title: "Continuous improvement",
    desc: "Understand cycle time, WIP, bottlenecks, rework and other execution patterns.",
    outcome: "Improve the way projects are delivered",
    items: [
      "Cycle time & WIP patterns",
      "Bottleneck hotspots over time",
      "Rework and delay trends",
    ],
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative border-t border-white/[0.07] px-5 py-16 md:px-10 md:py-20">
      <div className="absolute right-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]" />
      <FadeUp>
        <Eyebrow num="03">Business Outcomes</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          From features to business outcomes
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {OUTCOMES.map((o, i) => (
          <motion.div
            key={o.title}
            data-testid={`outcome-row-${o.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -4 }}
            className={`group h-full rounded-3xl border border-white/10 bg-panel/60 p-8 transition-colors duration-300 hover:border-brand-hi/50 hover:bg-panel md:p-10 ${
              i === OUTCOMES.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex h-full flex-col">
              <span className="font-mono text-xs tracking-[0.2em] text-slate-600">
                O.0{i + 1}
              </span>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {o.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                  {o.desc}
                </p>
                <ul className="mt-5">
                  {o.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-white/[0.08] py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 transition-colors duration-300 group-hover:text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-hi" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:border-brand-hi/50 group-hover:text-indigo-200">
                  <ArrowRight
                    size={13}
                    className="text-indigo-300 transition-transform duration-300 group-hover:translate-x-1"
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
