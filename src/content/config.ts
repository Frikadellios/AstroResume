import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: reference('authors'),
    slug: z.string(),
    date: z.date(),
    relatedPosts: z.array(reference('blog')),
    language: z.enum(['uk', 'en', 'ru']),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  })
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  })
});

export const collections = { blog, authors };