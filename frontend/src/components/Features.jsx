import { motion } from "framer-motion";
import {
  Sparkles,
  SlidersHorizontal,
  GitBranch,
  TrendingUp,
  Gauge,
  Flag,
  LayoutDashboard,
  History,
  ArrowUpRight,
} from "lucide-react";
import { Eyebrow, FadeUp, EASE } from "./reveal";

const FEATURES = [
  {
    name: "Smart Assign",
    desc: "Recommends the right person based on skills and current capacity.",
    Icon: Sparkles,
  },
  {
    name: "Dynamic Priority",
    desc: "Helps teams adjust priorities as project situations change.",
    Icon: SlidersHorizontal,
  },
  {
    name: "Dependency Tracking",
    desc: "Shows how blocked or delayed work affects downstream tasks.",
    Icon: GitBranch,
  },
  {
    name: "Delivery Prediction",
    desc: "Uses project execution signals to identify potential delivery delays.",
    Icon: TrendingUp,
  },
  {
    name: "Capacity Intelligence",
    desc: "Shows available, occupied and overloaded team capacity.",
    Icon: Gauge,
  },
  {
    name: "Milestone Tracking",
    desc: "Connects task-level execution with important project milestones.",
    Icon: Flag,
  },
  {
    name: "Execution Dashboard",
    desc: "Brings tasks, time, meetings, blockers and progress into one view.",
    Icon: LayoutDashboard,
  },
  {
    name: "Work History & Signals",
    desc: "Uses historical execution data to identify patterns affecting delivery.",
    Icon: History,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/[0.07] px-5 py-16 md:px-10 md:py-20">
      <div className="absolute left-[-180px] top-1/4 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]" />
      <FadeUp>
        <Eyebrow num="01">Core features</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          Everything a delivery team needs, in one system
        </h2>
      </FadeUp>

      <div className="mt-12 border-t border-white/[0.08]">
        {FEATURES.map(({ name, desc, Icon }, i) => (
          <motion.div
            key={name}
            data-testid={`feature-row-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.05 }}
            className="group relative grid cursor-default grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-b border-white/[0.08] py-6 sm:grid-cols-[56px_auto_1fr_auto] sm:gap-x-8 md:py-7"
          >
            <span className="font-mono text-xs text-slate-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:border-brand-hi/50 group-hover:text-indigo-300 sm:flex">
              <Icon size={17} strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300 md:text-2xl">
                {name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-400">{desc}</p>
            </div>
            <ArrowUpRight
              size={20}
              className="mr-1 hidden -translate-x-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-indigo-300 group-hover:opacity-100 sm:block"
            />
            <span className="absolute inset-x-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-brand-hi to-transparent transition-[width] duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
