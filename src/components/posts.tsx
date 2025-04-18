import Link from "next/link";
import React from "react";

import { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

const Posts = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length == 0) {
    return <p className="text-muted-foreground italic">No posts found.</p>;
  }
  return (
    <ul className="flex flex-col gap-8">
      {posts.map(({ slug, title, publishedAt }) => (
        <li
          className="group border-border hover:bg-muted/50 border-b transition-colors last:border-b-0"
          key={slug}
        >
          <Link key={slug} href={`/${slug}`} className="block w-full px-1 py-4">
            <div className="flex flex-col justify-between gap-x-6 gap-y-1 sm:flex-row">
              <h2 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors sm:text-xl">
                {title}
              </h2>

              <p className="text-muted-foreground shrink-0 pt-1 font-mono text-sm sm:pt-0">
                {formatDate(publishedAt)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
