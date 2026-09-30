import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, TrendingUp, BarChart3, Users2, SlidersHorizontal } from "lucide-react";
import { MaskedLines, FadeUp, EASE } from "./reveal";
import { scrollToId } from "../lib/scroll";

function PredictViz() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
      <div className="relative w-[130px] shrink-0">
        <svg viewBox="0 0 100 62" className="w-full">
          <path d="M8 56 A44 44 0 0 1 92 56" fill="none" stroke="#E4E4E7" strokeWidth="5.5" strokeLinecap="round" />
          <motion.path
            d="M8 56 A44 44 0 0 1 92 56"
            fill="none"
            stroke="#514EB3"
            strokeWidth="5.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.78 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.9 }}
          />
          <motion.circle
            cx="88"
            cy="34"
            r="4"
            fill="#F59E0B"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.4 }}
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-0.5">
          <p className="font-mono text-lg font-medium leading-none text-ink">
            78<span className="text-[10px] text-zinc-400">%</span>
          </p>
          <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-400">
            Confidence
          </p>
        </div>
      </div>

      <div className="border-l border-line pl-6">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-400">Expected ETA</p>
        <p className="font-mono text-sm font-medium text-ink">
          AUG 14 <span className="text-amber-500">+2D</span>
        </p>
        <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-600">
          Risk: Low
        </p>
      </div>

      <div className="border-l border-line pl-6">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-400">
          Delivery trend
        </p>
        <svg viewBox="0 0 110 30" className="mt-1 w-[110px]">
          <motion.polyline
            points="2,24 20,20 38,22 56,14 74,16 92,7 108,4"
            fill="none"
            stroke="#514EB3"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: EASE, delay: 1.2 }}
          />
          <motion.circle
            cx="108"
            cy="4"
            r="3"
            fill="#F59E0B"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          />
        </svg>
      </div>
    </div>
  );
}

function BIViz() {
  return (
    <svg viewBox="0 0 100 40" className="mt-3 w-full">
      <line x1="4" y1="36" x2="96" y2="36" stroke="#E4E4E7" strokeWidth="1" />
      {[13, 21, 29, 34].map((h, i) => (
        <motion.rect
          key={i}
          x={10 + i * 21}
          width="12"
          rx="1.5"
          fill={i === 3 ? "#F59E0B" : "#514EB3"}
          initial={{ height: 0, y: 36 }}
          animate={{ height: h, y: 36 - h }}
          transition={{ duration: 0.8, ease: EASE, delay: 1 + i * 0.12 }}
        />
      ))}
    </svg>
  );
}

function CapacityViz() {
  const rows = [
    { n: "Available", v: 34, c: "#10B981" },
    { n: "Occupied", v: 58, c: "#514EB3" },
    { n: "Overloaded", v: 8, c: "#EF4444" },
  ];
  return (
    <div className="mt-3 space-y-2">
      {rows.map((r, i) => (
        <div key={r.n} className="flex items-center gap-2">
          <span className="w-[52px] shrink-0 font-mono text-[7px] uppercase tracking-[0.12em] text-zinc-400">
            {r.n}
          </span>
          <div className="h-[5px] flex-1 rounded-full bg-zinc-200">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: r.c }}
              initial={{ width: 0 }}
              animate={{ width: `${r.v}%` }}
              transition={{ duration: 1, ease: EASE, delay: 1.1 + i * 0.14 }}
            />
          </div>
          <span className="w-7 text-right font-mono text-[8px] text-zinc-500">{r.v}%</span>
        </div>
      ))}
    </div>
  );
}

function ConnectivityViz() {
  return (
    <svg viewBox="0 0 100 36" className="mt-3 w-full">
      <motion.polyline
        points="12,28 38,10 63,28 88,12"
        fill="none"
        stroke="#C7C6E8"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 1.1 }}
      />
      {[
        { x: 12, y: 28 },
        { x: 63, y: 28 },
        { x: 88, y: 12 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="5"
          fill="#FFFFFF"
          stroke="#514EB3"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 1 + i * 0.14 }}
        />
      ))}
      <motion.circle
        cx="38"
        cy="10"
        r="5"
        fill="#514EB3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 1.45 }}
      />
      <motion.circle
        cx="38"
        cy="10"
        r="2"
        fill="#10B981"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.4 }}
      />
    </svg>
  );
}

