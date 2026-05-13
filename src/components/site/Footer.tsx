import { Leaf, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Leaf className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="font-display text-xl">
                Green <span className="italic">Souk</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm text-primary-foreground/75 leading-relaxed">
              Mercado natural moderno, sofisticado e acolhedor em Campo
              Grande/MS. Grãos, castanhas, cereais e produtos selecionados
              para uma vida mais leve.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
              Navegue
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#categorias", "Categorias"],
                ["#diferenciais", "Diferenciais"],
                ["#unidades", "Unidades"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-clay transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
              <li>R. Antônio Maria Coelho, 163 · (67) 99977-9718</li>
              <li>R. Marquês de Lavradio, 626 · (67) 98146-0154</li>
              <li>Seg–Sex 8h às 18h30 · Sáb 8h às 13h</li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm hover:text-clay transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @greensouk
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Green Souk Mercado Natural. Todos os direitos reservados.</p>
          <p>Campo Grande · Mato Grosso do Sul</p>
        </div>
      </div>
    </footer>
  );
}
