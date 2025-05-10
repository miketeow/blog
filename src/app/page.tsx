import Intro from "@/components/intro";
import SearchPosts from "@/components/search-posts";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts({ includeDrafts: false });
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <Intro />
        <SearchPosts posts={posts} />
      </div>
    </section>
  );
}
