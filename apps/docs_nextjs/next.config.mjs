import { withPigment } from '@stylefusion/nextjs-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPigment(nextConfig, { transformLibraries: ['@pigment-css/react'] });
