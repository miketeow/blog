import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-12 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Mike Teow</h1>
        <p className="text-muted-foreground mt-3 font-light">
          I am a software engineer based in Malaysia.
        </p>
        <div className="mt-3 flex gap-2">
          <Link href={siteConfig.link.github} className="hover:underline">
            Github
          </Link>
          <Link href={siteConfig.link.twitter} className="hover:underline">
            X
          </Link>
        </div>
      </div>
      <div className="relative">
        <Avatar className="size-16">
          <AvatarImage src="/images/proflie.jpg" alt="profile" />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default Intro;
