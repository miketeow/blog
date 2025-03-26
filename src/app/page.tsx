import Intro from "@/components/intro";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <Intro />
        <Posts posts={posts} />
      </div>
    </section>
  );
}
