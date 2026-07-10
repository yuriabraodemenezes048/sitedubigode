const words = [
  "Casamentos",
  "Eventos corporativos",
  "Aniversários",
  "Formaturas",
  "Festivais",
  "Coquetéis de assinatura",
  "Open bar autoral",
];

export function MarqueeStrip() {
  const row = [...words, ...words];
  return (
    <section
      aria-hidden
      className="border-y border-ink/10 bg-cream py-5 sm:py-6"
    >
      <div className="edge-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-serif text-2xl italic text-graphite/70 sm:text-3xl">
                {w}
              </span>
              <span className="text-flame">✦</span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center whitespace-nowrap"
          aria-hidden
        >
          {row.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-serif text-2xl italic text-graphite/70 sm:text-3xl">
                {w}
              </span>
              <span className="text-flame">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
