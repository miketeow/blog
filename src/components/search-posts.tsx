"use client";

import React, { useState } from "react";

import { X } from "lucide-react";

import { PostMetadata } from "@/lib/posts";

import Posts from "./posts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchPosts = ({
  posts,
  directory,
}: {
  posts: PostMetadata[];
  directory: string;
}) => {
  const [query, setQuery] = useState("");
  const filtered = posts.filter((post) =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  );

  const isFiltered = query.length > 0;
  function resetFilter() {
    setQuery("");
  }
  return (
    <div>
      <div className="mb-12 flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 w-full sm:w-1/2"
        />
        {isFiltered && (
          <Button
            size="sm"
            variant="secondary"
            onClick={resetFilter}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 size-4" />
          </Button>
        )}
      </div>
      <Posts directory={directory} posts={filtered} />
    </div>
  );
};

export default SearchPosts;
