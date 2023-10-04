/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/raikou/components/**/*.tsx",
    "../../packages/raikou/{carousel,code-highlight,data-table,dates,dropzone,modals,notifications,nprogress,spotlight,tiptap}/**/*.tsx",
  ],
  presets: [require("@raikou/system/plugin.js")],
};