function CustomViz() {
  const rows = [
    { x: 58, c: "#514EB3" },
    { x: 30, c: "#F59E0B" },
  ];
  return (
    <div className="mt-4 space-y-2.5">
      {rows.map((r, i) => (
        <div key={i} className="relative h-[3px] w-full rounded-full bg-zinc-200">
          <motion.span
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white shadow"
            style={{ backgroundColor: r.c, left: 0 }}
            initial={{ left: "4%" }}
            animate={{ left: `${r.x}%` }}
            transition={{ duration: 1, ease: EASE, delay: 1.1 + i * 0.15 }}
          />
        </div>
      ))}
      <div className="flex items-center gap-2 pt-0.5">
        <motion.span
          className="flex h-3.5 w-7 items-center rounded-full bg-brand px-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <motion.span
            className="h-2.5 w-2.5 rounded-full bg-white"
            initial={{ x: -6 }}
            animate={{ x: 6 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.5 }}
          />
        </motion.span>
        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-zinc-400">
          Domain rules active
        </span>
      </div>
    </div>
  );
}

const OUTCOMES = [
  { n: "02", t: "Business Intelligence", Icon: BarChart3, Viz: BIViz },
  { n: "03", t: "Resource Capacity Building", Icon: Users2, Viz: CapacityViz },
  { n: "04", t: "Virtual Connectivity", Icon: Users2, Viz: ConnectivityViz },
  { n: "05", t: "Domain-Specific Customization", Icon: SlidersHorizontal, Viz: CustomViz },
];

function OutcomesCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 16 });

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
        className="relative border border-line bg-white shadow-[0_40px_80px_-40px_rgba(17,17,17,0.3)]"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Pragmr <span className="text-zinc-300">/</span> Product Outcomes
          </p>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        {/* 01 — featured: delivery prediction */}
        <motion.div
          data-testid="hero-outcome-01"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          className="group border-b border-line bg-white p-5 transition-colors duration-300 hover:bg-brand-pale/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-400">01</span>
              <h3 className="font-display text-sm font-semibold leading-tight tracking-tight text-ink">
                Delivery Prediction
              </h3>
            </div>
            <span className="flex h-8 w-8 items-center justify-center border border-line text-zinc-400 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
              <TrendingUp size={14} strokeWidth={1.5} />
            </span>
          </div>
          <PredictViz />
        </motion.div>

        <div className="grid grid-cols-2 gap-px bg-line">
          {OUTCOMES.map(({ n, t, Icon, Viz }, i) => (
            <motion.div
              key={t}
              data-testid={`hero-outcome-${n}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.75 + i * 0.12 }}
              className="group bg-white p-4 transition-colors duration-300 hover:bg-brand-pale/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-400">{n}</span>
                <span className="flex h-8 w-8 items-center justify-center border border-line text-zinc-400 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  <Icon size={14} strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-sm font-semibold leading-tight tracking-tight text-ink">
                {t}
              </h3>
              <Viz />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
          <span>
            Outcomes <span className="text-brand">01–05</span>
          </span>
          <span>One Platform</span>
          <span className="text-emerald-600">Deliverable</span>
        </div>
      </motion.div>

      <div
        data-testid="hero-chip-risk"
        className="absolute -top-6 left-8 z-10 hidden items-center gap-2 border border-line bg-white px-3.5 py-2 shadow-lg md:flex"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
        <p className="whitespace-nowrap font-mono text-[10px] font-medium text-ink">
          Rework rising <span className="text-amber-500">+18%</span>
        </p>
      </div>
      <div
        data-testid="hero-chip-verdict"
        className="absolute -bottom-12 right-10 z-10 hidden bg-brand px-4 py-3 shadow-lg md:block"
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
      className="spotlight relative overflow-hidden bg-white pt-16"
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
            "radial-gradient(640px circle at var(--sx, 70%) var(--sy, 30%), rgba(81,78,179,0.06), transparent 70%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center border-b border-line px-5 py-16 md:px-10 md:py-24 lg:col-span-7 lg:border-b-0 lg:border-r">
          <FadeUp y={14}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
              For service teams
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
              <OutcomesCard />
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
