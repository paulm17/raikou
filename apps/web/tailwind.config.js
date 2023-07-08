/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@raikou/core/dist/*", "./app/**/*.tsx"],
  theme: {
    extend: {},
  },
  presets: [require("./node_modules/@raikou/core/dist/plugin")],
  plugins: [],
};
