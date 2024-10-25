import { css } from "@stylefusion/react";

export const SpoilerRootStyle = css({
  position: "relative",

  "&:_where([data-has-spoiler])": {
    marginBottom: "24px",
  },
});

export const SpoilerContentStyle = css({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: "max-height var(--spoiler-transition-duration, 200ms) ease",
});

export const SpoilerControlStyle = css({
  position: "absolute",
  insetInlineStart: 0,
  top: "100%",
  height: "24px",
});
