const nested = require('postcss-nested');
const reset = require('./postcss-reset');

module.exports = (opts: any = {}) => {
  return {
    postcssPlugin: 'postcss-removecss-raikou',
    plugins: [nested(), reset(opts)],
  };
};

module.exports.postcss = true;
