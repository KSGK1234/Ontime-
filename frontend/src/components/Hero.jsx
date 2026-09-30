import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, BarChart3, Users, TrendingUp, SlidersHorizontal } from "lucide-react";
import { MaskedLines, FadeUp, EASE } from "./reveal";
import { scrollToId } from "../lib/scroll";

function BIViz() {
  return (
    <svg viewBox="0 0 100 34" className="mt-3 w-full">
      {[16, 30, 44, 58].map((h, i) => (
        <motion.rect
          key={i}
          x={10 + i * 22}
          width="12"
          rx="1.5"
          fill={i === 3 ? "#F59E0B" : "#514EB3"}
          initial={{ height: 0, y: 32 }}
          animate={{ height: h, y: 34 - h }}
          transition={{ duration: 0.8, ease: EASE, delay: 1 + i * 0.12 }}
        />
      ))}
    </svg>
  );
}

function OfficeViz() {
  return (
    <div className="mt-3 flex items-center gap-2.5">
      {["A.K.", "P.R.", "J.M.", "+5"].map((n, i) => (
        <motion.span
          key={n}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 1 + i * 0.12 }}
          className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[9px] ${
            i === 0
              ? "border-brand bg-brand text-white"
              : "border-zinc-300 bg-white text-zinc-500"
          } ${i > 0 ? "-ml-3" : ""}`}
        >
          {n}
        </motion.span>
      ))}
      <span className="ml-1 flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-emerald-600">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        Online
      </span>
    </div>
  );
}

function PredictViz() {
  return (
    <svg viewBox="0 0 100 34" className="mt-3 w-full">
      <path d="M8 30 A44 44 0 0 1 92 30" fill="none" stroke="#E4E4E7" strokeWidth="5" strokeLinecap="round" />
      <motion.path
        d="M8 30 A44 44 0 0 1 92 30"
        fill="none"
        stroke="#514EB3"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 0.78 }}
        transition={{ duration: 1.6, ease: EASE, delay: 1.1 }}
      />
      <motion.circle
        cx="88"
        cy="22"
        r="3.5"
        fill="#F59E0B"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.4 }}
      />
      <text x="34" y="33" fontSize="9" fontFamily="JetBrains Mono" fill="#52525B">
        78%
      </text>
    </svg>
  );
}

function CustomViz() {
  const rows = [
    { x: 62, c: "#514EB3" },
    { x: 34, c: "#F59E0B" },
    { x: 76, c: "#514EB3" },
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
    </div>
  );
}

const OUTCOMES = [
  { n: "01", t: "Business Intelligence", Icon: BarChart3, Viz: BIViz },
  { n: "02", t: "Virtual Office", Icon: Users, Viz: OfficeViz },
  { n: "03", t: "Delivery Prediction", Icon: TrendingUp, Viz: PredictViz },
  { n: "04", t: "Domain-Specific Customization", Icon: SlidersHorizontal, Viz: CustomViz },
];

function OutcomesCard() {
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

        <div className="grid grid-cols-2 gap-px bg-line">
          {OUTCOMES.map(({ n, t, Icon, Viz }, i) => (
            <motion.div
              key={t}
              data-testid={`hero-outcome-${n}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 + i * 0.12 }}
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
            Outcomes <span className="text-brand">01–04</span>
          </span>
          <span>One Platform</span>
          <span className="text-emerald-600">Deliverable</span>
        </div>
      </motion.div>

      <div
        data-testid="hero-chip-risk"
        className="absolute -left-10 top-[42%] hidden border border-line bg-white px-4 py-3 shadow-lg md:block"
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
              Project delivery prediction platform
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
