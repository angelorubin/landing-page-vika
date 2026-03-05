/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
    ],
  },
  transpilePackages: ["@mui/material", "@mui/icons-material"],
};

module.exports = nextConfig;
