module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-raikou": {},
    "postcss-unocss-raikou": {},
    "postcss-purgecss-raikou": {
      componentNames: "./node_modules/@raikou/system/dist/component_names.txt",
      cssModules: "./node_modules/@raikou/system/dist/css_modules.txt",
      styles: "./node_modules/@raikou/system/dist/styles.css",
    },
  },
};
