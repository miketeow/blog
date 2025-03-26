export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/tag/blog" },
  { name: "Project", href: "/tag/project" },
];

export const tags = ["js", "mdx", "nextjs", "blog", "project"] as const;
export type TagType = (typeof tags)[number];
