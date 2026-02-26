/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  transpilePackages: ['@mui/material', '@mui/icons-material'],
}

module.exports = nextConfig
