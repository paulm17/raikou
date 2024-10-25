import { css } from "@stylefusion/react";

export const BreadcrumbsRootStyle = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
})

export const BreadcrumbsBreadcrumbStyle = css({
  lineHeight: 1,
  whiteSpace: "nowrap",
  WebkitTapHighlightColor: "transparent",
})

export const BreadcrumbsSeparatorStyle = css(({ theme }: any) => ({
  marginInline: "var(--bc-separator-margin, var(--raikou-spacing-xs))",
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ...theme.applyStyles('light', {
    color: theme.colors.gray[7],
  }),
  ...theme.applyStyles('dark', {
    color: theme.colors.dark[2],
  }),
}))