"use client";

import React, { useEffect, useState } from "react";

import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface CodeBlock {
  src: string;
  language: string;
  filename: string;
}

const CodeBlock = ({ src, language, filename }: CodeBlock) => {
  const { theme, systemTheme } = useTheme();
  const [code, setCode] = useState("");
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme =
      currentTheme === "dark" ? "solarized-dark" : "solarized-light";
    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const highlightedCode = await codeToHtml(src, {
          lang: language,
          theme: selectedTheme,
        });

        setCode(highlightedCode);
      } catch (error) {
        console.error("Error highlighting code: ", error);
        setCode(`<pre>${src}</pre>`);
      }
    }
    highlightCode();
  }, [theme, systemTheme, src, language]);

  const renderCode = (rawCode: string, highlightedCode: string) => {
    if (highlightedCode) {
      return (
        <div
          className="bg-background h-full overflow-auto rounded-b-md font-mono [&_code]:break-all [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      );
    } else {
      return (
        <pre className="bg-background text-foreground h-full overflow-auto p-4 font-mono text-xs break-all">
          {rawCode}
        </pre>
      );
    }
  };

  return (
    <div className="mx-auto mt-4 w-full max-w-5xl">
      <div className="border-border relative w-full overflow-hidden rounded-md border">
        <div>
          <div className="bg-accent text-foreground flex items-center p-2 text-sm">
            <FileIcon className="mr-2 h-4 w-4" />
            {filename}
          </div>
          {renderCode(src, code)}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
