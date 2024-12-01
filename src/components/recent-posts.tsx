import Link from "next/link";
import React from "react";

import { getPosts } from "@/lib/posts";

import Posts from "./posts";

const RecentPosts = async () => {
  const posts = await getPosts("blogs", 4);
  return (
    <section className="pb-24">
      <div>
        <h2 className="title mb-12"> Recent Posts</h2>
        <Posts directory="blogs" posts={posts} />

        <Link
          href="/blogs"
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
        >
          <span>All Posts</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
