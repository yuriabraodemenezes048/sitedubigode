import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { nav, site, whatsappUrl } from "@/lib/site";

const legal = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Perguntas frequentes", href: "/#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-olive text-cream grain">
      <div className="shell relative z-10 pb-10 pt-20 sm:pt-28">
        {/* Chamada final do rodapé */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="kicker text-cream/60 before:bg-cream/40">
              Vamos brindar
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-extrabold leading-[0.95] tracking-tightest">
              Pronto para o{" "}
              <span className="font-serif font-light italic text-gold">
                melhor bar
              </span>{" "}
              que seu evento já teve?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/orcamento"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-flame px-8 text-[0.95rem] font-semibold text-paper transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={whatsappUrl("Olá! Vim pelo site e quero um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-cream/30 px-8 text-[0.95rem] font-semibold transition-colors hover:bg-cream hover:text-olive"
              >
                WhatsApp direto
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Navegação do rodapé">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/50">
                Navegar
              </p>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-sm text-cream/80 hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Institucional">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/50">
                Institucional
              </p>
              <ul className="mt-5 space-y-3">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-sm text-cream/80 hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Wordmark gigante */}
        <div className="mt-16 border-t border-cream/15 pt-10">
          <p
            aria-hidden
            className="select-none text-center font-display text-[15vw] font-black leading-none tracking-tightest text-cream/[0.08] sm:text-[13vw]"
          >
            du Bigode
          </p>
        </div>

        {/* Base legal */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-olive"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              aria-label="E-mail"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-olive"
            >
              <Mail className="h-4 w-4" />
            </a>
            <span className="text-sm text-cream/55">{site.contact.instagramHandle}</span>
          </div>
          <p className="text-xs leading-relaxed text-cream/45">
            © {year} {site.legalName}. Beba com moderação. Venda proibida para
            menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
