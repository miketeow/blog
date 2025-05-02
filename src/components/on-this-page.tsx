"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { cn, generateSlug } from "@/lib/utils";

interface LinkType {
  id: string;
  text: string;
  level: "h2" | "h3";
}
const OnThisPage = ({ className }: { className: string }) => {
  const [links, setLinks] = useState<LinkType[]>();
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    // reset state when path changes
    setLinks([]);
    setActiveId(null);

    const extractHeading = () => {
      const mainContent = document.querySelector("main");

      if (!mainContent) return;
      // Keep tracks for potential duplicate headings
      const usedIds = new Set<string>();
      const headings = mainContent.querySelectorAll("h2,h3");
      const generatedLinks: LinkType[] = Array.from(headings).map(
        (heading, index) => {
          let tempId = heading.id || generateSlug(heading.textContent || "");
          if (!tempId) {
            tempId = `heading-${index}`;
          }
          // Handle potential duplicate

          let finalId = tempId;
          let counter = 1;

          while (usedIds.has(finalId)) {
            console.warn(
              `On This Page: Duplicate Id detected "${tempId}". Appending counter`
            );
            finalId = `${tempId}-${counter}`;
            counter++;
          }

          usedIds.add(finalId);
          // Set unique id on the actual heading element
          heading.id = finalId;

          const level = heading.tagName.toLowerCase() as "h2" | "h3";

          return {
            id: finalId,
            text: heading.textContent || "",
            level,
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
  }, [pathname]);

  // Don't render the component if there are no links to show
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className={cn("hidden md:block", className)}>
      <div className="sticky top-20">
        <h1 className="text-lg font-bold">On This Page</h1>
        <ul className="mt-4">
          {links?.map((link) => (
            <li
              className={cn(link.level === "h3" && "pl-3", "pt-1")}
              key={link.id}
            >
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
