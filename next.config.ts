/* eslint-disable check-file/filename-naming-convention */
import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "tsx", "ts", "js", "jsx"],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
};
const withMDX = createMDX({});
export default withMDX(nextConfig);
