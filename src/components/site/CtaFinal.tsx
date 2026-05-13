import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatsLink } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/70">
                Vamos nos conhecer
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                Vem viver a experiência{" "}
                <span className="italic">Green Souk</span>.
              </h2>
              <p className="mt-5 max-w-md text-primary-foreground/80 leading-relaxed">
                Tire dúvidas, peça uma indicação ou agende sua visita. A
                gente te responde com calma e cuidado.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href={whatsLink("site_cta")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-7 py-4 text-sm font-medium hover:bg-clay hover:text-foreground transition-colors"
              >
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
