const unocss = require('./postcss-unocss');

module.exports = (opts: any = {}) => {
  return {
    postcssPlugin: 'postcss-unocss-raikou',
    plugins: [unocss(opts)],
  };
};

module.exports.postcss = true;
