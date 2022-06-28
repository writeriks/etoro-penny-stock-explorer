/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_FPM_API_KEY: '8c702d881d4e0f46482e04e1513f3fe4',
  },
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
