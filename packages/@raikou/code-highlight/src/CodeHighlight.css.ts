import { css } from "@stylefusion/react";

export const CodeHighlightCodeStyle = css({
  display: "inline-block",
  padding: "1px 3px",
  fontSize: "13px",
  borderRadius: "var(--raikou-radius-xs)",
  lineHeight: "var(--code-line-height, var(--raikou-line-height))",
  fontFamily: "var(--raikou-font-family-monospace)",
});

export const CodeHighlightPreStyle = css({
  "--code-line-height": "1.7",

  display: "block",
  padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
  margin: 0,
});

export const CodeHighlightHeaderStyle = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const CodeHighlightControlsStyle = css({
  display: "flex",
  marginTop: "7px",
  marginInlineEnd: "7px",
});

export const CodeHighlightCopyStyle = css(({ theme }) => ({
  backgroundColor: "transparent",
  opacity: 0.8,
  margin: 0,
  color: "var(--raikou-color-dimmed)",
  position: "absolute",
  top: "5px",
  insetInlineEnd: "5px",
  zIndex: 1,

  ...theme.applyMixin("hover", {
    opacity: 1,
    backgroundColor: "transparent",
    color: "var(--raikou-color-dimmed)",
  }),

  // ...theme.applyMixin("(max-width: 40em)", {
  //   display: "none",
  // }),
}));

export const CodeHighlightControlStyle = css(({ theme }) => ({
  backgroundColor: "transparent",
  opacity: 0.8,
  margin: 0,
  color: "var(--raikou-color-dimmed)",

  ...theme.applyMixin("hover", {
    opacity: 1,
    backgroundColor: "transparent",
    color: "var(--raikou-color-dimmed)",
  }),

  // ...theme.applyMixin("(max-width: 40em)", {
  //   display: "none",
  // }),
}));

export const CodeHighlightFileStyle = css(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "var(--raikou-font-size-xs)",
  gap: "7px",
  padding: "7px 12px",
  fontFamily: "var(--raikou-font-family-monospace)",
  fontWeight: 700,
  lineHeight: 1,
  userSelect: "none",
  cursor: "pointer",
  opacity: 0.8,
  border: "1px solid",
  borderTop: 0,
  borderInlineStart: 0,
  whiteSpace: "nowrap",
  margin: 0,

  ...theme.applyMixin("hover", {
    opacity: 1,
  }),

  "&:where(:last-of-type)": {
    borderEndEndRadius: "var(--raikou-radius-sm)",
  },

  "&:where(:only-child)": {
    cursor: "default",
  },

  "&:where([data-active])": {
    opacity: 1,

    ...theme.applyStyles("light", {
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
    }),

    ...theme.applyStyles("dark", {
      backgroundColor: theme.colors.dark[6],
      color: theme.colors.white,
    }),
  },

  ...theme.applyStyles("light", {
    color: theme.colors.gray[8],
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    color: theme.colors.dark[0],
    borderColor: theme.colors.dark[4],
  }),
}));

export const CodeHighlightFilesStyle = css({
  display: "flex",
});

export const CodeHighlightCodeWrapperStyle = css({
  maxHeight: "var(--ch-max-collapsed-height)",
  overflow: "hidden",
  position: "relative",

  "&:before": {
    content: "''",
    zIndex: 100,
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(0deg, var(--code-background) 16%, rgba(0, 0, 0, 0) 100%)",
    borderRadius: "calc(var(--raikou-radius-md) - 1px)",
  },

  "&:where([data-expanded])": {
    maxHeight: "none",

    "&::before": {
      display: "none",
    },
  },
});

export const CodeHighlightShowCodeButtonStyle = css({
  position: "absolute",
  bottom: 0,
  insetInlineStart: "50%",
  transform: "translateX(-50%)",
  fontSize: "var(--raikou-font-size-sm)",
  color: "var(--raikou-color-anchor)",
  width: "100%",
  textAlign: "center",
  zIndex: 101,
  paddingTop: "var(--raikou-spacing-xs)",
  paddingBottom: "var(--raikou-spacing-xs)",

  "&[data-hidden]": {
    display: "none",
  },
});

export const CodeHighlightRootStyle = css({
  marginTop: 0,
  position: "relative",

  "&:where([data-collapsed]) :global(.raikou-ScrollArea-viewport > div)": {
    display: "block !important",
  },
});

export const CodeHighlightFileIconStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 0,

  "& > svg": {
    display: "block",
  },
});
