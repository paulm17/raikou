import { css } from "@stylefusion/react";

export const AffixRootStyle = css({
  position: "fixed",
  zIndex: "var(--affix-z-index)",
  insetInlineStart: "var(--affix-left)",
  insetInlineEnd: "var(--affix-right)",
  top: "var(--affix-top)",
  bottom: "var(--affix-bottom)",
});