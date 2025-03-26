"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface LinkType {
  id: string;
  text: string;
}
const OnThisPage = ({ className }: { className: string }) => {
  const [links, setLinks] = useState<LinkType[]>();
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const extractHeading = () => {
      const mainContent = document.querySelector("main");

      if (!mainContent) return;

      const headings = mainContent.querySelectorAll("h2,h3");
      const generatedLinks: LinkType[] = Array.from(headings).map(
        (heading, index) => {
          const id = heading.id || `heading-${index}`;
          heading.id = id;

          return {
            id,
            text: heading.textContent || "",
          };
        }
      );

      setLinks(generatedLinks);
    };

    extractHeading();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 0.5,
      }
    );

    const mainContent = document.querySelector("main");
    if (mainContent) {
      const headings = document.querySelectorAll("h2, h3");
      headings.forEach((heading) => observer.observe(heading));
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className={cn("hidden md:block", className)}>
      <div className="sticky top-20">
        <h1 className="text-lg font-bold">On This Page</h1>
        <ul className="mt-4">
          {links?.map((link) => (
            <li className="pt-1" key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                  activeId === link.id &&
                    "font-semibold text-blue-600 dark:text-blue-400"
                )}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
