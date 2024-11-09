import { css } from "@stylefusion/react";

export const UnstyledButtonRootStyle = css(({ theme }) => ({
  backgroundColor: "transparent",
  cursor: "pointer",
  border: 0,
  padding: 0,
  appearance: "none",
  fontSize: "var(--raikou-font-size-md)",
  textAlign: "left",
  textDecoration: "none",
  color: "inherit",
  touchAction: "manipulation",
  webkitTapHighlightColor: "transparent",

  ...theme.applyMixin("where-rtl", {
    textAlign: "right",
  }),
}));
