/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "../../packages/raikou/components/**/*.tsx",
    "../../packages/raikou/{notifications,spotlight}/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou/system/src/plugin")],
  plugins: [],
};
