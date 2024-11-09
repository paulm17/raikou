import { css } from "@stylefusion/react";

export const dataTableEmptyStateStyle = css({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  flexDirection: "column",
  pointerEvents: "none",
  color: "var(--raikou-color-gray-6)",
  opacity: 0,
  transition: "opacity 0.2s",
  "&[data-active]": {
    opacity: 1,
  },
});

export const dataTableEmptyStateIconStyle = css(({ theme }) => ({
  fontSize: 0,
  borderRadius: "50%",
  padding: "var(--raikou-spacing-xs)",
  marginBottom: "calc(var(--raikou-spacing-xs) / 2)",

  ...theme.applyStyles("light", {
    background: theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    background: theme.colors.dark[2],
  }),
}));
