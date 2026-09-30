export default function Logo({ className = "h-7 w-auto" }) {
  return (
    <img
      src="/ontime-logo.png"
      alt="Pragmr OnTime"
      className={className}
      draggable="false"
    />
  );
}
