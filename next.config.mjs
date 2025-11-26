/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      resolveAlias: {},
      loaders: {
        sourceMaps: false,
      },
    },
  },
  productionBrowserSourceMaps: false,
}

export default nextConfig
