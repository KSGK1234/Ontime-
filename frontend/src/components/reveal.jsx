import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

const lineV = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
};

export function MaskedLines({ lines, className = "", lineClass = "", delay = 0, mode = "load" }) {
  const trigger =
    mode === "load"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } };
  return (
    <motion.span
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.13, delayChildren: delay } },
      }}
      {...trigger}
    >
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span className={"block will-change-transform " + lineClass} variants={lineV}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function FadeUp({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ num, children, className = "" }) {
  return (
    <p className={"font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 " + className}>
      {num && <span className="text-brand">[ {num} ]</span>}
      {num && <span className="mx-3 text-zinc-300">/</span>}
      {children}
    </p>
  );
}
