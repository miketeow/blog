import Link from "next/link";
import React from "react";

import { badgeVariants } from "./ui/badge";

interface TagProps {
  tags: string[];
}
const Tag = ({ tags }: TagProps) => {
  if (!tags || tags.length == 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tag/${tag}`}
          className={badgeVariants({
            variant: "tag",
          })}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Tag;
