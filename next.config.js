/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com"],
  },
  swcMinify: true,
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl",
  },
};

module.exports = nextConfig;
