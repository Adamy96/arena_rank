import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "ddragon.leagueoflegends.com",
      "dpm.lol",
      "cdn.communitydragon.org",
    ],
  },
};

export default nextConfig;
