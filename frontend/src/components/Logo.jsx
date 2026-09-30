export default function Logo({ className = "h-7" }) {
  return (
    <span
      role="img"
      aria-label="Pragmr OnTime"
      className={`logo-white ${className}`}
      style={{ aspectRatio: "1444 / 536" }}
    />
  );
}
