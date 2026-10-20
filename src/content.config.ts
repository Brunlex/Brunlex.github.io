import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';
import { categoryKeys } from './domain/category';
import { readingStatusKeys } from './domain/book';

const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(categoryKeys),
    /** Libro de la biblioteca del que trata la entrada (su `id` en books.yaml). */
    book: reference('books').optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: file('./src/content/books.yaml'),
  schema: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    year: z.number().int().optional(),
    status: z.enum(readingStatusKeys),
    rating: z.number().int().min(1).max(5).optional(),
    finishedAt: z.coerce.date().optional(),
    quote: z.string().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { entries, books };
