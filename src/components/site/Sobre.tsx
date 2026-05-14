import { motion } from "framer-motion";
import sobreImg from "@/assets/greensouk/interior-graneis.jpg";

const selos = ["Natural", "Granel", "Saudável", "Acolhedor", "Sofisticado"];

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-border/70 shadow-[0_30px_80px_-30px_oklch(0.30_0.05_145_/_0.35)]">
            <img
              src={sobreImg}
              alt="Interior do mercado natural Green Souk com prateleiras de grãos a granel em potes de vidro"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover aspect-[5/6]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
            Sobre nós
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Um mercado natural que respira{" "}
            <span className="italic text-[color:var(--leaf-deep)]">
              tempo, terra e cuidado
            </span>
            .
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            A Green Souk nasceu em Campo Grande para ser um ponto de
            encontro entre quem produz com consciência e quem consome com
            propósito. Cada grão, castanha e especiaria é escolhido a dedo
            — pensando em sabor, origem e bem-estar.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Em duas unidades acolhedoras, oferecemos uma experiência
            sofisticada e clean, com atendimento humano e produtos que você
            pode confiar de olhos fechados.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {selos.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
