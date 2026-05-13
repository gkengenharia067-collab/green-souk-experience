import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { PhotoSlot } from "./PhotoSlot";
import { whatsLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-linen via-background to-background" />
      <div className="absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-leaf/15 blur-3xl" />
      <div className="absolute -bottom-44 -left-32 -z-10 h-[460px] w-[460px] rounded-full bg-clay/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-cream/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Mercado natural · Campo Grande/MS
          </span>

          <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] text-foreground">
            Mercado natural,{" "}
            <span className="italic text-[color:var(--leaf-deep)]">
              feito com cuidado
            </span>{" "}
            em Campo Grande.
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Grãos, castanhas, cereais, farinhas, especiarias e produtos
            naturais selecionados — em duas unidades modernas, acolhedoras
            e pensadas para quem cuida do que come.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={whatsLink("produtos_naturais")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_14px_30px_-14px_oklch(0.34_0.055_142_/_0.55)]"
            >
              Conhecer produtos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:bg-cream transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Nossas unidades
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Granel</span>
            <span className="text-border">·</span>
            <span>Selecionados</span>
            <span className="text-border">·</span>
            <span>Curadoria local</span>
            <span className="text-border">·</span>
            <span>Atendimento humano</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <PhotoSlot
            ratio="aspect-[4/5]"
            tone="leaf"
            label="Foto principal"
            className="shadow-[0_30px_80px_-30px_oklch(0.30_0.05_145_/_0.35)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col rounded-2xl bg-cream border border-border px-5 py-4 shadow-lg">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              + de 200 itens
            </span>
            <span className="font-display text-lg text-foreground">
              naturais e selecionados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
