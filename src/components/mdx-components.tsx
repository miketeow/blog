import { ComponentPropsWithoutRef } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

function Code({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  const codeHTML = highlight(children as string);
  return (
    <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props}></code>
  );
}

const components = {
  code: Code,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return <MDXRemote {...props} components={components} />;
}
