import { useEffect, useState } from "react";
import { whatsLink } from "@/lib/whatsapp";

export function WhatsFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsLink("site_cta")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Green Souk no WhatsApp"
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 h-14 w-14 md:h-15 md:w-15 inline-flex items-center justify-center rounded-full bg-[color:var(--leaf-deep)] text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.30_0.05_145_/_0.55)] transition-all duration-500 hover:scale-105 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-leaf/40 animate-ping opacity-60" />
      <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.43-8.43ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.23-.37a9.83 9.83 0 0 1-1.5-5.28c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.9-9.88 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
