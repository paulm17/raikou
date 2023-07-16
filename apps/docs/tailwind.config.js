/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../components/**/src/**/*.tsx"],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou-system/src/plugin")],
  plugins: [],
};
