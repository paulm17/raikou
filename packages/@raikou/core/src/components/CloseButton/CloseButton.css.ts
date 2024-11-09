import { css } from "@stylefusion/react";

export const CloseButtonRootStyle = css(({ theme }) => ({
  "--cb-size-xs": "18px",
  "--cb-size-sm": "22px",
  "--cb-size-md": "28px",
  "--cb-size-lg": "34px",
  "--cb-size-xl": "44px",

  "--cb-size": "var(--cb-size-md)",
  "--cb-icon-size": "70%",
  "--cb-radius": "var(--raikou-radius-default)",

  lineHeight: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  userSelect: "none",

  width: "var(--cb-size)",
  height: "var(--cb-size)",
  minWidth: "var(--cb-size)",
  minHeight: "var(--cb-size)",
  borderRadius: "var(--cb-radius)",

  ...theme.applyStyles("light", {
    color: theme.colors.gray[7],
  }),

  ...theme.applyStyles("dark", {
    color: theme.colors.dark[1],
  }),

  "&[data-disabled], &:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  ...theme.applyMixin("hover", {
    "&[data-variant='subtle']:hover:_where(:not([data-disabled], :disabled))": {
      ...theme.applyStyles("light", {
        backgroundColor: theme.colors.gray[0],
      }),

      ...theme.applyStyles("dark", {
        backgroundColor: theme.colors.dark[6],
      }),
    },
  }),
}));
