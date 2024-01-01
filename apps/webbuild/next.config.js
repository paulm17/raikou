const UnoCSS = require("@raikou/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, context) {
    config.plugins.push(new UnoCSS());

    if (context.buildId !== "development") {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
