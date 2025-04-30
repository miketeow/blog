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
      className="text-foreground mb-6 justify-evenly text-justify font-sans text-base leading-7"
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
      className="mt-10 mb-5 font-sans text-3xl leading-tight font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: H3Props) => (
    <h3
      className="mt-8 mb-4 font-sans text-2xl leading-snug font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </h3>
  ),
  code: StyledCode,
  pre: StyledPre,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = `text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-sans`;
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

  // Table Components
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <table
      className="mb-6 w-full border-collapse text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </table>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-gray-200 dark:border-gray-700" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-2" {...props}>
      {children}
    </td>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}
export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
