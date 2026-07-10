import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type LegalSection = { title: string; body: string[] };

export function LegalShell({
  kicker,
  title,
  updated,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-cream">
      <div className="shell max-w-3xl pb-24 pt-32 sm:pt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-sm font-semibold text-graphite hover:text-tangerine"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar pro início
        </Link>

        <span className="pill mt-8 bg-sun text-ink">{kicker}</span>
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-stone">Última atualização: {updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-graphite">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <section key={i} className="rounded-3xl border-2 border-ink/10 bg-paper p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold text-ink">
                {i + 1}. {s.title}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="leading-relaxed text-graphite">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
