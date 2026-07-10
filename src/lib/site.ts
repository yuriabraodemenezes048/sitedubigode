/**
 * Fonte única de verdade do conteúdo do site.
 * Edite aqui para atualizar textos, contatos e catálogo em todo o projeto.
 */

export const site = {
  name: "Drinks du Bigode",
  shortName: "du Bigode",
  legalName: "Drinks du Bigode",
  tagline: "Experiências líquidas para momentos inesquecíveis.",
  description:
    "Open bar autoral, coquetéis engarrafados e bartenders para casamentos, eventos corporativos e celebrações premium. Não servimos drinks — criamos experiências.",
  // Substitua pela URL de produção definitiva
  url: "https://drinksdubigode.com.br",
  locale: "pt-BR",
  city: "São Paulo",
  region: "SP",
  country: "BR",
  founded: "2019",
  contact: {
    whatsapp: "5511999999999",
    whatsappLabel: "(11) 99999-9999",
    email: "contato@drinksdubigode.com.br",
    instagram: "https://instagram.com/drinksdubigode",
    instagramHandle: "@drinksdubigode",
    tiktok: "https://tiktok.com/@drinksdubigode",
  },
} as const;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.contact.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Drinks", href: "/#drinks" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Depoimentos", href: "/#depoimentos" },
] as const;

export type Drink = {
  id: string;
  name: string;
  spirit: string;
  notes: string;
  description: string;
  accent: string; // classe tailwind de cor
  glass: string;
  poster: string;
};

export const drinks: Drink[] = [
  {
    id: "lovegin",
    name: "LoveGin",
    spirit: "Gin",
    notes: "Frutas vermelhas · Hibisco · Cítricos",
    description:
      "Gin infusionado em frutas vermelhas, tônica, limão, laranja e um xarope de hibisco feito na casa. Rubro, floral e viciante — o brinde que abre qualquer noite.",
    accent: "flame",
    glass: "/images/lovegin-glass.jpg",
    poster: "/images/lovegin-poster.jpg",
  },
  {
    id: "tropicaipi",
    name: "Tropicaipi",
    spirit: "Vodka",
    notes: "Manga · Maracujá · Hortelã",
    description:
      "Vodka com suco tropical de manga, maracujá e limão, tônica e xarope de hortelã. O verão engarrafado — dourado, cítrico e sem freio.",
    accent: "tropical",
    glass: "/images/tropicaipi-glass.jpg",
    poster: "/images/tropicaipi-poster.jpg",
  },
  {
    id: "caipi",
    name: "Caipi Du'Bigode",
    spirit: "Cachaça artesanal",
    notes: "Abacaxi · Limão · Manjericão",
    description:
      "Nossa releitura da caipirinha: cachaça artesanal, abacaxi, limão e xarope de manjericão. A raiz brasileira em roupa de alfaiataria.",
    accent: "tropical",
    glass: "/images/caipi-glass.jpg",
    poster: "/images/caipi-poster.jpg",
  },
  {
    id: "mate",
    name: "Mate Du'Bigode",
    spirit: "Rum",
    notes: "Mate · Maracujá · Gengibre",
    description:
      "Rum, mate, maracujá, limão e xarope de gengibre. Aquele gole de praia carioca com pegada — âmbar, herbal e refrescante.",
    accent: "gold",
    glass: "/images/mate-glass.jpg",
    poster: "/images/mate-poster.jpg",
  },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "casamentos",
    index: "01",
    title: "Casamentos",
    summary:
      "Um bar autoral que combina com a estética do seu grande dia. Drinks de assinatura com os nomes de vocês, do welcome drink à pista.",
    includes: ["Drinks personalizados", "Cristaleria premium", "Bar cenográfico"],
  },
  {
    id: "corporativo",
    index: "02",
    title: "Eventos Corporativos",
    summary:
      "Lançamentos, confraternizações e ativações de marca com a experiência que a sua empresa quer transmitir. Branding no copo.",
    includes: ["Drinks com sua marca", "Estrutura para escala", "Nota fiscal & contrato"],
  },
  {
    id: "aniversarios",
    index: "03",
    title: "Aniversários",
    summary:
      "Da intimista à festa que vira madrugada. Um bar completo que transforma a sua data em memória coletiva.",
    includes: ["Cardápio sob medida", "Bartenders show", "Opções sem álcool"],
  },
  {
    id: "formaturas",
    index: "04",
    title: "Formaturas",
    summary:
      "A celebração de anos de dedicação merece um brinde à altura. Operação para grande público sem perder o requinte.",
    includes: ["Alto volume", "Fila que anda rápido", "Energia de festival"],
  },
  {
    id: "open-bar",
    index: "05",
    title: "Open Bar Autoral",
    summary:
      "Nosso serviço completo, chave na mão: curadoria de drinks, equipe, estrutura e insumos. Você recebe — a gente cuida do resto.",
    includes: ["Curadoria completa", "Equipe uniformizada", "Logística total"],
  },
  {
    id: "festivais",
    index: "06",
    title: "Festivais & Marcas",
    summary:
      "Ativações e barras para festivais e experiências de marca. Nossos coquetéis engarrafados prontos para escalar o consumo.",
    includes: ["Coquetéis engarrafados", "Operação high-volume", "Visual instagramável"],
  },
];

export const stats = [
  { value: 620, suffix: "+", label: "Eventos realizados" },
  { value: 180, suffix: "mil", label: "Drinks servidos" },
  { value: 6, suffix: " anos", label: "De estrada e bigode" },
  { value: 4.9, suffix: "★", label: "Média de avaliação", decimals: 1 },
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
      "Contratamos para o lançamento e superou qualquer expectativa de ‘open bar de evento corporativo’. Elegante, pontual e com uma equipe que veste a camisa.",
    author: "Camila Rezende",
    role: "Head de Marketing · Grupo Norvel",
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
    q: "Como funciona a contratação do open bar?",
    a: "Você solicita um orçamento com data, local e número de convidados. Montamos uma proposta com curadoria de drinks, equipe e estrutura. Após o aceite e a assinatura do contrato, garantimos a data com um sinal.",
  },
  {
    q: "Vocês atendem em qual região?",
    a: "Somos baseados em São Paulo e atendemos toda a Grande SP. Para eventos em outras cidades e estados, avaliamos logística sob demanda — é só nos contar no orçamento.",
  },
  {
    q: "Dá para criar um drink exclusivo para o meu evento?",
    a: "Sim, e é a nossa parte favorita. Criamos coquetéis de assinatura com o nome, a cor e a história do seu evento ou da sua marca, incluindo versões sem álcool.",
  },
  {
    q: "Qual o número mínimo de convidados?",
    a: "Trabalhamos com celebrações intimistas a festivais de milhares de pessoas. Montamos a estrutura certa para cada porte — sem perder o requinte.",
  },
  {
    q: "Vocês emitem nota fiscal e contrato?",
    a: "Sempre. Todo evento é formalizado com contrato e nota fiscal, com transparência total sobre o que está incluso.",
  },
];
