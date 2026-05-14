import { motion } from "framer-motion";
import granel from "@/assets/greensouk/granel-maos.jpg";
import castanhas from "@/assets/greensouk/castanhas-close.jpg";
import cesta from "@/assets/greensouk/produtos-selecionados.jpg";
import superfoods from "@/assets/greensouk/superfoods-flatlay.jpg";

const items = [
  { src: granel, alt: "Atendimento servindo granola a granel em saco de papel kraft", ratio: "aspect-[4/5]", w: 1080, h: 1920 },
  { src: castanhas, alt: "Castanhas, pistache, amêndoas e frutas secas em potes de vidro", ratio: "aspect-square mt-8 md:mt-10", w: 1024, h: 1024 },
  { src: cesta, alt: "Cesta premium Green Souk com produtos selecionados", ratio: "aspect-square", w: 1280, h: 1280 },
  { src: superfoods, alt: "Especiarias e superfoods em ceramicas sobre mesa de linho", ratio: "aspect-[4/5] -mt-4 md:-mt-6", w: 1536, h: 1024 },
] as const;

export function Lifestyle() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
              Inspiração
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              <span className="italic text-[color:var(--leaf-deep)]">
                Comer bem
              </span>{" "}
              é um gesto silencioso de amor próprio.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Acreditamos em rotinas mais leves, em ingredientes que
              contam sua origem e em refeições preparadas com presença.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden rounded-[1.5rem] border border-border/70 shadow-[0_18px_40px_-24px_oklch(0.30_0.05_145_/_0.35)] ${it.ratio.includes("mt-") || it.ratio.includes("-mt-") ? it.ratio.split(" ").slice(1).join(" ") : ""}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  width={it.w}
                  height={it.h}
                  className={`h-full w-full object-cover ${it.ratio.split(" ")[0]} transition-transform duration-700 hover:scale-[1.04]`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
