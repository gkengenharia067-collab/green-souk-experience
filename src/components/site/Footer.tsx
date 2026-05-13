import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { whatsLink, DEV_WHATS } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[color:var(--leaf-deep)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-md text-sm text-primary-foreground/75 leading-relaxed">
              Mercado natural moderno, sofisticado e acolhedor em Campo
              Grande/MS. Grãos, castanhas, cereais, farinhas, especiarias
              e suplementos naturais selecionados com curadoria.
            </p>
            <a
              href="https://www.instagram.com/greensoukmercado/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/85 hover:text-clay transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @greensoukmercado
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
              Navegue
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#categorias", "Categorias"],
                ["#diferenciais", "Diferenciais"],
                ["#depoimentos", "Depoimentos"],
                ["#unidades", "Unidades"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-primary-foreground/85 hover:text-clay transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
              <li>
                <a
                  href={whatsLink("geral")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay transition-colors"
                >
                  R. Antônio Maria Coelho, 163 · (67) 99977-9718
                </a>
              </li>
              <li>
                <a
                  href={whatsLink("geral", "5567981460154")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay transition-colors"
                >
                  R. Marquês de Lavradio, 626 · (67) 98146-0154
                </a>
              </li>
              <li>Seg–Sex 8h às 18h30 · Sáb 8h às 13h</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Green Souk Mercado Natural. Campo
            Grande · Mato Grosso do Sul.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href={DEV_WHATS}
              target="_blank"
              rel="noreferrer"
              className="text-primary-foreground/85 hover:text-clay underline-offset-4 hover:underline transition-colors"
            >
              Gabriel Cantelle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
