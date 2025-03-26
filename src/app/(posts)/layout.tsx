import { Metadata } from "next";

import OnThisPage from "@/components/on-this-page";

export const metadata: Metadata = {
  title: {
    template: `%s | Blog`,
    default: `Blog`,
  },
  description: "miketeow blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <section className="grow pt-32">
          <div className="container mx-auto flex max-w-5xl flex-col gap-8 px-4 md:flex-row">
            <main className="flex-1">{children}</main>
            <OnThisPage className="w-full text-sm md:w-[20%]" />
          </div>
        </section>
      </div>
    </main>
  );
}
