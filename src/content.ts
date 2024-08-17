import { getCollection } from "astro:content";

export const englishPages = await getCollection("docs", (entry) => {
  return entry.slug.startsWith("en/");
});
