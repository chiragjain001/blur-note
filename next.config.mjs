/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
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
