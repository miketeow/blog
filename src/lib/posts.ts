import { readdir } from "fs/promises";
import path from "path";

import { TagType } from "./constants";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  tags: TagType[];
};

const rootDirectory = path.join(process.cwd(), "src", "app", "(posts)", "/");

export async function getPosts(): Promise<Post[]> {
  const slug = (await readdir(rootDirectory, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory()
  );

  const posts = await Promise.all(
    slug.map(async ({ name }) => {
      const { metadata } = await import(`../app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return posts;
}

export async function getPostsByTags({
  tag,
}: {
  tag: TagType;
}): Promise<Post[]> {
  const allPosts = await getPosts();
  const posts = allPosts.filter((post) => post.tags.indexOf(tag) !== -1);

  return posts;
}
