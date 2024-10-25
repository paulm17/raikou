import { css } from "@stylefusion/react";

export const RatingRootStyle = css({
  "--rating-size-xs": "14px",
  "--rating-size-sm": "18px",
  "--rating-size-md": "20px",
  "--rating-size-lg": "28px",
  "--rating-size-xl": "32px",

  display: "flex",
  width: "max-content",

  "&:_where(:has(input:disabled))": {
    pointerEvents: "none",
  },
});

export const RatingSymbolGroupStyle = css({
  position: "relative",
  transition: "transform 100ms ease",

  "&:_where([data-active])": {
    zIndex: "1",
    transform: "scale(1.1)",
  },
});

export const RatingStarSymbolStyle = css(({ theme }: any) => ({
  width: "var(--rating-size)",
  height: "var(--rating-size)",
  display: "block",

  ...theme.applyStyles("light", {
    fill: theme.vars.colors.gray[3],
    stroke: theme.vars.colors.gray[3],
  }),

  ...theme.applyStyles("dark", {
    fill: theme.vars.colors.dark[3],
    stroke: theme.vars.colors.dark[3],
  }),

  "&:_where([data-filled])": {
    fill: "var(--rating-color)",
    stroke: "var(--rating-color)",
  },
}));

export const RatingInputStyle = css({
  height: 0,
  width: 0,
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
  opacity: 0,
  WebkitTapHighlightColor: "transparent",

  "&:focus-visible + label": {
    outline: "2px solid var(--raikou-primary-color-filled)",
    outlineOffset: "2px",
  },
});

export const RatingLabelStyle = css({
  display: "block",
  cursor: "pointer",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0,
  WebkitTapHighlightColor: "transparent",

  "&:_where([data-read-only])": {
    cursor: "default",
  },

  "&:_where(:last-of-type)": {
    position: "relative",
  },
});

export const RatingSymbolBodyStyle = css({
  clipPath: "var(--rating-symbol-clip-path)",
});
