import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    slug: z.string(),
    date: z.date()
  })
});

export const collections = {
  'blog': blogCollection
};