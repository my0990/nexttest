/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
    },
    webpack: (config, {isServer}) => {

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
}

module.exports = nextConfig
