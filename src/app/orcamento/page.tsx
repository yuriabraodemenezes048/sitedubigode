import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/ui/reveal";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Monte o open bar do seu evento em minutos. Conte a data, o local e o número de convidados e receba uma proposta autoral da Drinks du Bigode.",
  alternates: { canonical: "/orcamento" },
};

const perks = [
  "Curadoria de drinks sob medida",
  "Proposta em poucas horas",
  "Sem compromisso e sem spam",
  "Drinks de assinatura com o seu nome",
];

export default function OrcamentoPage() {
  return (
    <div className="bg-paper">
      <div className="shell grid gap-14 pb-24 pt-32 sm:pt-40 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pb-32">
        {/* Coluna editorial */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="kicker">Orçamento</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-fluid-xl font-extrabold leading-[0.96] tracking-tightest text-ink">
              Vamos desenhar o{" "}
              <span className="font-serif font-light italic text-flame">
                bar dos seus sonhos
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-graphite/80 sm:text-lg">
              Preencha em menos de dois minutos. Quanto mais você contar sobre a
              vibe do evento, mais afiada fica a nossa proposta.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-3.5">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[0.95rem] text-graphite/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tropical/12 text-tropical">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </div>
  );
}
