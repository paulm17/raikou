module.exports = {
  plugins: {
    "postcss-preset-raikou": {},
    "unocss-postcss": {
      purgeStyles: {
        file: "./node_modules/@raikou/system/dist/component_names.txt",
      },
    },
  },
};
