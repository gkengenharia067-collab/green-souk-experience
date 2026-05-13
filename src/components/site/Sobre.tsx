import { motion } from "framer-motion";

const selos = ["Natural", "Granel", "Saudável", "Acolhedor"];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[5/6] rounded-[2rem] overflow-hidden bg-gradient-to-br from-leaf/20 via-linen to-clay/25 border border-border"
        >
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Foto institucional
              </p>
              <p className="mt-2 text-sm text-muted-foreground/80 max-w-[16rem]">
                Imagem do interior da loja, prateleiras de grãos ou
                atendimento.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.22em] text-primary">
            Sobre nós
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Um mercado natural que respira{" "}
            <span className="italic text-primary">tempo, terra e cuidado</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            A Green Souk nasceu para ser um ponto de encontro entre quem
            produz com consciência e quem consome com propósito. Aqui, cada
            grão, castanha e especiaria é escolhido a dedo — pensando em
            sabor, origem e bem-estar.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Em Campo Grande/MS, abrimos nossas portas com duas unidades para
            estar perto de você, em um ambiente sofisticado, clean e
            verdadeiramente acolhedor.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
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
