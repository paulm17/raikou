import { css } from "@stylefusion/react";

export const InputWrapperStyle = css(({ theme }: any) => ({
  position: "relative",
  marginTop: "var(--input-margin-top, 0rem)",
  marginBottom: "var(--input-margin-bottom, 0rem)",

  "--input-height-xs": "30px",
  "--input-height-sm": "36px",
  "--input-height-md": "42px",
  "--input-height-lg": "50px",
  "--input-height-xl": "60px",

  "--input-padding-y-xs": "5px",
  "--input-padding-y-sm": "6px",
  "--input-padding-y-md": "8px",
  "--input-padding-y-lg": "10px",
  "--input-padding-y-xl": "13px",

  "--input-height": "var(--input-height-sm)",
  "--input-radius": "var(--raikou-radius-default)",

  "--input-cursor": "text",
  "--input-text-align": "left",
  "--input-line-height": "calc(var(--input-height) - rem(2px))",
  "--input-padding": "calc(var(--input-height) / 3)",
  "--input-padding-inline-start": "var(--input-padding)",
  "--input-padding-inline-end": "var(--input-padding)",
  "--input-placeholder-color": "var(--raikou-color-placeholder)",
  "--input-color": "var(--raikou-color-text)",
  
  "--input-left-section-size": "var(--input-left-section-width, calc(var(--input-height) - rem(2px)))",
  "--input-right-section-size": "var(--input-right-section-width, calc(var(--input-height) - rem(2px)))",

  "--input-size": "var(--input-height)",

  "--section-y": "1px",
  "--left-section-start": "1px",
  "--left-section-border-radius": "var(--input-radius) 0 0 var(--input-radius)",

  "--right-section-end": "1px",
  "--right-section-border-radius": "0 var(--input-radius) var(--input-radius) 0",

  "&[data-pointer]": {
    "--input-cursor": "pointer",
  },

  "&[data-multiline]": {
    "--input-padding-y-xs": "4.5px",
    "--input-padding-y-sm": "5.5px",
    "--input-padding-y-md": "7px",
    "--input-padding-y-lg": "9.5px",
    "--input-padding-y-xl": "13px",

    "--input-size": "auto",
    "--input-line-height": "var(--raikou-line-height)",
    "--input-padding-y": "var(--input-padding-y-sm)",
  },

  "&[data-with-left-section]": {
    "--input-padding-inline-start": "var(--input-left-section-size)",
  },

  "&[data-with-right-section]": {
    "--input-padding-inline-end": "var(--input-right-section-size)",
  },

  ...theme.applyStyles('light', {
    "--input-disabled-bg": theme.colors.gray[1],
    "--input-disabled-color": theme.colors.gray[6],

    "&[data-variant='default']": {
      "--input-bd": theme.colors.gray[4],
      "--input-bg": theme.colors.white,
      "--input-bd-focus": "var(--raikou-primary-color-filled)",
    },

    "&[data-variant='filled']": {
      "--input-bd": "transparent",
      "--input-bg": theme.colors.gray[1],
      "--input-bd-focus": "var(--raikou-primary-color-filled)",
    },
  }),

  ...theme.applyStyles('dark', {
    "--input-disabled-bg": theme.colors.dark[6],
    "--input-disabled-color": theme.colors.dark[2],

    "&[data-variant='default']": {
      "--input-bd": theme.colors.dark[4],
      "--input-bg": theme.colors.dark[5],
      "--input-bd-focus": "var(--raikou-primary-color-filled)",
    },

    "&[data-variant='filled']": {
      "--input-bd": "transparent",
      "--input-bg": theme.colors.dark[5],
      "--input-bd-focus": "var(--raikou-primary-color-filled)",
    },

    "[data-raikou-color-scheme] &[data-error]": {
      "&:not([data-variant='unstyled'])": {
        "--input-bd": "var(--raikou-color-error)",
      },

      "--input-color": "var(--raikou-color-error)",
      "--input-placeholder-color": "var(--raikou-color-error)",
      "--input-section-color": "var(--raikou-color-error)",
    },
    
    ...theme.applyMixin("where-rtl", {
      "--input-text-align": "right",
      "--left-section-border-radius": "0 var(--input-radius) var(--input-radius) 0",
      "--right-section-border-radius": "var(--input-radius) 0 0 var(--input-radius)",
    })
  }),
}));

