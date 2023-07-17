/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/raikou/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou/system/src/plugin")],
  plugins: [],
};
