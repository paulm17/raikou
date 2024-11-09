import { css } from "@stylefusion/react";

export const ChartLegendStyle = css({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",

  "&:_where([data-centered])": {
    justifyContent: "center",
  },

  '&:_where([data-position="top"])': {
    paddingBottom: "var(--raikou-spacing-md)",
  },

  '&:_where([data-position="bottom"])': {
    paddingTop: "var(--raikou-spacing-md)",
  },
});

export const ChartLegendItemColorStyle = css({});

export const ChartLegendItemStyle = css(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "7px",
  padding: "7px var(--raikou-spacing-xs)",
  borderRadius: "var(--raikou-radius-default)",
  lineHeight: 1,

  ...theme.applyMixin("hover", {
    "&:hover": {
      ...theme.applyStyles("light", {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: theme.colors.dark[5],
      }),
    },
  }),

  [`&[data-without-color] ${ChartLegendItemColorStyle}`]: {
    display: "none",
  },
}));

export const ChartLegendItemNameStyle = css({
  fontSize: "var(--raikou-font-size-sm)",
  margin: 0,
  padding: 0,
});
