/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "../../packages/raikou/components/**/*.tsx",
    "../../packages/raikou/{carousel,dates,dropzone,notifications,nprogress,spotlight}/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou/system/src/plugin")],
  plugins: [],
};
