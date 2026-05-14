import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Categorias } from "@/components/site/Categorias";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Lifestyle } from "@/components/site/Lifestyle";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Unidades, LocalBusinessJsonLd } from "@/components/site/Unidades";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsFab } from "@/components/site/WhatsFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Green Souk — Mercado Natural em Campo Grande/MS | Grãos, Castanhas e Cereais",
      },
      {
        name: "description",
        content:
          "Mercado natural em Campo Grande/MS. Grãos, castanhas, cereais, farinhas, especiarias, granolas e suplementos naturais a granel — com curadoria, atendimento humano e duas unidades.",
      },
      {
        name: "keywords",
        content:
          "mercado natural Campo Grande, produtos naturais Campo Grande, grãos e cereais Campo Grande, alimentação saudável Campo Grande, granel, castanhas, suplementos naturais, Green Souk",
      },
      { property: "og:title", content: "Green Souk — Mercado Natural em Campo Grande/MS" },
      {
        property: "og:description",
        content:
          "Grãos, castanhas, cereais e produtos naturais selecionados em Campo Grande/MS. Duas unidades acolhedoras.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "geo.region", content: "BR-MS" },
      { name: "geo.placename", content: "Campo Grande" },
      { name: "geo.position", content: "-20.4697;-54.6201" },
      { name: "ICBM", content: "-20.4697, -54.6201" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Diferenciais />
        <Lifestyle />
        <Depoimentos />
        <Unidades />
        <InstagramGrid />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsFab />
      <LocalBusinessJsonLd />
    </div>
  );
}
