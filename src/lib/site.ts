/**
 * Fonte única de verdade do conteúdo do site.
 * Edite aqui para atualizar textos, contatos e catálogo em todo o projeto.
 */

export const site = {
  name: "Drinks du Bigode",
  shortName: "du Bigode",
  legalName: "Drinks du Bigode",
  tagline: "Drinks que transformam qualquer rolê.",
  description:
    "Open bar, coquetéis autorais e a galera mais animada pra fazer a bebida do seu casamento, festa ou evento no Rio. Bora brindar? 🍹",
  // Substitua pela URL de produção definitiva
  url: "https://drinksdubigode.com.br",
  locale: "pt-BR",
  city: "Rio de Janeiro",
  region: "RJ",
  country: "BR",
  founded: "2019",
  contact: {
    whatsapp: "5521997032675",
    whatsappLabel: "(21) 99703-2675",
    email: "drinksdubigode@gmail.com",
    instagram: "https://instagram.com/drinksdubigode",
    instagramHandle: "@drinksdubigode",
  },
} as const;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.contact.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { label: "Quem somos", href: "/#manifesto" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Drinks", href: "/#drinks" },
  { label: "Galeria", href: "/#galeria" },
] as const;

export type Drink = {
  id: string;
  name: string;
  spirit: string;
  notes: string;
  emoji: string;
  description: string;
  accent: string; // token de cor tailwind (sun, lime, berry, tangerine...)
  glass: string;
  poster: string;
};

export const drinks: Drink[] = [
  {
    id: "lovegin",
    name: "LoveGin",
    spirit: "Gin",
    notes: "Frutas vermelhas · Hibisco",
    emoji: "🍓",
    description:
      "Gin, frutas vermelhas e um xarope de hibisco que é a nossa cara. Rosado, refrescante e perigosamente fácil de beber.",
    accent: "berry",
    glass: "/images/lovegin-glass.jpg",
    poster: "/images/lovegin-poster.jpg",
  },
  {
    id: "tropicaipi",
    name: "Tropicaipi",
    spirit: "Vodka",
    notes: "Manga · Maracujá · Hortelã",
    emoji: "🥭",
    description:
      "Vodka com suco tropical de manga e maracujá e um toque de hortelã. É o verão inteiro dentro do copo.",
    accent: "sun",
    glass: "/images/tropicaipi-glass.jpg",
    poster: "/images/tropicaipi-poster.jpg",
  },
  {
    id: "caipi",
    name: "Caipi Du'Bigode",
    spirit: "Cachaça",
    notes: "Abacaxi · Limão · Manjericão",
    emoji: "🍍",
    description:
      "A caipirinha turbinada: cachaça, abacaxi, limão e manjericão. Brasil no capricho, do jeitinho que a gente ama.",
    accent: "lime",
    glass: "/images/caipi-glass.jpg",
    poster: "/images/caipi-poster.jpg",
  },
  {
    id: "mate",
    name: "Mate Du'Bigode",
    spirit: "Rum",
    notes: "Mate · Maracujá · Gengibre",
    emoji: "🧉",
    description:
      "Rum com mate, maracujá e gengibre. Aquele gole gelado de praia carioca, com uma pegada que surpreende.",
    accent: "tangerine",
    glass: "/images/mate-glass.jpg",
    poster: "/images/mate-poster.jpg",
  },
];

export type Service = {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  color: string; // token de cor tailwind pro card
};

export const services: Service[] = [
  {
    id: "casamentos",
    emoji: "💍",
    title: "Casamentos",
    summary: "O bar do “sim” com um drink que leva o nome de vocês. Ninguém esquece.",
    color: "sky",
  },
  {
    id: "corporativo",
    emoji: "🏢",
    title: "Eventos da firma",
    summary: "Confraternização, lançamento ou happy hour com a sua marca no copo.",
    color: "lime",
  },
  {
    id: "aniversarios",
    emoji: "🎉",
    title: "Aniversários",
    summary: "Da reunião dos amigos à festa que vira o dia. A gente cuida da bebida.",
    color: "tangerine",
  },
  {
    id: "formaturas",
    emoji: "🎓",
    title: "Formaturas",
    summary: "Fila que anda rápido, drink gelado e energia de festival pra fechar o ciclo.",
    color: "grape",
  },
  {
    id: "open-bar",
    emoji: "🍹",
    title: "Open bar completo",
    summary: "Chave na mão: drinks, equipe e estrutura. Você curte, a gente faz o resto.",
    color: "sun",
  },
  {
    id: "festivais",
    emoji: "🎪",
    title: "Festivais & marcas",
    summary: "Ativações e barras que giram muito copo — e rendem story o tempo todo.",
    color: "berry",
  },
];

export const stats = [
  { value: 620, suffix: "+", label: "Festas animadas" },
  { value: 180, suffix: "mil", label: "Drinks servidos" },
  { value: 6, suffix: " anos", label: "De estrada e bigode" },
  { value: 4.9, suffix: "★", label: "Nota da galera", decimals: 1 },
] as const;

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "O bar foi, literalmente, o assunto do casamento. Nossos convidados ainda mandam mensagem falando do LoveGin. Serviço impecável do começo ao fim.",
    author: "Marina & Téo",
    role: "Casamento · Fazenda Vila Rica",
    rating: 5,
  },
  {
    quote:
      "Contratamos pro lançamento e a galera não parou de elogiar o bar. Equipe animada, pontual e que abraça a festa. Virou nosso fornecedor oficial.",
    author: "Camila Rezende",
    role: "Marketing · Grupo Norvel",
    rating: 5,
  },
  {
    quote:
      "Fila andando rápido, drink chegando gelado e um visual que rendeu stories a noite inteira. É outro nível de bar para festa.",
    author: "Rafael Antunes",
    role: "Aniversário de 30 anos",
    rating: 5,
  },
  {
    quote:
      "A curadoria de drinks sem álcool foi um carinho que ninguém teve antes. Todo mundo brindou junto. Recomendo de olhos fechados.",
    author: "Juliana Paes",
    role: "Formatura de Medicina",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Como faço pra contratar?",
    a: "Manda um oi no orçamento ou no WhatsApp com a data, o local e quantas pessoas. A gente monta a proposta rapidinho e fecha tudo com contrato.",
  },
  {
    q: "Atendem em qual região?",
    a: "Somos do Rio e rodamos toda a Grande Rio. Evento em outra cidade? Conta pra gente que a gente dá um jeito.",
  },
  {
    q: "Dá pra criar um drink só pro meu evento?",
    a: "Dá sim, e é a nossa parte favorita! Criamos um drink com o nome e a cara da sua festa — com versão sem álcool também.",
  },
  {
    q: "Tem opção sem álcool?",
    a: "Sempre! A galera que não bebe também merece brindar com um drink caprichado.",
  },
];
