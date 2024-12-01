import React from "react";

import SearchPosts from "@/components/search-posts";
import { getPosts } from "@/lib/posts";

const PostsPage = async () => {
  const posts = await getPosts("blogs");
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-5xl">
        <h1 className="title mb-12">Blogs</h1>
        <SearchPosts directory="blogs" posts={posts} />
      </div>
    </section>
  );
};

export default PostsPage;
