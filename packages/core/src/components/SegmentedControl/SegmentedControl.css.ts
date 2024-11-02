import { css } from "@stylefusion/react";

export const SegmentedControlRootStyle = css(({ theme }) => ({
  "--sc-padding-xs": "3px 6px",
  "--sc-padding-sm": "5px 10px",
  "--sc-padding-md": "7px 14px",
  "--sc-padding-lg": "9px 16px",
  "--sc-padding-xl": "12px 20px",

  "--sc-transition-duration": "200ms",
  "--sc-padding": "var(--sc-padding-sm)",
  "--sc-transition-timing-function": "ease",
  "--sc-font-size": "var(--raikou-font-size-sm)",

  position: "relative",
  display: "inline-flex",
  flexDirection: "row",
  width: "auto",
  borderRadius: "var(--sc-radius, var(--raikou-radius-default))",
  overflow: "hidden",
  padding: "4px",

  "&:_where([data-full-width])": {
    display: "flex",
  },

  "&:_where([data-orientation='vertical'])": {
    display: "flex",
    flexDirection: "column",
    width: "max-content",

    "&:_where([data-full-width])": {
      display: "flex",
    },
  },

  ...theme.applyStyles("light", {
    backgroundColor: theme.colors.gray[1],
  }),

  ...theme.applyStyles("dark", {
    backgroundColor: theme.colors.dark[8],
  }),
}));

export const SegmentedControlIndicatorStyle = css(({ theme }) => ({
  position: "absolute",
  display: "block",
  zIndex: 1,
  borderRadius: "var(--sc-radius, var(--raikou-radius-default))",

  ...theme.applyStyles("light", {
    boxShadow: "var(--sc-shadow, none)",
    backgroundColor: `var(--sc-color, ${theme.colors.white})`,
  }),

  ...theme.applyStyles("dark", {
    boxShadow: "none",
    backgroundColor: `var(--sc-color, ${theme.colors.dark[5]})`,
  }),
}));

export const SegmentedControlLabelStyle = css(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  fontWeight: "500",
  display: "block",
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  userSelect: "none",
  borderRadius: "var(--sc-radius, var(--raikou-radius-default))",
  fontSize: "var(--sc-font-size)",
  padding: "var(--sc-padding)",
  transition:
    "color var(--sc-transition-duration) var(--sc-transition-timing-function)",
  cursor: "pointer",

  /* outline is controlled by .input */
  outline: "var(--segmented-control-outline, none)",

  ...theme.applyStyles("light", {
    color: theme.colors.gray[7],
  }),

  ...theme.applyStyles("dark", {
    color: theme.colors.dark[1],
  }),

  "&:_where([data-read-only])": {
    cursor: "default",
  },

  "& fieldset:disabled &, &:_where([data-disabled])": {
    cursor: "not-allowed",

    ...theme.applyStyles("light", {
      color: theme.colors.gray[5],
    }),

    ...theme.applyStyles("dark", {
      color: theme.colors.dark[3],
    }),
  },

  "&:_where([data-active])": {
    ...theme.applyStyles("light", {
      color: `var(--sc-label-color, ${theme.colors.black})`,
    }),

    ...theme.applyStyles("dark", {
      color: `var(--sc-label-color, ${theme.colors.white})`,
    }),

    "&:before": {
      [`.${SegmentedControlRootStyle}:_where([data-initialized]) &`]: {
        display: "none",
      },
      content: "''",
      inset: 0,
      zIndex: 0,
      position: "absolute",
      borderRadius: "var(--sc-radius, var(--raikou-radius-default))",

      ...theme.applyStyles("light", {
        boxShadow: "var(--sc-shadow, none)",
        backgroundColor: `var(--sc-color, ${theme.colors.white})`,
      }),

      ...theme.applyStyles("dark", {
        boxShadow: "none",
        backgroundColor: `var(--sc-color, ${theme.colors.dark[5]})`,
      }),
    },
  },

  "&:_where(:not([data-disabled], [data-active], [data-read-only]))": {
    ...theme.applyMixin("hover", {
      "&:hover": {
        ...theme.applyStyles("light", {
          color: theme.colors.black,
        }),

        ...theme.applyStyles("dark", {
          color: theme.colors.white,
        }),
      },
    }),
  },

  "fieldset:disabled &": {
    ...theme.applyMixin("hover", {
      "&:hover": {
        ...theme.applyStyles("light", {
          color: `${theme.colors.gray[5]} !important`,
        }),

        ...theme.applyStyles("dark", {
          color: `${theme.colors.dark[3]} !important`,
        }),
      },
    }),
  },
}));

export const SegmentedControlInputStyle = css({
  height: 0,
  width: 0,
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
  opacity: 0,

  "&[data-focus-ring='auto']": {
    "&:focus:focus-visible": {
      [`& + .${SegmentedControlLabelStyle}`]: {
        "--segmented-control-outline":
          "2px solid var(--raikou-primary-color-filled)",
      },
    },
  },

  "&[data-focus-ring='always']": {
    "&:focus": {
      [`& + .${SegmentedControlLabelStyle}`]: {
        "--segmented-control-outline":
          "2px solid var(--raikou-primary-color-filled)",
      },
    },
  },
});

export const SegmentedControlControlStyle = css(({ theme }) => ({
  position: "relative",
  flex: 1,
  zIndex: 2,
  transition:
    "border-color var(--sc-transition-duration) var(--sc-transition-timing-function)",

  [`.${SegmentedControlRootStyle}[data-with-items-borders] &`]: {
    ":_where(&):before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      insetInlineStart: 0,
      backgroundColor: "var(--separator-color)",
      width: "1px",
      transition:
        "background-color var(--sc-transition-duration) var(--sc-transition-timing-function)",
    },
  },

  [`.${SegmentedControlRootStyle}[data-orientation='vertical'] &`]: {
    ":_where(&):before": {
      top: 0,
      insetInline: 0,
      bottom: "auto",
      height: "1px",
      width: "auto",
    },
  },

  ...theme.applyStyles("light", {
    "--separator-color": theme.colors.gray[3],
  }),

  ...theme.applyStyles("dark", {
    "--separator-color": theme.colors.dark[4],
  }),

  "&:first-of-type": {
    "&:before": {
      "--separator-color": "transparent",
    },
  },

  "&[data-active]": {
    "[data-raikou-color-scheme] &": {
      [`&, & + .${SegmentedControlControlStyle}`]: {
        "&:before": {
          "--separator-color": "transparent",
        },
      },
    },
  },
}));

export const SegmentedControlInnerLabelStyle = css({
  position: "relative",
  zIndex: 2,
});
