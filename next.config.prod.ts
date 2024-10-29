// next.config.prod.ts
import type { NextConfig } from "next";

const prodConfig: NextConfig = {
  // Your existing GitHub Pages configuration
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default prodConfig;
