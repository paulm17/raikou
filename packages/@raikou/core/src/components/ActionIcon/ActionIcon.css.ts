import { css } from "@stylefusion/react";

export const actionIconRootStyle = css(({ theme }) => ({
  "--ai-size-xs": "18px",
  "--ai-size-sm": "22px",
  "--ai-size-md": "28px",
  "--ai-size-lg": "34px",
  "--ai-size-xl": "44px",

  "--ai-size-input-xs": "30px",
  "--ai-size-input-sm": "36px",
  "--ai-size-input-md": "42px",
  "--ai-size-input-lg": "50px",
  "--ai-size-input-xl": "60px",

  "--ai-size": "var(--ai-size-md)",
  "--ai-color": "var(--raikou-color-white)",

  lineHeight: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  userSelect: "none",
  overflow: "hidden",

  width: "var(--ai-size)",
  height: "var(--ai-size)",
  minWidth: "var(--ai-size)",
  minHeight: "var(--ai-size)",
  borderRadius: "var(--ai-radius, var(--raikou-radius-default))",
  backgroundColor: "var(--ai-bg, var(--raikou-primary-color-filled))",
  color: "var(--ai-color, var(--raikou-color-white))",
  border: "var(--ai-bd, rem(1px) solid transparent)",
  cursor: "pointer",

  ...theme.applyMixin("hover", {
    "&:hover:_where(:not([data-loading], :disabled, [data-disabled]))": {
      backgroundColor:
        "var(--ai-hover, var(--raikou-primary-color-filled-hover))",
      color: "var(--ai-hover-color, var(--ai-color))",
    },
  }),

  "&[data-loading]": {
    cursor: "not-allowed",

    [`& .${actionIconIconStyle}`]: {
      opacity: 0,
      transform: "translateY(100%)",
    },
  },

  "&:_where(:disabled:not([data-loading]), [data-disabled]:not([data-loading]))":
    {
      cursor: "not-allowed",
      border: "1px solid transparent",

      ...theme.applyStyles("light", {
        backgroundColor: theme.colors.gray[1],
        color: theme.colors.gray[5],
      }),

      ...theme.applyStyles("dark", {
        backgroundColor: theme.colors.dark[6],
        color: theme.colors.dark[3],
      }),

      "&:active": {
        transform: "none",
      },
    },
}));

export const actionIconLoaderStyle = css(({ theme }) => ({
  inset: "-1px",
  position: "absolute",
  borderRadius: "var(--ai-radius, var(--raikou-radius-default))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ...theme.applyStyles("light", {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  }),

  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  }),
}));

export const actionIconIconStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 150ms ease, opacity 100ms ease",
  width: "100%",
  height: "100%",
});

export const actionIconGroupStyle = css({
  "--ai-border-width": "1px",
  display: "flex",

  "& :_where(*)": {
    "&:focus": {
      position: "relative",
      zIndex: 1,
    },
  },

  "&[data-orientation='horizontal']": {
    flexDirection: "row",

    [`& .${actionIconRootStyle}`]: {
      "&:not(:only-child):first-child": {
        borderEndEndRadius: 0,
        borderStartEndRadius: 0,
        borderInlineEndWidth: "calc(var(--ai-border-width) / 2)",
      },

      "&:not(:only-child):last-child": {
        borderEndStartRadius: 0,
        borderStartStartRadius: 0,
        borderInlineStartWidth: "calc(var(--ai-border-width) / 2)",
      },

      "&:not(:only-child):not(:first-child):not(:last-child)": {
        borderRadius: 0,
        borderInlineWidth: "calc(var(--ai-border-width) / 2)",
      },
    },
  },

  "&[data-orientation='vertical']": {
    flexDirection: "column",

    [`& .${actionIconRootStyle}`]: {
      "&:not(:only-child):first-child": {
        borderEndStartRadius: 0,
        borderEndEndRadius: 0,
        borderBottomWidth: "calc(var(--ai-border-width) / 2)",
      },

      "&:not(:only-child):last-child": {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
        borderTopWidth: "calc(var(--ai-border-width) / 2)",
      },

      "&:not(:only-child):not(:first-child):not(:last-child)": {
        borderRadius: 0,
        borderBottomWidth: "calc(var(--ai-border-width) / 2)",
        borderTopWidth: "calc(var(--ai-border-width) / 2)",
      },
    },
  },
});
