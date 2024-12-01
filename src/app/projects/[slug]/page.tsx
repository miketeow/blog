import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { ArrowLeftIcon } from "lucide-react";

import MDXContent from "@/components/mdx-components";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { formarDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts("projects");
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "projects");

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-5xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-5" />
          <span>Back</span>
        </Link>

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} - {formarDate(publishedAt ?? "")}
          </p>
        </header>
        <main className="prose dark:prose-invert mt-16">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
};

export default Post;
