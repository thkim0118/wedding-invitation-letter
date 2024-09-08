/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === 'production' ? 'https://thkim0118.github.io/wedding-invitation-letter/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
};

export default nextConfig;
