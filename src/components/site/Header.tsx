import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { whatsLink } from "@/lib/whatsapp";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#categorias", label: "Categorias" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#unidades", label: "Unidades" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 h-16 md:h-18 flex items-center justify-between">
        <a href="#top" aria-label="Green Souk — início" className="group">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/85 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsLink("site_cta")}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_8px_24px_-12px_oklch(0.34_0.055_142_/_0.55)]"
        >
          Fale no WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-cream transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border/40">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90 border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsLink("site_cta")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
