import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site da Drinks du Bigode e informações sobre a contratação dos nossos serviços.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function Page() {
  return (
    <LegalShell
      kicker="Termos"
      title="Termos de Uso"
      updated="Julho de 2026"
      intro={`Ao navegar no site da ${site.legalName}, você concorda com os termos abaixo. Eles existem para deixar claro o que você pode esperar da gente — e o que esperamos de você.`}
      sections={[
        {
          title: "Uso do site",
          body: [
            "O conteúdo deste site é informativo e destina-se a apresentar nossos serviços e produtos. Você concorda em usá-lo de forma lícita, sem prejudicar seu funcionamento ou os direitos de terceiros.",
          ],
        },
        {
          title: "Propriedade intelectual",
          body: [
            "Marca, logotipo, textos, fotografias, receitas de coquetéis e demais elementos são de propriedade da Drinks du Bigode e protegidos por lei. É proibida a reprodução sem autorização prévia.",
          ],
        },
        {
          title: "Orçamentos e contratação",
          body: [
            "O envio do formulário de orçamento não constitui contrato. A prestação de serviços é formalizada por proposta específica e contrato assinado entre as partes, com condições, valores e responsabilidades detalhados.",
            "Os drinks de assinatura e imagens exibidas são referências; a composição final é definida em conjunto com você.",
          ],
        },
        {
          title: "Consumo responsável",
          body: [
            "A venda e o consumo de bebidas alcoólicas são proibidos para menores de 18 anos. Incentivamos o consumo consciente e responsável em todos os eventos que atendemos.",
          ],
        },
        {
          title: "Limitação de responsabilidade",
          body: [
            "Empenhamo-nos para manter as informações do site corretas e atualizadas, mas não garantimos ausência total de erros ou disponibilidade ininterrupta. Eventuais ajustes podem ocorrer sem aviso prévio.",
          ],
        },
        {
          title: "Contato",
          body: [
            `Dúvidas sobre estes termos? Fale com a gente em ${site.contact.email}.`,
          ],
        },
      ]}
    />
  );
}
