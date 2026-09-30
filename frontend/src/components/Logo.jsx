export default function Logo({ size = 28, dark = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#514EB3" />
        <path
          d="M32 17a15 15 0 1 1-10.6 4.4"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M32 32 L40.5 23.5" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3.4" fill="#FFFFFF" />
      </svg>
      <span
        className={`font-display text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        Pragmr
        <span className="ml-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
          OnTime
        </span>
      </span>
    </span>
  );
}
