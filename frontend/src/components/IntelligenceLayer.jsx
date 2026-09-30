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
      className="h-10 w-px origin-top bg-zinc-300"
    />
  );
}

export default function IntelligenceLayer() {
  return (
    <section id="layer" className="border-t border-line bg-white px-5 py-16 md:px-10 md:py-20">
      <FadeUp className="text-center">
        <Eyebrow num="06" className="text-center">
          How It Works
        </Eyebrow>
        <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-medium tracking-tighter leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
          The OnTime Intelligence Layer
        </h2>
      </FadeUp>

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
        <Node testid="layer-step-team-activity" className="border border-ink bg-ink text-white">
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
          className="w-full border border-line bg-paper"
        >
          <p className="border-b border-line px-4 py-3 text-center font-display text-sm font-medium tracking-tight text-ink sm:text-base">
            Execution Signals
          </p>
          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {SIGNALS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className="bg-white px-2 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-200 hover:bg-brand-pale hover:text-brand"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <VLine delay={0.2} />
        <Node testid="layer-step-delivery-signals" delay={0.05} className="border border-ink bg-white text-ink">
          Delivery Signals
        </Node>
        <VLine delay={0.15} />
        <Node testid="layer-step-better-decisions" delay={0.05} className="border border-brand bg-brand-pale text-brand">
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
        <p className="mt-16 text-center font-display text-xl font-light tracking-tight text-zinc-500 md:text-2xl">
          When these signals change, <span className="font-medium text-ink">delivery probability changes.</span>
        </p>
      </FadeUp>
    </section>
  );
}
