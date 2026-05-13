import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-linen via-background to-background" />
      <div className="absolute -top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-leaf/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Mercado natural · Campo Grande/MS
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            O sabor da terra,{" "}
            <span className="italic text-primary">curado</span> com
            cuidado.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Grãos, castanhas, cereais, farinhas e especiarias selecionados —
            num espaço acolhedor, moderno e feito para quem cuida do que
            come.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#categorias"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Conheça os produtos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-cream transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Nossas unidades
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>Granel</span>
            <span className="text-border">·</span>
            <span>Orgânico</span>
            <span className="text-border">·</span>
            <span>Curadoria local</span>
            <span className="text-border">·</span>
            <span>Atendimento humano</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-clay/30 via-cream to-leaf/20 border border-border shadow-[0_30px_80px_-30px_oklch(0.3_0.04_60_/_0.25)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="font-display text-3xl text-primary italic">
                    GS
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Foto principal
                </p>
                <p className="mt-2 text-sm text-muted-foreground/80 max-w-[14rem] mx-auto">
                  Substitua por uma foto editorial dos grãos, castanhas ou
                  do interior da loja.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-cream border border-border px-5 py-4 shadow-lg">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              + de 200 itens
            </p>
            <p className="font-display text-lg text-foreground">
              naturais & selecionados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
