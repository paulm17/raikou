/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./node_modules/@raikou/server/node_modules/@raikou/action-icon/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/anchor/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/aspect-ratio/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/badge/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/background-image/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/blockquote/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/breadcrumbs/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/button/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/center/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/close-button/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/code/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/color-swatch/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/container/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/divider/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/fieldset/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/flex/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/group/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/highlight/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/kbd/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/loader/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/mark/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/paper/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/skeleton/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/stack/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/text/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/title/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/unstyled-button/dist/*.js",
    "./node_modules/@raikou/server/node_modules/@raikou/visually-hidden/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/accordion/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/alert/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/appshell/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/avatar/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/checkbox/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/chip/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/color-picker/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/combobox/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/drawer/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/grid/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/inline-input/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/input/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/input-base/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/modal/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/modal-base/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/multi-select/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/native-select/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/notification/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/overlay/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/pagination/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/pill/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/pills-input/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/popover/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/portal/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/progress/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/rating/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/ring-progress/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/scroll-area/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/slider/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/switch/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/tabs/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/table/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/text-input/dist/*.js",
    "./node_modules/@raikou/client/node_modules/@raikou/tooltip/dist/*.js",
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
