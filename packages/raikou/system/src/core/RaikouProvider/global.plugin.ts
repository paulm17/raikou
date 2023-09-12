import { rem } from "../utils/units-converters";

module.exports = function ({ addBase }: any) {
  addBase({
    /* ----- CSS reset ----- */
    "html, body": {
      height: "100%",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "input, button, textarea, select": {
      font: "inherit",
    },
    "button, select": {
      textTransform: "none",
    },
    /* ----- Global styles ----- */
    body: {
      margin: "0",
      fontFamily: "var(--raikou-font-family)",
      fontSize: "var(--raikou-font-size-md)",
      lineHeight: "var(--raikou-line-height)",
      backgroundColor: "var(--raikou-color-body)",
      color: "var(--raikou-color-text)",

      "-webkit-font-smoothing": "var(--raikou-webkit-font-smoothing)",
      "-moz-osx-font-smoothing": "var(--raikou-moz-font-smoothing)",

      "@media screen and (max-device-width: 500px)": {
        "-webkit-text-size-adjust": "100%",
      },
    },
    "[data-respect-reduced-motion]": {
      "@media (prefers-reduced-motion: reduce)": {
        "[data-reduce-motion]": {
          transition: "none",
          animation: "none",
        },
      },
    },
    ".raikou-focus-auto": {
      "&:focus-visible": {
        outline: `${rem("2px")} solid var(--raikou-primary-color-filled)`,
        outlineOffset: rem("2px"),
      },
    },
    ".raikou-focus-always": {
      "&:focus": {
        outline: `${rem("2px")} solid var(--raikou-primary-color-filled)`,
        outlineOffset: rem("2px"),
      },
    },
    ".raikou-focus-never": {
      "&:focus": {
        outline: "none",
      },
    },
    ".raikou-active": {
      "&:active": {
        transform: `translateY(${rem("1px")})`,
      },
    },
    ".raikou-rotate-rtl": {
      '[dir="rtl"] &': {
        transform: "rotate(180deg)",
      },
    },
    /* ----- Default CSS variables ----- */

    ":root": {
      "color-scheme": "var(--raikou-color-scheme)",

      "--raikou-scale": "1",
      "--raikou-cursor-type": "default",
      "--raikou-webkit-font-smoothing": "antialiased",
      "--raikou-color-scheme": "light dark",
      "--raikou-moz-font-smoothing": "grayscale",
      "--raikou-color-white": "#fff",
      "--raikou-color-black": "#000",
      "--raikou-primary-color-filled": "var(--raikou-color-blue-filled)",
      "--raikou-primary-color-filled-hover":
        "var(--raikou-color-blue-filled-hover)",
      "--raikou-primary-color-light": "var(--raikou-color-blue-light)",
      "--raikou-primary-color-light-hover":
        "var(--raikou-color-blue-light-hover)",
      "--raikou-primary-color-light-color":
        "var(--raikou-color-blue-light-color)",
      "--raikou-line-height": "1.55",
      "--raikou-font-family": `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`,
      "--raikou-font-family-monospace": `ui-monospace, SFMono-Regular, Menlo, Monaco,
        Consolas, Liberation Mono, Courier New, monospace`,
      "--raikou-font-family-headings": `-apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`,
      "--raikou-heading-font-weight": "700",
      "--raikou-radius-default": "calc(0.25rem * var(--raikou-scale))",
      "--raikou-breakpoint-xs": "36em",
      "--raikou-breakpoint-sm": "48em",
      "--raikou-breakpoint-md": "62em",
      "--raikou-breakpoint-lg": "75em",
      "--raikou-breakpoint-xl": "88em",
      "--raikou-spacing-xs": "calc(0.625rem * var(--raikou-scale))",
      "--raikou-spacing-sm": "calc(0.75rem * var(--raikou-scale))",
      "--raikou-spacing-md": "calc(1rem * var(--raikou-scale))",
      "--raikou-spacing-lg": "calc(1.25rem * var(--raikou-scale))",
      "--raikou-spacing-xl": "calc(2rem * var(--raikou-scale))",
      "--raikou-font-size-xs": "calc(0.75rem * var(--raikou-scale))",
      "--raikou-font-size-sm": "calc(0.875rem * var(--raikou-scale))",
      "--raikou-font-size-md": "calc(1rem * var(--raikou-scale))",
      "--raikou-font-size-lg": "calc(1.125rem * var(--raikou-scale))",
      "--raikou-font-size-xl": "calc(1.25rem * var(--raikou-scale))",
      "--raikou-line-height-xs": "1.4",
      "--raikou-line-height-sm": "1.45",
      "--raikou-line-height-md": "1.55",
      "--raikou-line-height-lg": "1.6",
      "--raikou-line-height-xl": "1.65",
      "--raikou-shadow-xs": `0 calc(0.0625rem * var(--raikou-scale))
          calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05),
        0 calc(0.0625rem * var(--raikou-scale)) calc(0.125rem * var(--raikou-scale))
          rgba(0, 0, 0, 0.1)`,
      "--raikou-shadow-sm": `0 calc(0.0625rem * var(--raikou-scale))
          calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--raikou-scale))
          calc(0.9375rem * var(--raikou-scale))
          calc(-0.3125rem * var(--raikou-scale)),
        rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--raikou-scale))
          calc(0.4375rem * var(--raikou-scale))
          calc(-0.3125rem * var(--raikou-scale))`,
      "--raikou-shadow-md": `0 calc(0.0625rem * var(--raikou-scale))
          calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--raikou-scale))
          calc(1.5625rem * var(--raikou-scale))
          calc(-0.3125rem * var(--raikou-scale)),
        rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--raikou-scale))
          calc(0.625rem * var(--raikou-scale))
          calc(-0.3125rem * var(--raikou-scale))`,
      "--raikou-shadow-lg": `0 calc(0.0625rem * var(--raikou-scale))
          calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--raikou-scale))
          calc(1.4375rem * var(--raikou-scale))
          calc(-0.4375rem * var(--raikou-scale)),
        rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--raikou-scale))
          calc(0.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale))`,
      "--raikou-shadow-xl": `0 calc(0.0625rem * var(--raikou-scale))
          calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--raikou-scale))
          calc(1.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale)),
        rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--raikou-scale))
          calc(1.0625rem * var(--raikou-scale))
          calc(-0.4375rem * var(--raikou-scale))`,
      "--raikou-radius-xs": "calc(0.125rem * var(--raikou-scale))",
      "--raikou-radius-sm": "calc(0.25rem * var(--raikou-scale))",
      "--raikou-radius-md": "calc(0.5rem * var(--raikou-scale))",
      "--raikou-radius-lg": "calc(1rem * var(--raikou-scale))",
      "--raikou-radius-xl": "calc(2rem * var(--raikou-scale))",
      "--raikou-h1-font-size": "calc(2.125rem * var(--raikou-scale))",
      "--raikou-h1-line-height": "1.3",
      "--raikou-h1-font-weight": "700",
      "--raikou-h2-font-size": "calc(1.625rem * var(--raikou-scale))",
      "--raikou-h2-line-height": "1.35",
      "--raikou-h2-font-weight": "700",
      "--raikou-h3-font-size": "calc(1.375rem * var(--raikou-scale))",
      "--raikou-h3-line-height": "1.4",
      "--raikou-h3-font-weight": "700",
      "--raikou-h4-font-size": "calc(1.125rem * var(--raikou-scale))",
      "--raikou-h4-line-height": "1.45",
      "--raikou-h4-font-weight": "700",
      "--raikou-h5-font-size": "calc(1rem * var(--raikou-scale))",
      "--raikou-h5-line-height": "1.5",
      "--raikou-h5-font-weight": "700",
      "--raikou-h6-font-size": "calc(0.875rem * var(--raikou-scale))",
      "--raikou-h6-line-height": "1.5",
      "--raikou-h6-font-weight": "700",
    },

    ':root[data-raikou-color-scheme="light"]': {
      "--raikou-color-bright": "var(--raikou-color-white)",
      "--raikou-color-scheme": "light",
      "--raikou-color-text": "#000",
      "--raikou-color-body": "#fff",
      "--raikou-color-error": "#fa5252",
      "--raikou-color-placeholder": "#adb5bd",
      "--raikou-color-anchor": "#228be6",
      "--raikou-color-default": "#fff",
      "--raikou-color-default-hover": "#f8f9fa",
      "--raikou-color-default-color": "#000",
      "--raikou-color-default-border": "#ced4da",
      "--raikou-color-dimmed": "#868e96",
    },

    ':root[data-raikou-color-scheme="dark"]': {
      "--raikou-color-bright": "var(--raikou-color-black)",
      "--raikou-color-scheme": "dark",
      "--raikou-color-text": "#c1c2c5",
      "--raikou-color-body": "#1a1b1e",
      "--raikou-color-error": "#c92a2a",
      "--raikou-color-placeholder": "#5c5f66",
      "--raikou-color-anchor": "#4dabf7",
      "--raikou-color-default": "#25262b",
      "--raikou-color-default-hover": "#2c2e33",
      "--raikou-color-default-color": "#fff",
      "--raikou-color-default-border": "#373a40",
      "--raikou-color-dimmed": "#909296",
    },
  });
};
