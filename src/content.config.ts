import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['관찰', '회고', '배움', '탐구']),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    accent: z.string().default('#2456ff'),
    featured: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, work };
