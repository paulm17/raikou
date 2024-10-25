import { css } from "@stylefusion/react";

export const ButtonRootStyle = css(({ theme }: any) => ({
  "--button-height-xs": "30px",
  "--button-height-sm": "36px",
  "--button-height-md": "42px",
  "--button-height-lg": "50px",
  "--button-height-xl": "60px",

  "--button-height-compact-xs": "22px",
  "--button-height-compact-sm": "26px",
  "--button-height-compact-md": "30px",
  "--button-height-compact-lg": "34px",
  "--button-height-compact-xl": "40px",

  "--button-padding-x-xs": "14px",
  "--button-padding-x-sm": "18px",
  "--button-padding-x-md": "22px",
  "--button-padding-x-lg": "26px",
  "--button-padding-x-xl": "32px",

  "--button-padding-x-compact-xs": "7px",
  "--button-padding-x-compact-sm": "8px",
  "--button-padding-x-compact-md": "10px",
  "--button-padding-x-compact-lg": "12px",
  "--button-padding-x-compact-xl": "14px",

  "--button-height": "var(--button-height-sm)",
  "--button-padding-x": "var(--button-padding-x-sm)",
  "--button-color": "var(--raikou-color-white)",

  userSelect: "none",
  fontWeight: 600,
  position: "relative",
  lineHeight: 1,
  textAlign: "center",
  overflow: "hidden",

  width: "auto",
  cursor: "pointer",
  display: "inline-block",
  borderRadius: "var(--button-radius, var(--raikou-radius-default))",
  fontSize: "var(--button-fz, var(--raikou-font-size-sm))",
  background: "var(--button-bg, var(--raikou-primary-color-filled))",
  border: "var(--button-bd, rem(1px) solid transparent)",
  color: "var(--button-color, var(--raikou-color-white))",
  height: "var(--button-height, var(--button-height-sm))",
  paddingInline: "var(--button-padding-x, var(--button-padding-x-sm))",
  verticalAlign: "middle",

  "&:_where([data-block])": {
    display: "block",
    width: "100%",
  },

  "&:_where([data-with-left-section])": {
    paddingInlineStart: "calc(var(--button-padding-x) / 1.5)",
  },

  "&:_where([data-with-right-section])": {
    paddingInlineEnd: "calc(var(--button-padding-x) / 1.5)",
  },

  "&:_where(:disabled:not([data-loading]), [data-disabled]:not([data-loading]))": {
    cursor: "not-allowed",
    border: "1px solid transparent",
    transform: "none",

    ...theme.applyStyles('light', {
      color: theme.colors.gray[5],
      background: theme.colors.gray[1],
    }),

    ...theme.applyStyles('dark', {
      color: theme.colors.gray[3],
      background: theme.colors.gray[6],
    }),
  },

  "&:before": {
    content: "''",
    pointerEvents: "none",
    position: "absolute",
    inset: "-1px",
    borderRadius: "var(--button-radius, var(--raikou-radius-default))",
    transform: "translateY(-100%)",
    opacity: 0,
    filter: "blur(12px)",
    transition: "transform 150ms ease, opacity 100ms ease",

    ...theme.applyStyles('light', {
      background: "rgba(255, 255, 255, 0.15)",
    }),

    ...theme.applyStyles('dark', {
      background: "rgba(0, 0, 0, 0.15)",
    }),
  },

  "&:_where([data-loading])": {
    cursor: "not-allowed",
    transform: "none",

    "&:before": {
      transform: "translateY(0)",
      opacity: 1,
    },

    [`& .${ButtonInnerStyle}`]: {
      opacity: 0,
      transform: "translateY(100%)",
    }
  },

  ...theme.applyMixin("hover", {
    "&:hover:_where(:not([data-loading], :disabled, [data-disabled]))": {
      background: "var(--button-hover, var(--raikou-primary-color-filled-hover))",
      color: "var(--button-hover-color, var(--button-color))",
    }
  })
}));

export const ButtonInnerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "var(--button-justify, center)",
  height: "100%",
  overflow: "visible",
  transition: "transform 150ms ease, opacity 100ms ease",
});

export const ButtonLabelStyle = css({
  whiteSpace: "nowrap",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  opacity: 1,

  "&:_where([data-loading])": {
    opacity: 0.2,
  },
});

export const ButtonSectionStyle = css({
  display: "flex",
  alignItems: "center",
  
  "&:_where([data-position='left'])": {
    marginInlineEnd: "var(--raikou-spacing-xs)",
  },

  "&:_where([data-position='right'])": {
    marginInlineStart: "var(--raikou-spacing-xs)",
  },
});

export const ButtonLoaderStyle = css({
  position: "absolute",
  left: "50%",
  top: "50%",
});

export const ButtonGroupStyle = css({
  "--button-border-width": "1px",
  display: "flex",

  "& :_where(*)": {
    "&:focus": {
      position: "relative",
      zIndex: 1,
    }
  },

  "&[data-orientation='horizontal']": {
    flexDirection: "row",

    [`& .${ButtonRootStyle}`]: {
      "&:not(:only-child):first-child": {
        borderEndEndRadius: 0,
        borderStartEndRadius: 0,
        borderInlineEndWidth: "calc(var(--button-border-width) / 2)",
      },

      "&:not(:only-child):last-child": {
        borderEndStartRadius: 0,
        borderStartStartRadius: 0,
        borderInlineStartWidth: "calc(var(--button-border-width) / 2)",
      },

      "&:not(:only-child):not(:first-child):not(:last-child)": {
        borderRadius: 0,
        borderInlineWidth: "calc(var(--button-border-width) / 2)",
      },
    },
  },

  "&[data-orientation='vertical']": {
    flexDirection: "column",

    [`& .${ButtonRootStyle}`]: {
      "&:not(:only-child):first-child": {
        borderEndStartRadius: 0,
        borderEndEndRadius: 0,
        borderBottomWidth: "calc(var(--button-border-width) / 2)",
      },

      "&:not(:only-child):last-child": {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
        borderTopWidth: "calc(var(--button-border-width) / 2)",
      },

      "&:not(:only-child):not(:first-child):not(:last-child)": {
        borderRadius: 0,
        borderBottomWidth: "calc(var(--ai-border-width) / 2)",
        borderTopWidth: "calc(var(--ai-border-width) / 2)",
      }
    }
  }
});