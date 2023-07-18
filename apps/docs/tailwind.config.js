/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["../../packages/raikou/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou/system/src/plugin")],
  plugins: [],
};
