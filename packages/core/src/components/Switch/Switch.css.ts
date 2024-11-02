import { css } from "@stylefusion/react";

export const SwitchRootStyle = css({
  "--switch-height-xs": "16px",
  "--switch-height-sm": "20px",
  "--switch-height-md": "24px",
  "--switch-height-lg": "30px",
  "--switch-height-xl": "36px",

  "--switch-width-xs": "32px",
  "--switch-width-sm": "38px",
  "--switch-width-md": "46px",
  "--switch-width-lg": "56px",
  "--switch-width-xl": "72px",

  "--switch-thumb-size-xs": "12px",
  "--switch-thumb-size-sm": "14px",
  "--switch-thumb-size-md": "18px",
  "--switch-thumb-size-lg": "22px",
  "--switch-thumb-size-xl": "28px",

  "--switch-label-font-size-xs": "5px",
  "--switch-label-font-size-sm": "6px",
  "--switch-label-font-size-md": "7px",
  "--switch-label-font-size-lg": "9px",
  "--switch-label-font-size-xl": "11px",

  "--switch-track-label-padding-xs": "1px",
  "--switch-track-label-padding-sm": "2px",
  "--switch-track-label-padding-md": "2px",
  "--switch-track-label-padding-lg": "3px",
  "--switch-track-label-padding-xl": "3px",

  "--switch-height": "var(--switch-height-sm)",
  "--switch-width": "var(--switch-width-sm)",
  "--switch-thumb-size": "var(--switch-thumb-size-sm)",
  "--switch-label-font-size": "var(--switch-label-font-size-sm)",
  "--switch-track-label-padding": "var(--switch-track-label-padding-sm)",
  "--switch-radius": "1000px",
  "--switch-color": "var(--raikou-primary-color-filled)",

  position: "relative",
});

export const SwitchInputStyle = css({
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  padding: 0,
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const SwitchTrackStyle = css(({ theme }) => ({
  webkitTapHighlightColor: "transparent",
  cursor: "var(--switch-cursor, var(--raikou-cursor-type))",
  overflow: "hidden",
  position: "relative",
  borderRadius: "var(--switch-radius)",
  backgroundColor: "var(--switch-bg)",
  border: "1px solid var(--switch-bd)",
  height: "var(--switch-height)",
  minWidth: "var(--switch-width)",
  margin: 0,
  transition: "background-color 150ms ease, border-color 150ms ease",
  appearance: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "var(--switch-label-font-size)",
  fontWeight: "600",
  order: "var(--switch-order, 1)",
  userSelect: "none",
  zIndex: 0,
  lineHeight: 0,
  color: "var(--switch-text-color)",

  "&:_where([data-without-labels])": {
    width: "var(--switch-width)",
  },

  [`.${SwitchInputStyle}:focus-visible + &`]: {
    outline: "2px solid var(--raikou-primary-color-filled)",
    outlineOffset: "2px",
  },

  [`.${SwitchInputStyle}:checked + &`]: {
    "--switch-bg": "var(--switch-color)",
    "--switch-bd": "var(--switch-color)",
    "--switch-text-color": "var(--raikou-color-white)",
  },

  [`.${SwitchInputStyle}:disabled + &, .${SwitchInputStyle}[data-disabled] + &`]:
    {
      "--switch-bg": "var(--switch-disabled-color)",
      "--switch-bd": "var(--switch-disabled-color)",
      "--switch-cursor": "not-allowed",
    },

  ...theme.applyStyles("light", {
    "--switch-bg": theme.colors.gray[2],
    "--switch-bd": theme.colors.gray[3],
    "--switch-text-color": theme.colors.gray[6],
    "--switch-disabled-color": theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    "--switch-bg": theme.colors.dark[6],
    "--switch-bd": theme.colors.dark[4],
    "--switch-text-color": theme.colors.dark[1],
    "--switch-disabled-color": theme.colors.dark[4],
  }),

  "&[data-error]": {
    "--switch-bd": "var(--raikou-color-error)",
  },

  "&[data-label-position='left']": {
    "--switch-order": 2,
  },
}));

export const SwitchThumbStyle = css(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  borderRadius: "var(--switch-radius)",
  display: "flex",
  backgroundColor: "var(--switch-thumb-bg, var(--raikou-color-white))",
  height: "var(--switch-thumb-size)",
  width: "var(--switch-thumb-size)",
  border: "1px solid var(--switch-thumb-bd)",
  insetInlineStart:
    "var(--switch-thumb-start, var(--switch-track-label-padding))",
  transition: "inset-inline-start 150ms ease",

  "& > *": {
    margin: "auto",
  },

  [`.${SwitchInputStyle}:checked + * > &`]: {
    "--switch-thumb-start":
      "calc(100% - var(--switch-thumb-size) - var(--switch-track-label-padding))",
    "--switch-thumb-bd": "var(--raikou-color-white)",
  },

  [`.${SwitchInputStyle}:disabled + * > &, .${SwitchInputStyle}[data-disabled] + * > &`]:
    {
      "--switch-thumb-bd": "var(--switch-thumb-bg-disabled)",
      "--switch-thumb-bg": "var(--switch-thumb-bg-disabled)",
    },

  ...theme.applyStyles("light", {
    "--switch-thumb-bd": theme.colors.gray[3],
    "--switch-thumb-bg-disabled": theme.colors.gray[0],
  }),

  ...theme.applyStyles("dark", {
    "--switch-thumb-bd": theme.colors.dark[4],
    "--switch-thumb-bg-disabled": theme.colors.dark[3],
  }),
}));

export const SwitchTrackLabelStyle = css({
  height: "100%",
  display: "grid",
  placeContent: "center",
  minWidth: "calc(var(--switch-width) - var(--switch-thumb-size))",
  paddingInline: "var(--switch-track-label-padding)",
  marginInlineStart:
    "calc(var(--switch-thumb-size) + var(--switch-track-label-padding))",
  transition: "margin 150ms ease",

  [`.${SwitchInputStyle}:checked + * > &`]: {
    marginInlineEnd:
      "calc(var(--switch-thumb-size) + var(--switch-track-label-padding))",
    marginInlineStart: 0,
  },
});
