import { css } from "@stylefusion/react";

export const TreeRootStyle = css({
  "--level-offset": "var(--raikou-spacing-lg)",
  margin: 0,
  padding: 0,
  userSelect: "none",
});

export const TreeSubtreeStyle = css({
  margin: 0,
  padding: 0,
});

export const TreeLabelStyle = css(({ theme }) => ({
  paddingInlineStart: "var(--label-offset)",

  "&:_where([data-selected])": {
    ...theme.applyStyles("light", {
      backgroundColor: theme.colors.gray[1],
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: theme.colors.gray[5],
    }),
  },
}));

export const TreeNodeStyle = css({
  cursor: "pointer",
  listStyle: "none",
  margin: 0,
  padding: 0,
  outline: 0,

  "&:focus-visible": {
    [`.${TreeLabelStyle}`]: {
      outline: "2px solid var(--raikou-primary-color-filled)",
      outlineOffset: "2px",
    },
  },
});
