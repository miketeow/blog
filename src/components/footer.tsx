import React from "react";

import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Icons } from "./icons";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              target="_blank"
              rel="noreferrer"
              href={`mailto:${siteConfig.link.email}`}
            >
              <span className="sr-only">Mail</span>
              <Mail className="size-6" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteConfig.link.twitter}>
              <span className="sr-only">Twitter</span>
              <Icons.twitter className="size-6" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteConfig.link.github}>
              <span className="sr-only">Github</span>
              <Icons.gitHub className="size-6" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
