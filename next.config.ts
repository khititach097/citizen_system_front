import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    "rc-util",
    "antd",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-input",
    "rc-notification",
    "rc-tooltip",
    "rc-table",
    "rc-tree",
    "@arv-bedrock/auth-sso"
  ],
  images: {
    domains: ['images.unsplash.com'],
  },

};

export default nextConfig;
