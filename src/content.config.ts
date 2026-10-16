import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { categories } from './domain/site';

const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    category: z.enum(Object.keys(categories) as [keyof typeof categories, ...Array<keyof typeof categories>]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { entries };
