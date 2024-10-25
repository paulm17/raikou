import { css } from "@stylefusion/react";

export const KbdRootStyle = css(({ theme }: any) => ({
  "--kbd-fz-xs": "10px",
  "--kbd-fz-sm": "12px",
  "--kbd-fz-md": "14px",
  "--kbd-fz-lg": "16px",
  "--kbd-fz-xl": "20px",
  "--kbd-fz": "var(--kbd-fz-sm)",

  "--kbd-padding-xs": "2px 4px",
  "--kbd-padding-sm": "3px 5px",
  "--kbd-padding-md": "4px 7px",
  "--kbd-padding-lg": "5px 9px",
  "--kbd-padding-xl": "8px 14px",
  "--kbd-padding": "var(--kbd-padding-sm)",

  fontFamily: "var(--raikou-font-family-monospace)",
  lineHeight: "var(--raikou-line-height)",
  fontWeight: 700,
  padding: "var(--kbd-padding)",
  fontSize: "var(--kbd-fz)",
  borderRadius: "var(--raikou-radius-sm)",
  border: "1px solid",
  borderBottomWidth: "3px",
  unicodeBidi: "embed",

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[3],
    color: theme.colors.gray[7],
    backgroundColor: theme.colors.gray[0],
  }),
  
  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
    color: theme.colors.dark[0],
    backgroundColor: theme.colors.dark[6],
  }),
}));
