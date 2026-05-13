import { motion } from "framer-motion";

export function Lifestyle() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              Inspiração
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              <span className="italic text-primary">Comer bem</span> é um
              gesto silencioso de amor próprio.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Acreditamos em rotinas mais leves, em ingredientes que contam
              sua origem e em refeições preparadas com presença.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
            {[
              { ratio: "aspect-[4/5]", label: "Lifestyle 1", tone: "from-leaf/25 to-cream" },
              { ratio: "aspect-square mt-10", label: "Lifestyle 2", tone: "from-clay/30 to-linen" },
              { ratio: "aspect-square", label: "Lifestyle 3", tone: "from-primary/15 to-cream" },
              { ratio: "aspect-[4/5] -mt-6", label: "Lifestyle 4", tone: "from-clay/20 to-linen" },
            ].map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`relative ${it.ratio} rounded-2xl overflow-hidden border border-border bg-gradient-to-br ${it.tone}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {it.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
