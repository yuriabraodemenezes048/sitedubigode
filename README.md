# Drinks du Bigode — Site oficial

Ativo digital premium para a marca **Drinks du Bigode**: open bar autoral e
coquetéis engarrafados para casamentos, eventos corporativos e celebrações.

Construído para parecer obra de agência internacional — foco em conversão,
performance e uma experiência de navegação memorável.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** — design system próprio (cores, tipografia, tokens)
- **Framer Motion** — reveals, parallax, transições
- **Lenis** — scroll suave global
- **React Hook Form + Zod** — formulário de orçamento com validação
- Fontes: **Archivo** (display/grotesca) + **Fraunces** (serifada editorial)

## Rodando o projeto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir a build
```

> Dica: não rode `npm run build` com o `npm run dev` ligado ao mesmo tempo —
> ambos usam a pasta `.next`. Pare o dev antes de buildar.

## Como editar o conteúdo

Quase tudo vive em dois lugares — sem mexer em componentes:

| O quê | Arquivo |
| --- | --- |
| Textos, contatos, drinks, serviços, números, depoimentos, FAQ | `src/lib/site.ts` |
| Regras/labels do formulário de orçamento | `src/lib/schema.ts` |
| Cores, fontes, escalas tipográficas | `tailwind.config.ts` |

### Trocar as imagens
Substitua os arquivos em `public/images/` mantendo os mesmos nomes. Formatos
`webp`/`avif` são gerados automaticamente pelo Next para performance.

### Trocar o hero por vídeo
No arquivo `src/components/sections/hero.tsx`, o bloco “Palco escuro” está
comentado e pronto para receber um `<video>` full-bleed com `object-cover`.

## Estrutura

```
src/
  app/            # rotas (home, orçamento, legais, 404, sitemap, robots, api)
  components/
    layout/       # header, footer, cookie banner, smooth scroll
    sections/     # blocos da home
    ui/           # botões e utilitários de animação
  lib/            # conteúdo (site.ts), schema do form, helpers
```

## Conversão, SEO e conformidade

- **CRO:** hero com dupla CTA, prova social, escassez suave, FAQ e CTA final.
- **SEO:** metadata completa, Open Graph/Twitter, JSON-LD (LocalBusiness),
  `sitemap.xml`, `robots.txt`, URLs amigáveis e semânticas.
- **Segurança:** CSP e headers (X-Frame-Options, HSTS, etc.) em `next.config.mjs`;
  validação/sanitização server-side + rate limiting + honeypot na API.
- **LGPD:** banner de consentimento, consentimento no formulário e páginas de
  Privacidade, Cookies e Termos. Analytics só carregam após opt-in.
- **Acessibilidade:** navegação por teclado, foco visível, ARIA, alt em imagens,
  `prefers-reduced-motion` respeitado, skip-link.

## Integrações pendentes (estrutura já pronta)

Veja `.env.example`. Os pontos de integração estão marcados com `TODO` em
`src/app/api/orcamento/route.ts` (envio de lead por e-mail/CRM e validação de
reCAPTCHA/Turnstile) — nenhum segredo é exposto no frontend.

---

Beba com moderação. Venda proibida para menores de 18 anos.
