module.exports = {
  map: { inline: false },
  plugins: [
    require("postcss-import"),
    require("postcss-preset-raikou"),
    // require("cssnano"),
  ],
};
