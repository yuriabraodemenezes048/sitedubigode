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
    <div className="bg-paper">
      <div className="shell max-w-3xl pb-24 pt-32 sm:pt-40">
        <Link
          href="/"
          className="link-underline inline-flex items-center gap-2 text-sm font-medium text-stone"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>

        <p className="kicker mt-10">{kicker}</p>
        <h1 className="mt-5 font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
          {title}
        </h1>
        <p className="mt-4 text-sm text-stone">Última atualização: {updated}</p>
        <p className="mt-8 text-base leading-relaxed text-graphite/80">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                {i + 1}. {s.title}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="text-[0.95rem] leading-relaxed text-graphite/80">
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
