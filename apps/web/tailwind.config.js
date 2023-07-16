/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@raikou/server/node_modules/@raikou/action-icon/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/alert/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/anchor/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/aspect-ratio/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/badge/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/background-image/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/blockquote/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/breadcrumbs/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/button/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/center/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/close-button/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/code/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/color-swatch/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/container/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/divider/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/fieldset/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/flex/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/group/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/highlight/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/kbd/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/loader/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/mark/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/paper/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/stack/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/text/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/title/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/unstyled-button/dist/*",
    "./node_modules/@raikou/server/node_modules/@raikou/visually-hidden/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/avatar/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/checkbox/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/color-picker/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/combobox/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/drawer/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/input/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/input-base/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/modal/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/modal-base/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/native-select/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/popover/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/portal/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/scroll-area/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/slider/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/switch/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/tabs/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/table/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/text-input/dist/*",
    "./node_modules/@raikou/client/node_modules/@raikou/tooltip/dist/*",
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {
      custom: {
        scale: 1,
      },
    },
  },
  presets: [require("./node_modules/@raikou/system/dist/plugin")],
  plugins: [],
};
