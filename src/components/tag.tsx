import Link from "next/link";
import React from "react";

import { badgeVariants } from "./ui/badge";

interface TagProps {
  tags: string[];
}
const Tag = ({ tags }: TagProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tag/${tag}`}
          className={badgeVariants({
            variant: "outline",
            className:
              "mb-2 rounded-sm bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
          })}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Tag;