export const InputInputStyle = css({
  webkitTapHighlightColor: "transparent",
  appearance: "none",
  resize: "var(--input-resize, none)",
  display: "block",
  width: "100%",
  transition: "border-color 100ms ease",

  textAlign: "var(--input-text-align)",
  color: "var(--input-color)",
  border: "rem(1px) solid var(--input-bd)",
  backgroundColor: "var(--input-bg)",
  fontFamily: "var(--input-font-family, var(--raikou-font-family))",
  height: "var(--input-size)",
  minHeight: "var(--input-height)",
  lineHeight: "var(--input-line-height)",
  fontSize: "var(--input-fz, var(--input-fz, var(--raikou-font-size-sm)))",
  borderRadius: "var(--input-radius)",
  paddingInlineStart: "var(--input-padding-inline-start)",
  paddingInlineEnd: "var(--input-padding-inline-end)",
  paddingTop: "var(--input-padding-y, 0rem)",
  paddingBottom: "var(--input-padding-y, 0rem)",
  cursor: "var(--input-cursor)",
  overflow: "var(--input-overflow)",

  /* Used as data attribute in Textarea component, does not have associated prop on the Input component */
  "&[data-no-overflow]": {
    "--input-overflow": "hidden",
  },

  /* Used as data attribute in JsonInput component, does not have associated prop on the Input component */
  "&[data-monospace]": {
    "--input-font-family": "var(--raikou-font-family-monospace)",
    "--input-fz": "calc(var(--input-fz, var(--raikou-font-size-sm)) - rem(2px))",
  },

  "&:focus, &:focus-within": {
    outline: "none",
    "--input-bd": "var(--input-bd-focus)",

    "[data-error] &": {
      "--input-bd": "var(--raikou-color-error)",
    },
  },
  
  "&::placeholder": {
    color: "var(--input-placeholder-color)",
    opacity: 1,
  },
  
  "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    appearance: "none",
  },

  "&[type='number']": {
    mozAppearance: "textfield",
  },

  "&:disabled, &[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.6,
    backgroundColor: "var(--input-disabled-bg)",
    color: "var(--input-disabled-color)",
  },

  /* Required to be a separate selector to work in Firefox, can be merged with &:disabled once :has is supported */
  "&:has(input:disabled)": {
    cursor: "not-allowed",
    opacity: 0.6,
    backgroundColor: "var(--input-disabled-bg)",
    color: "var(--input-disabled-color)",
  },
});

export const InputSectionStyle = css({
  pointerEvents: "var(--section-pointer-events)",
  position: "absolute",
  zIndex: 1,
  insetInlineStart: "var(--section-start)",
  insetInlineEnd: "var(--section-end)",
  bottom: "var(--section-y)",
  top: "var(--section-y)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "var(--section-size)",
  borderRadius: "var(--section-border-radius)",
  color: "var(--input-section-color, var(--raikou-color-dimmed))",

  "&[data-position='right']": {
    "--section-pointer-events": "var(--input-right-section-pointer-events)",
    "--section-end": "var(--right-section-end)",
    "--section-size": "var(--input-right-section-size)",
    "--section-border-radius": "var(--right-section-border-radius)",
  },

  "&[data-position='left']": {
    "--section-pointer-events": "var(--input-left-section-pointer-events)",
    "--section-start": "var(--left-section-start)",
    "--section-size": "var(--input-left-section-size)",
    "--section-border-radius": "var(--left-section-border-radius)",
  },
});

/* ----- Input.Placeholder ----- */
export const InputPlaceholderStyle = css({
  color: "var(--input-placeholder-color, var(--raikou-color-placeholder))",

  "&[data-error]": {
    "--input-placeholder-color": "var(--input-color, var(--raikou-color-placeholder))",
  },
});

/* ----- Input.Wrapper ----- */
export const InputRootStyle = css({
  lineHeight: "var(--raikou-line-height)",
});

export const InputLabelStyle = css({
  display: "inline-block",
  fontWeight: 500,
  wordBreak: "break-word",
  cursor: "default",
  WebkitTapHighlightColor: "transparent",
  fontSize: "var(--input-label-size, var(--raikou-font-size-sm))",
});

export const InputRequiredStyle = css({
  color: "var(--input-asterisk-color, var(--raikou-color-error))",
});

const ErrorDescription = {
  wordWrap: "break-word",
  lineHeight: 1.2,
  display: "block",
  margin: 0,
  padding: 0,
}

export const InputErrorStyle = css({
  color: "var(--raikou-color-error)",
  fontSize: "var(--input-error-size, calc(var(--raikou-font-size-sm) - rem(2px)))",
  ...ErrorDescription
});

export const InputDescriptionStyle = css({
  color: "var(--raikou-color-dimmed)",
  fontSize: "var(--input-description-size, calc(var(--raikou-font-size-sm) - rem(2px)))",
  ...ErrorDescription
});
