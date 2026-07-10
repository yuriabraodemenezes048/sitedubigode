import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

const legal = [
  { label: "Privacidade", href: "/politica-de-privacidade" },
  { label: "Cookies", href: "/politica-de-cookies" },
  { label: "Termos", href: "/termos-de-uso" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <div className="shell py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            🍹 Drinks du Bigode
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Rodapé">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-display text-sm text-graphite hover:text-tangerine">
                {item.label}
              </Link>
            ))}
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="font-display text-sm text-graphite hover:text-tangerine">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-transform hover:-translate-y-0.5 hover:bg-tangerine"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              aria-label="E-mail"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-transform hover:-translate-y-0.5 hover:bg-tangerine"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone">
          © {year} {site.legalName} · Rio de Janeiro · Beba com moderação. Venda proibida para menores de 18 anos.
        </p>
      </div>
    </footer>
  );
}
