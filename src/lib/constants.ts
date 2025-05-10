export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/tag/blog" },
  { name: "Project", href: "/tag/project" },
];

export const tags = [
  "javascript",
  "mdx",
  "nextjs",
  "blog",
  "project",
  "auth",
  "codecrafter",
  "leetcode",
  "ai",
  "nuxt",
  "rust",
  "c",
  "book",
  "review",
  "vite",
  "react",
] as const;
export type TagType = (typeof tags)[number];
