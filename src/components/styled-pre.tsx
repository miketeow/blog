import React from "react";

import { cn } from "@/lib/utils";

type StyledPreProps = React.HTMLAttributes<HTMLPreElement>;
const StyledPre = React.forwardRef<HTMLPreElement, StyledPreProps>(
  ({ className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "bg-muted text-muted-foreground mb-6 rounded-md border p-4 pr-7 font-mono text-sm whitespace-pre-wrap",
          className
        )}
        {...props}
      />
    );
  }
);

StyledPre.displayName = "StyledPre";

export { StyledPre };
