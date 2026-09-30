import { motion } from "framer-motion";
import { Eyebrow, FadeUp, EASE } from "./reveal";

const SIGNALS = [
  "Capacity",
  "Skills",
  "Cycle Time",
  "WIP",
  "Rework",
  "Blockers",
  "Aging",
  "Dependencies",
];

function Node({ children, className = "", delay = 0, testid }) {
  return (
    <motion.div
      data-testid={testid}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={`inline-block rounded-full px-8 py-3 font-mono text-xs uppercase tracking-[0.3em] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function VLine({ delay = 0 }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className="h-10 w-px origin-top bg-white/15"
    />
  );
}

export default function IntelligenceLayer() {
  return (
    <section id="layer" className="relative border-t border-white/[0.07] px-5 py-16 md:px-10 md:py-20">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="relative mx-auto max-w-2xl">
        <FadeUp className="text-center">
          <Eyebrow num="03" className="text-center">
            How It Works
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight leading-[1.05] text-white sm:text-5xl">
            The OnTime Intelligence Layer
          </h2>
        </FadeUp>

        <div className="mt-14 flex flex-col items-center">
          <Node testid="layer-step-team-activity" className="glass text-slate-200">
            Team Activity
          </Node>
          <VLine delay={0.15} />
          <Node testid="layer-step-execution-data" delay={0.1} className="bg-brand text-white shadow-[0_0_28px_rgba(81,78,179,0.5)]">
            Execution Data
          </Node>
          <VLine delay={0.25} />

          <motion.div
            data-testid="layer-signal-box"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="glass w-full rounded-3xl p-5"
          >
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
              Execution Signals
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {SIGNALS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-center text-xs font-medium text-slate-200 transition-colors duration-200 hover:border-brand-hi/50 hover:text-indigo-300"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <VLine delay={0.2} />
          <Node testid="layer-step-delivery-signals" delay={0.05} className="border border-amber-400/40 bg-amber-400/10 text-amber-300">
            Delivery Signals
          </Node>
          <VLine delay={0.15} />
          <Node testid="layer-step-better-decisions" delay={0.05} className="border border-indigo-400/40 bg-indigo-400/10 text-indigo-200">
            Better Decisions
          </Node>
          <VLine delay={0.15} />

          <motion.div
            data-testid="layer-step-predictable-delivery"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="text-glow rounded-full bg-gradient-to-r from-brand to-brand-hi px-10 py-5 font-display text-2xl font-semibold tracking-tight text-white shadow-[0_0_48px_rgba(99,96,212,0.5)] sm:text-3xl"
          >
            More predictable delivery
          </motion.div>
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-16 text-center font-display text-xl font-medium tracking-tight text-slate-400 md:text-2xl">
            When these signals change, <span className="text-white">delivery probability changes.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
