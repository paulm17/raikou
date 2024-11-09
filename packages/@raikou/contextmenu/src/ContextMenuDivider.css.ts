import { css } from "@stylefusion/react";

export const contextMenuDividerStyle = css(({ theme }) => ({
  height: "1px",
  ...theme.applyStyles("light", {
    background: theme.colors.gray[1],
  }),
  ...theme.applyStyles("dark", {
    background: theme.colors.dark[5],
  }),
}));
