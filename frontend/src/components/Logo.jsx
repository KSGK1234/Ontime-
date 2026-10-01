import { motion } from "framer-motion";
import { AUTH_TRANSFORM, AUTH_PATHS } from "./pragmr-mark";
import {
  BAR_X,
  BAR_Y0,
  BAR_Y1,
  O_ARC_D,
  O_TICK_D,
  NTIME_D,
  TOTAL_RIGHT,
} from "./wordmark";

const EASE = [0.16, 1, 0.3, 1];

const PALETTE = {
  light: { ontime: "#514EB3", bar: "#D4D3E2" },
  dark: { ontime: "#A8A6E8", bar: "rgba(244,244,242,0.28)" },
};

// Lockup: authentic pragmr.com wordmark (P-arrow icon, used as-is) + hairline
// bar + OnTime whose O is the brand ring-tick mark (gap at top-right, tick in).
const VB_W = (Math.ceil(TOTAL_RIGHT * 100) / 100).toFixed(2);

const AUTH_FILL = "#514EB3"; // authentic trademark indigo, both variants

export default function Logo({
  className = "h-7 w-auto",
  variant = "light",
  animated = false,
  ...rest
}) {
  const c = PALETTE[variant] ?? PALETTE.light;

  const auth = (
    <g transform={AUTH_TRANSFORM}>
      {AUTH_PATHS.map((d, i) => (
        <path key={i} d={d} fill={AUTH_FILL} />
      ))}
    </g>
  );

  const bar = (
    <rect x={BAR_X} y={BAR_Y0} width="2" height={BAR_Y1 - BAR_Y0} fill={c.bar} />
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
            <motion.g
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            >
              {auth}
            </motion.g>
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 1.1 }}
            >
              {bar}
            </motion.g>
            <motion.path
              d={O_ARC_D}
              stroke={c.ontime}
              strokeWidth="3.8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.3 }}
            />
            <motion.path
              d={NTIME_D}
              fill={c.ontime}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 1.5 }}
            />
            <motion.path
              d={O_TICK_D}
              stroke={c.ontime}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.35, ease: EASE, delay: 1.9 }}
            />
          </>
        ) : (
          <>
            {auth}
            {bar}
            <path d={O_ARC_D} stroke={c.ontime} strokeWidth="3.8" strokeLinecap="round" />
            <path
              d={O_TICK_D}
              stroke={c.ontime}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d={NTIME_D} fill={c.ontime} />
          </>
        )}
      </svg>
    </span>
  );
}
