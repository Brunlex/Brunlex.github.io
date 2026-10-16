import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, type Category } from '../domain/site';

export type PublishedEntry = CollectionEntry<'entries'>;

export async function getPublishedEntries(): Promise<PublishedEntry[]> {
  const entries = await getCollection('entries', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function getPublishedCategories(entries: PublishedEntry[]): Category[] {
  return Object.keys(categories).filter((category) =>
    entries.some((entry) => entry.data.category === category),
  ) as Category[];
}

export function entryUrl(entry: PublishedEntry): string {
  return `/cuaderno/${entry.id}/`;
}
