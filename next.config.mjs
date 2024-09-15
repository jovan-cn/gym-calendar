import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin(
    './app/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV !== "production" ? false : true,
  },
};

export default withNextIntl(nextConfig);
