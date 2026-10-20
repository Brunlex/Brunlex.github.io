/** Metadatos globales del sitio. Cambia aquí y se propaga a SEO, RSS y layout. */
export const site = {
  url: 'https://brunlex.github.io',
  name: 'Bruno Eduardo',
  title: 'Bruno Eduardo · Economía, lecturas y cuaderno personal',
  description:
    'Web personal de Bruno Eduardo, estudiante de Economía en Arequipa: un cuaderno de lecturas, recuerdos e ideas, una biblioteca personal y su trayectoria.',
  locale: 'es_PE',
  lang: 'es',
  ogImage: '/og-default.png',
  themeColor: { light: '#f2eee7', dark: '#1b211e' },
} as const;

export const navigation = [
  { href: '/cuaderno/', label: 'Cuaderno' },
  { href: '/biblioteca/', label: 'Biblioteca' },
  { href: '/trayectoria/', label: 'Trayectoria' },
  { href: '/ahora/', label: 'Ahora' },
] as const;
