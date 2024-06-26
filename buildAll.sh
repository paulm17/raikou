# build core, system, hooks
pnpm --filter="@raikou/core" run build
pnpm --filter="@raikou/system" run build
pnpm --filter="@raikou/hooks" run build

# build server
pnpm --filter="@raikou/action-icon" run build
pnpm --filter="@raikou/alert" run build
pnpm --filter="@raikou/anchor" run build
pnpm --filter="@raikou/appshell" run build
pnpm --filter="@raikou/aspect-ratio" run build
pnpm --filter="@raikou/background-image" run build
pnpm --filter="@raikou/badge" run build
pnpm --filter="@raikou/blockquote" run build
pnpm --filter="@raikou/box" run build
pnpm --filter="@raikou/breadcrumbs" run build
pnpm --filter="@raikou/button" run build
pnpm --filter="@raikou/card" run build
pnpm --filter="@raikou/center" run build
pnpm --filter="@raikou/close-button" run build
pnpm --filter="@raikou/code" run build
pnpm --filter="@raikou/color-swatch" run build
pnpm --filter="@raikou/container" run build
pnpm --filter="@raikou/divider" run build
pnpm --filter="@raikou/fieldset" run build
pnpm --filter="@raikou/flex" run build
pnpm --filter="@raikou/grid" run build
pnpm --filter="@raikou/group" run build
pnpm --filter="@raikou/highlight" run build
pnpm --filter="@raikou/image" run build
pnpm --filter="@raikou/indicator" run build
pnpm --filter="@raikou/kbd" run build
pnpm --filter="@raikou/list" run build
pnpm --filter="@raikou/loader" run build
pnpm --filter="@raikou/mark" run build
pnpm --filter="@raikou/notification" run build
pnpm --filter="@raikou/paper" run build
pnpm --filter="@raikou/skeleton" run build
pnpm --filter="@raikou/simple-grid" run build
pnpm --filter="@raikou/space" run build
pnpm --filter="@raikou/stack" run build
pnpm --filter="@raikou/table" run build
pnpm --filter="@raikou/text" run build
pnpm --filter="@raikou/timeline" run build
pnpm --filter="@raikou/title" run build
pnpm --filter="@raikou/theme-icon" run build
pnpm --filter="@raikou/unstyled-button" run build
pnpm --filter="@raikou/visually-hidden" run build
pnpm --filter="@raikou/server" run build

# build client
pnpm --filter="@raikou/accordion" run build
pnpm --filter="@raikou/affix" run build
pnpm --filter="@raikou/autocomplete" run build
pnpm --filter="@raikou/avatar" run build
pnpm --filter="@raikou/burger" run build
pnpm --filter="@raikou/checkbox" run build
pnpm --filter="@raikou/chip" run build
pnpm --filter="@raikou/collapse" run build
pnpm --filter="@raikou/color-input" run build
pnpm --filter="@raikou/color-picker" run build
pnpm --filter="@raikou/combobox" run build
pnpm --filter="@raikou/copy-button" run build
pnpm --filter="@raikou/dialog" run build
pnpm --filter="@raikou/drawer" run build
pnpm --filter="@raikou/floating" run build
pnpm --filter="@raikou/floating-indicator" run build
pnpm --filter="@raikou/filebutton" run build
pnpm --filter="@raikou/fileinput" run build
pnpm --filter="@raikou/focus-trap" run build
pnpm --filter="@raikou/hover-card" run build
pnpm --filter="@raikou/inline-input" run build
pnpm --filter="@raikou/input" run build
pnpm --filter="@raikou/input-base" run build
pnpm --filter="@raikou/input-group-fieldset" run build
pnpm --filter="@raikou/json-input" run build
pnpm --filter="@raikou/loading-overlay" run build
pnpm --filter="@raikou/menu" run build
pnpm --filter="@raikou/modal" run build
pnpm --filter="@raikou/modal-base" run build
pnpm --filter="@raikou/multi-select" run build
pnpm --filter="@raikou/native-select" run build
pnpm --filter="@raikou/navlink" run build
pnpm --filter="@raikou/notifications" run build
pnpm --filter="@raikou/number-input" run build
pnpm --filter="@raikou/number-formatter" run build
pnpm --filter="@raikou/overlay" run build
pnpm --filter="@raikou/pagination" run build
pnpm --filter="@raikou/password-input" run build
pnpm --filter="@raikou/pill" run build
pnpm --filter="@raikou/pills-input" run build
pnpm --filter="@raikou/pin-input" run build
pnpm --filter="@raikou/popover" run build
pnpm --filter="@raikou/portal" run build
pnpm --filter="@raikou/progress" run build
pnpm --filter="@raikou/radio" run build
pnpm --filter="@raikou/rating" run build
pnpm --filter="@raikou/ring-progress" run build
pnpm --filter="@raikou/segmented-control" run build
pnpm --filter="@raikou/select" run build
pnpm --filter="@raikou/scroll-area" run build
pnpm --filter="@raikou/slider" run build
pnpm --filter="@raikou/spoiler" run build
pnpm --filter="@raikou/spotlight" run build
pnpm --filter="@raikou/stepper" run build
pnpm --filter="@raikou/switch" run build
pnpm --filter="@raikou/tabs" run build
pnpm --filter="@raikou/tags-input" run build
pnpm --filter="@raikou/textarea" run build
pnpm --filter="@raikou/text-input" run build
pnpm --filter="@raikou/tooltip" run build
pnpm --filter="@raikou/transition" run build
pnpm --filter="@raikou/tree" run build
pnpm --filter="@raikou/typography-styles-provider" run build
pnpm --filter="@raikou/client" run build

# build other
pnpm --filter="@raikou/carousel" run build
pnpm --filter="@raikou/code-highlight" run build
pnpm --filter="@raikou/color-scheme" run build
pnpm --filter="@raikou/contextmenu" run build
pnpm --filter="@raikou/datatable" run build
pnpm --filter="@raikou/dates" run build
pnpm --filter="@raikou/direction" run build
pnpm --filter="@raikou/dropzone" run build
pnpm --filter="@raikou/form" run build
pnpm --filter="@raikou/modals" run build
pnpm --filter="@raikou/notifications" run build
pnpm --filter="@raikou/nprogress" run build
pnpm --filter="@raikou/spotlight" run build
pnpm --filter="@raikou/theme" run build
pnpm --filter="@raikou/tiptap" run build

# build postcss
pnpm --filter="postcss-preset-raikou" run build
pnpm --filter="postcss-purgecss-raikou" run build
pnpm --filter="postcss-unocss-raikou" run build