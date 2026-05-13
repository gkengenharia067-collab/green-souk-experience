import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Categorias } from "@/components/site/Categorias";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Lifestyle } from "@/components/site/Lifestyle";
import { Unidades, LocalBusinessJsonLd } from "@/components/site/Unidades";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
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
        <Unidades />
        <InstagramGrid />
      </main>
      <Footer />
      <LocalBusinessJsonLd />
    </div>
  );
}
