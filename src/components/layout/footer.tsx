import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { nav, site, whatsappUrl } from "@/lib/site";

const legal = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Perguntas frequentes", href: "/#faq" },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.77-2.45V9.8a5.66 5.66 0 1 0 4.86 5.6V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper grain">
      <div className="shell relative z-10 pb-10 pt-20 sm:pt-28">
        {/* Chamada final do rodapé */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="kicker text-paper/50 before:bg-paper/40">
              Vamos brindar
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-extrabold leading-[0.95] tracking-tightest">
              Pronto para o{" "}
              <span className="font-serif font-light italic text-flame">
                melhor bar
              </span>{" "}
              que seu evento já teve?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/orcamento"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-paper px-8 text-[0.95rem] font-semibold text-ink transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-flame hover:text-paper"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={whatsappUrl("Olá! Vim pelo site e quero um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-paper/25 px-8 text-[0.95rem] font-semibold transition-colors hover:bg-paper hover:text-ink"
              >
                WhatsApp direto
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Navegação do rodapé">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/40">
                Navegar
              </p>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-sm text-paper/80 hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Institucional">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/40">
                Institucional
              </p>
              <ul className="mt-5 space-y-3">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-sm text-paper/80 hover:text-paper"
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
        <div className="mt-16 border-t border-paper/10 pt-10">
          <p
            aria-hidden
            className="select-none text-center font-display text-[15vw] font-black leading-none tracking-tightest text-paper/[0.06] sm:text-[13vw]"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <span className="text-sm text-paper/50">{site.contact.instagramHandle}</span>
          </div>
          <p className="text-xs leading-relaxed text-paper/40">
            © {year} {site.legalName}. Beba com moderação. Venda proibida para
            menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
