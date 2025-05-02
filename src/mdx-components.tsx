import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { StyledCode } from "./components/styled-code";
import { StyledPre } from "./components/styled-pre";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type H1Props = ComponentPropsWithoutRef<"h1">;
type H2Props = ComponentPropsWithoutRef<"h2">;
type H3Props = ComponentPropsWithoutRef<"h3">;
type UnorderListProps = ComponentPropsWithoutRef<"ul">;
type OrderListProps = ComponentPropsWithoutRef<"ol">;
type ListProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
const components = {
  // Paragraphs
  p: ({ children, ...props }: ParagraphProps) => (
    <p
      className="text-foreground mb-6 font-sans text-base leading-7"
      {...props}
    >
      {children}
    </p>
  ),

  // Headings
  h1: ({ children, ...props }: H1Props) => (
    <h1 className="title" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: H2Props) => (
    <h2
      className="mt-10 mb-5 font-mono text-3xl leading-tight font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: H3Props) => (
    <h3
      className="mt-8 mb-4 font-mono text-2xl leading-snug font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </h3>
  ),
  code: StyledCode,
  pre: StyledPre,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = `text-link hover:font-extrabold transition-colors duration-200 font-bold`;
    if (href?.startsWith("../")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  // Optional: Lists
  ul: ({ children, ...props }: UnorderListProps) => (
    <ul className="text-foreground mb-6 list-disc pl-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: OrderListProps) => (
    <ol className="text-foreground mb-6 list-decimal pl-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ListProps) => (
    <li className="mb-2 font-sans" {...props}>
      {children}
    </li>
  ),

  // Optional: Blockquote
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="mb-6 border-l-4 border-gray-300 pl-4 text-gray-600 italic dark:border-gray-600 dark:text-gray-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}
export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
