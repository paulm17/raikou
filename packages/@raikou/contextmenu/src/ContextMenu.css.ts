import { css } from "@stylefusion/react";

export const contextMenuStyle = css(({ theme }) => ({
  position: "fixed",
  ...theme.applyStyles("light", {
    border: `1px solid ${theme.colors.gray[3]}`,
  }),
  ...theme.applyStyles("dark", {
    border: `1px solid ${theme.colors.dark[4]}`,
  }),
  overflow: "hidden",
  transition: "all 0.2s",
}));
