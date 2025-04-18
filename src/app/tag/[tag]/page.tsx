import { notFound } from "next/navigation";

import SearchPosts from "@/components/search-posts";
import { TagType, tags } from "@/lib/constants";
import { getPostsByTags } from "@/lib/posts";

export function generateStaticParams() {
  return tags.map((tag) => ({ tag }));
}

export default async function Tag({ params }: { params: { tag: TagType } }) {
  const { tag } = await params;
  if (tags.indexOf(tag) == -1) notFound();
  const posts = await getPostsByTags({ tag });

  return (
    <main>
      <h1 className="title mb-4 pb-2 capitalize">{tag}</h1>
      <SearchPosts posts={posts} />
    </main>
  );
}
