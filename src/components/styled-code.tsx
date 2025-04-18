import React from "react";

import { highlight } from "sugar-high";

type StyledCodeProps = React.HTMLAttributes<HTMLElement>;
const StyledCode = React.forwardRef<HTMLElement, StyledCodeProps>(
  ({ children, className, ...props }, ref) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        ref={ref}
        className={className}
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  }
);

StyledCode.displayName = "StyledCode";

export { StyledCode };
