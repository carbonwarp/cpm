import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// To add another docs section: add a folder in src/content/ and a collection here.
export const collections = {
  // General pages: src/content/pages/about.mdx -> /about
  pages: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
  setup: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/setup' }),
    schema: z.object({
      title: z.string(), // distro name, shown on cards and in the sidebar
      icon: z.string().optional(), // simple-icons slug
    }),
  }),
};
