import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Eyebrow, FadeUp, EASE } from "./reveal";

const QUESTIONS = [
  "Will we deliver on time?",
  "Where is the project slowing down?",
  "Who has the capacity to take the next task?",
  "Which work is creating a bottleneck?",
  "What needs attention before it becomes a delay?",
];

export default function Problem() {
  return (
    <section id="problem" className="border-t border-line px-5 py-16 md:px-10 md:py-20">
      <FadeUp>
        <Eyebrow num="04">The Problem</Eyebrow>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-medium tracking-tighter leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
          Most teams can see what people are working on.
        </h2>
        <p className="mt-6 text-base text-zinc-500 md:text-lg">
          But visibility alone doesn&rsquo;t answer:
        </p>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {QUESTIONS.map((q, i) => (
          <motion.div
            key={q}
            data-testid={`problem-question-${i + 1}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
            className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-brand"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 transition-colors duration-300 group-hover:text-indigo-200">
              Q.0{i + 1}
            </p>
            <p className="mt-8 font-display text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-white">
              {q}
            </p>
          </motion.div>
        ))}

        <FadeUp delay={0.35} className="h-full">
          <div
            data-testid="problem-connects-cell"
            className="flex h-full min-h-[180px] flex-col justify-between bg-brand p-8"
          >
            <Sparkles size={22} strokeWidth={1.5} className="text-white" />
            <p className="mt-10 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
              OnTime connects the signals.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
