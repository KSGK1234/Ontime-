import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MaskedLines, FadeUp, EASE } from "./reveal";
import { scrollToId } from "../lib/scroll";

const SIGNALS = [
  { label: "Schedule", v: 82, c: "#514EB3" },
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
        className="hero-tilt relative border border-line bg-white shadow-[0_40px_80px_-40px_rgba(17,17,17,0.25)]"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Pragmr <span className="text-zinc-300">/</span> Delivery Confidence
          </p>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
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
                  stroke="#E4E4E7"
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
                  stroke="#514EB3"
                  strokeWidth="3.5"
                  pathLength="100"
                  transform="rotate(135 50 50)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.585 }}
                  transition={{ duration: 1.8, ease: EASE, delay: 0.7 }}
                />
              </svg>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-mono text-2xl font-medium leading-none text-ink">
                  78<span className="text-sm text-zinc-400">%</span>
                </p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-400">
                  Confidence
                </p>
              </div>
            </div>
            <div className="mt-3 border border-line px-3 py-2 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                Expected ETA
              </p>
              <p className="font-mono text-sm font-medium text-ink">
                AUG 14 <span className="text-amber-500">+2D</span>
              </p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-center gap-3">
            {SIGNALS.map((s, i) => (
              <div key={s.label}>
                <div className="mb-1 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="text-zinc-500">{s.label}</span>
                  <span className="text-ink">{s.v}%</span>
                </div>
                <div className="h-[3px] w-full bg-zinc-100">
                  <motion.div
                    className="h-full"
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

        <div className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
          <span>
            Capacity <span className="text-red-500">-12%</span>
          </span>
          <span>
            Rework <span className="text-amber-500">+18%</span>
          </span>
          <span className="text-zinc-600">Scope Stable</span>
        </div>
      </motion.div>

      <div
        data-testid="hero-chip-risk"
        className="absolute -left-6 top-16 hidden border border-line bg-white px-4 py-3 shadow-lg md:block"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Signal</p>
        <p className="font-mono text-xs font-medium text-ink">
          Rework rising <span className="text-amber-500">+18%</span>
        </p>
      </div>
      <div
        data-testid="hero-chip-verdict"
        className="absolute -right-4 bottom-10 hidden bg-brand px-4 py-3 shadow-lg md:block"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300">Verdict</p>
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
      className="spotlight relative overflow-hidden pt-16"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(640px circle at var(--sx, 70%) var(--sy, 30%), rgba(81,78,179,0.07), transparent 70%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center border-b border-line px-5 py-16 md:px-10 md:py-24 lg:col-span-7 lg:border-b-0 lg:border-r">
          <FadeUp y={14}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
              Pragmr OnTime
            </p>
          </FadeUp>

          <MaskedLines
            mode="load"
            delay={0.2}
            className="mt-6 flex flex-col gap-2 font-display text-4xl tracking-tighter leading-[1.12] text-ink sm:text-5xl lg:text-6xl"
            lines={[
              <span className="font-light">Predict project</span>,
              <span className="font-bold">
                delivery before <span className="text-brand">delays</span>
              </span>,
              <span className="font-light">become problems.</span>,
            ]}
          />

          <FadeUp delay={0.7}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
              OnTime helps service teams understand delivery risk, allocate work effectively, and
              make data-driven decisions throughout the project lifecycle.
            </p>
          </FadeUp>

          <FadeUp delay={0.85}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                data-testid="hero-see-how-button"
                onClick={() => scrollToId("features")}
                className="group flex cursor-pointer items-center gap-3 bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark"
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
            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Capacity <span className="mx-2 text-zinc-300">/</span> Dependencies{" "}
              <span className="mx-2 text-zinc-300">/</span> Milestones{" "}
              <span className="mx-2 text-zinc-300">/</span> Prediction
            </p>
          </FadeUp>
        </div>

        <div className="flex items-center px-5 py-12 md:px-10 lg:col-span-5 lg:py-16">
          <motion.div style={{ y: cardY }} className="w-full">
            <FadeUp delay={0.5} y={40}>
              <DashboardCard />
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
