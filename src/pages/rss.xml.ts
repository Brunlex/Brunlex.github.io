import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { entryUrl } from '../application/entries';
import { categoryLabel } from '../domain/category';
import { loadEntries } from '../infrastructure/content-repository';
import { site } from '../config/site';

export const GET: APIRoute = async (context) => {
  const entries = await loadEntries();
  return rss({
    title: `Cuaderno de ${site.name}`,
    description: 'Lecturas, recuerdos e ideas de Bruno Choque.',
    site: context.site ?? site.url,
    customData: `<language>${site.lang}</language>`,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: entryUrl(entry),
      categories: [categoryLabel(entry.data.category)],
    })),
  });
};
