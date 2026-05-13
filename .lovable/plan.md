# Green Souk Mercado Natural — Plano

Landing page única, moderna e elegante, com rolagem suave entre seções e duas unidades destacadas.

## Identidade visual

- **Paleta** (tokens HSL/oklch em `src/styles.css`):
  - Verde-oliva profundo (primário), areia/linho (background), terracota suave (acento), creme off-white, marrom-castanha para texto.
- **Tipografia**: display serif elegante (ex.: Fraunces ou Cormorant) + sans humanista (ex.: DM Sans / Manrope) — nada de Inter/Poppins.
- **Estética**: muito espaço em branco, fotografia natural, micro-texturas orgânicas, cantos suaves, sombras discretas, animações sutis (framer-motion: fade/slide on scroll).

## Estrutura da página (single page com âncoras suaves)

```text
[Header fixo translúcido]
  Logo · Sobre · Categorias · Unidades · Contato · [WhatsApp CTA]

1. Hero
   - H1 elegante, subtítulo, 2 CTAs (WhatsApp + Ver categorias)
   - Imagem hero (placeholder até envio)

2. Sobre (Nosso Mercado)
   - Bloco texto + imagem lado a lado
   - Pequenos selos: Natural · Granel · Saudável · Acolhedor

3. Categorias (grid 6–8 cards)
   - Grãos · Castanhas · Cereais · Farinhas · Especiarias · Granolas · Chás · Suplementos naturais

4. Diferenciais (3–4 colunas com ícones lucide finos)
   - Curadoria · Granel · Atendimento humano · Qualidade premium

5. Lifestyle / Inspiração
   - Faixa de imagens estilo editorial + frase de marca

6. Unidades (2 cards lado a lado)
   - Unidade Antônio Maria Coelho — R. Antônio Maria Coelho, 163 · WhatsApp (67) 99977-9718
   - Unidade Marquês de Lavradio — R. Marquês de Lavradio, 626 · WhatsApp (67) 98146-0154
   - Horário: Seg–Sex 8h–18h30 · Sáb 8h–13h
   - Botões: WhatsApp + Como chegar (Google Maps)

7. Grid Instagram (placeholder 6 imagens)

8. CTA final + Footer
   - Logo, navegação, redes sociais, copyright
```

## Conteúdo / Copy

Copy em português, tom acolhedor e sofisticado, seguindo o briefing original (mercado natural moderno, confiável, bonito).

## Técnico

- TanStack Start (rota única `/` com âncoras `#sobre`, `#categorias`, `#unidades`, `#contato` — exceção válida para landing rolável).
- Tokens semânticos no `src/styles.css` (oklch), variantes shadcn customizadas, sem cores hardcoded.
- Componentes: `Header`, `Hero`, `Sobre`, `Categorias`, `Diferenciais`, `Lifestyle`, `Unidades`, `InstagramGrid`, `Footer`.
- WhatsApp via `https://wa.me/55679...` com mensagem pré-preenchida.
- SEO: title, meta description, og:tags, JSON-LD `LocalBusiness` × 2 (uma por unidade), `lang="pt-BR"`, H1 único, alt text em todas as imagens.
- Imagens: placeholders neutros (divs com cor do tema + label) até você enviar as fotos reais — substituição direta depois.
- Responsivo mobile-first, animações framer-motion discretas.

## Pendente do usuário (após implementação)

- Fotos reais (hero, sobre, categorias, lifestyle, instagram) para substituir placeholders.
- Logo oficial (se houver) — caso contrário, criamos lockup tipográfico elegante.
