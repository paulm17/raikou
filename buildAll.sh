# build core, system, hooks
pnpm --filter="@raikou/hooks" run build
pnpm --filter="@raikou/core" run build
pnpm --filter="@raikou/system" run build
pnpm --filter="@raikou/store" run build

# build rest
pnpm --filter="@raikou/carousel" run build
pnpm --filter="@raikou/charts" run build
pnpm --filter="@raikou/code-highlight" run build
pnpm --filter="@raikou/colors-generator" run build
pnpm --filter="@raikou/dates" run build
pnpm --filter="@raikou/dropzone" run build
pnpm --filter="@raikou/emotion" run build
pnpm --filter="@raikou/modals" run build
pnpm --filter="@raikou/notifications" run build
pnpm --filter="@raikou/nprogress" run build
pnpm --filter="@raikou/spotlight" run build
pnpm --filter="@raikou/theme" run build
pnpm --filter="@raikou/tiptap" run build

# build custom
# pnpm --filter="@raikou/contextmenu" run build
# pnpm --filter="@raikou/datatable" run build