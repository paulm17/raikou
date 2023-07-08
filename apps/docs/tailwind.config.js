/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/raikou-core/src/**/*.tsx"],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou-core/src/plugin")],
  plugins: [],
};
