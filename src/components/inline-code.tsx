import React from "react";

import { cn } from "@/lib/utils";

interface InlineCodeProps {
  code: string;
  className?: string;
}
const InlineCode = ({ code, className }: InlineCodeProps) => {
  return <code className={cn("text-code font-mono", className)}>{code}</code>;
};

export default InlineCode;
