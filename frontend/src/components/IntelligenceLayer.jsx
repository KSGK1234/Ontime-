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
      className={`inline-block px-8 py-3 font-mono text-xs uppercase tracking-[0.3em] ${className}`}
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
      className="h-10 w-px origin-top bg-zinc-700"
    />
  );
}

export default function IntelligenceLayer() {
  return (
    <section id="layer" className="relative bg-ink px-5 py-16 md:px-10 md:py-20">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="relative mx-auto max-w-2xl">
        <FadeUp className="text-center">
          <Eyebrow num="04" className="text-center text-zinc-500">
            How It Works
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium tracking-tighter leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            The OnTime Intelligence Layer
          </h2>
        </FadeUp>

        <div className="mt-14 flex flex-col items-center">
          <Node testid="layer-step-team-activity" className="border border-zinc-600 bg-transparent text-zinc-200">
            Team Activity
          </Node>
          <VLine delay={0.15} />
          <Node testid="layer-step-execution-data" delay={0.1} className="bg-brand text-white">
            Execution Data
          </Node>
          <VLine delay={0.25} />

          <motion.div
            data-testid="layer-signal-box"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="w-full border border-white/15 bg-transparent"
          >
            <p className="border-b border-white/15 px-4 py-3 text-center font-display text-sm font-medium tracking-tight text-white sm:text-base">
              Execution Signals
            </p>
            <div className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
              {SIGNALS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                  className="bg-ink px-2 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 transition-colors duration-200 hover:bg-brand hover:text-white"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <VLine delay={0.2} />
          <Node testid="layer-step-delivery-signals" delay={0.05} className="border border-zinc-600 bg-transparent text-zinc-200">
            Delivery Signals
          </Node>
          <VLine delay={0.15} />
          <Node testid="layer-step-better-decisions" delay={0.05} className="border border-brand-light bg-transparent text-brand-light">
            Better Decisions
          </Node>
          <VLine delay={0.15} />

          <motion.div
            data-testid="layer-step-predictable-delivery"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="bg-brand px-10 py-5 text-center font-display text-2xl font-medium tracking-tight text-white md:text-3xl"
          >
            More predictable delivery
          </motion.div>
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-16 text-center font-display text-xl font-light tracking-tight text-zinc-400 md:text-2xl">
            When these signals change, <span className="font-medium text-white">delivery probability changes.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
