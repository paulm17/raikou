import { css } from "@stylefusion/react";

export const dataTableHeaderCellFilterActionIconStyle = css(({ theme }) => ({
  border: 0,
  ...theme.applyStyles("light", {
    color: theme.colors.gray[5],
  }),
  ...theme.applyStyles("dark", {
    color: theme.colors.dark[3],
  }),
  "&[data-active]": {
    color: "var(--raikou-color-text)",
  },
}));
