/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "../../packages/raikou/components/**/*.tsx",
    "../../packages/raikou/{carousel,code-highlight,dates,dropzone,modals,notifications,nprogress,spotlight,tiptap}/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  presets: [require("../../packages/raikou/system/src/plugin")],
  plugins: [],
};
