import { motion } from "framer-motion";
import {
  PRAGMR_D,
  BAR_X,
  BAR_Y0,
  BAR_Y1,
  ONTIME_X,
  ONTIME_D,
  TOTAL_RIGHT,
} from "./wordmark";

const EASE = [0.16, 1, 0.3, 1];

const PALETTE = {
  light: {
    ring: "#514EB3",
    tick: "#131316",
    pragmr: "#131316",
    ontime: "#514EB3",
    bar: "#D4D3E2",
  },
  dark: {
    ring: "#A8A6E8",
    tick: "#F4F4F2",
    pragmr: "#F4F4F2",
    ontime: "#A8A6E8",
    bar: "rgba(244,244,242,0.28)",
  },
};

// Unique OnTime mark: progress ring completing to 100% (round-capped arc)
// with the arrival node in the gap and a check tick inside.
const ARC = "M40.45 14.5 A19 19 0 1 1 27.3 5.29";
const TICK = "M15.5 24.5 21.5 30.5 32.5 17.5";
const VB_W = (Math.ceil(TOTAL_RIGHT * 100) / 100).toFixed(2);

export default function Logo({
  className = "h-7 w-auto",
  variant = "light",
  animated = false,
  ...rest
}) {
  const c = PALETTE[variant] ?? PALETTE.light;

  const wordmark = (
    <>
      <path d={PRAGMR_D} fill={c.pragmr} />
      <rect x={BAR_X} y={BAR_Y0} width="2" height={BAR_Y1 - BAR_Y0} fill={c.bar} />
      <path d={ONTIME_D} fill={c.ontime} />
    </>
  );

  return (
    <span className={`inline-flex shrink-0 ${className}`} data-testid="logo-lockup" {...rest}>
      <svg
        viewBox={`0 0 ${VB_W} 48`}
        className="h-full w-auto"
        role="img"
        aria-label="Pragmr OnTime"
        fill="none"
      >
        {animated ? (
          <>
            <motion.path
              d={ARC}
              stroke={c.ring}
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.3 }}
            />
            <motion.path
              d={TICK}
              stroke={c.tick}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 1.05 }}
            />
            <motion.circle
              cx="34.9"
              cy="8.44"
              r="3.5"
              fill={c.ring}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: EASE, delay: 1.5 }}
            />
            <motion.g
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.35 }}
            >
              {wordmark}
            </motion.g>
          </>
        ) : (
          <>
            <path d={ARC} stroke={c.ring} strokeWidth="5" strokeLinecap="round" />
            <circle cx="34.9" cy="8.44" r="3.5" fill={c.ring} />
            <path
              d={TICK}
              stroke={c.tick}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {wordmark}
          </>
        )}
      </svg>
    </span>
  );
}
