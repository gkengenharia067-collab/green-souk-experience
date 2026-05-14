## Plano — Refino premium Green Souk

### 1. Fotos reais via Firecrawl
- Conectar o Firecrawl (`standard_connectors--connect`) — necessário para acessar o Instagram público sem bloqueio 403.
- Rodar `firecrawl scrape` em `instagram.com/greensoukmercado/` com formato `html` + `links` para extrair URLs `cdninstagram.com` das postagens em destaque.
- Selecionar manualmente ~12 imagens de melhor qualidade nas categorias: ambiente da loja, grãos/castanhas a granel, produtos em destaque, atendimento, lifestyle.
- Baixar via `curl` para `src/assets/instagram/` e importar como ES6 (otimização Vite).
- Caso o Instagram bloqueie mesmo via Firecrawl, fallback: pedir upload direto no chat OU gerar 4–6 imagens premium fotorrealistas (mercado natural, grãos em potes de vidro, castanhas) com `imagegen` standard como ponte temporária — sem aparência IA óbvia.

### 2. Substituição nos componentes
Trocar `<PhotoSlot/>` por `<img>` real (com `alt` descritivo + `loading="lazy"`) em:
- `Hero.tsx` — imagem hero principal (loja/grãos)
- `Sobre.tsx` — foto do ambiente
- `Lifestyle.tsx` — faixa editorial (3 fotos)
- `InstagramGrid.tsx` — grid 6 imagens reais com link para o post
- `Categorias.tsx` — opcional: thumbnail por categoria

### 3. Refino visual (hierarquia + tipografia + espaçamento)
- Ajustar escala tipográfica do `Hero` (display maior em desktop, line-height mais respirado).
- Padronizar espaçamentos verticais entre seções (`py-24 md:py-32` → tokens consistentes).
- Refinar `border-radius` para 1.5rem nos cards principais; sombras mais discretas e coloridas (verde-oliva translúcido).
- Acertar contraste do `--leaf-deep` no logo "GREEN" e tracking do "Souk".

### 4. Micro-animações
- Adicionar `framer-motion` reveal em `Sobre`, `Categorias`, `Lifestyle` (já tem em alguns; padronizar curva `[0.22, 1, 0.36, 1]` e stagger).
- Hover premium nos cards de categoria: lift sutil + glow verde + escala da imagem interna.
- Parallax leve na imagem do Hero (translateY no scroll).
- Botão WhatsApp flutuante mobile (FAB) com pulse discreto.

### 5. Mobile experience
- Aumentar tap targets para 48px mínimo (botões, links nav).
- Ajustar `Hero` mobile: padding lateral, tamanho do H1, CTAs em stack full-width.
- Otimizar `Unidades` mobile: cards empilhados, mapa com altura reduzida.
- Revisar `Header` mobile menu: tipografia maior, espaçamento, animação de abertura.
- Testar viewports 375 e 390 com browser tools após implementação.

### 6. SEO local (incremento)
- Adicionar `geo.region`, `geo.placename`, `geo.position` meta tags em `index.tsx`.
- Reforçar JSON-LD `LocalBusiness` com `priceRange`, `areaServed: Campo Grande`, `openingHoursSpecification` estruturado.

### 7. QA
- `browser--navigate_to_sandbox` + screenshots em desktop (1366) e mobile (390).
- Verificar console limpo, links WhatsApp corretos, imagens carregando.

### Arquivos previstos
- novos: `src/assets/instagram/*.jpg` (downloads), possivelmente `src/components/site/WhatsFab.tsx`
- editados: `Hero`, `Sobre`, `Lifestyle`, `InstagramGrid`, `Categorias`, `Header`, `Unidades`, `styles.css`, `routes/index.tsx`

### Pendência ao usuário
Aprovar a conexão do Firecrawl quando o picker abrir. Se o scrape do Instagram falhar mesmo via Firecrawl (Meta bloqueia agressivamente), confirmar fallback: upload direto OU imagens geradas premium.
