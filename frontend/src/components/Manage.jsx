import { motion } from "framer-motion";
import { Layers, ListOrdered, GitPullRequest, Flag, Users, Activity, AlertTriangle, Repeat } from "lucide-react";
import { Eyebrow, FadeUp, EASE } from "./reveal";

function AllocViz() {
  const rows = [
    { t: "API integration", who: "A.K.", accent: true },
    { t: "Client onboarding", who: "P.R.", accent: false },
    { t: "Q3 audit prep", who: "J.M.", accent: true },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.t}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
          className="flex items-center justify-between border border-line bg-paper px-4 py-2.5 transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10"
        >
          <span className="text-sm text-zinc-600 transition-colors duration-300 group-hover:text-indigo-100">
            {r.t}
          </span>
          <span
            className={`px-3 py-0.5 font-mono text-[10px] ${
              r.accent
                ? "bg-brand text-white group-hover:bg-white group-hover:text-brand"
                : "border border-zinc-300 text-zinc-500 group-hover:border-white/40 group-hover:text-white"
            }`}
          >
            {r.who}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PriorityViz() {
  const rows = [
    { p: "P1", w: "88%", c: "bg-amber-400" },
    { p: "P2", w: "56%", c: "bg-brand" },
    { p: "P3", w: "28%", c: "bg-zinc-300" },
  ];
  return (
    <div className="mt-6 space-y-3.5">
      {rows.map((r, i) => (
        <div key={r.p} className="flex items-center gap-3">
          <span className="w-6 font-mono text-[11px] text-zinc-400 transition-colors duration-300 group-hover:text-indigo-100">
            {r.p}
          </span>
          <div className="h-2 flex-1 bg-zinc-100">
            <motion.div
              className={`h-full ${r.c}`}
              initial={{ width: 0 }}
              whileInView={{ width: r.w }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.14 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DepViz() {
  return (
    <svg viewBox="0 0 220 110" className="mt-6 w-full text-zinc-300 transition-colors duration-300 group-hover:text-white/40">
      <line x1="40" y1="30" x2="105" y2="55" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="80" x2="105" y2="55" stroke="currentColor" strokeWidth="1.5" />
      <line x1="105" y1="55" x2="180" y2="55" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="40" cy="30" r="9" fill="#fff" stroke="currentColor" className="group-hover:fill-white/10" />
      <circle cx="40" cy="80" r="9" fill="#fff" stroke="currentColor" className="group-hover:fill-white/10" />
      <circle cx="105" cy="55" r="11" fill="#FEF3C7" stroke="#F59E0B" />
      <circle cx="180" cy="55" r="9" fill="#fff" stroke="currentColor" className="group-hover:fill-white/10" />
      <text x="148" y="40" fill="#F59E0B" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1">
        BLOCKED
      </text>
    </svg>
  );
}

function MilestoneViz() {
  return (
    <div className="relative mt-10 h-px w-full bg-zinc-200 transition-colors duration-300 group-hover:bg-white/30">
      {[
        { l: "0%", done: true },
        { l: "38%", done: true },
        { l: "72%", done: false },
        { l: "100%", done: false },
      ].map((m, i) => (
        <motion.span
          key={i}
          className={`absolute -top-[5px] h-[11px] w-[11px] border-2 ${
            m.done
              ? "border-emerald-500 bg-emerald-400/30"
              : "border-zinc-400 bg-white group-hover:border-white/60"
          }`}
          style={{ left: m.l }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.25 + i * 0.14 }}
        />
      ))}
      <span
        className="absolute -top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 group-hover:text-indigo-100"
        style={{ left: "72%" }}
      >
        Next
      </span>
    </div>
  );
}

function CapacityViz() {
  const rows = [
    { n: "Available", v: "34%", c: "bg-emerald-500" },
    { n: "Occupied", v: "58%", c: "bg-brand" },
    { n: "Overloaded", v: "8%", c: "bg-red-400" },
  ];
  return (
    <div className="mt-6 space-y-3">
      {rows.map((r, i) => (
        <div key={r.n} className="flex items-center gap-3">
          <span className="w-24 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-indigo-100">
            {r.n}
          </span>
          <div className="h-2 flex-1 bg-zinc-100">
            <motion.div
              className={`h-full ${r.c}`}
              initial={{ width: 0 }}
              whileInView={{ width: r.v }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.14 }}
            />
          </div>
          <span className="w-9 text-right font-mono text-[11px] text-zinc-400 transition-colors duration-300 group-hover:text-indigo-200">
            {r.v}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProgressViz() {
  return (
    <div className="mt-8">
      <div className="h-2.5 w-full bg-zinc-100">
        <motion.div
          className="h-full bg-brand"
          initial={{ width: 0 }}
          whileInView={{ width: "64%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 transition-colors duration-300 group-hover:text-indigo-100">
        <span>Done 64%</span>
        <span>In progress</span>
        <span>Queued</span>
      </div>
    </div>
  );
}

function BottleneckViz() {
  return (
    <div className="mt-6 flex h-24 items-end gap-2">
      {[14, 26, 44, 70, 92, 60, 34, 18].map((h, i) => (
        <motion.div
          key={i}
          className={`w-full ${i === 4 ? "bg-amber-400" : "bg-zinc-200 transition-colors duration-300 group-hover:bg-white/25"}`}
          initial={{ height: 0 }}
          whileInView={{ height: h }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
          style={{ minHeight: 5 }}
        />
      ))}
    </div>
  );
}

function ReworkViz() {
  return (
    <div className="relative mt-6 flex items-center justify-center py-2">
      <svg viewBox="0 0 160 48" className="w-full max-w-[220px] text-zinc-300 transition-colors duration-300 group-hover:text-white/40">
        <motion.path
          d="M14 34 C40 10, 120 10, 146 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M146 30 C124 44, 44 46, 18 38"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        />
        <circle cx="14" cy="34" r="4" fill="#514EB3" />
        <circle cx="146" cy="30" r="4" fill="#F59E0B" />
      </svg>
    </div>
  );
}

const TILES = [
  { t: "Work allocation", Icon: Layers, span: "lg:col-span-7", Viz: AllocViz },
  { t: "Task priorities", Icon: ListOrdered, span: "lg:col-span-5", Viz: PriorityViz },
  { t: "Dependencies", Icon: GitPullRequest, span: "lg:col-span-5", Viz: DepViz },
  { t: "Milestones", Icon: Flag, span: "lg:col-span-7", Viz: MilestoneViz },
  { t: "Team capacity", Icon: Users, span: "lg:col-span-6", Viz: CapacityViz },
  { t: "Delivery progress", Icon: Activity, span: "lg:col-span-6", Viz: ProgressViz },
  { t: "Bottlenecks", Icon: AlertTriangle, span: "lg:col-span-6", Viz: BottleneckViz },
  { t: "Rework and delays", Icon: Repeat, span: "lg:col-span-6", Viz: ReworkViz },
];

export default function Manage() {
  return (
    <section id="manage" className="border-t border-line px-5 py-16 md:px-10 md:py-20">
      <FadeUp>
        <Eyebrow num="01">Product</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tighter leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
          What OnTime helps you manage
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-12">
        {TILES.map(({ t, Icon, span, Viz }, i) => (
          <motion.div
            key={t}
            data-testid={`bento-card-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
            className={`group bg-white transition-colors duration-300 hover:bg-brand ${span}`}
          >
            <div className="flex h-full flex-col p-6 md:p-8">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-white md:text-xl">
                  {t}
                </h3>
                <span className="flex h-11 w-11 items-center justify-center border border-line text-zinc-400 transition-colors duration-300 group-hover:border-white/40 group-hover:text-white">
                  <Icon size={17} strokeWidth={1.5} />
                </span>
              </div>
              <div className="mt-auto">
                <Viz />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
