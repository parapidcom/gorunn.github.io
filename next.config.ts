// next.config.ts
import type { NextConfig } from "next";
import devConfig from "./next.config.dev";
import prodConfig from "./next.config.prod";

// Default to development configuration
const config: NextConfig =
  process.env.GITHUB_ACTIONS === "true" ? prodConfig : devConfig;

export default config;
