import { readdir } from "fs/promises";
import path from "path";

import { TagType } from "./constants";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  tags: TagType[];
  draft?: boolean;
};

const rootDirectory = path.join(process.cwd(), "src", "app", "(posts)", "/");

export type GetPostsOptions = {
  includeDrafts?: boolean;
};

export async function getPosts(options: GetPostsOptions): Promise<Post[]> {
  // In development, draft are included for preview
  // In production, draft are excluded.

  const showDrafts =
    options.includeDrafts ?? process.env.NODE_ENV === "development";
  const dirents = await readdir(rootDirectory, { withFileTypes: true });
  const subfolders = dirents.filter((dirent) => dirent.isDirectory());
  const allPostsData = await Promise.all(
    subfolders.map(async ({ name: slug }) => {
      try {
        const { metadata } = await import(`../app/(posts)/${slug}/page.mdx`);
        return { slug, ...(metadata as Omit<Post, "slug">) };
      } catch (error) {
        console.error(`Error loading posts/${slug}/page.mdx:`, error);
        return null;
      }
    })
  );

  let processedPosts = allPostsData.filter(
    (post): post is Post => post !== null
  );
  if (!showDrafts) {
    processedPosts = processedPosts.filter((post) => !post.draft);
    // if post.draft is true, posts is filtered out
    // if post.draft is false, posts is included
    // if post.draft is undefined, posts is included
  }

  processedPosts.sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
  return processedPosts;
  // posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  // return posts;
}

export async function getPostsByTags({
  tag,
  includeDrafts,
}: {
  tag: TagType;
  includeDrafts?: boolean;
}): Promise<Post[]> {
  const allPosts = await getPosts({ includeDrafts });
  const posts = allPosts.filter((post) => post.tags.indexOf(tag) !== -1);

  return posts;
}
