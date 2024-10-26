import { defineCollection, z } from "astro:content";
import { format } from "date-fns";

// z is Zod framework for TypeScript-first schema validation with static type inference
// https://zod.dev/

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform(str => format(new Date(str), 'MMMM d, yyyy')),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};