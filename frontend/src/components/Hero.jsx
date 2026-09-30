import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MaskedLines, FadeUp, EASE } from "./reveal";
import { scrollToId } from "../lib/scroll";

const SIGNALS = [
  { label: "Schedule", v: 82, c: "#6360D4" },
  { label: "Progress", v: 74, c: "#F59E0B" },
  { label: "Capacity", v: 61, c: "#EF4444" },
  { label: "Dependency", v: 91, c: "#10B981" },
  { label: "Execution", v: 76, c: "#F59E0B" },
];

function DashboardCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 16 });

  return (
    <div
      className="relative [perspective:1200px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        data-testid="hero-dashboard"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="glass relative rounded-3xl shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
            OnTime <span className="text-slate-600">/</span> Delivery Confidence
          </p>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-5 gap-4 px-5 py-6">
          <div className="col-span-2" data-testid="hero-gauge">
            <div className="relative w-full">
              <svg viewBox="0 0 100 100" className="w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="41"
                  fill="none"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth="3.5"
                  pathLength="100"
                  strokeDasharray="75 100"
                  transform="rotate(135 50 50)"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="41"
                  fill="none"
                  stroke="#6360D4"
                  strokeWidth="3.5"
                  pathLength="100"
                  transform="rotate(135 50 50)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.585 }}
                  transition={{ duration: 1.8, ease: EASE, delay: 0.7 }}
                />
              </svg>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-mono text-2xl font-medium leading-none text-white">
                  78<span className="text-sm text-slate-500">%</span>
                </p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-slate-500">
                  Confidence
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                Expected ETA
              </p>
              <p className="font-mono text-sm font-medium text-white">
                AUG 14 <span className="text-amber-400">+2D</span>
              </p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-center gap-3">
            {SIGNALS.map((s, i) => (
              <div key={s.label}>
                <div className="mb-1 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="text-slate-400">{s.label}</span>
                  <span className="text-white">{s.v}%</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: s.c }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.v}%` }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.8 + i * 0.12 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
          <span>
            Capacity <span className="text-red-400">-12%</span>
          </span>
          <span>
            Rework <span className="text-amber-400">+18%</span>
          </span>
          <span>Scope Stable</span>
        </div>
      </motion.div>

      <div
        data-testid="hero-chip-risk"
        className="glass absolute -left-6 top-16 hidden rounded-2xl px-4 py-3 md:block"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">Signal</p>
        <p className="font-mono text-xs font-medium text-white">
          Rework rising <span className="text-amber-400">+18%</span>
        </p>
      </div>
      <div
        data-testid="hero-chip-verdict"
        className="absolute -right-4 bottom-10 hidden rounded-2xl bg-brand px-4 py-3 shadow-[0_0_32px_rgba(81,78,179,0.55)] md:block"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-indigo-200">Verdict</p>
        <p className="font-mono text-xs font-medium text-white">
          Deliverable <span className="text-emerald-400">— with adjustment</span>
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const chipAY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const chipBY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-16"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }}
    >
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(640px circle at var(--sx, 70%) var(--sy, 30%), rgba(81,78,179,0.12), transparent 70%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center border-b border-white/[0.07] px-5 py-16 md:px-10 md:py-24 lg:col-span-7 lg:border-b-0 lg:border-r">
          <FadeUp y={14}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300">
              Project delivery prediction platform
            </p>
          </FadeUp>

          <MaskedLines
            mode="load"
            delay={0.2}
            className="mt-6 flex flex-col gap-2 font-display text-4xl font-semibold tracking-tight leading-[1.12] text-white sm:text-5xl lg:text-6xl"
            lines={[
              <span className="font-medium">Predict project</span>,
              <span className="font-semibold">
                delivery before <span className="text-amber-400">delays</span>
              </span>,
              <span className="font-medium">
                become <span className="text-glow text-indigo-300">problems.</span>
              </span>,
            ]}
          />

          <FadeUp delay={0.7}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              OnTime helps service teams understand delivery risk, allocate work effectively, and
              make data-driven decisions throughout the project lifecycle.
            </p>
          </FadeUp>

          <FadeUp delay={0.85}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                data-testid="hero-see-how-button"
                onClick={() => scrollToId("features")}
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-[0_0_32px_rgba(81,78,179,0.5)] transition-all duration-300 hover:bg-brand-hi hover:shadow-[0_0_48px_rgba(99,96,212,0.65)]"
              >
                See How OnTime Works
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Capacity <span className="mx-2 text-slate-700">/</span> Dependencies{" "}
              <span className="mx-2 text-slate-700">/</span> Milestones{" "}
              <span className="mx-2 text-slate-700">/</span> Prediction
            </p>
          </FadeUp>
        </div>

        <div className="relative flex items-center px-5 py-12 md:px-10 lg:col-span-5 lg:py-16">
          <div className="pointer-events-none absolute right-[4%] top-[14%] hidden lg:block">
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                className="absolute -left-24 -top-24 block h-48 w-48 rounded-full border border-brand-hi/30"
                initial={{ scale: 0.6, opacity: 0.5 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 2.5, ease: "easeOut" }}
              />
            ))}
          </div>

          <motion.div style={{ y: cardY }} className="w-full">
            <FadeUp delay={0.5} y={40}>
              <DashboardCard />
            </FadeUp>
          </motion.div>

          <motion.div style={{ y: chipAY }} className="absolute -left-2 top-10 hidden lg:block">
            <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Milestone on track
            </span>
          </motion.div>
          <motion.div style={{ y: chipBY }} className="absolute -right-2 bottom-14 hidden lg:block">
            <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Bottleneck flagged
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
