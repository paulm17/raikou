const purgecss = require('./postcss-purgecss');

module.exports = (opts: any = {}) => {
  return {
    postcssPlugin: 'postcss-purgecss-raikou',
    plugins: [purgecss(opts)],
  };
};

module.exports.postcss = true;
