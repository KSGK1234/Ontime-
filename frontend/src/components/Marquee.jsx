const ITEMS = [
  "Right work to the right person",
  "Spot delivery risks earlier",
  "More predictable project execution",
  "Better delivery decisions",
  "Improve the way projects are delivered",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 md:text-sm">
            {item}
          </span>
          <span className="h-2 w-2 shrink-0 rotate-45 bg-brand" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      data-testid="outcomes-marquee"
      aria-label="OnTime outcomes"
      className="overflow-hidden border-b border-line bg-white py-6"
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </section>
  );
}
