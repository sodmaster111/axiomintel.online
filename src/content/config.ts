import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    description: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    price_note: z.string(),
    affiliate_url: z.string().url(),
    updated_at: z.string()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    published_at: z.string(),
    updated_at: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { tools, blog };
