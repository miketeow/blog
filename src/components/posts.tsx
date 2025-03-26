import Link from "next/link";
import React from "react";

import { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map(({ slug, title, publishedAt }) => (
        <Link key={slug} href={`/${slug}`} className="hover:underline">
          <li className="group">
            <div className="flex flex-col justify-between gap-x-6 gap-y-2 border-b border-gray-200 py-4 transition-colors sm:flex-row dark:border-gray-700">
              <div>
                <h2 className="max-w-lg text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  {title}
                </h2>
              </div>

              <p className="mt-1 font-mono text-sm">
                {formatDate(publishedAt)}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Posts;
