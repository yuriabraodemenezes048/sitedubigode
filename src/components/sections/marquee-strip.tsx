const words = [
  "casamentos",
  "aniversários",
  "festa da firma",
  "formaturas",
  "festivais",
  "open bar",
  "drinks autorais",
];

export function MarqueeStrip() {
  const row = [...words, ...words];
  return (
    <section aria-hidden className="overflow-hidden bg-sky py-3.5">
      <div className="edge-fade-x flex">
        {[0, 1].map((r) => (
          <div key={r} className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
            {row.map((w, i) => (
              <span key={i} className="flex items-center">
                <span className="px-5 font-display text-xl font-bold text-paper sm:text-2xl">{w}</span>
                <span className="text-xl text-sun">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
