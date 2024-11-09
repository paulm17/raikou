import { css } from "@stylefusion/react";

export const AnchorRootStyle = css(({ theme }) => ({
  color: "var(--raikou-color-anchor)",
  textDecoration: "none",
  appearance: "none",
  border: "none",
  display: "inline",
  padding: 0,
  margin: 0,
  backgroundColor: "transparent",
  cursor: "pointer",

  // leave this as is...
  ...theme.applyMixin("hover", {
    "&:hover:_where([data-underline='hover'])": {
      textDecoration: "underline",
    },
  }),

  "&:_where([data-underline='always'])": {
    textDecoration: "underline",
  },

  "&:_where([data-variant='gradient'])": {
    "&, &:hover": {
      textDecoration: "none",
    },
  },

  "&:_where([data-line-clamp])": {
    display: "-webkit-box",
  },
}));
