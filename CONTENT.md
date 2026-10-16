# Cómo añadir contenido al cuaderno

La web se genera desde archivos Markdown o MDX. El CV original sigue en `readme.md`; los datos que se muestran en la sección profesional están organizados en `src/data/profile.ts`.

Para publicar una entrada, crea un archivo `.md` en `src/content/entries/`, por ejemplo `una-lectura-importante.md`:

```md
---
title: "Una lectura importante"
description: "Una frase breve que describa la entrada."
publishedAt: 2026-10-16
category: libros-leidos
draft: false
---

Escribe aquí el texto de la entrada.
```

Con `draft: true`, la entrada no aparece en la web. Cada archivo publicado crea su propia página en `/cuaderno/`. El archivo solo muestra categorías que ya contienen entradas publicadas.

Categorías admitidas: `diario`, `dias-importantes`, `futuro`, `planes`, `libros-leidos`, `libros-favoritos`, `recuerdos`, `voluntariado`, `logros`, `salidas`, `programas`, `gustos`, `canciones`, `cine-series` y `experiencia`.

## Desarrollo

```sh
npm install
npm run dev
```

Antes de publicar, ejecuta `npm run build`. El repositorio incluye un flujo de GitHub Actions que construye y despliega la carpeta `dist` en GitHub Pages cuando hay cambios en `main`. En la configuración del repositorio, selecciona **GitHub Actions** como origen de Pages.
