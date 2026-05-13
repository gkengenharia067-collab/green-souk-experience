import { motion } from "framer-motion";
import { PhotoSlot } from "./PhotoSlot";

export function Lifestyle() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
            {([
              { ratio: "aspect-[4/5]", tone: "leaf", label: "Granel" },
              { ratio: "aspect-square mt-8 md:mt-10", tone: "clay", label: "Castanhas" },
              { ratio: "aspect-square", tone: "linen", label: "Atendimento" },
              { ratio: "aspect-[4/5] -mt-4 md:-mt-6", tone: "cream", label: "Especiarias" },
            ] as const).map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhotoSlot ratio={it.ratio} tone={it.tone} label={it.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
