import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const contactLinkStyles = cn(
  "text-sm font-medium uppercase tracking-wide", // Base text style: small, medium weight, uppercase, slightly spaced
  "text-muted-foreground", // Default color using your theme variable
  "transition-colors duration-150 ease-in-out", // Smooth transition for color changes
  "hover:text-foreground hover:underline", // On hover: use main text color and underline
  "focus:outline-none", // Remove default browser focus outline
  "focus-visible:text-foreground focus-visible:underline" // For keyboard navigation: use main text color and underline
);
const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-12 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Mike Teow</h1>
        <p className="text-muted-foreground mt-3 font-light">
          I am a software engineer based in Malaysia.
        </p>
        <div className="mt-3 flex gap-2">
          <Link
            href={siteConfig.link.github}
            target="_blank"
            rel="noopener noreferrer"
            className={contactLinkStyles}
          >
            GITHUB
          </Link>
          <Link
            href={siteConfig.link.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={contactLinkStyles}
          >
            TWITTER
          </Link>
          <Link
            href={`mailto:${siteConfig.link.email}`}
            className={contactLinkStyles}
          >
            EMAIL
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
