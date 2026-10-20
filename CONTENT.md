# Cómo añadir contenido

La web se genera desde archivos Markdown/MDX y YAML. El CV original sigue en `readme.md`; los datos de la sección profesional están en `src/data/profile.ts`.

## 1. Cuaderno (`src/content/entries/`)

Crea un archivo `.md`, por ejemplo `una-lectura-importante.md`. El nombre del archivo será la URL: `/cuaderno/una-lectura-importante/`.

```md
---
title: "Una lectura importante"
description: "Una frase breve (máx. 200 caracteres): aparece en Google y al compartir."
publishedAt: 2026-10-16
category: libros-leidos
book: cien-anos-de-soledad   # opcional: id de un libro de la biblioteca
featured: true                # opcional: aparece primero en la portada
updatedAt: 2026-11-02         # opcional: si revisas la entrada
draft: false
---

El primer párrafo lleva letra capitular automáticamente.

> Las citas en bloque se ven con estilo literario.

---

Un `---` entre párrafos dibuja un separador ✳ ✳ ✳.
```

Con `draft: true`, la entrada no se publica. Cada entrada calcula su tiempo de lectura y muestra al final la anterior, la siguiente y dos «páginas afines».

**Categorías** (agrupadas en el archivo): *Lecturas* `libros-leidos`, `libros-favoritos` · *Diario* `diario`, `dias-importantes`, `recuerdos`, `salidas` · *Horizonte* `futuro`, `planes` · *Afinidades* `gustos`, `canciones`, `cine-series` · *Camino* `experiencia`, `voluntariado`, `logros`, `programas`. Se definen en `src/domain/category.ts`.

## 2. Biblioteca (`src/content/books.yaml`)

Sustituye el `[]` por una lista de libros (el archivo trae un ejemplo comentado). Estados: `leyendo`, `leido`, `por-leer`. Los libros en `leyendo` aparecen también en la portada y en `/ahora/`. Si una entrada del cuaderno usa `book: <id>`, la tarjeta del libro enlaza a ella. Las portadas se generan solas, con un color estable para cada título.

## 3. Página «Ahora» (`src/data/now.ts`)

Edita los textos y cambia `updatedAt` cada vez que la actualices.

## Arquitectura

```
src/
  domain/          Reglas y tipos puros (categorías, estados de lectura, tiempo de lectura)
  application/     Casos de uso: relacionadas, anterior/siguiente, estantes, JSON-LD
  infrastructure/  Único acceso a astro:content (content-repository.ts)
  config/site.ts   URL, título, descripción, navegación
  data/            Perfil profesional y página «Ahora»
  components/      layout/ · notebook/ · library/ · profile/ · seo/ · ui/
  styles/          tokens → base → layout → components → pages → motion
  scripts/         reveal.ts (animaciones al hacer scroll)
```

Incluye: sitemap, RSS (`/rss.xml`), `robots.txt`, página 404, Open Graph/Twitter, datos estructurados (Person, WebSite, BlogPosting, BreadcrumbList), modo de lectura nocturna, transiciones entre páginas y respeto por `prefers-reduced-motion`.

La imagen para redes (`public/og-default.png`) se regenera con `npm run og`.

## Desarrollo

```sh
npm install
npm run dev
```

Antes de publicar, ejecuta `npm run build`. GitHub Actions construye y despliega `dist` en GitHub Pages con cada cambio en `main` (en la configuración del repositorio, el origen de Pages debe ser **GitHub Actions**).
