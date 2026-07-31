import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/HVACGUYZ-DEMO",
        assetPrefix: "/HVACGUYZ-DEMO",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
