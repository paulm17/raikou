import {
  __commonJS,
  __esm,
  init_units_converters,
  rem
} from "./chunk-GZGEIAFB.mjs";

// src/core/RaikouProvider/global.plugin.ts
var require_global_plugin = __commonJS({
  "src/core/RaikouProvider/global.plugin.ts"(exports, module) {
    "use strict";
    init_units_converters();
    module.exports = function({ addBase }) {
      addBase({
        /* ----- CSS reset ----- */
        "html, body": {
          height: "100%"
        },
        "*, *::before, *::after": {
          boxSizing: "border-box"
        },
        "input, button, textarea, select": {
          font: "inherit"
        },
        "button, select": {
          textTransform: "none"
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
            "-webkit-text-size-adjust": "100%"
          }
        },
        "[data-respect-reduced-motion]": {
          "@media (prefers-reduced-motion: reduce)": {
            "[data-reduce-motion]": {
              transition: "none",
              animation: "none"
            }
          }
        },
        ".raikou-focus-auto": {
          "&:focus-visible": {
            outline: `${rem("2px")} solid var(--raikou-color-primary)`,
            outlineOffset: rem("2px")
          }
        },
        ".raikou-focus-always": {
          "&:focus": {
            outline: `${rem("2px")} solid var(--raikou-color-primary)`,
            outlineOffset: rem("2px")
          }
        },
        ".raikou-focus-never": {
          "&:focus": {
            outline: "none"
          }
        },
        ".raikou-active": {
          "&:active": {
            transform: `translateY(${rem("1px")})`
          }
        },
        ".raikou-rotate-rtl": {
          '[dir="rtl"] &': {
            transform: "rotate(180deg)"
          }
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
          "--raikou-h6-font-weight": "700"
        },
        ':root[data-raikou-color-scheme="light"]': {
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
          "--raikou-color-dimmed": "#868e96"
        },
        ':root[data-raikou-color-scheme="dark"]': {
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
          "--raikou-color-dimmed": "#909296"
        }
      });
    };
  }
});

// src/core/RaikouProvider/css-variables.plugin.ts
var require_css_variables_plugin = __commonJS({
  "src/core/RaikouProvider/css-variables.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".accordion-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-accordion-control-color": "#000",
            "--raikou-accordion-control-background-color": "#f8f9fa",
            "--raikou-accordion-item-border-color": "#dee2e6",
            "--raikou-accordion-item-filled-color": "#f8f9fa",
            "--raikou-accordion-item-item-bg": "#fff"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-accordion-control-color": "#c1c2c5",
            "--raikou-accordion-control-background-color": "#25262b",
            "--raikou-accordion-item-border-color": "#373a40",
            "--raikou-accordion-item-filled-color": "#25262b",
            "--raikou-accordion-item-item-bg": "#1a1b1e"
          }
        },
        ".actionIcon-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-actionicon-loading-overlay-bg": "rgba(255, 255, 255, 0.35)",
            "--raikou-actionicon-disabled-bg": "#f1f3f5",
            "--raikou-actionicon-disabled-color": "#adb5bd"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-actionicon-loading-overlay-bg": "rgba(0, 0, 0, 0.35)",
            "--raikou-actionicon-disabled-bg": "#868e96",
            "--raikou-actionicon-disabled-color": "#dee2e6"
          }
        },
        ".alert-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-alert-message-color": "#000"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-alert-message-color": "#fff"
          }
        },
        ".appshell-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-app-shell-border-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-app-shell-border-color": "#373a40"
          }
        },
        ".badge-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-badge-bg": "#fff",
            "--raikou-badge-border-color": "#ced4da",
            "--raikou-badge-color": "#000"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-badge-bg": "#2c2e33",
            "--raikou-badge-border-color": "#2c2e33",
            "--raikou-badge-color": "#fff"
          }
        },
        ".breadcrumbs-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-breadcrumbs-separator-color": "#495057"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-breadcrumbs-separator-color": "#909296"
          }
        },
        ".button-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-button-disabled-color": "#adb5bd",
            "--raikou-button-disabled-bg": "#f1f3f5",
            "--raikou-button-loading-overlay-bg": "rgba(255, 255, 255, 0.35)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-button-disabled-color": "#5c5f66",
            "--raikou-button-disabled-bg": "#25262b",
            "--raikou-button-loading-overlay-bg": "rgba(0, 0, 0, 0.35)"
          }
        },
        ".burger-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-burger-color": "#000"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-burger-color": "#fff"
          }
        },
        ".card-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-card-bg": "#fff",
            "--raikou-card-section-border-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-card-bg": "#25262b",
            "--raikou-card-section-border-color": "#373a40"
          }
        },
        ".checkbox-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-checkbox-bg": "#fff",
            "--raikou-checkbox-bd-color": "#ced4da",
            "--raikou-checkbox-disabled-bg": "#e9ecef",
            "--raikou-checkbox-disabled-bd-color": "#dee2e6",
            "--raikou-checkbox-disabled-icon-color": "#adb5bd",
            "--raikou-checkbox-icon-color": "#fff"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-checkbox-bg": "#25262b",
            "--raikou-checkbox-bd-color": "#373a40",
            "--raikou-checkbox-disabled-bg": "#25262b",
            "--raikou-checkbox-disabled-bd-color": "#1a1b1e",
            "--raikou-checkbox-disabled-icon-color": "#5c5f66",
            "--raikou-checkbox-icon-color": "#fff"
          }
        },
        ".chip-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-chip-bg-disabled": "#e9ecef",
            "--raikou-chip-color-disabled": "#adb5bd",
            "--raikou-chip-outline-hover-bg": "#f8f9fa",
            "--raikou-chip-outline-active-bg": "#f8f9fa",
            "--raikou-chip-outline-bg": "#fff",
            "--raikou-chip-outline-bd": "#dee2e6",
            "--raikou-chip-filled-hover-bg": "#f1f3f5",
            "--raikou-chip-filled-active-bg": "#e9ecef",
            "--raikou-chip-filled-bg": "#f8f9fa",
            "--raikou-chip-light-hover-bg": "#f1f3f5",
            "--raikou-chip-light-active-bg": "#e9ecef",
            "--raikou-chip-light-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-chip-bg-disabled": "#e9ecef",
            "--raikou-chip-color-disabled": "#adb5bd",
            "--raikou-chip-outline-hover-bg": "#2c2e33",
            "--raikou-chip-outline-active-bg": "#2c2e33",
            "--raikou-chip-outline-bg": "#25262b",
            "--raikou-chip-outline-bd": "#373a40",
            "--raikou-chip-filled-hover-bg": "#2c2e33",
            "--raikou-chip-filled-active-bg": "#25262b",
            "--raikou-chip-filled-bg": "#25262b",
            "--raikou-chip-light-hover-bg": "#2c2e33",
            "--raikou-chip-light-active-bg": "#25262b",
            "--raikou-chip-light-bg": "#25262b"
          }
        },
        ".code-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-code-bg": "#f1f3f5",
            "--raikou-code-color": "#000"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-code-bg": "#2c2e33",
            "--raikou-code-color": "#fff"
          }
        },
        ".colorPicker-wrapper": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-colorpicker-slider-checkers": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-colorpicker-slider-checkers": "#373a40"
          }
        },
        ".colorswatch-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-colorswatch-alpha-overlay-color": "#dee2e6",
            "--raikou-colorswatch-alpha-overlay-bg": "#fff"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-colorswatch-alpha-overlay-color": "#373a40",
            "--raikou-colorswatch-alpha-overlay-bg": "#1a1b1e"
          }
        },
        ".comboBox-dropdown": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-combobox-option-hover-bg": "#f8f9fa",
            "--raikou-combobox-option-active-bg": "#f8f9fa",
            "--raikou-combobox-search-border-color": "#e9ecef",
            "--raikou-combobox-search_background": "#000",
            "--raikou-combobox-footer-border-color": "#e9ecef",
            "--raikou-combobox-divider-bg": "#e9ecef",
            "--raikou-combobox-chevron-color": "#868e96"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-combobox-option-hover-bg": "#1a1b1e",
            "--raikou-combobox-option-active-bg": "#1a1b1e",
            "--raikou-combobox-search-border-color": "#373a40",
            "--raikou-combobox-search_background": "#1a1b1e",
            "--raikou-combobox-footer-border-color": "#373a40",
            "--raikou-combobox-divider-bg": "#373a40",
            "--raikou-combobox-chevron-color": "#5c5f66"
          }
        },
        ".divider-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-divider-color": "#ced4da"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-divider-color": "#373a40"
          }
        },
        ".fieldset-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-fieldset-default-bd": "#dee2e6",
            "--raikou-fieldset-default-bg": "#fff",
            "--raikou-fieldset-filled-bd": "#dee2e6",
            "--raikou-fieldset-filled-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-fieldset-default-bd": "#373a40",
            "--raikou-fieldset-default-bg": "#1a1b1e",
            "--raikou-fieldset-filled-bd": "#373a40",
            "--raikou-fieldset-filled-bg": "#25262b"
          }
        },
        ".inlineInput-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-inlineinput-disabled-label-color": "#adb5bd"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-inlineinput-disabled-label-color": "#5c5f66"
          }
        },
        ".input-wrapper": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-input-disabled-bg": "#f1f3f5",
            "--raikou-input-disabled-color": "#868e96",
            "--raikou-input-default-bd": "#ced4da",
            "--raikou-input-default-bg": "#fff",
            "--raikou-input-filled-bd": "transparent",
            "--raikou-input-filled-bg": "#fff"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-input-disabled-bg": "#25262b",
            "--raikou-input-disabled-color": "#909296",
            "--raikou-input-default-bd": "#373a40",
            "--raikou-input-default-bg": "#25262b",
            "--raikou-input-filled-bd": "transparent",
            "--raikou-input-filled-bg": "#2c2e33"
          }
        },
        ".kbd-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-kbd-border-color": "#dee2e6",
            "--raikou-kbd-color": "#495057",
            "--raikou-kbd-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-kbd-border-color": "#373a40",
            "--raikou-kbd-color": "#c1c2c5",
            "--raikou-kbd-bg": "#2c2e33"
          }
        },
        ".menu-dropdown": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-menu-divider-color": "#e9ecef",
            "--raikou-menu-divider-item-hover-bg": "#f1f3f5"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-menu-divider-color": "#373a40",
            "--raikou-menu-divider-item-hover-bg": "#2c2e33"
          }
        },
        ".notification-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-notification-border-color": "#dee2e6",
            "--raikou-notification-bg": "#fff",
            "--raikou-notification-title-color": "#212529",
            "--raikou-notification-title-description-color": "#868e96",
            "--raikou-notification-description-color": "#000",
            "--raikou-notification-close-button-hover-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-notification-border-color": "#373a40",
            "--raikou-notification-bg": "#25262b",
            "--raikou-notification-title-color": "#fff",
            "--raikou-notification-title-description-color": "#909296",
            "--raikou-notification-description-color": "#c1c2c5",
            "--raikou-notification-close-button-hover-bg": "#141517"
          }
        },
        ".numberInput-controls": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-numberinput-control-hover-bg": "#f8f9fa",
            "--raikou-numberinput-control-active-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-numberinput-control-hover-bg": "#373a40",
            "--raikou-numberinput-control-active-bg": "#373a40"
          }
        },
        ".pagination-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-pagination-control-border-color": "#ced4da",
            "--raikou-pagination-control-bg-color": "#fff",
            "--raikou-pagination-control-bg-hover": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-pagination-control-border-color": "#373a40",
            "--raikou-pagination-control-bg-color": "#25262b",
            "--raikou-pagination-control-bg-hover": "#2c2e33"
          }
        },
        ".paper-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-paper-border-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-paper-border-color": "#373a40"
          }
        },
        ".pill-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-pill-color": "#000",
            "--raikou-pill-default-bg": "#f1f3f5",
            "--raikou-pill-default-disabled-bg": "#dee2e6",
            "--raikou-pill-contrast-bg": "#fff",
            "--raikou-pill-contrast-disabled-bg": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-pill-color": "#c1c2c5",
            "--raikou-pill-bg": "#1a1b1e"
          }
        },
        ".popover-dropdown": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-popover-bg": "#fff",
            "--raikou-popover-bd": "#e9ecef"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-popover-bg": "#25262b",
            "--raikou-popover-bd": "#373a40"
          }
        },
        ".progress-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-progress-track-bg": "#e9ecef"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-progress-track-bg": "#373a40"
          }
        },
        ".radio-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-radio-bg": "#fff",
            "--raikou-radio-bd-color": "#ced4da",
            "--raikou-radio-bg-disabled": "#f1f3f5",
            "--raikou-radio-bd-disabled-color": "#e9ecef",
            "--raikou-radio-icon-disabled-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-radio-bg": "#25262b",
            "--raikou-radio-bd-color": "#373a40",
            "--raikou-radio-bg-disabled": "#2c2e33",
            "--raikou-radio-bd-disabled-color": "#373a40",
            "--raikou-radio-icon-disabled-color": "#1a1b1e"
          }
        },
        ".rating-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-rating-star-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-rating-star-color": "#373a40"
          }
        },
        ".ringProgress-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-ringprogress-curve-root-color": "#e9ecef"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-ringprogress-curve-root-color": "#373a40"
          }
        },
        ".scrollArea-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-scrollarea-scrollbar-hover-bg": "#f8f9fa",
            "--raikou-scrollarea-thumb-hover-bg": "rgba(0, 0, 0, 0.5)",
            "--raikou-scrollarea-scrollbar-active-bg": "#f8f9fa",
            "--raikou-scrollarea-thumb-active-bg": "rgba(0, 0, 0, 0.5)",
            "--raikou-scrollarea-thumb-bg": "rgba(0, 0, 0, 0.4)",
            "--raikou-scrollarea-corner-bg": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-scrollarea-scrollbar-hover-bg": "#141517",
            "--raikou-scrollarea-thumb-hover-bg": "rgba(255, 255, 255, 0.5)",
            "--raikou-scrollarea-scrollbar-active-bg": "#f8f9fa",
            "--raikou-scrollarea-thumb-active-bg": "rgba(0, 0, 0, 0.5)",
            "--raikou-scrollarea-thumb-bg": "rgba(255, 255, 255, 0.4)",
            "--raikou-scrollarea-corner-bg": "#141517"
          }
        },
        ".segmentedControl-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-segmentedcontrol-bg": "#f1f3f5",
            "--raikou-segmentedcontrol-indicator-bg": "#fff",
            "--raikou-segmentedcontrol-disabled-color": "#adb5bd",
            "--raikou-segmentedcontrol-active-color": "#000",
            "--raikou-segmentedcontrol-hover-color": "#000",
            "--raikou-segmentedcontrol-color": "#495057",
            "--raikou-segmentedcontrol-separator-color": "#dee2e6",
            "--raikou-segmentedcontrol-ring-outline": "#1971c2"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-segmentedcontrol-bg": "#141517",
            "--raikou-segmentedcontrol-indicator-bg": "#2c2e33",
            "--raikou-segmentedcontrol-disabled-color": "#5c5f66",
            "--raikou-segmentedcontrol-active-color": "#fff",
            "--raikou-segmentedcontrol-hover-color": "#fff",
            "--raikou-segmentedcontrol-color": "#a6a7ab",
            "--raikou-segmentedcontrol-separator-color": "#373a40",
            "--raikou-segmentedcontrol-ring-outline": "#1971c2"
          }
        },
        ".skeleton-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-skeleton-bg": "#5c5f66"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-skeleton-bg": "#373a40"
          }
        },
        ".slider-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-slider-track-bg": "#e9ecef",
            "--raikou-slider-track-disabled-bg": "#ced4da",
            "--raikou-slider-label-bg": "#212529",
            "--raikou-slider-thumb-bd": "var(--slider-color)",
            "--raikou-slider-thumb-bg": "#fff",
            "--raikou-slider-bar-disabled-bg": "#ced4da",
            "--raikou-slider-mark-disabled-bd": "#ced4da",
            "--raikou-slider-mark-bd": "#e9ecef",
            "--raikou-slider-mark-label-color": "#868e96"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-slider-track-bg": "#373a40",
            "--raikou-slider-track-disabled-bg": "#5c5f66",
            "--raikou-slider-label-bg": "#373a40",
            "--raikou-slider-thumb-bd": "#fff",
            "--raikou-slider-thumb-bg": "var(--slider-color)",
            "--raikou-slider-bar-disabled-bg": "#5c5f66",
            "--raikou-slider-mark-disabled-bd": "#5c5f66",
            "--raikou-slider-mark-bd": "#373a40",
            "--raikou-slider-mark-label-color": "#909296"
          }
        },
        ".stepper-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-stepper-separator-bg": "#e9ecef",
            "--raikou-stepper-separator-border-color": "#f1f3f5",
            "--raikou-stepper-step-icon-bg": "#f1f3f5",
            "--raikou-stepper-step-icon-border-color": "#f1f3f5",
            "--raikou-stepper-step-icon-color": "#495057"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-stepper-separator-bg": "#909296",
            "--raikou-stepper-separator-border-color": "#2c2e33",
            "--raikou-stepper-step-icon-bg": "#2c2e33",
            "--raikou-stepper-step-icon-border-color": "#2c2e33",
            "--raikou-stepper-step-icon-color": "#a6a7ab"
          }
        },
        ".switch-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-switch-bg": "#e9ecef",
            "--raikou-switch-bd": "#dee2e6",
            "--raikou-switch-color": "#868e96",
            "--raikou-switch-disabled-color": "#e9ecef",
            "--raikou-switch-thumb-bd": "#dee2e6",
            "--raikou-switch-thumb-bg-disabled": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-switch-bg": "#25262b",
            "--raikou-switch-bd": "#373a40",
            "--raikou-switch-color": "#a6a7ab",
            "--raikou-switch-disabled-color": "#373a40",
            "--raikou-switch-thumb-bd": "#fff",
            "--raikou-switch-thumb-bg-disabled": "#5c5f66"
          }
        },
        ".table-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-table-hover-color": "#f1f3f5",
            "--raikou-table-striped-color": "#f8f9fa",
            "--raikou-table-border-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-table-hover-color": "#2c2e33",
            "--raikou-table-striped-color": "#25262b",
            "--raikou-table-border-color": "#373a40"
          }
        },
        ".tabs-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-tabs-tab-border-color": "#dee2e6",
            "--raikou-tabs-tab-default-hover-color": "#f8f9fa",
            "--raikou-tabs-tab-pills-hover-color": "#f8f9fa"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-tabs-tab-border-color": "#373a40",
            "--raikou-tabs-tab-default-hover-color": "#f8f9fa",
            "--raikou-tabs-tab-pills-hover-color": "#25262b"
          }
        },
        ".timeline-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-timeline-item-border-color": "#dee2e6",
            "--raikou-timeline-bullet-border-color": "#dee2e6",
            "--raikou-timeline-bullet-bg-color": "#dee2e6"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-timeline-item-border-color": "#373a40",
            "--raikou-timeline-bullet-border-color": "#373a40",
            "--raikou-timeline-bullet-bg-color": "#373a40"
          }
        },
        ".tooltip-root": {
          '[data-raikou-color-scheme="light"] &': {
            "--raikou-tooltip-bg": "#212529",
            "--raikou-tooltip-color": "#fff"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--raikou-tooltip-bg": "#e9ecef",
            "--raikou-tooltip-color": "#000"
          }
        }
      });
    };
  }
});

// ../core/src/core/utils/units-converters/rem.ts
function scaleRem(remValue) {
  return `calc(${remValue} * var(--raikou-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  return (value) => {
    if (value === 0 || value === "0") {
      return "0";
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value.includes("calc(") || value.includes("var(")) {
        return value;
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  };
}
var rem2, em;
var init_rem = __esm({
  "../core/src/core/utils/units-converters/rem.ts"() {
    "use strict";
    rem2 = createConverter("rem", { shouldScale: true });
    em = createConverter("em");
  }
});

// ../core/src/core/utils/units-converters/index.ts
var init_units_converters2 = __esm({
  "../core/src/core/utils/units-converters/index.ts"() {
    "use strict";
    init_rem();
  }
});

// ../core/src/core/utils/index.ts
var init_utils = __esm({
  "../core/src/core/utils/index.ts"() {
    "use strict";
    init_units_converters2();
  }
});

// ../core/src/core/RaikouProvider/theme.types.ts
var init_theme_types = __esm({
  "../core/src/core/RaikouProvider/theme.types.ts"() {
    "use strict";
  }
});

// ../core/src/core/RaikouProvider/color-functions/index.ts
var init_color_functions = __esm({
  "../core/src/core/RaikouProvider/color-functions/index.ts"() {
    "use strict";
  }
});

// ../core/src/core/RaikouProvider/index.ts
var init_RaikouProvider = __esm({
  "../core/src/core/RaikouProvider/index.ts"() {
    "use strict";
    init_theme_types();
    init_color_functions();
  }
});

// ../core/src/core/styles-api/styles-api.types.ts
var init_styles_api_types = __esm({
  "../core/src/core/styles-api/styles-api.types.ts"() {
    "use strict";
  }
});

// ../core/src/core/styles-api/use-styles/use-styles.ts
var init_use_styles = __esm({
  "../core/src/core/styles-api/use-styles/use-styles.ts"() {
    "use strict";
  }
});

// ../core/src/core/styles-api/index.ts
var init_styles_api = __esm({
  "../core/src/core/styles-api/index.ts"() {
    "use strict";
    init_styles_api_types();
    init_use_styles();
  }
});

// ../core/src/core/InlineStyles/index.ts
var init_InlineStyles = __esm({
  "../core/src/core/InlineStyles/index.ts"() {
    "use strict";
  }
});

// ../core/src/core/Box/Box.types.ts
var init_Box_types = __esm({
  "../core/src/core/Box/Box.types.ts"() {
    "use strict";
  }
});

// ../core/src/core/Box/style-props/style-props.types.ts
var init_style_props_types = __esm({
  "../core/src/core/Box/style-props/style-props.types.ts"() {
    "use strict";
  }
});

// ../core/src/core/Box/style-props/index.ts
var init_style_props = __esm({
  "../core/src/core/Box/style-props/index.ts"() {
    "use strict";
    init_style_props_types();
  }
});

// ../core/src/core/factory/index.ts
var init_factory = __esm({
  "../core/src/core/factory/index.ts"() {
    "use strict";
  }
});

// ../core/src/core/Box/index.ts
var init_Box = __esm({
  "../core/src/core/Box/index.ts"() {
    "use strict";
    init_Box_types();
    init_style_props();
  }
});

// ../core/src/core/DirectionProvider/DirectionProvider.tsx
var init_DirectionProvider = __esm({
  "../core/src/core/DirectionProvider/DirectionProvider.tsx"() {
    "use strict";
  }
});

// ../core/src/core/DirectionProvider/index.ts
var init_DirectionProvider2 = __esm({
  "../core/src/core/DirectionProvider/index.ts"() {
    "use strict";
    init_DirectionProvider();
  }
});

// ../core/src/core/index.ts
var init_core = __esm({
  "../core/src/core/index.ts"() {
    "use strict";
    init_utils();
    init_styles_api();
    init_RaikouProvider();
    init_InlineStyles();
    init_Box();
    init_factory();
    init_DirectionProvider2();
  }
});

// ../core/src/index.ts
var init_src = __esm({
  "../core/src/index.ts"() {
    "use strict";
    init_core();
  }
});

// ../components/Accordion/src/Accordion.plugin.ts
var require_Accordion_plugin = __commonJS({
  "../components/Accordion/src/Accordion.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".accordion-panel": {
          wordBreak: "break-word"
        },
        ".accordion-content": {
          padding: "var(--raikou-spacing-md)",
          paddingTop: "calc(var(--raikou-spacing-xs) / 2)"
        },
        ".accordion-itemTitle": {
          margin: "0",
          padding: "0"
        },
        ".accordion-control": {
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "var(--_control-flex-direction, row-reverse)",
          paddingRight: "var(--_control-padding-right, var(--raikou-spacing-md))",
          paddingLeft: "var(--_control-padding-left, var(--raikou-spacing-md))",
          textAlign: "left",
          color: "var(--_control-color)",
          opacity: "var(--_control-opacity, 1)",
          cursor: "var(--_control-cursor, pointer)",
          backgroundColor: "var(--_control-background-color, transparent)",
          '&[data-chevron-position="left"]': {
            "--_control-flex-direction": "row",
            "--_control-padding-left": "0"
          },
          '[dir="rtl"] &': {
            '&[data-chevron-position="left"]': {
              "--_control-padding-left": "var(--raikou-spacing-md)"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_control-color": "var(--raikou-accordion-control-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_control-color": "var(--raikou-accordion-control-color)"
          },
          "&:disabled, &[data-disabled]": {
            "--_control-opacity": "0.4",
            "--_control-cursor": "not-allowed"
          }
        },
        ".accordion-root[data-variant='default'] .accordion-control, .accordion-root[data-variant='contained'] .accordion-control": {
          "&:not(:disabled, [data-disabled])": {
            "@media (hover: hover)": {
              "&:hover": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-background-color": "var(--raikou-accordion-control-background-color)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-background-color": "var(--raikou-accordion-control-background-color)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-background-color": "var(--raikou-accordion-control-background-color)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-background-color": "var(--raikou-accordion-control-background-color)"
                }
              }
            }
          }
        },
        ".accordion-label": {
          color: "inherit",
          fontWeight: "400",
          flex: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingTop: "var(--raikou-spacing-sm)",
          paddingBottom: "var(--raikou-spacing-sm)"
        },
        ".accordion-chevron": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transition: "transform var(--accordion-transition-duration) ease",
          marginRight: "var(--_chevron-margin-right)",
          marginLeft: "var(--_chevron-margin-left)",
          width: "var(--accordion-chevron-size)",
          minWidth: "var(--accordion-chevron-size)",
          transform: "var(--_chevron-transform, rotate(0deg))",
          "&[data-rotate]": {
            "--_chevron-transform": "rotate(180deg)"
          },
          '&[data-position="left"]': {
            "--_chevron-margin-right": "var(--raikou-spacing-md)",
            "--_chevron-margin-left": "var(--raikou-spacing-md)"
          },
          '&[data-position="right"]': {
            "--_chevron-margin-left": "0"
          },
          '[dir="rtl"] &': {
            '&[data-position="left"]': {
              "--_chevron-margin-right": "0",
              "--_chevron-margin-left": "var(--raikou-spacing-md)"
            },
            '&[data-position="right"]': {
              "--_chevron-margin-right": "var(--raikou-spacing-md)",
              "--_chevron-margin-left": "0"
            }
          }
        },
        ".accordion-icon": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "var(--_icon-margin-right, var(--raikou-spacing-sm))",
          marginLeft: "var(--_icon-margin-left, 0)",
          '&[data-chevron-position="left"]': {
            "--_icon-margin-right": "0",
            "--_icon-margin-left": "var(--raikou-spacing-lg)"
          },
          '[dir="rtl"] &': {
            '&[data-chevron-position="left"]': {
              "--_icon-margin-right": "var(--raikou-spacing-lg)",
              "--_icon-margin-left": "0"
            },
            '&[data-chevron-position="right"]': {
              "--_icon-margin-right": "0",
              "--_icon-margin-left": "var(--raikou-spacing-sm)"
            }
          }
        },
        ".accordion-item": {
          backgroundColor: "var(--_item-bg)",
          '[data-raikou-color-scheme="light"] &': {
            "--_item-border-color": "var(--raikou-accordion-item-border-color)",
            "--_item-filled-color": "var(--raikou-accordion-item-filled-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_item-border-color": "var(--raikou-accordion-item-border-color)",
            "--_item-filled-color": "var(--raikou-accordion-item-filled-color)"
          }
        },
        ".accordion-root[data-variant='default'] .accordion-item": {
          borderBottom: `${rem2("1px")} solid var(--_item-border-color)`
        },
        ".accordion-root[data-variant='contained'] .accordion-item": {
          border: `${rem2("1px")} solid var(--_item-border-color)`,
          transition: "background-color 150ms ease",
          "&[data-active]": {
            "--_item-bg": "var(--_item-filled-color)"
          },
          "&:first-of-type": {
            borderTopLeftRadius: "var(--accordion-radius)",
            borderTopRightRadius: "var(--accordion-radius)",
            "& > [data-accordion-control]": {
              borderTopLeftRadius: "var(--accordion-radius)",
              borderTopRightRadius: "var(--accordion-radius)"
            }
          },
          "&:last-of-type": {
            borderBottomLeftRadius: "var(--accordion-radius)",
            borderBottomRightRadius: "var(--accordion-radius)",
            "& > [data-accordion-control]": {
              borderBottomLeftRadius: "var(--accordion-radius)",
              borderBottomRightRadius: "var(--accordion-radius)"
            }
          },
          "& + &": {
            borderTop: "0"
          }
        },
        ".accordion-root[data-variant='filled'] .accordion-item": {
          borderRadius: "var(--accordion-radius)",
          "&[data-active]": {
            "--_item-bg": "var(--_item-filled-color)"
          }
        },
        ".accordion-root[data-variant='separated'] .accordion-item": {
          "--_item-bg": "var(--_item-filled-color)",
          borderRadius: "var(--accordion-radius)",
          border: `${rem2("1px")} solid var(--__item-border-color, transparent)`,
          transition: "background-color 150ms ease",
          "&[data-active]": {
            "--__item-border-color": "var(--_item-border-color)",
            '[data-raikou-color-scheme="light"] &': {
              "--_item-bg": "var(--raikou-accordion-item-item-bg)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_item-bg": "var(--raikou-accordion-item-item-bg)"
            }
          },
          "+ .accordion-item": {
            marginTop: "var(--raikou-spacing-md)"
          }
        }
      });
    };
  }
});

// ../components/ActionIcon/src/ActionIcon.plugin.ts
var require_ActionIcon_plugin = __commonJS({
  "../components/ActionIcon/src/ActionIcon.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".actionIcon-root": {
          "--ai-size-xs": rem2("18px"),
          "--ai-size-sm": rem2("22px"),
          "--ai-size-md": rem2("28px"),
          "--ai-size-lg": rem2("34px"),
          "--ai-size-xl": rem2("44px"),
          lineHeight: "1",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          userSelect: "none",
          width: "var(--ai-size)",
          height: "var(--ai-size)",
          minWidth: "var(--ai-size)",
          minHeight: "var(--ai-size)",
          borderRadius: "var(--ai-radius)",
          background: "var(--_ai-bg, var(--ai-bg))",
          color: "var(--_ai-color, var(--ai-color))",
          border: "var(--ai-bd)",
          cursor: "var(--_ai-cursor, pointer)",
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-loading]):not(:disabled):not([data-disabled])": {
                "--_ai-bg": "var(--ai-hover)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-loading]):not(:disabled):not([data-disabled])": {
                "--_ai-bg": "var(--ai-hover)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_ai-loading-overlay-bg": "var(--raikou-actionicon-loading-overlay-bg)",
            "--_ai-disabled-bg": "var(--raikou-actionicon-disabled-bg)",
            "--_ai-disabled-color": "var(--raikou-actionicon-disabled-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_ai-loading-overlay-bg": "var(--raikou-actionicon-loading-overlay-bg)",
            "--_ai-disabled-bg": "var(--raikou-actionicon-disabled-bg)",
            "--_ai-disabled-color": "var(--raikou-actionicon-disabled-color)"
          },
          "&[data-loading]": {
            "--_ai-cursor": "not-allowed",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: rem2("-1px"),
              borderRadius: "var(--ai-radius)",
              backgroundColor: "var(--_ai-loading-overlay-bg)"
            }
          },
          "&:disabled:not([data-loading]), &[data-disabled]:not([data-loading])": {
            "--_ai-cursor": "not-allowed",
            "--_ai-bg": "var(--_ai-disabled-bg)",
            "--_ai-color": "var(--_ai-disabled-color)",
            "&:active": {
              transform: "none"
            }
          }
        },
        ".actionIcon-loader": {
          zIndex: "1"
        },
        ".actionIconGroup-root": {
          display: "flex",
          "&[data-orientation='horizontal']": {
            flexDirection: "row",
            "& [data-action-icon]": {
              "&:not(:only-child):first-child": {
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0",
                borderRightWidth: "calc(var(--ai-border-width) / 2)"
              },
              "&:not(:only-child):last-child": {
                borderBottomLeftRadius: "0",
                borderTopLeftRadius: "0",
                borderLeftWidth: "calc(var(--ai-border-width) / 2)"
              },
              "&:not(:only-child):not(:first-child):not(:last-child)": {
                borderRadius: "0",
                borderRightWidth: "calc(var(--ai-border-width) / 2)",
                borderLeftWidth: "calc(var(--ai-border-width) / 2)"
              }
            }
          },
          "&[data-orientation='vertical']": {
            flexDirection: "column",
            "& [data-action-icon]": {
              "&:not(:only-child):first-child": {
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                borderBottomWidth: "calc(var(--ai-border-width) / 2)"
              },
              "&:not(:only-child):last-child": {
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                borderTopWidth: "calc(var(--ai-border-width) / 2)"
              },
              "&:not(:only-child):not(:first-child):not(:last-child)": {
                borderRadius: "0",
                borderBottomWidth: "calc(var(--ai-border-width) / 2)",
                borderTopWidth: "calc(var(--ai-border-width) / 2)"
              }
            }
          }
        }
      });
    };
  }
});

// ../components/Alert/src/Alert.plugin.ts
var require_Alert_plugin = __commonJS({
  "../components/Alert/src/Alert.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".alert-root": {
          backgroundColor: "var(--alert-bg)",
          padding: "var(--raikou-spacing-md) var(--raikou-spacing-xl)",
          borderRadius: "var(--alert-radius)",
          position: "relative",
          overflow: "hidden",
          border: "var(--alert-bd)",
          color: "var(--alert-color)"
        },
        ".alert-root--filled": {
          "--_message-color": "var(--alert-color)"
        },
        ".alert-root--white": {
          "--_message-color": "var(--raikou-color-black)"
        },
        ".alert-wrapper": {
          display: "flex"
        },
        ".alert-body": {
          flex: "1"
        },
        ".alert-title": {
          marginBottom: "var(--raikou-spacing-xs)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "var(--raikou-font-size-sm)",
          fontWeight: "700",
          "&[data-with-close-button]": {
            paddingRight: "var(--raikou-spacing-md)"
          }
        },
        ".alert-label": {
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        ".alert-icon": {
          lineHeight: "1",
          width: rem2("20px"),
          height: rem2("20px"),
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginRight: "var(--raikou-spacing-md)",
          marginTop: rem2("1px")
        },
        ".alert-message": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          fontSize: "var(--raikou-font-size-sm)",
          color: "var(--_message-color, var(--__message-color))",
          '[data-raikou-color-scheme="light"] &': {
            "--__message-color": "var(--raikou-alert-message-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--__message-color": "var(--raikou-alert-message-color)"
          }
        },
        ".alert-closeButton": {
          width: rem2("20px"),
          height: rem2("20px"),
          marginRight: "calc(var(--raikou-spacing-md) * -1)",
          marginTop: "calc(var(--raikou-spacing-sm) * -0.5)",
          color: "var(--alert-color)"
        }
      });
    };
  }
});

// ../components/AppShell/src/AppShell.plugin.ts
var require_AppShell_plugin = __commonJS({
  "../components/AppShell/src/AppShell.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".appshell-root": {
          "&[data-resizing]": {
            "--app-shell-transition-duration": "0ms !important"
          },
          "&[data-disabled]": {
            "--app-shell-header-offset": "0px !important",
            "--app-shell-navbar-offset": "0px !important"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_app-shell-border-color": "var(--raikou-app-shell-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_app-shell-border-color": "var(--raikou-app-shell-border-color)"
          }
        },
        ".appshell-navbar, .appshell-aside, .appshell-header, .appshell-main, .appshell-footer": {
          "transition-duration": "var(--app-shell-transition-duration)",
          "transition-timing-function": "var(--app-shell-transition-timing-function)"
        },
        ".appshell-navbar, .appshell-aside": {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          top: "var(--_section-top, var(--app-shell-header-offset, 0px))",
          height: "var(--_section-height, calc(100dvh - var(--app-shell-header-offset, 0px) - var(--app-shell-footer-offset, 0px)))",
          backgroundColor: "var(--raikou-color-body)",
          transitionProperty: "transform, top, height",
          '[data-layout="alt"] &': {
            "--_section-top": "0px",
            "--_section-height": "100dvh"
          }
        },
        ".appshell-navbar": {
          left: "var(--_navbar-left, 0px)",
          right: "var(--_navbar-right)",
          width: "var(--app-shell-navbar-width)",
          borderRight: "var(--_navbar-border-right)",
          borderLeft: "var(--_navbar-border-left)",
          transitionProperty: "transform, top, height",
          transform: "var(--_navbar-transform, var(--app-shell-navbar-transform))",
          zIndex: "var(--app-shell-navbar-z-index)",
          "&[data-with-border]": {
            "--_navbar-border-right": `${rem2(
              "1px"
            )} solid var(--_app-shell-border-color)`,
            '[dir="rtl"] &': {
              "--_navbar-border-right": "none",
              "--_navbar-border-left": `${rem2(
                "1px"
              )} solid var(--_app-shell-border-color)`
            }
          },
          '[dir="rtl"] &': {
            "--_navbar-left": "auto",
            "--_navbar-right": "0px",
            "--_navbar-transform": "var(--app-shell-navbar-transform-rtl)"
          }
        },
        ".appshell-aside": {
          left: "var(--_aside-left)",
          right: "var(--_aside-right, 0px)",
          width: "var(--app-shell-aside-width)",
          borderRight: "var(--_aside-border-right)",
          borderLeft: "var(--_aside-border-left)",
          transform: "var(--_aside-transform, var(--app-shell-aside-transform))",
          zIndex: "var(--app-shell-aside-z-index)",
          "&[data-with-border]": {
            "--_aside-border-left": `${rem2(
              "1px"
            )} solid var(--_app-shell-border-color)`,
            '[dir="rtl"] &': {
              "--_aside-border-left": "none",
              "--_aside-border-right": `${rem2(
                "1px"
              )} solid var(--_app-shell-border-color)`
            }
          },
          '[dir="rtl"] &': {
            "--_aside-left": "0px",
            "--_aside-right": "auto",
            "--_aside-transform": "var(--app-shell-aside-transform-rtl)"
          }
        },
        ".appshell-main": {
          paddingLeft: "var(--_main-padding-left, calc(var(--app-shell-navbar-offset, 0px) + var(--app-shell-padding)))",
          paddingRight: "var(--_main-padding-right, calc(var(--app-shell-aside-offset, 0px) + var(--app-shell-padding)))",
          paddingTop: "calc(var(--app-shell-header-offset, 0px) + var(--app-shell-padding))",
          paddingBottom: "calc(var(--app-shell-footer-offset, 0px) + var(--app-shell-padding))",
          minHeight: "calc(100dvh - var(--app-shell-header-offset, 0px) - var(--app-shell-footer-offset, 0px))",
          transitionProperty: "padding",
          '[dir="rtl"] &': {
            "--_main-padding-left": "calc(var(--app-shell-aside-offset, 0px) + var(--app-shell-padding))",
            "--_main-padding-right": "calc(var(--app-shell-navbar-offset, 0px) + var(--app-shell-padding))"
          }
        },
        ".appshell-header, .appshell-footer": {
          position: "fixed",
          left: "var(--_section-left, 0px)",
          right: "var(--_section-right, 0px)",
          transitionProperty: "transform, left, right",
          backgroundColor: "var(--raikou-color-body)",
          '[data-layout="alt"] &': {
            "--_section-left": "var(--app-shell-navbar-offset, 0px)",
            '[dir="rtl"] &': {
              "--_section-right": "var(--app-shell-navbar-offset, 0px)",
              "--_section-left": "0px"
            }
          }
        },
        ".appshell-header": {
          top: "0",
          height: "var(--app-shell-header-height)",
          backgroundColor: "var(--raikou-color-body)",
          borderBottom: "var(--_header-border-bottom)",
          transform: "var(--app-shell-header-transform)",
          zIndex: "var(--app-shell-header-z-index)",
          "&[data-with-border]": {
            "--_header-border-bottom": `${rem2(
              "1px"
            )} solid var(--_app-shell-border-color)`
          }
        },
        ".appshell-footer": {
          bottom: "0",
          height: "var(--app-shell-footer-height)",
          borderTop: "var(--_footer-border-top)",
          transform: "var(--app-shell-footer-transform)",
          zIndex: "var(--app-shell-footer-z-index)",
          "&[data-with-border]": {
            "--_footer-border-top": `${rem2(
              "1px"
            )} solid var(--_app-shell-border-color)`
          }
        },
        ".appshell-section": {
          flexGrow: "var(--_section-grow, 0)",
          "&[data-grow]": {
            "--_section-grow": "1"
          }
        }
      });
    };
  }
});

// ../components/Anchor/src/Anchor.plugin.ts
var require_Anchor_plugin = __commonJS({
  "../components/Anchor/src/Anchor.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".anchor-root": {
          color: "var(--raikou-color-anchor)",
          textDecoration: "var(--_text-decoration, none) !important",
          appearance: "none",
          border: "none",
          display: "inline",
          padding: "0",
          margin: "0",
          backgroundColor: "transparent",
          cursor: "pointer",
          '&[data-underline="hover"]': {
            "@media (hover: hover)": {
              "&:hover": {
                "--_text-decoration": "underline"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_text-decoration": "underline"
              }
            }
          },
          '&[data-underline="always"]': {
            "--_text-decoration": "underline"
          }
        }
      });
    };
  }
});

// ../components/AspectRatio/src/AspectRatio.plugin.ts
var require_AspectRatio_plugin = __commonJS({
  "../components/AspectRatio/src/AspectRatio.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".aspectRatio-root": {
          position: "relative",
          maxWidth: "100%",
          "&::before": {
            content: '""',
            height: "0",
            display: "block",
            paddingBottom: "calc((1 / var(--ar-ratio)) * 100%)"
          },
          "&::after": {
            content: '""',
            display: "table",
            clear: "both"
          },
          "& > *:not(style)": {
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          "& > img, & > video": {
            objectFit: "cover"
          }
        }
      });
    };
  }
});

// ../components/Avatar/src/Avatar.plugin.ts
var require_Avatar_plugin = __commonJS({
  "../components/Avatar/src/Avatar.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".avatar-root": {
          "--avatar-size-xs": rem2("16px"),
          "--avatar-size-sm": rem2("26px"),
          "--avatar-size-md": rem2("38px"),
          "--avatar-size-lg": rem2("56px"),
          "--avatar-size-xl": rem2("84px"),
          "-webkit-tap-highlight-color": "transparent",
          position: "relative",
          display: "block",
          userSelect: "none",
          overflow: "hidden",
          borderRadius: "var(--avatar-radius)",
          textDecoration: "none",
          border: "var(--_avatar-border, none)",
          backgroundColor: "var(--_avatar-bg, transparent)",
          padding: "0",
          width: "var(--avatar-size)",
          height: "var(--avatar-size)",
          minWidth: "var(--avatar-size)",
          marginLeft: "var(--_avatar-ml, unset)",
          marginRight: "var(--_avatar-mr, unset)",
          "&[data-within-group]": {
            "--_avatar-ml": "calc(var(--ag-spacing) * -1)",
            "--_avatar-border": `${rem2("2px")} solid var(--raikou-color-body)`,
            "--_avatar-bg": "var(--raikou-color-body)",
            '[dir="rtl"] &': {
              "--_avatar-mr": "calc(var(--ag-spacing) * -1)",
              "--_avatar-ml": "unset"
            }
          }
        },
        ".avatar-image": {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          display: "block"
        },
        ".avatar-placeholder": {
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          userSelect: "none",
          borderRadius: "var(--avatar-radius)",
          fontSize: "calc(var(--avatar-size) / 2.5)",
          color: "var(--avatar-color)",
          background: "var(--avatar-bg)",
          border: "var(--avatar-bd)",
          "& > [data-avatar-placeholder-icon]": {
            width: "70%",
            height: "70%"
          }
        },
        ".avatarGroup-root": {
          display: "flex",
          paddingLeft: "var(--ag-spacing)",
          '[dir="rtl"] &': {
            paddingLeft: "0",
            paddingRight: "var(--ag-spacing)"
          }
        }
      });
    };
  }
});

// ../components/BackgroundImage/src/BackgroundImage.plugin.ts
var require_BackgroundImage_plugin = __commonJS({
  "../components/BackgroundImage/src/BackgroundImage.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".backgroundImage-root": {
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "block",
          width: "100%",
          border: "0",
          textDecoration: "none",
          borderRadius: "var(--bi-radius)"
        }
      });
    };
  }
});

// ../components/Badge/src/Badge.plugin.ts
var require_Badge_plugin = __commonJS({
  "../components/Badge/src/Badge.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".badge-root": {
          "--badge-height-xs": rem2("16px"),
          "--badge-height-sm": rem2("18px"),
          "--badge-height-md": rem2("20px"),
          "--badge-height-lg": rem2("26px"),
          "--badge-height-xl": rem2("32px"),
          "--badge-fz-xs": rem2("9px"),
          "--badge-fz-sm": rem2("10px"),
          "--badge-fz-md": rem2("11px"),
          "--badge-fz-lg": rem2("13px"),
          "--badge-fz-xl": rem2("16px"),
          "--badge-padding-x-xs": rem2("6px"),
          "--badge-padding-x-sm": rem2("8px"),
          "--badge-padding-x-md": rem2("10px"),
          "--badge-padding-x-lg": rem2("12px"),
          "--badge-padding-x-xl": rem2("16px"),
          fontSize: "var(--badge-fz)",
          borderRadius: "var(--badge-radius)",
          height: "var(--badge-height)",
          "-webkit-tap-highlight-color": "transparent",
          lineHeight: `calc(var(--badge-height) - ${rem2("2px")})`,
          textDecoration: "none",
          padding: "0 var(--badge-padding-x)",
          display: "var(--_badge-display, inline-flex)",
          alignItems: "center",
          justifyContent: "center",
          width: "var(--_badge-width, auto)",
          textTransform: "uppercase",
          fontWeight: "700",
          letterSpacing: rem2("0.25px"),
          cursor: "inherit",
          textOverflow: "ellipsis",
          overflow: "hidden",
          color: "var(--badge-color)",
          background: "var(--badge-bg)",
          border: "var(--badge-bd)"
        },
        ".badge-root--dot": {
          "--badge-dot-size": "calc(var(--badge-height) / 3.4)",
          backgroundColor: "var(--_badge-bg)",
          border: `${rem2("1px")} solid var(--_badge-border-color)`,
          color: "var(--_badge-color)",
          '[data-raikou-color-scheme="light"] &': {
            "--_badge-bg": "var(--raikou-badge-bg)",
            "--_badge-border-color": "var(--raikou-badge-border-color)",
            "--_badge-color": "var(--raikou-badge-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_badge-bg": "var(--raikou-badge-bg)",
            "--_badge-border-color": "var(--raikou-badge-border-color)",
            "--_badge-color": "var(--raikou-badge-color)"
          },
          "&::before": {
            content: "''",
            display: "block",
            width: "var(--badge-dot-size)",
            height: "var(--badge-dot-size)",
            borderRadius: "var(--badge-dot-size)",
            backgroundColor: "var(--badge-dot-color)",
            marginRight: "var(--badge-dot-size)",
            '[dir="rtl"] &': {
              marginRight: "0",
              marginLeft: "var(--badge-dot-size)"
            }
          }
        },
        ".badge-label": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        ".badge-section": {
          "--_section-margin": "calc(var(--raikou-spacing-xs) / 2)",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          "&[data-position='left']": {
            marginLeft: "var(--_left-section-ml, 0)",
            marginRight: "var(--_left-section-mr, var(--_section-margin))"
          },
          "&[data-position='right']": {
            marginLeft: "var(--_right-section-ml, var(--_section-margin))",
            marginRight: "var(--_right-section-mr, 0)"
          }
        }
      });
    };
  }
});

// ../components/Blockquote/src/Blockquote.plugin.ts
var require_Blockquote_plugin = __commonJS({
  "../components/Blockquote/src/Blockquote.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".blockquote-root": {
          "--_bq-border": `${rem2("3px")} solid var(--bq-bd)`,
          position: "relative",
          margin: "0",
          backgroundColor: "var(--_bq-bg)",
          borderLeft: "var(--_bq-border-left, var(--_bq-border))",
          borderRight: "var(--_bq-border-right, 0)",
          borderRadius: "var(--bq-radius)",
          borderTopLeftRadius: "var(--_bq-radius-left, 0)",
          borderTopRightRadius: "var(--_bq-radius-right, var(--bq-radius))",
          borderBottomLeftRadius: "var(--_bq-radius-left, 0)",
          borderBottomRightRadius: "var(--_bq-radius-right, var(--bq-radius))",
          padding: `var(--raikou-spacing-xl) ${rem2("38px")}`,
          '[dir="rtl"] &': {
            "--_bq-radius-left": "var(--bq-radius)",
            "--_bq-radius-right": "0",
            "--_bq-border-left": "0",
            "--_bq-border-right": "var(--_bq-border)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_bq-bg": "var(--bq-bg-light)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bq-bg": "var(--bq-bg-dark)"
          }
        },
        ".blockquote-icon": {
          position: "absolute",
          color: "var(--bq-bd)",
          backgroundColor: "var(--raikou-color-body)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "calc(var(--bq-icon-size) / -2)",
          left: "var(--_bq-icon-left, calc(var(--bq-icon-size) / -2))",
          right: "var(--_bq-icon-right, 0)",
          width: "var(--bq-icon-size)",
          height: "var(--bq-icon-size)",
          borderRadius: "var(--bq-icon-size)",
          '[dir="rtl"] &': {
            "--_bq-icon-left": "0",
            "--_bq-icon-right": "calc(var(--bq-icon-size) / -2)"
          }
        },
        ".blockquote-cite": {
          display: "block",
          marginTop: "var(--raikou-spacing-md)",
          opacity: "0.6",
          fontSize: "85%"
        }
      });
    };
  }
});

// ../components/Breadcrumbs/src/Breadcrumbs.plugin.ts
var require_Breadcrumbs_plugin = __commonJS({
  "../components/Breadcrumbs/src/Breadcrumbs.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".breadcrumbs-root": {
          display: "flex",
          alignItems: "center"
        },
        ".breadcrumbs-breadcrumb": {
          lineHeight: "1",
          whiteSpace: "nowrap",
          "-webkit-tap-highlight-color": "transparent"
        },
        ".breadcrumbs-separator": {
          marginLeft: "var(--bc-separator-margin)",
          marginRight: "var(--bc-separator-margin)",
          color: "var(--_separator-color)",
          lineHeight: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '[data-raikou-color-scheme="light"] &': {
            "--_separator-color": "var(--raikou-breadcrumbs-separator-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_separator-color": "var(--raikou-breadcrumbs-separator-color)"
          }
        }
      });
    };
  }
});

// ../components/Burger/src/Burger.plugin.ts
var require_Burger_plugin = __commonJS({
  "../components/Burger/src/Burger.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".burger-root": {
          "--burger-size-xs": rem2("12px"),
          "--burger-size-sm": rem2("18px"),
          "--burger-size-md": rem2("24px"),
          "--burger-size-lg": rem2("34px"),
          "--burger-size-xl": rem2("42px"),
          width: "calc(var(--burger-size) + var(--raikou-spacing-xs))",
          height: "calc(var(--burger-size) + var(--raikou-spacing-xs))",
          padding: "calc(var(--raikou-spacing-xs) / 2)",
          cursor: "pointer",
          "--_burger-color": "var(--burger-color, var(--__burger-color))",
          '[data-raikou-color-scheme="light"] &': {
            "--__burger-color": "var(--raikou-burger-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--__burger-color": "var(--raikou-burger-color)"
          }
        },
        ".burger-burger": {
          position: "relative",
          userSelect: "none",
          "&, &::before, &::after": {
            display: "block",
            width: "var(--burger-size)",
            height: "calc(var(--burger-size) / 12)",
            backgroundColor: "var(--_burger-color)",
            outline: `${rem2("1px")} solid transparent`,
            transitionProperty: "background-color, transform",
            transitionDuration: "var(--burger-transition-duration)",
            transitionTimingFunction: "var(--burger-transition-timing-function)"
          },
          "&::before, &::after": {
            position: "absolute",
            content: '""',
            left: "0"
          },
          "&::before": {
            top: "calc(var(--burger-size) / -3)"
          },
          "&::after": {
            top: "calc(var(--burger-size) / 3)"
          },
          "&[data-opened]": {
            backgroundColor: "transparent",
            "&::before": {
              transform: "translateY(calc(var(--burger-size) / 3)) rotate(45deg)"
            },
            "&::after": {
              transform: "translateY(calc(var(--burger-size) / -3)) rotate(-45deg)"
            }
          }
        }
      });
    };
  }
});

// ../components/Button/src/Button.plugin.ts
var require_Button_plugin = __commonJS({
  "../components/Button/src/Button.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".button-root.button-root": {
          "--button-height-xs": rem2("30px"),
          "--button-height-sm": rem2("36px"),
          "--button-height-md": rem2("42px"),
          "--button-height-lg": rem2("50px"),
          "--button-height-xl": rem2("60px"),
          "--button-height-compact-xs": rem2("22px"),
          "--button-height-compact-sm": rem2("26px"),
          "--button-height-compact-md": rem2("30px"),
          "--button-height-compact-lg": rem2("34px"),
          "--button-height-compact-xl": rem2("40px"),
          "--button-padding-x-xs": rem2("14px"),
          "--button-padding-x-sm": rem2("18px"),
          "--button-padding-x-md": rem2("22px"),
          "--button-padding-x-lg": rem2("26px"),
          "--button-padding-x-xl": rem2("32px"),
          "--button-padding-x-compact-xs": rem2("7px"),
          "--button-padding-x-compact-sm": rem2("8px"),
          "--button-padding-x-compact-md": rem2("10px"),
          "--button-padding-x-compact-lg": rem2("12px"),
          "--button-padding-x-compact-xl": rem2("14px"),
          userSelect: "none",
          fontWeight: "600",
          position: "relative",
          lineHeight: "1",
          textAlign: "center",
          width: "var(--_button-width, auto)",
          cursor: "var(--_button-cursor, pointer)",
          display: "var(--_button-display, inline-block)",
          borderRadius: "var(--button-radius)",
          fontSize: "var(--button-fz)",
          background: "var(--_button-bg, var(--button-bg))",
          border: "var(--_button-bd, var(--button-bd))",
          color: "var(--_button-color, var(--button-color))",
          height: "var(--button-height)",
          paddingLeft: "var(--_button-padding-left, var(--button-padding-x))",
          paddingRight: "var(--_button-padding-right, var(--button-padding-x))",
          "&[data-block]": {
            "--_button-display": "block",
            "--_button-width": "100%"
          },
          "&[data-with-left-section]": {
            "--_button-padding-left": "calc(var(--button-padding-x) / 1.5)",
            '[dir="rtl"] &': {
              "--_button-padding-left": "var(--button-padding-x)",
              "--_button-padding-right": "calc(var(--button-padding-x) / 1.5)"
            }
          },
          "&[data-with-right-section]": {
            "--_button-padding-right": "calc(var(--button-padding-x) / 1.5)",
            '[dir="rtl"] &': {
              "--_button-padding-right": "var(--button-padding-x)",
              "--_button-padding-left": "calc(var(--button-padding-x) / 1.5)"
            }
          },
          "&:disabled:not([data-loading]), &[data-disabled]:not([data-loading])": {
            "--_button-cursor": "not-allowed",
            "--_button-bg": "var(--_disabled-bg)",
            "--_button-color": "var(--_disabled-color)",
            transform: "none"
          },
          "&[data-loading]": {
            "--_button-cursor": "not-allowed",
            transform: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: rem2("-1px"),
              borderRadius: "var(--button-radius)",
              backgroundColor: "var(--_button-loading-overlay-bg)"
            }
          },
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-loading]):not(:disabled):not([data-disabled])": {
                "--_button-bg": "var(--button-hover)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-loading]):not(:disabled):not([data-disabled])": {
                "--_button-bg": "var(--button-hover)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_disabled-color": "var(--raikou-button-disabled-color)",
            "--_disabled-bg": "var(--raikou-button-disabled-bg)",
            "--_button-loading-overlay-bg": "var(--raikou-button-loading-overlay-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_disabled-color": "var(--raikou-button-disabled-color)",
            "--_disabled-bg": "var(--raikou-button-disabled-bg)",
            "--_button-loading-overlay-bg": "var(--raikou-button-loading-overlay-bg)"
          }
        },
        ".button-inner": {
          display: "flex",
          alignItems: "center",
          justifyContent: "var(--button-justify, center)",
          height: "100%",
          overflow: "visible"
        },
        ".button-label": {
          whiteSpace: "nowrap",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          opacity: "var(--_button-label-opacity, 1)",
          "&[data-loading]": {
            "--_button-label-opacity": "0.2"
          }
        },
        ".button-section": {
          display: "flex",
          alignItems: "center",
          marginRight: "var(--_button-section-margin-right)",
          marginLeft: "var(--_button-section-margin-left)",
          '&[data-position="left"]': {
            "--_button-section-margin-right": "var(--raikou-spacing-xs)",
            '[dir="rtl"] &': {
              "--_button-section-margin-right": "0",
              "--_button-section-margin-left": "var(--raikou-spacing-xs)"
            }
          },
          '&[data-position="right"]': {
            "--_button-section-margin-left": "var(--raikou-spacing-xs)",
            '[dir="rtl"] &': {
              "--_button-section-margin-left": "0",
              "--_button-section-margin-right": "var(--raikou-spacing-xs)"
            }
          }
        },
        ".button-loader": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        },
        ".buttonGroup-root": {
          display: "flex",
          '&[data-orientation="horizontal"]': {
            flexDirection: "row",
            "& [data-button]": {
              "&:not(:only-child):first-child": {
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0",
                borderRightWidth: "calc(var(--button-border-width) / 2)"
              },
              "&:not(:only-child):last-child": {
                borderBottomLeftRadius: "0",
                borderTopLeftRadius: "0",
                borderLeftWidth: "calc(var(--button-border-width) / 2)"
              },
              "&:not(:only-child):not(:first-child):not(:last-child)": {
                borderRadius: "0",
                borderRightWidth: "calc(var(--button-border-width) / 2)",
                borderLeftWidth: "calc(var(--button-border-width) / 2)"
              }
            }
          },
          '&[data-orientation="vertical"]': {
            flexDirection: "column",
            "& [data-button]": {
              "&:not(:only-child):first-child": {
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                borderBottomWidth: "calc(var(--button-border-width) / 2)"
              },
              "&:not(:only-child):last-child": {
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                borderTopWidth: "calc(var(--button-border-width) / 2)"
              },
              "&:not(:only-child):not(:first-child):not(:last-child)": {
                borderRadius: "0",
                borderBottomWidth: "calc(var(--button-border-width) / 2)",
                borderTopWidth: "calc(var(--button-border-width) / 2)"
              }
            }
          }
        }
      });
    };
  }
});

// ../components/Card/src/Card.plugin.ts
var require_Card_plugin = __commonJS({
  "../components/Card/src/Card.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".card-root.card-root": {
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--_card-bg)",
          padding: "var(--card-padding)",
          color: "var(--raikou-color-text)",
          '[data-raikou-color-scheme="light"] &': {
            "--_card-bg": "var(--raikou-color-white)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_card-bg": "var(--raikou-color-dark-6)"
          }
        },
        ".card-section.card-section": {
          display: "block",
          marginLeft: "calc(var(--card-padding) * -1)",
          marginRight: "calc(var(--card-padding) * -1)",
          paddingLeft: "var(--_card-section-padding, 0)",
          paddingRight: "var(--_card-section-padding, 0)",
          borderTop: "var(--_card-section-border-top, unset)",
          borderBottom: "var(--_card-section-border-bottom, unset)",
          marginTop: "var(--_card-section-mt)",
          marginBottom: "var(--_card-section-mb)",
          "&[data-first-section]": {
            "--_card-section-mt": "calc(var(--card-padding) * -1)",
            "--_card-section-border-top": "none !important"
          },
          "&[data-last-section]": {
            "--_card-section-mb": "calc(var(--card-padding) * -1)",
            "--_card-section-border-bottom": "none !important"
          },
          "&[data-inherit-padding]": {
            "--_card-section-padding": "var(--card-padding)"
          },
          "&[data-with-border]": {
            "--_card-section-border-top": `${rem2(
              "1px"
            )} solid var(--_card-section-border-color)`,
            "--_card-section-border-bottom": `${rem2(
              "1px"
            )} solid var(--_card-section-border-color)`
          },
          "& + &": {
            "--_card-section-border-top": "none !important"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_card-section-border-color": "var(--raikou-card-section-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_card-section-border-color": "var(--raikou-card-section-border-color)"
          }
        }
      });
    };
  }
});

// ../components/Center/src/Center.plugin.ts
var require_Center_plugin = __commonJS({
  "../components/Center/src/Center.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".center-root": {
          display: "var(--center-display)",
          alignItems: "center",
          justifyContent: "center"
        }
      });
    };
  }
});

// ../components/Checkbox/src/Checkbox.plugin.ts
var require_Checkbox_plugin = __commonJS({
  "../components/Checkbox/src/Checkbox.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".checkbox-root": {
          "--checkbox-size-xs": rem2("16px"),
          "--checkbox-size-sm": rem2("20px"),
          "--checkbox-size-md": rem2("24px"),
          "--checkbox-size-lg": rem2("30px"),
          "--checkbox-size-xl": rem2("36px")
        },
        ".checkbox-inner": {
          position: "relative",
          width: "var(--checkbox-size)",
          height: "var(--checkbox-size)",
          order: "var(--_checkbox-inner-order, 1)",
          "&[data-label-position='left']": {
            "--_checkbox-inner-order": "2"
          }
        },
        ".checkbox-input": {
          appearance: "none",
          backgroundColor: "var(--_checkbox-bg)",
          border: `${rem2("1px")} solid var(--_checkbox-bd-color)`,
          width: "var(--checkbox-size)",
          height: "var(--checkbox-size)",
          borderRadius: "var(--checkbox-radius)",
          padding: "0",
          display: "block",
          margin: "0",
          transition: "border-color 100ms ease, background-color 100ms ease",
          cursor: "var(--_checkbox-cursor, var(--raikou-cursor-type))",
          '[data-raikou-color-scheme="light"] &': {
            "--_checkbox-bg": "var(--raikou-checkbox-bg)",
            "--_checkbox-bd-color": "var(--raikou-checkbox-bd-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_checkbox-bg": "var(--raikou-checkbox-bg)",
            "--_checkbox-bd-color": "var(--raikou-checkbox-bd-color)"
          },
          "&[data-error]": {
            "--_checkbox-bd-color": "var(--raikou-color-error)"
          },
          "&[data-indeterminate], &:checked": {
            "[data-raikou-color-scheme] &": {
              "--_checkbox-bg": "var(--checkbox-color)",
              "--_checkbox-bd-color": "var(--checkbox-color)",
              "& + .checkbox-icon": {
                "--_checkbox-icon-opacity": "1",
                "--_checkbox-icon-transform": "none"
              }
            }
          },
          "&:disabled": {
            "--_checkbox-cursor": "not-allowed",
            '[data-raikou-color-scheme="light"] &': {
              "--_checkbox-bg": "var(--raikou-checkbox-disabled-bg)",
              "--_checkbox-bd-color": "var(--raikou-checkbox-disabled-bd-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_checkbox-bg": "var(--raikou-checkbox-disabled-bg)",
              "--_checkbox-bd-color": "var(--raikou-checkbox-disabled-bd-color)"
            },
            "& + .checkbox-icon": {
              '[data-raikou-color-scheme="light"] &': {
                "--_checkbox-icon-color": "var(--raikou-checkbox-disabled-icon-color)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_checkbox-icon-color": "var(--raikou-checkbox-disabled-icon-color)"
              }
            }
          }
        },
        ".checkbox-icon": {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          width: "60%",
          margin: "auto",
          color: "var(--_checkbox-icon-color, var(--raikou-checkbox-icon-color))",
          pointerEvents: "none",
          transform: `var(--_checkbox-icon-transform, translateY(${rem2(
            "5px"
          )}) scale(0.5))`,
          opacity: "var(--_checkbox-icon-opacity, 0)",
          transition: "transform 100ms ease, opacity 100ms ease"
        }
      });
    };
  }
});

// ../components/Chip/src/Chip.plugin.ts
var require_Chip_plugin = __commonJS({
  "../components/Chip/src/Chip.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".chip-root": {
          "--chip-size-xs": rem2("23px"),
          "--chip-size-sm": rem2("28px"),
          "--chip-size-md": rem2("32px"),
          "--chip-size-lg": rem2("36px"),
          "--chip-size-xl": rem2("40px"),
          "--chip-icon-size-xs": rem2("10px"),
          "--chip-icon-size-sm": rem2("12px"),
          "--chip-icon-size-md": rem2("14px"),
          "--chip-icon-size-lg": rem2("16px"),
          "--chip-icon-size-xl": rem2("18px"),
          "--chip-padding-xs": rem2("16px"),
          "--chip-padding-sm": rem2("20px"),
          "--chip-padding-md": rem2("24px"),
          "--chip-padding-lg": rem2("28px"),
          "--chip-padding-xl": rem2("32px"),
          "--chip-checked-padding-xs": rem2("7.5px"),
          "--chip-checked-padding-sm": rem2("10px"),
          "--chip-checked-padding-md": rem2("11.7px"),
          "--chip-checked-padding-lg": rem2("13.5px"),
          "--chip-checked-padding-xl": rem2("12.5px"),
          "--chip-spacing-xs": rem2("10px"),
          "--chip-spacing-sm": rem2("12px"),
          "--chip-spacing-md": rem2("16px"),
          "--chip-spacing-lg": rem2("20px"),
          "--chip-spacing-xl": rem2("22px")
        },
        ".chip-label": {
          display: "inline-flex",
          alignItems: "center",
          userSelect: "none",
          borderRadius: "var(--chip-radius)",
          height: "var(--chip-size)",
          fontSize: "var(--chip-fz)",
          lineHeight: `calc(var(--chip-size) - ${rem2("2px")})`,
          paddingLeft: "var(--_chip-padding, var(--chip-padding))",
          paddingRight: "var(--_chip-padding, var(--chip-padding))",
          cursor: "var(--_chip-cursor, pointer)",
          whiteSpace: "nowrap",
          "-webkit-tap-highlight-color": "transparent",
          border: `${rem2("1px")} solid transparent`,
          backgroundColor: "var(--_chip-bg)",
          color: "var(--_chip-color, var(--raikou-color-text))",
          "&[data-checked]": {
            "--_chip-padding": "var(--chip-checked-padding)"
          },
          "&[data-disabled]": {
            "--_chip-bg": "var(--raikou-chip-bg-disabled)",
            "--_chip-color": "var(--raikou-chip-color-disabled)",
            "--_chip-cursor": "not-allowed"
          }
        },
        ".chip-root[data-variant='outline'] .chip-label:not([data-disabled])": {
          backgroundColor: "var(--_chip-bg)",
          border: "var(--_chip-bd)",
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-outline-hover-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-outline-hover-bg)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-outline-active-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-outline-active-bg)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_chip-bg": "var(--raikou-chip-outline-bg)",
            "--_chip-bd": `${rem2("1px")} solid var(--raikou-chip-outline-bd)`
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_chip-bg": "var(--raikou-chip-outline-bg)",
            "--_chip-bd": `${rem2("1px")} solid var(--raikou-chip-outline-bd)`
          },
          "[data-raikou-color-scheme] &[data-checked]": {
            "--_chip-bd": "var(--chip-bd)",
            "--_chip-icon-color": "var(--chip-color)",
            "@media (hover: hover)": {
              "&:hover": {
                "--_chip-bg": "var(--chip-hover)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_chip-bg": "var(--chip-hover)"
              }
            }
          }
        },
        ".chip-root[data-variant='filled'] .chip-label:not([data-disabled])": {
          backgroundColor: "var(--_chip-bg)",
          border: `${rem2("1px")} solid transparent`,
          color: "var(--_chip-color, var(--raikou-color-text))",
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-filled-hover-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-filled-hover-bg)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-filled-active-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-filled-active-bg)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_chip-bg": "var(--raikou-chip-filled-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_chip-bg": "var(--raikou-chip-filled-bg)"
          },
          "[data-raikou-color-scheme] &[data-checked]": {
            "--_chip-icon-color": "var(--chip-color)",
            "--_chip-color": "var(--chip-color)",
            "--_chip-bg": "var(--chip-bg)",
            "@media (hover: hover)": {
              "&:hover": {
                "--_chip-bg": "var(--chip-hover)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_chip-bg": "var(--chip-hover)"
              }
            }
          }
        },
        ".chip-root[data-variant='light'] .chip-label:not([data-disabled])": {
          backgroundColor: "var(--_chip-bg)",
          border: `${rem2("1px")} solid transparent`,
          color: "var(--_chip-color, var(--raikou-color-text))",
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-light-hover-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-light-hover-bg)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_chip-bg": "var(--raikou-chip-filled-active-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_chip-bg": "var(--raikou-chip-light-active-bg)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_chip-bg": "var(--raikou-chip-light-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_chip-bg": "var(--raikou-chip-light-bg)"
          },
          "[data-raikou-color-scheme] &[data-checked]": {
            "--_chip-icon-color": "var(--chip-color)",
            "--_chip-color": "var(--chip-color)",
            "--_chip-bg": "var(--chip-bg)",
            "@media (hover: hover)": {
              "&:hover": {
                "--_chip-bg": "var(--chip-hover)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_chip-bg": "var(--chip-hover)"
              }
            }
          }
        },
        ".chip-iconWrapper": {
          width: "calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))",
          maxWidth: "calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))",
          height: "var(--chip-icon-size)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        },
        ".chip-checkIcon": {
          width: "var(--chip-icon-size)",
          height: "var(--chip-icon-size)",
          display: "block",
          color: "var(--_chip-icon-color, inherit)"
        },
        ".chip-input": {
          width: "0",
          height: "0",
          padding: "0",
          opacity: "0",
          margin: "0",
          "&:focus-visible + .label": {
            outline: `${rem2("2px")} solid var(--raikou-color-primary)`,
            outlineOffset: rem2("2px")
          }
        }
      });
    };
  }
});

// ../components/Code/src/Code.plugin.ts
var require_Code_plugin = __commonJS({
  "../components/Code/src/Code.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".code-root": {
          fontFamily: "var(--raikou-font-family-monospace)",
          lineHeight: "var(--raikou-line-height)",
          padding: `var(--_code-padding, ${rem2(
            "2px"
          )} calc(var(--raikou-spacing-xs) / 2))`,
          borderRadius: "var(--raikou-radius-sm)",
          fontSize: "var(--raikou-font-size-xs)",
          backgroundColor: "var(--_code-bg)",
          color: "var(--_code-color)",
          margin: "0",
          overflow: "auto",
          '[data-raikou-color-scheme="light"] &': {
            "--_code-bg": "var(--code-bg, var(--raikou-code-bg))",
            "--_code-color": "var(--raikou-code-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_code-bg": "var(--code-bg, var(--raikou-code-bg))",
            "--_code-color": "var(--raikou-code-color)"
          },
          "&[data-block]": {
            "--_code-padding": "var(--raikou-spacing-xs)"
          }
        }
      });
    };
  }
});

// ../components/ColorInput/src/ColorInput.plugin.ts
var require_ColorInput_plugin = __commonJS({
  "../components/ColorInput/src/ColorInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".colorInput-eyeDropperIcon": {
          "--ci-eye-dropper-icon-size-xs": rem2("14px"),
          "--ci-eye-dropper-icon-size-sm": rem2("16px"),
          "--ci-eye-dropper-icon-size-md": rem2("18px"),
          "--ci-eye-dropper-icon-size-lg": rem2("20px"),
          "--ci-eye-dropper-icon-size-xl": rem2("22px")
        },
        ".colorInput-colorPreview": {
          "--ci-preview-size-xs": rem2("16px"),
          "--ci-preview-size-sm": rem2("18px"),
          "--ci-preview-size-md": rem2("22px"),
          "--ci-preview-size-lg": rem2("28px"),
          "--ci-preview-size-xl": rem2("36px")
        }
      });
    };
  }
});

// ../components/ColorPicker/src/ColorPicker.plugin.ts
var require_ColorPicker_plugin = __commonJS({
  "../components/ColorPicker/src/ColorPicker.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".colorPicker-wrapper": {
          "--cp-width-xs": rem2("180px"),
          "--cp-width-sm": rem2("200px"),
          "--cp-width-md": rem2("240px"),
          "--cp-width-lg": rem2("280px"),
          "--cp-width-xl": rem2("320px"),
          "--cp-preview-size-xs": rem2("26px"),
          "--cp-preview-size-sm": rem2("34px"),
          "--cp-preview-size-md": rem2("42px"),
          "--cp-preview-size-lg": rem2("50px"),
          "--cp-preview-size-xl": rem2("54px"),
          "--cp-thumb-size-xs": rem2("8px"),
          "--cp-thumb-size-sm": rem2("12px"),
          "--cp-thumb-size-md": rem2("16px"),
          "--cp-thumb-size-lg": rem2("20px"),
          "--cp-thumb-size-xl": rem2("22px"),
          "--cp-saturation-height-xs": rem2("100px"),
          "--cp-saturation-height-sm": rem2("110px"),
          "--cp-saturation-height-md": rem2("120px"),
          "--cp-saturation-height-lg": rem2("140px"),
          "--cp-saturation-height-xl": rem2("160px"),
          width: "var(--cp-width)",
          padding: rem2("1px")
        },
        ".colorPicker-preview": {
          width: "var(--cp-preview-size)",
          height: "var(--cp-preview-size)"
        },
        ".colorPicker-body": {
          display: "flex",
          paddingTop: "calc(var(--cp-body-spacing) / 2)"
        },
        ".colorPicker-sliders": {
          flex: "1",
          "&:not(:only-child)": {
            marginRight: "var(--raikou-spacing-xs)"
          }
        },
        ".colorPicker-thumb": {
          overflow: "hidden",
          position: "absolute",
          boxShadow: `0 0 ${rem2("1px")} rgba(0, 0, 0, 0.6)`,
          border: `${rem2("2px")} solid var(--raikou-color-white)`,
          width: "var(--cp-thumb-size)",
          height: "var(--cp-thumb-size)",
          borderRadius: "var(--cp-thumb-size)",
          outline: "var(--_outline)",
          left: "calc(var(--_thumb-x-offset) - var(--cp-thumb-size) / 2)",
          top: "calc(var(--_thumb-y-offset) - var(--cp-thumb-size) / 2)"
        },
        /* Duplicate class to increase specificity */
        ".colorPicker-swatch.colorPicker-swatch": {
          height: "0",
          margin: rem2("2px"),
          cursor: "pointer",
          width: `calc(var(--cp-swatch-size) - ${rem2("4px")})`,
          paddingBottom: `calc(var(--cp-swatch-size) - ${rem2("4px")})`,
          minWidth: "0",
          minHeight: "0"
        },
        ".colorPicker-swatches": {
          marginTop: rem2("5px"),
          marginLeft: rem2("-2px"),
          marginRight: rem2("-2px"),
          display: "flex",
          flexWrap: "wrap"
        },
        ".colorPicker-saturation": {
          "-webkit-tap-highlight-color": "transparent",
          position: "relative",
          height: "var(--cp-saturation-height)",
          borderRadius: "var(--raikou-radius-sm)",
          margin: "calc(var(--cp-thumb-size) / 2)",
          "&[data-focus-ring='auto']": {
            "&:focus:focus-visible": {
              "& .thumb": {
                "--_outline": `${rem2("2px")} solid var(--raikou-color-blue-filled)`
              }
            }
          },
          "&[data-focus-ring='always']": {
            "&:focus": {
              "& .thumb": {
                "--_outline": `${rem2("2px")} solid var(--raikou-color-blue-filled)`
              }
            }
          }
        },
        ".colorPicker-saturationOverlay": {
          position: "absolute",
          borderRadius: "var(--raikou-radius-sm)",
          inset: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem2("1px")})`
        },
        ".colorPicker-slider": {
          position: "relative",
          height: ` calc(var(--cp-thumb-size) + ${rem2("2px")})`,
          marginLeft: "calc(var(--cp-thumb-size) / 2)",
          marginRight: "calc(var(--cp-thumb-size) / 2)",
          outline: "none",
          "& + &": {
            marginTop: rem2("6px")
          },
          "&[data-focus-ring='auto']": {
            "&:focus:focus-visible": {
              "& .thumb": {
                "--_outline": `${rem2("2px")} solid var(--raikou-color-blue-filled)`
              }
            }
          },
          "&[data-focus-ring='always']": {
            "&:focus": {
              "& .thumb": {
                "--_outline": `${rem2("2px")} solid var(--raikou-color-blue-filled)`
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_slider-checkers": "var(--raikou-colorpicker-slider-checkers)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_slider-checkers": "var(--raikou-colorpicker-slider-checkers)"
          }
        },
        ".colorPicker-sliderOverlay": {
          position: "absolute",
          top: "0",
          bottom: "0",
          left: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem2("1px")})`,
          right: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem2("1px")})`,
          borderRadius: "10000rem"
        }
      });
    };
  }
});

// ../components/ColorSwatch/src/ColorSwatch.plugin.ts
var require_ColorSwatch_plugin = __commonJS({
  "../components/ColorSwatch/src/ColorSwatch.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".colorswatch-root": {
          "-webkit-tap-highlight-color": "transparent",
          border: "none",
          appearance: "none",
          display: "block",
          lineHeight: "1",
          position: "relative",
          width: "var(--cs-size)",
          height: "var(--cs-size)",
          minWidth: "var(--cs-size)",
          minHeight: "var(--cs-size)",
          borderRadius: "var(--cs-radius)",
          color: "inherit",
          textDecoration: "none",
          '[data-raikou-color-scheme="light"] &': {
            "--_alpha-overlay-color": "var(--raikou-colorswatch-alpha-overlay-color)",
            "--_alpha-overlay-bg": "var(--raikou-colorswatch-alpha-overlay-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_alpha-overlay-color": "var(--raikou-colorswatch-alpha-overlay-color)",
            "--_alpha-overlay-bg": "var(--raikou-colorswatch-alpha-overlay-bg)"
          }
        },
        ".colorswatch-colorOverlay": {
          position: "absolute",
          inset: "0",
          borderRadius: "var(--cs-radius)"
        },
        ".colorswatch-shadowOverlay": {
          position: "absolute",
          inset: "0",
          borderRadius: "var(--cs-radius)",
          zIndex: "1",
          boxShadow: `rgba(0, 0, 0, 0.1) 0 0 0 ${rem2(
            "1px"
          )} inset, rgb(0, 0, 0, 0.15) 0 0 ${rem2("4px")} inset`
        },
        ".colorswatch-alphaOverlay": {
          position: "absolute",
          inset: "0",
          borderRadius: "var(--cs-radius)",
          backgroundSize: `${rem2("8px")} ${rem2("8px")}`,
          backgroundPosition: `0 0, 0 ${rem2("4px")}, ${rem2("4px")} ${rem2(
            "-4px"
          )}, ${rem2("-4px")} 0`,
          backgroundImage: `linear-gradient(
          45deg,
          var(--_alpha-overlay-color) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--_alpha-overlay-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--_alpha-overlay-color) 75%),
        linear-gradient(
          -45deg,
          var(--_alpha-overlay-bg) 75%,
          var(--_alpha-overlay-color) 75%
        )`
        },
        ".colorswatch-childrenOverlay": {
          position: "absolute",
          inset: "0",
          borderRadius: "var(--cs-radius)",
          zIndex: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      });
    };
  }
});

// ../components/Combobox/src/Combobox.plugin.ts
var require_Combobox_plugin = __commonJS({
  "../components/Combobox/src/Combobox.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".comboBox-dropdown.comboBox-dropdown": {
          padding: "var(--combobox-padding)",
          "&[data-hidden]": {
            display: "none"
          }
        },
        /* Variables must be both on dropdown and options to support usage of Combobox.Options without Combobox.Dropdown */
        ".comboBox-dropdown, .comboBox-options": {
          "--combobox-option-padding-xs": `${rem2("4px")} ${rem2("8px")}`,
          "--combobox-option-padding-sm": `${rem2("6px")} ${rem2("10px")}`,
          "--combobox-option-padding-md": `${rem2("8px")} ${rem2("12px")}`,
          "--combobox-option-padding-lg": `${rem2("10px")} ${rem2("16px")}`,
          "--combobox-option-padding-xl": `${rem2("14px")} ${rem2("20px")}`
        },
        ".comboBox-option": {
          padding: "var(--combobox-option-padding)",
          fontSize: "var(--combobox-option-fz)",
          borderRadius: "var(--raikou-radius-default)",
          backgroundColor: "var(--_option-bg, transparent)",
          color: "var(--_option-color, inherit)",
          opacity: "var(--_option-opacity, 1)",
          cursor: "var(--_option-cursor, pointer)",
          wordBreak: "break-word",
          "&[data-combobox-selected]": {
            "--_option-bg": "var(--raikou-color-primary)",
            "--_option-color": "var(--raikou-color-white)"
          },
          "&[data-combobox-disabled]": {
            "--_option-cursor": "not-allowed",
            "--_option-opacity": "0.35"
          },
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-combobox-selected], [data-combobox-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_option-bg": "var(--raikou-combobox-option-hover-bg)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_option-bg": "var(--raikou-combobox-option-hover-bg)"
                }
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-combobox-selected], [data-combobox-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_option-bg": "var(--raikou-combobox-option-active-bg)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_option-bg": "var(--raikou-combobox-option-active-bg)"
                }
              }
            }
          }
        },
        ".comboBox-search": {
          marginLeft: "calc(var(--combobox-padding) * -1)",
          marginRight: "calc(var(--combobox-padding) * -1)",
          marginTop: "calc(var(--combobox-padding) * -1)",
          width: "calc(100% + var(--combobox-padding) * 2)",
          borderTopWidth: "0",
          borderRightWidth: "0",
          borderLeftWidth: "0",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          marginBottom: "var(--combobox-padding)",
          backgroundColor: "var(--_search_background)",
          position: "relative",
          zIndex: "1000",
          "&, &:focus": {
            "border-color": "var(--_search-border-color)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_search-border-color": "var(--raikou-combobox-search-border-color)",
            "--_search_background": "var(--raikou-combobox-search_background)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_search-border-color": "var(--raikou-combobox-search-border-color)",
            "--_search_background": "var(--raikou-combobox-search_background)"
          }
        },
        ".comboBox-empty": {
          fontSize: "var(--combobox-option-fz)",
          textAlign: "center",
          padding: "var(--combobox-option-padding)",
          color: "var(--raikou-color-dimmed)"
        },
        ".comboBox-header, .comboBox-footer": {
          fontSize: "var(--combobox-option-fz)",
          border: "0 solid var(--_footer-border-color)",
          marginLeft: "calc(var(--combobox-padding) * -1)",
          marginRight: "calc(var(--combobox-padding) * -1)",
          padding: "var(--combobox-option-padding)",
          '[data-raikou-color-scheme="light"] &': {
            "--_footer-border-color": "var(--raikou-combobox-footer-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_footer-border-color": "var(--raikou-combobox-footer-border-color)"
          }
        },
        ".comboBox-footer": {
          borderTopWidth: rem2("1px"),
          marginTop: "var(--combobox-padding)",
          marginBottom: "calc(var(--combobox-padding) * -1)"
        },
        ".comboBox-header": {
          borderBottomWidth: rem2("1px"),
          marginBottom: "var(--combobox-padding)",
          marginTop: "calc(var(--combobox-padding) * -1)"
        },
        ".comboBox-group": {
          "&:has(.groupLabel:only-child)": {
            display: "none"
          }
        },
        ".comboBox-groupLabel": {
          color: "var(--raikou-color-dimmed)",
          fontSize: "calc(var(--combobox-option-fz) * 0.85)",
          padding: "var(--combobox-option-padding)",
          fontWeight: "500",
          position: "relative",
          display: "flex",
          alignItems: "center",
          "&::after": {
            content: '""',
            flex: "1",
            left: "0",
            right: "0",
            height: rem2("1px"),
            marginLeft: "var(--raikou-spacing-xs)",
            backgroundColor: "var(--_divider-bg)",
            '[data-raikou-color-scheme="light"] &': {
              "--_divider-bg": "var(--raikou-combobox-divider-bg)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_divider-bg": "var(--raikou-combobox-divider-bg)"
            }
          },
          "&:only-child": {
            display: "none"
          }
        },
        ".comboBox-chevron": {
          "--combobox-chevron-size-xs": rem2("14px"),
          "--combobox-chevron-size-sm": rem2("18px"),
          "--combobox-chevron-size-md": rem2("20px"),
          "--combobox-chevron-size-lg": rem2("24px"),
          "--combobox-chevron-size-xl": rem2("28px"),
          width: "var(--combobox-chevron-size)",
          height: "var(--combobox-chevron-size)",
          color: "var(--_color)",
          '[data-raikou-color-scheme="light"] &': {
            "--_color": "var(--raikou-combobox-chevron-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_color": "var(--raikou-combobox-chevron-color)"
          },
          "&[data-error]": {
            "--_color": "var(--raikou-color-error)"
          }
        },
        ".comboBox-optionsDropdownScrollArea": {
          "margin-right": "calc(var(--combobox-padding) * -1)",
          '[dir="rtl"] &': {
            marginLeft: "calc(var(--combobox-padding) * -1)",
            marginRight: "0"
          }
        },
        ".comboBox-optionsDropdownOption": {
          display: "flex",
          alignItems: "center",
          flexDirection: "var(--_flex-direction, row)",
          gap: rem2("8px"),
          "&[data-reverse]": {
            justifyContent: "space-between"
          }
        },
        ".comboBox-optionsDropdownCheckIcon": {
          opacity: "0.4",
          width: "0.8em",
          height: "0.8em",
          "[data-combobox-selected] &": {
            opacity: "1"
          }
        }
      });
    };
  }
});

// ../components/Container/src/Container.plugin.ts
var require_Container_plugin = __commonJS({
  "../components/Container/src/Container.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".container-root": {
          "--container-size-xs": rem2("540px"),
          "--container-size-sm": rem2("720px"),
          "--container-size-md": rem2("960px"),
          "--container-size-lg": rem2("1140px"),
          "--container-size-xl": rem2("1320px"),
          paddingLeft: "var(--raikou-spacing-md)",
          paddingRight: "var(--raikou-spacing-md)",
          maxWidth: "var(--container-size)",
          marginLeft: "auto",
          marginRight: "auto"
        }
      });
    };
  }
});

// ../components/Dialog/src/Dialog.plugin.ts
var require_Dialog_plugin = __commonJS({
  "../components/Dialog/src/Dialog.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".dialog-root": {
          "--dialog-size-xs": rem2("160px"),
          "--dialog-size-sm": rem2("200px"),
          "--dialog-size-md": rem2("340px"),
          "--dialog-size-lg": rem2("400px"),
          "--dialog-size-xl": rem2("500px"),
          position: "relative",
          width: "var(--dialog-size)",
          maxwidth: "calc(100vw - var(--raikou-spacing-xl) * 2)",
          minHeight: rem2("50px")
        },
        ".dialog-closeButton": {
          position: "absolute",
          top: "calc(var(--raikou-spacing-md) / 2)",
          right: "var(--_close-button-right, calc(var(--raikou-spacing-md) / 2))",
          left: "var(--_close-button-left, auto)",
          '[dir="rtl"] &': {
            "--_close-button-right": "auto",
            "--_close-button-left": "calc(var(--raikou-spacing-md) / 2)"
          }
        }
      });
    };
  }
});

// ../components/Divider/src/Divider.plugin.ts
var require_Divider_plugin = __commonJS({
  "../components/Divider/src/Divider.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".divider-root": {
          "--divider-size-xs": rem2("1px"),
          "--divider-size-sm": rem2("2px"),
          "--divider-size-md": rem2("3px"),
          "--divider-size-lg": rem2("4px"),
          "--divider-size-xl": rem2("5px"),
          '[data-raikou-color-scheme="light"] &': {
            "--_divider-color": "var(--raikou-divider-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_divider-color": "var(--raikou-divider-color)"
          },
          '&[data-orientation="horizontal"]': {
            borderTop: "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))"
          },
          '&[data-orientation="vertical"]': {
            borderLeft: "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
            height: "auto",
            alignSelf: "stretch"
          },
          "&[data-with-label]": {
            border: "0"
          }
        },
        ".divider-label": {
          display: "flex",
          alignItems: "center",
          fontSize: "var(--raikou-font-size-xs)",
          color: "var(--divider-color, var(--raikou-color-dimmed))",
          whiteSpace: "nowrap",
          '&[data-position="left"]': {
            "&::before": {
              display: "none"
            }
          },
          '&[data-position="right"]': {
            "&::after": {
              display: "none"
            }
          },
          "&::before": {
            content: '""',
            flex: "1",
            height: rem2("1px"),
            borderTop: "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
            marginRight: "var(--raikou-spacing-xs)",
            '[dir="rtl"] &': {
              marginRight: "0",
              marginLeft: "var(--raikou-spacing-xs)"
            }
          },
          "&::after": {
            content: '""',
            flex: "1",
            height: rem2("1px"),
            borderTop: "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
            marginLeft: "var(--raikou-spacing-xs)",
            '[dir="rtl"] &': {
              marginLeft: "0",
              marginRight: "var(--raikou-spacing-xs)"
            }
          }
        }
      });
    };
  }
});

// ../components/Drawer/src/Drawer.plugin.ts
var require_Drawer_plugin = __commonJS({
  "../components/Drawer/src/Drawer.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".drawer-root": {
          "--drawer-size-xs": rem2("320px"),
          "--drawer-size-sm": rem2("380px"),
          "--drawer-size-md": rem2("440px"),
          "--drawer-size-lg": rem2("620px"),
          "--drawer-size-xl": rem2("780px")
        },
        ".drawer-header": {
          zIndex: "1000"
        },
        ".drawer-content": {
          "--paper-radius": "0 !important",
          flex: "var(--drawer-flex)",
          height: "var(--drawer-height)",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "0",
          overflowY: "auto"
        },
        ".drawer-inner": {
          display: "flex",
          justifyContent: "var(--drawer-justify)",
          alignItems: "var(--drawer-align)"
        }
      });
    };
  }
});

// ../components/Fieldset/src/Fieldset.plugin.ts
var require_Fieldset_plugin = __commonJS({
  "../components/Fieldset/src/Fieldset.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".fieldset-root": {
          padding: "var(--raikou-spacing-lg)",
          paddingTop: "var(--raikou-spacing-xs)",
          borderRadius: "var(--fieldset-radius)"
        },
        ".fieldset-root[data-variant='default']": {
          backgroundColor: "var(--_bg)",
          border: `${rem2("1px")} solid var(--_bd)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_bd": "var(--raikou-fieldset-default-bd)",
            "--_bg": "var(--raikou-fieldset-default-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bd": "var(--raikou-fieldset-default-bd)",
            "--_bg": "var(--raikou-fieldset-default-bg)"
          }
        },
        ".fieldset-root[data-variant='filled']": {
          backgroundColor: "var(--_bg)",
          border: `${rem2("1px")} solid var(--_bd)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_bd": "var(--raikou-fieldset-filled-bd)",
            "--_bg": "var(--raikou-fieldset-filled-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bd": "var(--raikou-fieldset-filled-bd)",
            "--_bg": "var(--raikou-fieldset-filled-bg)"
          }
        },
        ".fieldset-root[data-variant='unstyled']": {
          padding: "0",
          border: "0",
          borderRadius: "0"
        },
        ".fieldset-legend": {
          fontSize: "var(--raikou-font-size-sm)"
        },
        "[data-variant='unstyled'] .fieldset-legend": {
          padding: "0",
          marginBottom: "var(--raikou-spacing-sm)"
        }
      });
    };
  }
});

// ../components/Flex/src/Flex.plugin.ts
var require_Flex_plugin = __commonJS({
  "../components/Flex/src/Flex.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".flex-root": {
          display: "flex"
        }
      });
    };
  }
});

// ../components/Grid/src/Grid.plugin.ts
var require_Grid_plugin = __commonJS({
  "../components/Grid/src/Grid.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".grid-root": {
          overflow: "hidden"
        },
        ".grid-inner": {
          width: "calc(100% + var(--grid-gutter))",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "var(--grid-justify)",
          alignItems: "var(--grid-align)",
          margin: "calc(var(--grid-gutter) / -2)"
        },
        ".grid-col": {
          flexShrink: "0",
          order: "var(--col-order)",
          flexBasis: "var(--col-flex-basis)",
          width: "var(--col-width)",
          maxWidth: "var(--col-max-width)",
          flexGrow: "var(--col-flex-grow, 0)",
          marginLeft: "var(--_col-ml, var(--col-offset, 0))",
          marginRight: "var(--_col-mr, 0)",
          padding: "calc(var(--grid-gutter) / 2)",
          '[dir="rtl"] &': {
            "--_col-ml": "0",
            "--_col-mr": "var(--col-offset, 0)"
          }
        }
      });
    };
  }
});

// ../components/Group/src/Group.plugin.ts
var require_Group_plugin = __commonJS({
  "../components/Group/src/Group.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".group-root": {
          display: "flex",
          flexDirection: "row",
          flexWrap: "var(--group-wrap, wrap)",
          justifyContent: "var(--group-justify)",
          alignItems: "var(--group-align)",
          gap: "var(--group-gap)",
          "&[data-grow]": {
            "& > *": {
              flexGrow: "1",
              maxWidth: "var(--group-child-width)"
            }
          }
        }
      });
    };
  }
});

// ../components/Image/src/Image.plugin.ts
var require_Image_plugin = __commonJS({
  "../components/Image/src/Image.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".image-root": {
          display: "block",
          objectFit: "var(--image-object-fit, cover)",
          width: "100%",
          borderRadius: "var(--image-radius, 0)"
        }
      });
    };
  }
});

// ../components/Indicator/src/Indicator.plugin.ts
var require_Indicator_plugin = __commonJS({
  "../components/Indicator/src/Indicator.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        "@keyframes indicator-pulse": {
          "0%": {
            opacity: "0.6",
            boxShadow: `0 0 ${rem2("0.5px")} 0 var(--indicator-color)`
          },
          "100%": {
            opacity: "0",
            boxShadow: `0 0 ${rem2("0.5px")} ${rem2("4.4px")} var(--indicator-color)`
          }
        },
        ".indicator-root": {
          position: "relative",
          display: "var(--_indicator-display, block)",
          "&[data-inline]": {
            "--_indicator-display": "inline-block"
          }
        },
        ".indicator-indicator": {
          position: "absolute",
          top: "var(--indicator-top)",
          left: "var(--indicator-left)",
          right: "var(--indicator-right)",
          bottom: "var(--indicator-bottom)",
          transform: "translate(var(--indicator-translate-x), var(--indicator-translate-y))",
          minWidth: "var(--indicator-size)",
          height: "var(--indicator-size)",
          borderRadius: `var(--indicator-radius, ${rem2("1000px")})`,
          zIndex: "var(--indicator-z-index, 200)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "var(--raikou-font-size-xs)",
          paddingLeft: "var(--_indicator-padding, 0)",
          paddingRight: "var(--_indicator-padding, 0)",
          backgroundColor: "var(--indicator-color)",
          border: "var(--_indicator-border)",
          color: "var(--raikou-color-white)",
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundColor: "var(--indicator-color)",
            borderRadius: `var(--indicator-radius, ${rem2("1000px")})`,
            zIndex: "-1"
          },
          "&[data-with-label]": {
            "--_indicator-padding": "calc(var(--raikou-spacing-xs) / 2)"
          },
          "&[data-with-border]": {
            "--_indicator-border": `${rem2("2px")} solid var(--raikou-color-body)`
          },
          "&[data-processing]": {
            "&::before": {
              animation: "indicator-pulse 1000ms linear infinite"
            }
          }
        }
      });
    };
  }
});

// ../components/InlineInput/src/InlineInput.plugin.ts
var require_InlineInput_plugin = __commonJS({
  "../components/InlineInput/src/InlineInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".inlineInput-root": {
          "--label-lh-xs": rem2("16px"),
          "--label-lh-sm": rem2("20px"),
          "--label-lh-md": rem2("24px"),
          "--label-lh-lg": rem2("30px"),
          "--label-lh-xl": rem2("36px"),
          "&[data-label-position='left']": {
            "--_label-order": "1",
            "--_offset-right": "var(--raikou-spacing-sm)",
            "--_offset-left": "0",
            '[dir="rtl"] &': {
              "--_offset-right": "0",
              "--_offset-left": "var(--raikou-spacing-sm)"
            }
          },
          "&[data-label-position='right']": {
            "--_label-order": "2",
            "--_offset-right": "0",
            "--_offset-left": "var(--raikou-spacing-sm)",
            '[dir="rtl"] &': {
              "--_offset-right": "var(--raikou-spacing-sm)",
              "--_offset-left": "0"
            }
          }
        },
        ".inlineInput-body": {
          display: "flex"
        },
        ".inlineInput-labelWrapper": {
          "-webkit-tap-highlight-color": "transparent",
          display: "inline-flex",
          flexDirection: "column",
          fontSize: "var(--label-fz)",
          lineHeight: "var(--label-lh)",
          cursor: "var(--raikou-cursor-type)",
          order: "var(--_label-order)"
        },
        ".inlineInput-label": {
          cursor: "var(--raikou-cursor-type)",
          color: "var(--_label-color, inherit)",
          paddingLeft: "var(--_offset-left)",
          paddingRight: "var(--_offset-right)",
          "fieldset:disabled &, &[data-disabled]": {
            '[data-raikou-color-scheme="light"] &': {
              "--_label-color": "var(--raikou-inlineinput-disabled-label-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_label-color": "var(--raikou-inlineinput-disabled-label-color)"
            }
          }
        },
        /* Duplicate class to increase specificity */
        ".inlineInput-description.inlineInput-description": {
          marginTop: "calc(var(--raikou-spacing-xs) / 2)",
          paddingLeft: "var(--_offset-left)",
          paddingRight: "var(--_offset-right)"
        },
        /* Duplicate class to increase specificity */
        ".inlineInput-error.inlineInput-error": {
          marginTop: "calc(var(--raikou-spacing-xs) / 2)",
          paddingLeft: "var(--_offset-left)",
          paddingRight: "var(--_offset-right)"
        }
      });
    };
  }
});

// ../components/Input/src/Input.plugin.ts
var require_Input_plugin = __commonJS({
  "../components/Input/src/Input.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".input-wrapper": {
          position: "relative",
          marginTop: "var(--input-margin-top, 0rem)",
          marginBottom: "var(--input-margin-bottom, 0rem)",
          "--input-height-xs": rem2("30px"),
          "--input-height-sm": rem2("36px"),
          "--input-height-md": rem2("42px"),
          "--input-height-lg": rem2("50px"),
          "--input-height-xl": rem2("60px"),
          "--input-padding-y-xs": rem2("5px"),
          "--input-padding-y-sm": rem2("6px"),
          "--input-padding-y-md": rem2("8px"),
          "--input-padding-y-lg": rem2("10px"),
          "--input-padding-y-xl": rem2("13px"),
          "--_input-cursor": "text",
          "--_input-text-align": "left",
          "--_input-line-height": `calc(var(--input-height) - ${rem2("2px")})`,
          "--_input-padding": "calc(var(--input-height) / 3)",
          "--_input-padding-left": "var(--_input-padding)",
          "--_input-padding-right": "var(--_input-padding)",
          "--_input-placeholder-color": "var(--raikou-color-placeholder)",
          "--_input-color": "inherit",
          "--_input-left-section-size": `var(--input-left-section-width, calc(var(--input-height) - ${rem2(
            "2px"
          )}))`,
          "--_input-right-section-size": `var(--input-right-section-width, calc(var(--input-height) - ${rem2(
            "2px"
          )}))`,
          "--_input-size": "var(--input-height)",
          "--_section-y": rem2("1px"),
          "--_left-section-left": rem2("1px"),
          "--_left-section-right": "unset",
          "--_left-section-border-radius": "var(--input-radius) 0 0 var(--input-radius)",
          "--_right-section-left": "unset",
          "--_right-section-right": rem2("1px"),
          "--_right-section-border-radius": "0 var(--input-radius) var(--input-radius) 0",
          "&[data-pointer]": {
            "--_input-cursor": "pointer"
          },
          "&[data-multiline]": {
            "--_input-size": "auto",
            "--_input-line-height": "var(--raikou-line-height)"
          },
          "&[data-variant='unstyled']": {
            "--input-padding": "0",
            "--input-padding-y": "0",
            "--_input-padding-left": "0",
            "--_input-padding-right": "0"
          },
          "&[data-with-left-section]": {
            "--_input-padding-left": "var(--_input-left-section-size)",
            '[dir="rtl"] &': {
              "--_input-padding-right": "var(--_input-left-section-size)"
            }
          },
          "&[data-with-right-section]": {
            "--_input-padding-right": "var(--_input-right-section-size)",
            '[dir="rtl"] &': {
              "--_input-padding-left": "var(--_input-right-section-size)"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_input-disabled-bg": "var(--raikou-input-disabled-bg)",
            "--_input-disabled-color": "var(--raikou-input-disabled-color)",
            '&[data-variant="default"]': {
              "--_input-bd": "var(--raikou-input-default-bd)",
              "--_input-bg": "var(--raikou-input-default-bg)",
              "--_input-bd-focus": "var(--raikou-color-primary)"
            },
            "&[data-variant='filled']": {
              "--_input-bd": "var(--raikou-input-filled-bd)",
              "--_input-bg": "var(--raikou-input-filled-bg)",
              "--_input-bd-focus": "var(--raikou-color-primary)"
            },
            "&[data-variant='unstyled']": {
              "--_input-bd": "transparent",
              "--_input-bg": "transparent",
              "--_input-bd-focus": "transparent"
            }
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_input-disabled-bg": "var(--raikou-input-disabled-bg)",
            "--_input-disabled-color": "var(--raikou-input-disabled-color)",
            "&[data-variant='default']": {
              "--_input-bd": "var(--raikou-input-default-bd)",
              "--_input-bg": "var(--raikou-input-default-bg)",
              "--_input-bd-focus": "var(--raikou-color-primary)"
            },
            "&[data-variant='filled']": {
              "--_input-bd": "var(--raikou-input-filled-bd)",
              "--_input-bg": "var(--raikou-input-filled-bg)",
              "--_input-bd-focus": "var(--raikou-color-primary)"
            },
            "&[data-variant='unstyled']": {
              "--_input-bd": "transparent",
              "--_input-bg": "transparent",
              "--_input-bd-focus": "transparent"
            }
          },
          "[data-raikou-color-scheme] &[data-error]": {
            "--_input-bd": "var(--raikou-color-error)",
            "--_input-color": "var(--raikou-color-error)",
            "--_input-placeholder-color": "var(--raikou-color-error)",
            "--_input-section-color": "var(--raikou-color-error)"
          },
          '[dir="rtl"] &': {
            "--_input-text-align": "right",
            "--_left-section-left": "unset",
            "--_left-section-right": rem2("1px"),
            "--_left-section-border-radius": "0 var(--input-radius) var(--input-radius) 0",
            "--_right-section-left": rem2("1px"),
            "--_right-section-right": "unset",
            "--_right-section-border-radius": "var(--input-radius) 0 0 var(--input-radius)"
          }
        },
        ".input-input": {
          "-webkit-tap-highlight-color": "transparent",
          appearance: "none",
          resize: "none",
          display: "block",
          width: "100%",
          transition: "border-color 100ms ease",
          textAlign: "var(--_input-text-align)",
          color: "var(--_input-color)",
          border: `${rem2("1px")} solid var(--_input-bd)`,
          backgroundColor: "var(--_input-bg)",
          fontFamily: "var(--raikou-font-family)",
          height: "var(--_input-size)",
          minHeight: "var(--input-height)",
          lineHeight: "var(--_input-line-height)",
          fontSize: "var(--input-fz)",
          borderRadius: "var(--input-radius)",
          paddingLeft: "var(--_input-padding-left)",
          paddingRight: "var(--_input-padding-right)",
          paddingTop: `var(--input-padding-y, 0rem)`,
          paddingBottom: `var(--input-padding-y, 0rem)`,
          cursor: "var(--_input-cursor)",
          overflow: "var(--_input-overflow)",
          /* Used as data attribute in Textarea component, does not have associated prop on the Input component */
          "&[data-no-overflow]": {
            "--_input-overflow": "hidden"
          },
          /* Used as data attribute in JsonInput component, does not have associated prop on the Input component */
          "&[data-monospace]": {
            "--_input-font-family": "var(--raikou-font-family-monospace)",
            "--_input-fz": `calc(var(--input-fz) - ${rem2("2px")})`
          },
          "&:focus, &:focus-within": {
            outline: "none",
            borderColor: "var(--_input-bd-focus)"
          },
          "&::placeholder": {
            color: "var(--_input-placeholder-color)",
            opacity: "1"
          },
          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
            appearance: "none"
          },
          "&[type='number']": {
            "-moz-appearance": "textfield"
          },
          "&:has(input:disabled), &:disabled, &[data-disabled]": {
            cursor: "not-allowed",
            opacity: "0.6",
            backgroundColor: "var(--_input-disabled-bg)",
            color: "var(--_input-disabled-color)"
          }
        },
        ".input-section": {
          pointerEvents: "var(--_section-pointer-events)",
          position: "absolute",
          zIndex: "1",
          left: "var(--_section-left)",
          right: "var(--_section-right)",
          bottom: "var(--_section-y)",
          top: "var(--_section-y)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "var(--_section-size)",
          borderRadius: "var(--_section-border-radius)",
          color: "var(--raikou-color-placeholder)",
          "&[data-position='right']": {
            "--_section-pointer-events": "var(--input-right-section-pointer-events)",
            "--_section-left": "var(--_right-section-left)",
            "--_section-right": "var(--_right-section-right)",
            "--_section-size": "var(--_input-right-section-size)",
            "--_section-border-radius": "var(--_right-section-border-radius)"
          },
          "&[data-position='left']": {
            "--_section-pointer-events": "var(--input-left-section-pointer-events)",
            "--_section-left": "var(--_left-section-left)",
            "--_section-right": "var(--_left-section-right)",
            "--_section-size": "var(--_input-left-section-size)",
            "--_section-border-radius": "var(--_left-section-border-radius)"
          }
        },
        ".input-placeholder": {
          color: "var(--raikou-color-placeholder)"
        },
        ".inputWrapper-root": {
          lineHeight: "var(--raikou-line-height)"
        },
        ".inputWrapper-label": {
          display: "inline-block",
          fontWeight: "500",
          wordBreak: "break-word",
          cursor: "default",
          "-webkit-tap-highlight-color": "transparent",
          fontSize: "var(--input-label-size)"
        },
        ".inputWrapper-required": {
          color: "var(--input-asterisk-color)"
        },
        ".inputWrapper-error, .inputWrapper-description": {
          wordWrap: "break-word",
          lineHeight: "1.2",
          display: "block",
          margin: "0",
          padding: "0"
        },
        ".inputWrapper-error": {
          color: "var(--raikou-color-error)",
          fontSize: "var(--input-error-size)"
        },
        ".inputWrapper-description": {
          color: "var(--raikou-color-dimmed)",
          fontSize: "var(--input-description-size)"
        }
      });
    };
  }
});

// ../components/Kbd/src/Kbd.plugin.ts
var require_Kbd_plugin = __commonJS({
  "../components/Kbd/src/Kbd.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".kbd-root": {
          "--kbd-fz-xs": rem2("10px"),
          "--kbd-fz-sm": rem2("12px"),
          "--kbd-fz-md": rem2("14px"),
          "--kbd-fz-lg": rem2("16px"),
          "--kbd-fz-xl": rem2("20px"),
          "--kbd-padding-xs": `${rem2("2px")} ${rem2("4px")}`,
          "--kbd-padding-sm": `${rem2("3px")} ${rem2("5px")}`,
          "--kbd-padding-md": `${rem2("4px")} ${rem2("7px")}`,
          "--kbd-padding-lg": `${rem2("5px")} ${rem2("9px")}`,
          "--kbd-padding-xl": `${rem2("8px")} ${rem2("14px")}`,
          fontFamily: "var(--raikou-font-family-monospace)",
          lineHeight: "var(--raikou-line-height)",
          fontWeight: "700",
          padding: "var(--kbd-padding)",
          fontSize: "var(--kbd-fz)",
          borderRadius: "var(--raikou-radius-sm)",
          border: `${rem2("1px")} solid var(--_kbd-border-color)`,
          borderBottomWidth: rem2("3px"),
          backgroundColor: "var(--_kbd-bg)",
          color: "var(--_kbd-color)",
          '[data-raikou-color-scheme="light"] &': {
            "--_kbd-border-color": "var(--raikou-kbd-border-color)",
            "--_kbd-color": "var(--raikou-kbd-color)",
            "--_kbd-bg": "var(--raikou-kbd-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_kbd-border-color": "var(--raikou-kbd-border-color)",
            "--_kbd-color": "var(--raikou-kbd-color)",
            "--_kbd-bg": "var(--raikou-kbd-bg)"
          }
        }
      });
    };
  }
});

// ../components/List/src/List.plugin.ts
var require_List_plugin = __commonJS({
  "../components/List/src/List.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".list-root": {
          listStylePosition: "inside",
          fontSize: "var(--list-fz)",
          lineHeight: "var(--list-lh)",
          margin: "0",
          padding: "0",
          paddingLeft: "var(--_list-pl, 0)",
          paddingRight: "var(--_list-pr, 0)",
          "&[data-with-padding]": {
            "--_list-pl": "var(--raikou-spacing-md)",
            '[dir="rtl"] &': {
              "--_list-pl": "0",
              "--_list-pr": "var(--raikou-spacing-md)"
            }
          }
        },
        ".list-item": {
          whiteSpace: "nowrap",
          lineHeight: "var(--_item-lh, var(--list-lh))",
          marginTop: "var(--_item-mt, 0)",
          listStyle: "var(--_item-list-style)",
          "&[data-with-icon]": {
            "--_item-list-style": "none",
            "& .list-itemWrapper": {
              "--_item-wrapper-direction": "row",
              "--_item-wrapper-align": "center"
            }
          },
          "&:not(:first-of-type)": {
            "--_item-mt": "var(--list-spacing)"
          },
          "&[data-centered]": {
            "--_item-lh": "1"
          }
        },
        ".list-itemWrapper": {
          display: "inline-flex",
          flexDirection: "var(--_item-wrapper-direction, column)",
          alignItems: "var(--_item-wrapper-align, flex-start)",
          whiteSpace: "normal"
        },
        ".list-itemIcon": {
          display: "inline-block",
          verticalAlign: "middle",
          marginRight: "var(--_item-icon-mr, var(--raikou-spacing-sm))",
          marginLeft: "var(--_item-icon-ml, 0)",
          '[dir="rtl"] &': {
            "--_item-icon-mr": "0",
            "--_item-icon-ml": "var(--raikou-spacing-sm)"
          }
        }
      });
    };
  }
});

// ../components/Loader/src/Loader.plugin.ts
var require_Loader_plugin = __commonJS({
  "../components/Loader/src/Loader.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    var group = function({ addComponents }) {
      addComponents({
        ".loader-root": {
          "--loader-size-xs": rem2("18px"),
          "--loader-size-sm": rem2("22px"),
          "--loader-size-md": rem2("36px"),
          "--loader-size-lg": rem2("44px"),
          "--loader-size-xl": rem2("58px")
        },
        "@keyframes bars-loader-animation": {
          "0%": {
            transform: "scale(0.6)",
            opacity: "0"
          },
          "50%, 100%": {
            transform: "scale(1)"
          }
        },
        ".bars-loader": {
          position: "relative",
          width: "var(--loader-size)",
          height: "var(--loader-size)",
          display: "flex",
          gap: "calc(var(--loader-size) / 5)"
        },
        ".bar": {
          flex: "1",
          background: "var(--loader-color)",
          animation: "bars-loader-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite",
          borderRadius: "rem(2px)",
          "&:nth-of-type(1)": {
            animationDelay: "-240ms"
          },
          "&:nth-of-type(2)": {
            animationDelay: "-120ms"
          },
          "&:nth-of-type(3)": {
            animationDelay: "0"
          }
        },
        "@keyframes loader-dots-animation": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.5"
          }
        },
        ".dots-loader": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "calc(var(--loader-size) / 10)",
          flexWrap: "wrap",
          position: "relative",
          width: "var(--loader-size)",
          height: "var(--loader-size)"
        },
        ".dot": {
          width: "calc(var(--loader-size) / 3 - var(--loader-size) / 15)",
          height: "calc(var(--loader-size) / 3 - var(--loader-size) / 15)",
          borderRadius: "50%",
          background: "var(--loader-color)",
          animation: "loader-dots-animation 1200ms linear infinite",
          "&:nth-child(2), &:nth-child(4)": {
            animationDelay: "-400ms"
          },
          "&:nth-child(3), &:nth-child(5), &:nth-child(7)": {
            animationDelay: "-800ms"
          },
          "&:nth-child(6), &:nth-child(8)": {
            animationDelay: "-1200ms"
          },
          "&:nth-child(9)": {
            animationDelay: "-1600ms"
          }
        },
        "@keyframes oval-loader-animation": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        ".oval-loader": {
          display: "inline-block",
          width: "var(--loader-size)",
          height: "var(--loader-size)",
          "&::after": {
            content: '""',
            display: "block",
            width: "var(--loader-size)",
            height: "var(--loader-size)",
            borderRadius: rem2("10000px"),
            borderWidth: "calc(var(--loader-size) / 8)",
            borderStyle: "solid",
            borderColor: "var(--loader-color) var(--loader-color) var(--loader-color) transparent",
            animation: "oval-loader-animation 1.2s linear infinite"
          }
        }
      });
    };
    module.exports = group;
  }
});

// ../components/LoadingOverlay/src/LoadingOverlay.plugin.ts
var require_LoadingOverlay_plugin = __commonJS({
  "../components/LoadingOverlay/src/LoadingOverlay.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".loadingOverlay-root": {
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: "var(--lo-z-index)"
        },
        ".loadingOverlay-loader": {
          position: "relative",
          zIndex: "calc(var(--lo-z-index) + 1)"
        },
        ".loadingOverlay-overlay": {
          zIndex: "var(--lo-z-index)",
          "&[data-dark]": {
            '[data-raikou-color-scheme="light"] &': {
              display: "none"
            }
          },
          "&[data-light]": {
            '[data-raikou-color-scheme="dark"] &': {
              display: "none"
            }
          }
        }
      });
    };
  }
});

// ../components/Mark/src/Mark.plugin.ts
var require_Mark_plugin = __commonJS({
  "../components/Mark/src/Mark.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".mark-root": {
          backgroundColor: "var(--_mark-bg)",
          color: "var(--raikou-color-black)",
          '[data-raikou-color-scheme="light"] &': {
            "--_mark-bg": "var(--mark-bg-light)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_mark-bg": "var(--mark-bg-dark)"
          }
        }
      });
    };
  }
});

// ../components/Menu/src/Menu.plugin.ts
var require_Menu_plugin = __commonJS({
  "../components/Menu/src/Menu.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".menu-dropdown.menu-dropdown": {
          padding: rem2("4px")
        },
        ".menu-label": {
          color: "var(--raikou-color-dimmed)",
          fontWeight: "500",
          fontSize: "var(--raikou-font-size-xs)",
          padding: "calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-sm)",
          cursor: "default"
        },
        ".menu-divider": {
          marginTop: rem2("4px"),
          marginBottom: rem2("4px"),
          borderTop: `${rem2("1px")} solid var(--_divider-color)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_divider-color": "var(--raikou-menu-divider-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_divider-color": "var(--raikou-menu-divider-color)"
          }
        },
        ".menu-item.menu-item": {
          fontSize: "var(--raikou-font-size-sm)",
          width: "100%",
          padding: "calc(var(--raikou-spacing-xs) / 1.5) var(--raikou-spacing-sm)",
          borderRadius: "var(--popover-radius, var(--raikou-radius-default))",
          color: "var(--menu-item-color, var(--raikou-color-text))",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
          backgroundColor: "var(--_item-bg, transparent)",
          opacity: "var(--_item-opacity, 1)",
          pointerEvents: "var(--_item-pointer-events, auto)",
          "&[data-disabled], &:disabled": {
            "--menu-item-color": "var(--raikou-color-dimmed) !important",
            "--_item-opacity": "0.6",
            "--_item-pointer-events": "none"
          },
          "&[data-hovered]": {
            "--_item-bg": "var(--menu-item-hover, var(--_item-bg-hover))",
            '[data-raikou-color-scheme="light"] &': {
              "--_item-bg-hover": "var(--raikou-menu-divider-item-hover-bg)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_item-bg-hover": "var(--raikou-menu-divider-item-hover-bg)"
            }
          }
        },
        ".menu-itemLabel": {
          flex: "1"
        },
        ".menu-itemSection": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "var(--_section-ml)",
          marginRight: "var(--_section-mr)",
          '&[data-position="left"]': {
            "--_section-ml": "0",
            "--_section-mr": "var(--raikou-spacing-xs)",
            '[dir="rtl"] &': {
              "--_section-ml": "var(--raikou-spacing-xs)",
              "--_section-mr": "0"
            }
          },
          '&[data-position="right"]': {
            "--_section-ml": "var(--raikou-spacing-xs)",
            "--_section-mr": "0",
            '[dir="rtl"] &': {
              "--_section-ml": "0",
              "--_section-mr": "var(--raikou-spacing-xs)"
            }
          }
        }
      });
    };
  }
});

// ../components/Modal/src/Modal.plugin.ts
var require_Modal_plugin = __commonJS({
  "../components/Modal/src/Modal.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".modal-root": {
          "--modal-size-xs": rem2("320px"),
          "--modal-size-sm": rem2("380px"),
          "--modal-size-md": rem2("440px"),
          "--modal-size-lg": rem2("620px"),
          "--modal-size-xl": rem2("780px"),
          "&[data-full-screen]": {
            "--modal-border-radius": "0 !important",
            ".modal-content": {
              "--_content-flex": "0 0 100%",
              "--_content-max-height": "auto",
              "--_content-height": "100dvh"
            },
            ".modal-inner": {
              "--_inner-y-offset": "0",
              "--_inner-x-offset": "0"
            }
          },
          "&[data-centered]": {
            ".modal-inner": {
              "--_inner-align": "center"
            }
          }
        },
        ".modal-header": {
          borderTopLeftRadius: "var(--modal-radius)",
          borderTopRightRadius: "var(--modal-radius)"
        },
        ".modal-content": {
          flex: "var(--_content-flex, 0 0 var(--modal-size))",
          maxWidth: "100%",
          maxHeight: "var(--_content-max-height, calc(100dvh - var(--modal-y-offset) * 2))",
          height: "var(--_content-height, auto)",
          overflowY: "auto"
        },
        ".modal-inner": {
          display: "flex",
          justifyContent: "center",
          alignItems: "var(--_inner-align, flex-start)",
          paddingTop: "var(--_inner-y-offset, var(--modal-y-offset))",
          paddingBottom: "var(--_inner-y-offset, var(--modal-y-offset))",
          paddingLeft: "var(--_inner-x-offset, var(--modal-x-offset))",
          paddingRight: "var(--_inner-x-offset, var(--modal-x-offset))"
        }
      });
    };
  }
});

// ../components/ModalBase/src/ModalBase.plugin.ts
var require_ModalBase_plugin = __commonJS({
  "../components/ModalBase/src/ModalBase.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".modalBase-title": {
          lineHeight: "1",
          padding: "0",
          margin: "0",
          fontWeight: "400",
          fontSize: "var(--raikou-font-size-md)"
        },
        ".modalBase-header": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--mb-padding)",
          paddingRight: `var(--_pr, calc(var(--mb-padding) - ${rem2("5px")}))`,
          paddingLeft: "var(--_pl, var(--mb-padding))",
          position: "sticky",
          top: "0",
          backgroundColor: "var(--raikou-color-body)",
          zIndex: "1000",
          '[dir="rtl"] &': {
            "--_pr": "var(--mb-padding)",
            "--_pl": `calc(var(--mb-padding) - ${rem2("5px")})`
          }
        },
        ".modalBase-inner": {
          position: "fixed",
          width: "100%",
          top: "0",
          bottom: "0",
          zIndex: "var(--mb-z-index)",
          pointerEvents: "none"
        },
        ".modalBase-content": {
          pointerEvents: "all",
          boxShadow: "var(--mb-shadow)"
        },
        ".modalBase-close": {
          marginLeft: "var(--_close-ml, auto)",
          marginRight: "var(--_close-mr, 0)",
          '[dir="rtl"] &': {
            "--_close-ml": "0",
            "--_close-mr": "auto"
          }
        },
        ".modalBase-body": {
          padding: "var(--mb-padding)",
          paddingTop: "var(--_pt, var(--mb-padding))",
          "&:not(:only-child)": {
            "--_pt": "0"
          }
        }
      });
    };
  }
});

// ../components/NavLink/src/NavLink.plugin.ts
var require_NavLink_plugin = __commonJS({
  "../components/NavLink/src/NavLink.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".navLink-root": {
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: `${rem2("8px")} var(--mantine-spacing-sm)`,
          userSelect: "none",
          background: "var(--_nav-link-bg)",
          color: "var(--_nav-link-color)",
          opacity: "var(--_nav-link-opacity, 1)",
          pointerEvents: "var(--_nav-link-pointer-events, auto)",
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_nav-link-bg": "var(--mantine-color-gray-0)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_nav-link-bg": "var(--mantine-color-dark-6)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_nav-link-bg": "var(--mantine-color-gray-0)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_nav-link-bg": "var(--mantine-color-dark-6)"
              }
            }
          },
          "&[data-disabled]": {
            "--_nav-link-opacity": "0.4",
            "--_nav-link-pointer-events": "none"
          },
          "&[data-active]": {
            "--_nav-link-bg": "var(--nl-bg)",
            "--_nav-link-color": "var(--nl-color)",
            "@media (hover: hover)": {
              "&:hover": {
                "--_nav-link-bg": "var(--nl-hover)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_nav-link-bg": "var(--nl-hover)"
              }
            },
            ".description": {
              "--_description-opacity": "0.9",
              "--_description-color": "var(--nl-color)"
            }
          }
        },
        ".navLink-section": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "var(--_section-ml)",
          marginRight: "var(--_section-mr)",
          transition: "transform 150ms ease",
          transform: "var(--_section-transform, none)",
          "& > svg": {
            display: "block"
          },
          "&[data-position='left']": {
            "--_section-ml": "0",
            "--_section-mr": "var(--mantine-spacing-sm)",
            '[dir="rtl"] &': {
              "--_section-ml": "var(--mantine-spacing-sm)",
              "--_section-mr": "0"
            }
          },
          "&[data-position='right']": {
            "--_section-ml": "var(--mantine-spacing-sm)",
            "--_section-mr": "0",
            '[dir="rtl"] &': {
              "--_section-ml": "0",
              "--_section-mr": "var(--mantine-spacing-sm)"
            }
          },
          "&[data-rotate]": {
            "--_section-transform": "rotate(90deg)"
          }
        },
        ".navLink-label": {
          fontSize: "var(--mantine-font-size-sm)"
        },
        ".navLink-body": {
          flex: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "var(--_body-white-space, auto)",
          "&[data-no-wrap]": {
            "--_body-white-space": "nowrap"
          }
        },
        ".navLink-description": {
          display: "block",
          fontSize: "var(--mantine-font-size-xs)",
          opacity: "var(--_description-opacity, 1)",
          color: "var(--_description-color, var(--mantine-color-dimmed))",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "var(--_body-white-space, auto)"
        },
        ".navLink-children": {
          paddingLeft: "var(--_children-pl, var(--nl-offset))",
          paddingRight: "var(--_children-pr, 0)",
          '[dir="rtl"] &': {
            "--_children-pl": "0",
            "--_children-pr": "var(--nl-offset)"
          }
        },
        ".navLink-chevron": {
          transform: "rotate(-90deg)"
        }
      });
    };
  }
});

// ../components/Notification/src/Notification.plugin.ts
var require_Notification_plugin = __commonJS({
  "../components/Notification/src/Notification.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".notification-root": {
          overflow: "hidden",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingLeft: `var(--_root-padding-left, ${rem2("22px")})`,
          paddingRight: "var(--_root-padding-right, var(--raikou-spacing-xs))",
          paddingTop: "var(--raikou-spacing-xs)",
          paddingBottom: "var(--raikou-spacing-xs)",
          border: "var(--_border, none)",
          borderRadius: "var(--notification-radius)",
          boxShadow: "var(--raikou-shadow-lg)",
          backgroundColor: "var(--_bg)",
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            width: rem2("6px"),
            top: "var(--notification-radius)",
            bottom: "var(--notification-radius)",
            left: rem2("4px"),
            borderRadius: "var(--notification-radius)",
            backgroundColor: "var(--notification-color)",
            '[dir="rtl"] &': {
              right: rem2("4px"),
              left: "auto"
            }
          },
          "&[data-with-icon]": {
            "--_root-padding-left": "var(--raikou-spacing-xs)",
            "&::before": {
              display: "none"
            },
            '[dir="rtl"] &': {
              "--_root-padding-right": "var(--raikou-spacing-xs)"
            }
          },
          "&[data-with-border]": {
            "--_border": `${rem2("1px")} solid var(--_border-color)`
          },
          '[dir="rtl"] &': {
            "--_root-padding-right": rem2("22px"),
            "--_root-padding-left": "var(--raikou-spacing-xs)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_border-color": "var(--raikou-notification-border-color)",
            "--_bg": "var(--raikou-notification-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_border-color": "var(--raikou-notification-border-color)",
            "--_bg": "var(--raikou-notification-bg)"
          }
        },
        ".notification-icon": {
          boxSizing: "border-box",
          marginRight: "var(--_icon-margin-right, var(--raikou-spacing-md))",
          marginLeft: "var(--_icon-margin-left, 0)",
          width: rem2("28px"),
          height: rem2("28px"),
          borderRadius: rem2("28px"),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--notification-color)",
          color: "var(--raikou-color-white)",
          '[dir="rtl"] &': {
            "--_icon-margin-right": "0",
            "--_icon-margin-left": "var(--raikou-spacing-md)"
          }
        },
        ".notification-loader": {
          marginRight: "var(--_icon-margin-right, var(--raikou-spacing-md))",
          marginLeft: "var(--_icon-margin-left, 0)",
          '[dir="rtl"] &': {
            "--_icon-margin-right": "0",
            "--_icon-margin-left": "var(--raikou-spacing-md)"
          }
        },
        ".notification-body": {
          flex: "1",
          overflow: "hidden",
          marginRight: "var(--_body-margin-right, var(--raikou-spacing-xs))",
          marginLeft: "var(--_body-margin-left, 0)",
          '[dir="rtl"] &': {
            "--_body-margin-right": "0",
            "--_body-margin-left": "var(--raikou-spacing-xs)"
          }
        },
        ".notification-title": {
          lineHeight: "1.4",
          marginBottom: rem2("2px"),
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "var(--_title-color)",
          '[data-raikou-color-scheme="light"] &': {
            "--_title-color": "var(--raikou-notification-title-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_title-color": "var(--raikou-notification-title-color)"
          }
        },
        ".notification-description": {
          color: "var(--_description-color)",
          lineHeight: "1.4",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "&[data-with-title]": {
            '[data-raikou-color-scheme="light"] &': {
              "--_description-color": "var(--raikou-notification-title-description-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_description-color": "var(--raikou-notification-title-description-color)"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_description-color": "var(--raikou-notification-description-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_description-color": "var(--raikou-notification-description-color)"
          }
        },
        ".notification-closeButton:hover": {
          backgroundColor: "var(--_close-button-hover-bg)",
          '[data-raikou-color-scheme="light"] &': {
            "--_close-button-hover-bg": "var(--raikou-notification-close-button-hover-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_close-button-hover-bg": "var(--raikou-notification-close-button-hover-bg)"
          }
        }
      });
    };
  }
});

// ../components/NumberInput/src/NumberInput.plugin.ts
var require_NumberInput_plugin = __commonJS({
  "../components/NumberInput/src/NumberInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".numberInput-controls": {
          "--ni-chevron-size-xs": rem2("10px"),
          "--ni-chevron-size-sm": rem2("14px"),
          "--ni-chevron-size-md": rem2("16px"),
          "--ni-chevron-size-lg": rem2("18px"),
          "--ni-chevron-size-xl": rem2("20px"),
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: `calc(var(--input-height) - ${rem2("2px")})`,
          maxWidth: "calc(var(--ni-chevron-size) * 1.7)",
          marginLeft: "var(--_controls-ml, auto)",
          marginRight: "var(--_controls-mr, 0)",
          '[dir="rtl"] &': {
            "--_controls-ml": "0",
            "--_controls-mr": "auto"
          }
        },
        ".numberInput-control.numberInput-control": {
          "--_control-bd": `${rem2("1px")} solid var(--_input-bd)`,
          "--_control-radius": `calc(var(--input-radius) - ${rem2("1px")})`,
          flex: "0 0 50%",
          width: "100%",
          padding: "0",
          height: `calc(var(--input-height) / 2 - ${rem2("1px")})`,
          borderLeft: "var(--_control-bdl, var(--_control-bd))",
          borderRight: "var(--_control-bdr, none)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--raikou-color-text)",
          backgroundColor: "var(--_control-bg, transparent)",
          pointerEvents: "var(--_control-pointer-events, auto)",
          opacity: "var(--_control-opacity, 1)",
          "&:disabled": {
            "--_control-pointer-events": "none",
            "--_control-opacity": "0.4"
          },
          '[dir="rtl"] &': {
            "--_control-bdl": "none",
            "--_control-bdr": "var(--_control-bd)"
          },
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_control-bg": "var(--raikou-numberinput-control-hover-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_control-bg": "var(--raikou-numberinput-control-hover-bg)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_control-bg": "var(--raikou-numberinput-control-active-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_control-bg": "var(--raikou-numberinput-control-active-bg)"
              }
            }
          },
          "&:first-of-type": {
            borderBottom: `${rem2("0.5px")} solid var(--_input-bd)`,
            borderRadius: "0 var(--_control-radius) 0 0",
            '[dir="rtl"] &': {
              borderRadius: "var(--_control-radius) 0 0 0"
            }
          },
          "&:last-of-type": {
            borderTop: `${rem2("0.5px")} solid var(--_input-bd)`,
            borderRadius: "0 0 var(--_control-radius) 0",
            '[dir="rtl"] &': {
              borderRadius: "0 0 0 var(--_control-radius)"
            }
          }
        }
      });
    };
  }
});

// ../components/Overlay/src/Overlay.plugin.ts
var require_Overlay_plugin = __commonJS({
  "../components/Overlay/src/Overlay.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".overlay-root": {
          inset: "0",
          position: "var(--_overlay-position, absolute)",
          background: "var(--overlay-bg)",
          backdropFilter: "var(--overlay-filter)",
          borderRadius: "var(--overlay-radius)",
          zIndex: "var(--overlay-z-index)",
          "&[data-fixed]": {
            "--_overlay-position": "fixed"
          },
          "&[data-center]": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }
      });
    };
  }
});

// ../components/Pagination/src/Pagination.plugin.ts
var require_Pagination_plugin = __commonJS({
  "../components/Pagination/src/Pagination.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".pagination-root": {
          "--pagination-control-size-xs": rem2("22px"),
          "--pagination-control-size-sm": rem2("26px"),
          "--pagination-control-size-md": rem2("32px"),
          "--pagination-control-size-lg": rem2("38px"),
          "--pagination-control-size-xl": rem2("44px")
        },
        ".pagination-control.pagination-control": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `${rem2("1px")} solid var(--_control-border-color)`,
          cursor: "var(--_control-cursor, pointer)",
          color: "var(--_control-color, var(--raikou-color-text))",
          height: "var(--pagination-control-size)",
          minWidth: "var(--pagination-control-size)",
          fontSize: "var(--pagination-control-fz)",
          padding: "var(--_control-padding, 0)",
          lineHeight: "1",
          backgroundColor: "var(--_control-bg-color)",
          borderRadius: "var(--pagination-control-radius)",
          opacity: "var(--_control-opacity, 1)",
          "&[data-with-padding]": {
            "--_control-padding": "calc(var(--pagination-control-size) / 4)"
          },
          "&:disabled, &[data-disabled]": {
            "--_control-cursor": "not-allowed",
            "--_control-opacity": "0.4"
          },
          "&[data-active]": {
            "--_control-bg-color": "var(--pagination-active-bg) !important",
            "--_control-border-color": "var(--pagination-active-bg) !important",
            "--_control-color": "var(--raikou-color-white)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_control-border-color": "var(--raikou-pagination-control-border-color)",
            "--_control-bg-color": "var(--raikou-pagination-control-bg-color)",
            "--_control-bg-hover": "var(--raikou-pagination-control-bg-hover)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_control-border-color": "var(--raikou-pagination-control-border-color)",
            "--_control-bg-color": "var(--raikou-pagination-control-bg-color)",
            "--_control-bg-hover": "var(--raikou-pagination-control-bg-hover)"
          },
          "@media (hover: hover)": {
            "&:hover": {
              "&:not(:disabled, [data-disabled])": {
                "--_control-bg-color": "var(--_control-bg-hover)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not(:disabled, [data-disabled])": {
                "--_control-bg-color": "var(--_control-bg-hover)"
              }
            }
          },
          '[dir="rtl"] &': {
            "& > svg": {
              transform: "rotate(180deg)"
            }
          }
        },
        ".pagination-dots": {
          height: "var(--pagination-control-size)",
          minWidth: "var(--pagination-control-size)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }
      });
    };
  }
});

// ../components/Paper/src/Paper.plugin.ts
var require_Paper_plugin = __commonJS({
  "../components/Paper/src/Paper.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".paper-root": {
          outline: "0",
          "-webkit-tap-highlight-color": "transparent",
          display: "block",
          touchAction: "manipulation",
          textDecoration: "none",
          borderRadius: "var(--paper-radius)",
          boxShadow: "var(--paper-shadow)",
          backgroundColor: "var(--raikou-color-body)",
          border: "var(--_paper-border-width, 0) solid var(--_paper-border-color, transparent)",
          "&[data-with-border]": {
            "--_paper-border-width": "1px",
            '[data-raikou-color-scheme="light"] &': {
              "--_paper-border-color": "var(--raikou-paper-border-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_paper-border-color": "var(--raikou-paper-border-color)"
            }
          }
        }
      });
    };
  }
});

// ../components/PasswordInput/src/PasswordInput.plugin.ts
var require_PasswordInput_plugin = __commonJS({
  "../components/PasswordInput/src/PasswordInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".passwordInput-root": {
          "--psi-button-size-xs": rem2("22px"),
          "--psi-button-size-sm": rem2("26px"),
          "--psi-button-size-md": rem2("28px"),
          "--psi-button-size-lg": rem2("32px"),
          "--psi-button-size-xl": rem2("40px"),
          "--psi-icon-size-xs": rem2("12px"),
          "--psi-icon-size-sm": rem2("15px"),
          "--psi-icon-size-md": rem2("17px"),
          "--psi-icon-size-lg": rem2("19px"),
          "--psi-icon-size-xl": rem2("21px")
        },
        ".passwordInput-input": {
          position: "relative",
          overflow: "hidden"
        },
        ".passwordInput-innerInput": {
          fontFamily: "var(--raikou-font-family)",
          backgroundColor: "transparent",
          border: "0",
          paddingRight: "var(--_input-padding-right)",
          paddingLeft: "var(--_input-padding-left)",
          position: "absolute",
          inset: "0",
          outline: "0",
          fontSize: "inherit",
          "[data-disabled] &, &:disabled": {
            cursor: "not-allowed"
          },
          "&::placeholder": {
            color: "var(--_input-placeholder-color)"
          }
        },
        ".passwordInput-visibilityToggle": {
          width: "var(--psi-button-size)",
          height: "var(--psi-button-size)",
          minwidth: "var(--psi-button-size)",
          minHeight: "var(--psi-button-size)"
        }
      });
    };
  }
});

// ../components/Pill/src/Pill.plugin.ts
var require_Pill_plugin = __commonJS({
  "../components/Pill/src/Pill.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".pill-root": {
          "--pill-fz-xs": rem2("10px"),
          "--pill-fz-sm": rem2("12px"),
          "--pill-fz-md": rem2("14px"),
          "--pill-fz-lg": rem2("16px"),
          "--pill-fz-xl": rem2("18px"),
          "--pill-height-xs": rem2("18px"),
          "--pill-height-sm": rem2("22px"),
          "--pill-height-md": rem2("25px"),
          "--pill-height-lg": rem2("28px"),
          "--pill-height-xl": rem2("32px"),
          fontSize: "var(--pill-fz)",
          flex: "0",
          height: "var(--pill-height)",
          paddingLeft: "0.8em",
          paddingRight: "var(--_pill-padding-right, 0.8em)",
          display: "inline-flex",
          alignItems: "center",
          borderRadius: "var(--pill-radius)",
          backgroundColor: "var(--_pill-bg)",
          lineHeight: "1",
          whiteSpace: "nowrap",
          userSelect: "none",
          "-webkit-user-select": "none",
          maxWidth: "100%",
          color: "var(--_pill-color)",
          '[data-raikou-color-scheme="dark"] &': {
            "--_pill-bg": "var(--raikou-pill-bg)",
            "--_pill-color": "var(--raikou-pill-color)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_pill-color": "var(--raikou-pill-color)"
          },
          "&[data-with-remove]": {
            "--_pill-padding-right": "0"
          },
          "&[data-disabled], &:has(button:disabled)": {
            "--_pill-cursor": "not-allowed"
          }
        },
        '.pill-root[data-variant="default"]': {
          '[data-raikou-color-scheme="light"] &': {
            "--_pill-bg": "var(--raikou-pill-default-bg)",
            "&[data-disabled], &:has(button:disabled)": {
              "--_pill-bg": "var(--raikou-pill-default-disabled-bg)"
            }
          }
        },
        '.pill-root[data-variant="contrast"]': {
          '[data-raikou-color-scheme="light"] &': {
            "--_pill-bg": "var(--raikou-pill-contrast-bg)",
            "&[data-disabled], &:has(button:disabled)": {
              "--_pill-bg": "var(--raikou-pill-contrast-disabled-bg)"
            }
          }
        },
        ".pill-label": {
          cursor: "var(--_pill-cursor, default)",
          overflow: "hidden",
          height: "100%",
          lineHeight: "var(--pill-height)",
          textOverflow: "ellipsis"
        },
        ".pill-remove": {
          color: "inherit",
          fontSize: "inherit",
          height: "100%",
          minHeight: "unset",
          minWidth: "2em",
          width: "unset",
          borderRadius: "0",
          paddingLeft: "0.1em",
          paddingRight: "0.3em",
          flex: "0",
          ".root[data-disabled] > &, &:disabled": {
            backgroundColor: "transparent",
            width: "0.8em",
            minWidth: "0.8em",
            padding: "0",
            cursor: "not-allowed",
            "& > svg": {
              display: "none"
            }
          },
          "& > svg": {
            pointerEvents: "none"
          }
        },
        ".pill-group": {
          "--pg-gap-xs": rem2("6px"),
          "--pg-gap-sm": rem2("8px"),
          "--pg-gap-md": rem2("10px"),
          "--pg-gap-lg": rem2("12px"),
          "--pg-gap-xl": rem2("12px"),
          display: "flex",
          alignItems: "center",
          gap: "var(--pg-gap)",
          flexWrap: "wrap"
        }
      });
    };
  }
});

// ../components/PillsInput/src/PillsInput.plugin.ts
var require_PillsInput_plugin = __commonJS({
  "../components/PillsInput/src/PillsInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".field": {
          backgroundColor: "transparent",
          appearance: "none",
          minWidth: rem2("100px"),
          flex: "1",
          border: "0",
          fontSize: "inherit",
          height: "1.6em",
          color: "inherit",
          padding: "0",
          "&::placeholder": {
            color: "var(--_input-placeholder-color)",
            opacity: "1"
          },
          "&[data-type='hidden'], &[data-type='auto']": {
            height: rem2("1px"),
            width: rem2("1px"),
            top: "0",
            left: "0",
            pointerEvents: "none",
            position: "absolute",
            opacity: "0"
          },
          "&:focus": {
            outline: "none"
          },
          "&[data-type='auto']:focus": {
            height: "1.6em",
            visibility: "visible",
            opacity: "1",
            position: "static"
          },
          "&[data-pointer]:not([data-disabled], :disabled)": {
            cursor: "pointer"
          },
          "&[data-disabled], &:disabled": {
            cursor: "not-allowed"
          }
        }
      });
    };
  }
});

// ../components/PinInput/src/PinInput.plugin.ts
var require_PinInput_plugin = __commonJS({
  "../components/PinInput/src/PinInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".pinInput-root": {
          "--pin-input-size-xs": rem2("30px"),
          "--pin-input-size-sm": rem2("36px"),
          "--pin-input-size-md": rem2("42px"),
          "--pin-input-size-lg": rem2("50px"),
          "--pin-input-size-xl": rem2("60px")
        },
        ".pinInput-pinInput": {
          width: "var(--pin-input-size)",
          height: "var(--pin-input-size)"
        }
      });
    };
  }
});

// ../components/Popover/src/Popover.plugin.ts
var require_Popover_plugin = __commonJS({
  "../components/Popover/src/Popover.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".popover-dropdown": {
          position: "absolute",
          backgroundColor: "var(--_popover-bg)",
          border: `${rem2("1px")} solid var(--_popover-bd)`,
          padding: "var(--raikou-spacing-sm) var(--raikou-spacing-md)",
          boxShadow: "var(--popover-shadow, none)",
          borderRadius: "var(--popover-radius)",
          "&:focus": {
            outline: "none"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_popover-bg": "var(--raikou-popover-bg)",
            "--_popover-bd": "var(--raikou-popover-bd)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_popover-bg": "var(--raikou-popover-bg)",
            "--_popover-bd": "var(--raikou-popover-bd)"
          }
        },
        ".popover-arrow": {
          backgroundColor: "inherit",
          border: `${rem2("1px")} solid var(--_popover-bd)`,
          zIndex: "1"
        }
      });
    };
  }
});

// ../components/Progress/src/Progress.plugin.ts
var require_Progress_plugin = __commonJS({
  "../components/Progress/src/Progress.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        "@keyframes stripes-animation": {
          "0%": {
            backgroundPosition: "0 0"
          },
          "100%": {
            backgroundPosition: `${rem2("40px")} 0`
          }
        },
        ".progress-root": {
          "--progress-size-xs": rem2("3px"),
          "--progress-size-sm": rem2("5px"),
          "--progress-size-md": rem2("8px"),
          "--progress-size-lg": rem2("12px"),
          "--progress-size-xl": rem2("16px"),
          position: "relative",
          height: "var(--progress-size)",
          borderRadius: "var(--progress-radius)",
          overflow: "hidden",
          backgroundColor: "var(--_track-bg)",
          display: "flex",
          '[data-raikou-color-scheme="light"] &': {
            "--_track-bg": "var(--raikou-progress-track-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_track-bg": "var(--raikou-progress-track-bg)"
          }
        },
        ".progress-section": {
          backgroundColor: "var(--progress-section-color)",
          height: "100%",
          width: "var(--progress-section-width)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "var(--_section-radius)",
          backgroundSize: `${rem2("20px")} ${rem2("20px")}`,
          backgroundImage: "var(--_section-gradient)",
          animation: "var(--_section-animation)",
          "&[data-striped]": {
            "--_section-gradient": `linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        )`
          },
          "&[data-animated]": {
            "--_section-animation": "stripes-animation 1s linear infinite"
          },
          "&:last-of-type": {
            "--_section-radius": "0 var(--progress-radius) var(--progress-radius) 0",
            '[dir="rtl"] &': {
              "--_section-radius": "var(--progress-radius) 0 0 var(--progress-radius)"
            }
          },
          "&:first-of-type": {
            "--_section-radius": "var(--progress-radius) 0 0 var(--progress-radius)",
            '[dir="rtl"] &': {
              "--_section-radius": "0 var(--progress-radius) var(--progress-radius) 0"
            }
          }
        },
        ".progress-label": {
          color: "var(--raikou-color-white)",
          fontWeight: "bold",
          userSelect: "none",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontSize: `min(calc(var(--progress-size) * 0.65), ${rem2("18px")})`,
          lineHeight: "1",
          paddingLeft: rem2("4px"),
          paddingRight: rem2("4px")
        }
      });
    };
  }
});

// ../components/Radio/src/Radio.plugin.ts
var require_Radio_plugin = __commonJS({
  "../components/Radio/src/Radio.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".radio-root": {
          "--radio-size-xs": rem2("16px"),
          "--radio-size-sm": rem2("20px"),
          "--radio-size-md": rem2("24px"),
          "--radio-size-lg": rem2("30px"),
          "--radio-size-xl": rem2("36px"),
          "--radio-icon-size": "calc(var(--radio-size) / 2.25)"
        },
        ".radio-inner": {
          position: "relative",
          width: "var(--radio-size)",
          height: "var(--radio-size)",
          order: "var(--_radio-order, 1)",
          "&[data-label-position='left']": {
            "--_radio-order": "2"
          }
        },
        ".radio-icon": {
          color: "var(--_radio-icon-color, var(--raikou-color-white))",
          opacity: "var(--_radio-icon-opacity, 0)",
          transform: `var(--_radio-icon-transform, scale(0.2) translateY(${rem2(
            "10px"
          )}))`,
          transition: "opacity 100ms ease, transform 200ms ease",
          pointerEvents: "none",
          width: "var(--radio-icon-size)",
          height: "var(--radio-icon-size)",
          position: "absolute",
          top: "calc(50% - var(--radio-icon-size) / 2)",
          left: "calc(50% - var(--radio-icon-size) / 2)"
        },
        ".radio-radio": {
          backgroundColor: "var(--_radio-bg)",
          border: `${rem2("1px")} solid var(--_radio-bd-color)`,
          position: "relative",
          appearance: "none",
          width: "var(--radio-size)",
          height: "var(--radio-size)",
          borderRadius: "var(--radio-radius)",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transitionProperty: "background-color, border-color",
          transitionTimingFunction: "ease",
          transitionDuration: "100ms",
          cursor: "var(--_cursor, var(--raikou-cursor-type))",
          '[data-raikou-color-scheme="light"] &': {
            "--_radio-bg": "var(--raikou-radio-bg)",
            "--_radio-bd-color": "var(--raikou-radio-bd-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_radio-bg": "var(--raikou-radio-bg)",
            "--_radio-bd-color": "var(--raikou-radio-bd-color)"
          },
          "&:checked": {
            "--_radio-bg": "var(--radio-color)",
            "--_radio-bd-color": "var(--radio-color)",
            "& + .radio-icon": {
              "--_radio-icon-opacity": "1",
              "--_radio-icon-transform": "scale(1)"
            }
          },
          "&:disabled": {
            "--_cursor": "not-allowed",
            '[data-raikou-color-scheme="light"] &': {
              "--_radio-bg": "var(--raikou-radio-bg-disabled)",
              "--_radio-bd-color": "var(--raikou-radio-bd-disabled-color)",
              "& + .radio-icon": {
                "--_radio-icon-color": "var(--raikou-radio-icon-disabled-color)"
              }
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_radio-bg": "var(--raikou-radio-bg-disabled)",
              "--_radio-bd-color": "var(--raikou-radio-bd-disabled-color)",
              "& + .icon": {
                "--_radio-icon-color": "var(--raikou-radio-icon-disabled-color)"
              }
            }
          },
          "&[data-error]": {
            "--_radio-bd-color": "var(--raikou-color-error)"
          }
        }
      });
    };
  }
});

// ../components/Rating/src/Rating.plugin.ts
var require_Rating_plugin = __commonJS({
  "../components/Rating/src/Rating.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".rating-root": {
          "--rating-size-xs": rem2("14px"),
          "--rating-size-sm": rem2("18px"),
          "--rating-size-md": rem2("20px"),
          "--rating-size-lg": rem2("28px"),
          "--rating-size-xl": rem2("32px"),
          display: "flex",
          width: "max-content",
          pointerEvents: "var(--_pointer-events)",
          "&:has(input:disabled)": {
            "--_pointer-events": "none"
          }
        },
        ".rating-symbolGroup": {
          position: "relative",
          transition: "transform 100ms ease",
          zIndex: "var(--_z-index)",
          transform: "var(--_transform)",
          "&[data-active]": {
            "--_z-index": "1",
            "--_transform": "scale(1.1)"
          }
        },
        ".rating-starSymbol": {
          width: "var(--rating-size)",
          height: "var(--rating-size)",
          stroke: "var(--_star-color)",
          fill: "var(--_star-color)",
          display: "block",
          '[data-raikou-color-scheme="light"] &': {
            "--_star-color": "var(--raikou-rating-star-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_star-color": "var(--raikou-rating-star-color)"
          },
          "[data-raikou-color-scheme] &[data-filled]": {
            "--_star-color": "var(--rating-color)"
          }
        },
        ".rating-input": {
          height: "0",
          width: "0",
          position: "absolute",
          overflow: "hidden",
          whiteSpace: "nowrap",
          opacity: "0",
          "&:focus-visible + label": {
            outline: `${rem2("2px")} solid var(--raikou-color-primary)`,
            outlineOffset: rem2("2px")
          }
        },
        ".rating-label": {
          display: "block",
          cursor: "pointer",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "var(--rating-item-z-index, 0)",
          "&[data-read-only]": {
            cursor: "default"
          },
          "&:last-of-type": {
            position: "relative"
          }
        },
        ".rating-symbolBody": {
          clipPath: "var(--rating-symbol-clip-path)"
        }
      });
    };
  }
});

// ../components/RingProgress/src/RingProgress.plugin.ts
var require_RingProgress_plugin = __commonJS({
  "../components/RingProgress/src/RingProgress.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".ringProgress-root": {
          position: "relative",
          width: "var(--rp-size)",
          height: "var(--rp-size)",
          minWidth: "var(--rp-size)",
          minHeight: "var(--rp-size)"
        },
        ".ringProgress-svg": {
          width: "var(--rp-size)",
          height: "var(--rp-size)",
          minWidth: "var(--rp-size)",
          minHeight: "var(--rp-size)",
          transform: "rotate(-90deg)"
        },
        ".ringProgress-curve": {
          stroke: "var(--curve-color, var(--_curve-root-color))",
          '[data-raikou-color-scheme="light"] &': {
            "--_curve-root-color": "var(--raikou-ringprogress-curve-root-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_curve-root-color": "var(--raikou-ringprogress-curve-root-color)"
          }
        },
        ".ringProgress-label": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "var(--rp-label-offset)",
          left: "var(--rp-label-offset)"
        }
      });
    };
  }
});

// ../components/ScrollArea/src/ScrollArea.plugin.ts
var require_ScrollArea_plugin = __commonJS({
  "../components/ScrollArea/src/ScrollArea.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".scrollArea-root": {
          position: "relative",
          overflow: "hidden"
        },
        ".scrollArea-viewport": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "-webkit-overflow-scrolling": "touch",
          width: "100%",
          height: "100%",
          paddingRight: "var(--_viewport-padding-right, 0rem)",
          paddingLeft: "var(--_viewport-padding-left, 0rem)",
          paddingBottom: "var(--_viewport-padding-bottom, 0rem)",
          "&::-webkit-scrollbar": {
            display: "none"
          },
          "&[data-offset-scrollbars]": {
            "--_viewport-padding-right": "var(--scrollarea-scrollbar-size)",
            "--_viewport-padding-bottom": "var(--scrollarea-scrollbar-size)",
            "--_viewport-padding-left": "unset",
            '[dir="rtl"] &': {
              "--_viewport-padding-right": "unset",
              "--_viewport-padding-left": "var(--scrollarea-scrollbar-size)"
            }
          }
        },
        ".scrollArea-viewportInner": {
          minWidth: "100%",
          display: "table"
        },
        ".scrollArea-scrollbar": {
          userSelect: "none",
          touchAction: "none",
          boxSizing: "border-box",
          transition: "background-color 150ms ease, opacity 150ms ease",
          padding: "calc(var(--scrollarea-scrollbar-size) / 5)",
          display: "var(--_scrollbar-display, flex)",
          backgroundColor: "var(--_scrollbar-bg, transparent)",
          width: "var(--_scrollbar-width)",
          height: "var(--_scrollbar-height)",
          flexDirection: "var(--_scrollbar-direction, row)",
          "& > .thumb": {
            backgroundColor: "var(--_thumb-bg)"
          },
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_scrollbar-bg": "var(--raikou-scrollarea-scrollbar-hover-bg)",
                "--_thumb-bg": "var(--raikou-scrollarea-thumb-hover-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_scrollbar-bg": "var(--raikou-scrollarea-scrollbar-hover-bg)",
                "--_thumb-bg": "var(--raikou-scrollarea-thumb-hover-bg)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_scrollbar-bg": "var(--raikou-scrollarea-scrollbar-active-bg)",
                "--_thumb-bg": "var(--raikou-scrollarea-thumb-active-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_scrollbar-bg": "var(--raikou-scrollarea-scrollbar-active-bg)",
                "--_thumb-bg": "var(--raikou-scrollarea-thumb-active-bg)"
              }
            }
          },
          "&[data-hidden], &[data-state='hidden']": {
            "--_scrollbar-display": "none"
          },
          "&[data-orientation='vertical']": {
            "--_scrollbar-width": "var(--scrollarea-scrollbar-size)",
            top: "0",
            bottom: "var(--sa-corner-width)",
            right: "0",
            '[dir="rtl"] &': {
              right: "unset",
              left: "0"
            }
          },
          "&[data-orientation='horizontal']": {
            "--_scrollbar-height": "var(--scrollarea-scrollbar-size)",
            "--_scrollbar-direction": "column",
            bottom: "0",
            left: "0",
            right: "var(--sa-corner-height)",
            '[dir="rtl"] &': {
              right: "0",
              left: "var(--sa-corner-height)"
            }
          }
        },
        ".scrollArea-thumb": {
          flex: "1",
          borderRadius: "var(--scrollarea-scrollbar-size)",
          position: "relative",
          transition: "background-color 150ms ease",
          overflow: "hidden",
          backgroundColor: "var(--_thumb-bg)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            minWidth: rem2("44px"),
            minHeight: rem2("44px")
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_thumb-bg": "var(--raikou-scrollarea-thumb-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_thumb-bg": "var(--raikou-scrollarea-thumb-bg)"
          }
        },
        ".scrollArea-corner": {
          position: "absolute",
          opacity: "var(--_corner-opacity, 0)",
          transition: "opacity 150ms ease",
          backgroundColor: "var(--_corner-bg)",
          display: "var(--_corner-display, block)",
          right: "0",
          bottom: "0",
          '[dir="rtl"] &': {
            right: "unset",
            left: "0",
            bottom: "0"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_corner-bg": "var(--raikou-color-gray-0)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_corner-bg": "var(--raikou-color-dark-8)"
          },
          "&[data-hovered]": {
            "--_corner-opacity": "1"
          },
          "&[data-hidden]": {
            "--_corner-display": "none"
          }
        }
      });
    };
  }
});

// ../components/SegmentedControl/src/SegmentedControl.plugin.ts
var require_SegmentedControl_plugin = __commonJS({
  "../components/SegmentedControl/src/SegmentedControl.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".segmentedControl-root": {
          "--sc-padding-xs": `${rem2("3px")} ${rem2("6px")}`,
          "--sc-padding-sm": `${rem2("5px")} ${rem2("10px")}`,
          "--sc-padding-md": `${rem2("7px")} ${rem2("14px")}`,
          "--sc-padding-lg": `${rem2("9px")} ${rem2("16px")}`,
          "--sc-padding-xl": `${rem2("12px")} ${rem2("20px")}`,
          position: "relative",
          display: "var(--_display, inline-flex)",
          flexDirection: "var(--_flex-direction, row)",
          width: "var(--_width, auto)",
          backgroundColor: "var(--_bg)",
          borderRadius: "var(--sc-radius)",
          overflow: "hidden",
          padding: "4px",
          "&[data-full-width]": {
            "--_display": "flex"
          },
          "&[data-orientation='vertical']": {
            "--_display": "flex",
            "--_flex-direction": "column",
            "--_width": "max-content",
            "&[data-full-width]": {
              "--_width": "auto"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_bg": "var(--raikou-segmentedcontrol-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bg": "var(--raikou-segmentedcontrol-bg)"
          }
        },
        ".segmentedControl-indicator": {
          position: "absolute",
          display: "block",
          zIndex: "1",
          borderRadius: "var(--sc-radius)",
          boxShadow: "var(--_box-shadow)",
          width: "var(--sc-indicator-width)",
          height: "var(--sc-indicator-height)",
          transform: "var(--sc-indicator-transform)",
          transition: "transform var(--sc-transition-duration) var(--sc-transition-timing-function), width var(--sc-transition-duration) var(--sc-transition-timing-function)",
          backgroundColor: "var(--_bg)",
          '[data-raikou-color-scheme="light"] &': {
            "--_box-shadow": "var(--sc-shadow, none)",
            "--_bg": "var(--sc-color, var(--raikou-segmentedcontrol-indicator-bg))"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_box-shadow": "none",
            "--_bg": "var(--sc-color, var(--raikou-segmentedcontrol-indicator-bg))"
          }
        },
        ".segmentedControl-label": {
          "-webkit-tap-highlight-color": "transparent",
          fontWeight: "500",
          display: "block",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          userSelect: "none",
          borderRadius: "var(--sc-radius)",
          fontSize: "var(--sc-font-size)",
          padding: "var(--sc-padding)",
          transition: "color var(--sc-transition-duration) var(--sc-transition-timing-function)",
          cursor: "var(--_cursor, pointer)",
          color: "var(--_color)",
          /* outline is controlled by .input */
          outline: "var(--_outline, none)",
          "fieldset:disabled &, &[data-disabled]": {
            "--_cursor": "not-allowed",
            '[data-raikou-color-scheme="light"] &': {
              "--_color": "var(--raikou-segmentedcontrol-disabled-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_color": "var(--raikou-segmentedcontrol-disabled-color)"
            }
          },
          "&[data-active]": {
            '[data-raikou-color-scheme="light"] &': {
              "--_color": "var(--sc-label-color, var(--raikou-segmentedcontrol-active-color))"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_color": "var(--sc-label-color, var(--raikou-segmentedcontrol-active-color))"
            }
          },
          "&:not([data-disabled]):not([data-active])": {
            "@media (hover: hover)": {
              "&:hover": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-hover-color)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-hover-color)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-active-color)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-active-color)"
                }
              }
            }
          },
          "fieldset:disabled &": {
            "@media (hover: hover)": {
              "&:hover": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-disabled-color) !important"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-disabled-color) !important"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-disabled-color) !important"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_color": "var(--raikou-segmentedcontrol-disabled-color) !important"
                }
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_color": "var(--raikou-segmentedcontrol-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_color": "var(--raikou-segmentedcontrol-color)"
          }
        },
        ".segmentedControl-input": {
          height: "0",
          width: "0",
          position: "absolute",
          overflow: "hidden",
          whiteSpace: "nowrap",
          opacity: "0",
          "&[data-focus-ring='auto']": {
            "&:focus:focus-visible": {
              "& + .label": {
                "--_outline": `${rem2(
                  "2px"
                )} solid var(--raikou-segmentedcontrol-ring-outline)`
              }
            }
          },
          "&[data-focus-ring='always']": {
            "&:focus": {
              "& + .label": {
                "--_outline": `${rem2(
                  "2px"
                )} solid var(--raikou-segmentedcontrol-ring-outline)`
              }
            }
          }
        },
        ".segmentedControl-control": {
          position: "relative",
          flex: "1",
          zIndex: "2",
          transition: "border-color var(--sc-transition-duration) var(--sc-transition-timing-function)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "var(--_separator-color)",
            width: rem2("1px"),
            transition: "background-color var(--sc-transition-duration) var(--sc-transition-timing-function)",
            '[dir="rtl"] &': {
              right: "0",
              left: "auto"
            }
          },
          "&[data-orientation='vertical']": {
            "&::before": {
              top: "0",
              left: "0",
              right: "0",
              bottom: "auto",
              height: rem2("1px"),
              width: "auto"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_separator-color": "var(--raikou-segmentedcontrol-separator-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_separator-color": "var(--raikou-segmentedcontrol-separator-color)"
          },
          "&:first-of-type": {
            "&::before": {
              "--_separator-color": "transparent"
            }
          },
          "&[data-active]": {
            "[data-raikou-color-scheme] &": {
              "&, & + .segmentedControl-control": {
                "&::before": {
                  "--_separator-color": "transparent"
                }
              }
            }
          }
        }
      });
    };
  }
});

// ../components/SimpleGrid/src/SimpleGrid.plugin.ts
var require_SimpleGrid_plugin = __commonJS({
  "../components/SimpleGrid/src/SimpleGrid.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".simpleGrid-root": {
          display: "grid",
          "grid-template-columns": "repeat(var(--sg-cols), minmax(0, 1fr))",
          gap: "var(--sg-spacing-y) var(--sg-spacing-x)"
        }
      });
    };
  }
});

// ../components/Skeleton/src/Skeleton.plugin.ts
var require_Skeleton_plugin = __commonJS({
  "../components/Skeleton/src/Skeleton.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        "@keyframes skeleton-fade": {
          "0%, 100%": {
            opacity: "0.4"
          },
          "50%": {
            opacity: "1"
          }
        },
        ".skeleton-root": {
          height: "var(--skeleton-height)",
          width: "var(--skeleton-width)",
          borderRadius: "var(--skeleton-radius)",
          position: "relative",
          transform: "translateZ(0)",
          "-webkit-transform": "translateZ(0)",
          "&[data-animate]::after": {
            animation: "skeleton-fade 1500ms linear infinite"
          },
          "&[data-visible]": {
            overflow: "hidden",
            "&::before": {
              position: "absolute",
              content: '""',
              inset: "0",
              zIndex: "10",
              backgroundColor: "var(--raikou-color-body)"
            },
            "&::after": {
              position: "absolute",
              content: '""',
              inset: "0",
              zIndex: "11",
              '[data-raikou-color-scheme="light"] &': {
                backgroundColor: "var(--raikou-skeleton-bg)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                backgroundColor: "var(--raikou-skeleton-bg)"
              }
            }
          }
        }
      });
    };
  }
});

// ../components/Slider/src/Slider.plugin.ts
var require_Slider_plugin = __commonJS({
  "../components/Slider/src/Slider.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".slider-root": {
          "--slider-size-xs": rem2("4px"),
          "--slider-size-sm": rem2("6px"),
          "--slider-size-md": rem2("8px"),
          "--slider-size-lg": rem2("10px"),
          "--slider-size-xl": rem2("12px"),
          "-webkit-tap-highlight-color": "transparent",
          outline: "none",
          height: "calc(var(--slider-size) * 2)",
          paddingLeft: "var(--slider-size)",
          paddingRight: "var(--slider-size)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          touchAction: "none",
          position: "relative",
          '[data-raikou-color-scheme="light"] &': {
            "--slider-track-bg": "var(--raikou-slider-track-bg)",
            "--slider-track-disabled-bg": "var(--raikou-slider-track-disabled-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--slider-track-bg": "var(--raikou-slider-track-bg)",
            "--slider-track-disabled-bg": "var(--raikou-slider-track-disabled-bg)"
          }
        },
        ".slider-label": {
          position: "absolute",
          top: rem2("-36px"),
          backgroundColor: "var(--_label-bg)",
          fontSize: "var(--raikou-font-size-xs)",
          color: "var(--raikou-color-white)",
          padding: "calc(var(--raikou-spacing-xs) / 2)",
          borderRadius: "var(--raikou-radius-sm)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          touchAction: "none",
          '[data-raikou-color-scheme="light"] &': {
            "--_label-bg": "var(--raikou-slider-label-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_label-bg": "var(--raikou-slider-label-bg)"
          }
        },
        ".slider-thumb": {
          position: "absolute",
          display: "var(--_thumb-display, flex)",
          height: "var(--slider-thumb-size)",
          width: "var(--slider-thumb-size)",
          backgroundColor: "var(--_thumb-bg)",
          border: `${rem2("4px")} solid var(--_thumb-bd)`,
          color: "var(--_thumb-bd)",
          transform: "var(--_thumb-transform, translate(-50%, -50%))",
          top: "50%",
          cursor: "pointer",
          borderRadius: "var(--slider-radius)",
          alignItems: "center",
          justifyContent: "center",
          transition: "box-shadow 100ms ease, transform 100ms ease",
          zIndex: "3",
          userSelect: "none",
          touchAction: "none",
          boxShadow: "var(--_thumb-box-shadow, none)",
          outlineOffset: rem2("2px"),
          left: "var(--slider-thumb-offset)",
          '[dir="rtl"] &': {
            left: "auto",
            right: "calc(var(--slider-thumb-offset) - var(--slider-thumb-size))"
          },
          "fieldset:disabled &, &[data-disabled]": {
            "--_thumb-display": "none"
          },
          "&[data-dragging]": {
            "--_thumb-transform": "translate(-50%, -50%) scale(1.05)",
            "--_thumb-box-shadow": "var(--raikou-shadow-sm)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_thumb-bd": "var(--raikou-slider-thumb-bd)",
            "--_thumb-bg": "var(--raikou-slider-thumb-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_thumb-bd": "var(--raikou-slider-thumb-bd)",
            "--_thumb-bg": "var(--raikou-slider-thumb-bg)"
          }
        },
        ".slider-trackContainer": {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "calc(var(--slider-size) * 2)",
          cursor: "var(--_track-cursor, pointer)",
          "fieldset:disabled &, &[data-disabled]": {
            "--_track-cursor": "not-allowed"
          }
        },
        ".slider-track": {
          position: "relative",
          width: "100%",
          height: "var(--slider-size)",
          "&[data-inverted]:not([data-disabled])": {
            "--_track-bg": "var(--slider-color)"
          },
          "fieldset:disabled &[data-inverted], &[data-inverted][data-disabled]": {
            "--_track-bg": "var(--slider-track-disabled-bg)"
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            bottom: "0",
            borderRadius: "var(--slider-radius)",
            right: "calc(var(--slider-size) * -1)",
            left: "calc(var(--slider-size) * -1)",
            backgroundColor: "var(--_track-bg, var(--slider-track-bg))",
            zIndex: "0"
          }
        },
        ".slider-bar": {
          position: "absolute",
          zIndex: "1",
          top: "0",
          bottom: "0",
          backgroundColor: "var(--_bar-bg, var(--slider-color))",
          borderRadius: "var(--slider-radius)",
          width: "var(--slider-bar-width)",
          left: "var(--slider-bar-offset)",
          '[dir="rtl"] &': {
            left: "auto",
            right: "var(--slider-bar-offset)"
          },
          "&[data-inverted]": {
            "--_bar-bg": "var(--slider-track-bg)"
          },
          "fieldset:disabled &:not([data-inverted]), &[data-disabled]:not([data-inverted])": {
            "--_bar-bg": "var(--_bar-disabled-bg)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_bar-disabled-bg": "var(--raikou-slider-bar-disabled-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bar-disabled-bg": "var(--raikou-slider-bar-disabled-bg)"
          }
        },
        ".slider-markWrapper": {
          position: "absolute",
          left: "calc(var(--mark-offset) - var(--slider-size) / 2)",
          top: "0",
          zIndex: "2",
          height: "0",
          pointerEvents: "none",
          '[dir="rtl"] &': {
            left: "unset",
            right: "calc(var(--mark-offset) - var(--slider-size) / 2)"
          }
        },
        ".slider-mark": {
          border: `${rem2("2px")} solid var(--_mark-bd)`,
          height: "var(--slider-size)",
          width: "var(--slider-size)",
          borderRadius: rem2("1000px"),
          transform: "translateX((calc(var(--slider-size) / -2)))",
          backgroundColor: "var(--_mark-bg, var(--raikou-color-white))",
          pointerEvents: "none",
          "&[data-filled]": {
            "[data-raikou-color-scheme] &": {
              "--_mark-bd": "var(--slider-color)"
            },
            "&[data-disabled]": {
              '[data-raikou-color-scheme="light"] &': {
                "--_mark-bd": "var(--raikou-slider-mark-disabled-bd)"
              },
              '[data-raikou-color-scheme="dark"] &': {
                "--_mark-bd": "var(--raikou-slider-mark-disabled-bd)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_mark-bd": "var(--raikou-slider-mark-bd)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_mark-bd": "var(--raikou-slider-mark-bd)"
          }
        },
        ".slider-markLabel": {
          transform: "translate(calc(-50% + var(--slider-size) / 2), calc(var(--raikou-spacing-xs) / 2))",
          fontSize: "var(--raikou-font-size-sm)",
          color: "var(--_mark-label-color)",
          whiteSpace: "nowrap",
          cursor: "pointer",
          userSelect: "none",
          '[data-raikou-color-scheme="light"] &': {
            "--_mark-label-color": "var(--raikou-slider-mark-label-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_mark-label-color": "var(--raikou-slider-mark-label-color)"
          }
        }
      });
    };
  }
});

// ../components/Spoiler/src/Spoiler.plugin.ts
var require_Spoiler_plugin = __commonJS({
  "../components/Spoiler/src/Spoiler.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".spoiler-root": {
          position: "relative"
        },
        ".spoiler-content": {
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "max-height var(--spoiler-transition-duration, 200ms) ease"
        }
      });
    };
  }
});

// ../components/Stack/src/Stack.plugin.ts
var require_Stack_plugin = __commonJS({
  "../components/Stack/src/Stack.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".stack-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "var(--stack-align)",
          justifyContent: "var(--stack-justify)",
          gap: "var(--stack-gap)"
        }
      });
    };
  }
});

// ../components/Stepper/src/Stepper.plugin.ts
var require_Stepper_plugin = __commonJS({
  "../components/Stepper/src/Stepper.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".stepper-root": {
          "--stepper-icon-size-xs": rem2("34px"),
          "--stepper-icon-size-sm": rem2("36px"),
          "--stepper-icon-size-md": rem2("42px"),
          "--stepper-icon-size-lg": rem2("48px"),
          "--stepper-icon-size-xl": rem2("52px")
        },
        ".stepper-steps": {
          display: "flex",
          flexWrap: "var(--_steps-wrap, nowrap)",
          gap: "var(--_steps-gap)",
          alignItems: "var(--_steps-align-items, center)",
          flexDirection: "var(--_steps-direction)",
          "&[data-wrap]": {
            "--_steps-wrap": "wrap",
            "--_steps-gap": "var(--raikou-spacing-md) 0"
          },
          '&[data-orientation="vertical"]': {
            "--_steps-direction": "column",
            '&[data-icon-position="left"]': {
              "--_steps-align-items": "flex-start"
            },
            '&[data-icon-position="right"]': {
              "--_steps-align-items": "flex-end"
            }
          },
          '&[data-orientation="horizontal"]': {
            "--_steps-direction": "row"
          }
        },
        ".stepper-separator": {
          "--_separator-offset": "calc(var(--stepper-icon-size) / 2 - rem(1px))",
          transition: "background-color 150ms ease",
          flex: "1",
          height: "var(--_separator-height)",
          width: "var(--_separator-width)",
          marginLeft: "var(--_separator-ml)",
          marginRight: "var(--_separator-mr)",
          marginTop: "var(--_separator-mt)",
          marginBottom: "var(--_separator-mb)",
          backgroundColor: "var(--_separator-bg)",
          '[data-raikou-color-scheme="light"] &': {
            "--_separator-bg": "var(--raikou-stepper-separator-bg)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_separator-bg": "var(--raikou-stepper-separator-bg)"
          },
          "&[data-active]": {
            "--_separator-bg": "var(--stepper-color)"
          },
          '&[data-orientation="horizontal"]': {
            "--_separator-height": rem2("2px"),
            "--_separator-ml": "var(--raikou-spacing-md)",
            "--_separator-mr": "var(--raikou-spacing-md)"
          },
          '&[data-orientation="vertical"]': {
            "--_separator-width": rem2("2px"),
            "--_separator-mt": "calc(var(--raikou-spacing-xs) / 2)",
            "--_separator-mb": `calc(var(--raikou-spacing-xs) - ${rem2("2px")})`,
            '&[data-icon-position="left"]': {
              "--_separator-ml": "var(--_separator-offset)",
              "--_separator-mr": "0",
              '[dir="rtl"] &': {
                "--_separator-ml": "0",
                "--_separator-mr": "var(--_separator-offset)"
              }
            },
            '&[data-icon-position="right"]': {
              "--_separator-ml": "0",
              "--_separator-mr": "var(--_separator-offset)",
              '[dir="rtl"] &': {
                "--_separator-ml": "var(--_separator-offset)",
                "--_separator-mr": "0"
              }
            }
          }
        },
        ".stepper-content": {
          paddingTop: "var(--stepper-content-padding)"
        },
        ".stepper-step": {
          "--_step-color": "var(--step-color, var(--stepper-color))",
          display: "flex",
          flexDirection: "var(--_step-direction)",
          cursor: "var(--_step-cursor, default)",
          "&[data-allow-click]": {
            "--_step-cursor": "pointer"
          },
          '&[data-icon-position="left"]': {
            "--_step-direction": "row"
          },
          '&[data-icon-position="right"]': {
            "--_step-direction": "row-reverse"
          }
        },
        '[data-orientation="horizontal"] .stepper-step': {
          flexDirection: "var(--_step-direction)",
          alignItems: "center"
        },
        '[data-orientation="vertical"] .stepper-step': {
          "--_separator-spacing": "calc(var(--raikou-spacing-xs) / 2)",
          justifyContent: "flex-start",
          minHeight: "calc(var(--stepper-icon-size) + var(--raikou-spacing-xl) + var(--_separator-spacing))",
          marginTop: "var(--_step-mt, var(--_separator-spacing))",
          overflow: "hidden",
          "&:first-of-type": {
            "--_step-mt": "0"
          },
          "&:last-of-type .stepper-verticalSeparator": {
            display: "none"
          }
        },
        ".stepper-stepWrapper": {
          position: "relative"
        },
        ".stepper-verticalSeparator": {
          top: "calc(var(--stepper-icon-size) + var(--_separator-spacing))",
          left: "calc(var(--stepper-icon-size) / 2)",
          height: "100vh",
          position: "absolute",
          borderLeft: `${rem2("2px")} solid var(--_separator-border-color)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_separator-border-color": "var(--raikou-stepper-separator-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_separator-border-color": "var(--raikou-stepper-separator-border-color)"
          },
          "[data-raikou-color-scheme] &[data-active]": {
            "--_separator-border-color": "var(--stepper-color)"
          }
        },
        ".stepper-stepIcon": {
          height: "var(--stepper-icon-size)",
          width: "var(--stepper-icon-size)",
          minHeight: "var(--stepper-icon-size)",
          minWidth: "var(--stepper-icon-size)",
          borderRadius: "var(--stepper-radius)",
          fontSize: "var(--stepper-fz)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontWeight: "bold",
          transition: "background-color 150ms ease, border-color 150ms ease",
          backgroundColor: "var(--_step-icon-bg)",
          border: `${rem2("2px")} solid var(--_step-icon-border-color)`,
          color: "var(--_step-icon-color)",
          '[data-raikou-color-scheme="light"] &': {
            "--_step-icon-bg": "var(--raikou-stepper-step-icon-bg)",
            "--_step-icon-border-color": "var(--raikou-stepper-step-icon-border-color)",
            "--_step-icon-color": "var(--raikou-stepper-step-icon-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_step-icon-bg": "var(--raikou-stepper-step-icon-bg)",
            "--_step-icon-border-color": "var(--raikou-stepper-step-icon-border-color)",
            "--_step-icon-color": "var(--raikou-stepper-step-icon-color)"
          },
          "[data-raikou-color-scheme] &[data-progress]": {
            "--_step-icon-border-color": "var(--_step-color)"
          },
          "[data-raikou-color-scheme] &[data-completed]": {
            "--_step-icon-color": "var(--raikou-color-white)",
            "--_step-icon-bg": "var(--_step-color)",
            "--_step-icon-border-color": "var(--_step-color)"
          }
        },
        ".stepper-stepCompletedIcon": {
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--raikou-color-white)"
        },
        ".stepper-stepBody": {
          display: "flex",
          flexDirection: "column",
          marginLeft: "var(--_step-body-ml)",
          marginRight: "var(--_step-body-mr)",
          marginTop: "var(--_step-body-mt)",
          textAlign: "var(--_step-body-ta)",
          '&[data-icon-position="left"]': {
            "--_step-body-ta": "left",
            "--_step-body-ml": "var(--raikou-spacing-sm)",
            '[dir="rtl"] &': {
              "--_step-body-ta": "right",
              "--_step-body-ml": "0",
              "--_step-body-mr": "var(--raikou-spacing-sm)"
            }
          },
          '&[data-icon-position="right"]': {
            "--_step-body-ta": "right",
            "--_step-body-mr": "var(--raikou-spacing-sm)",
            '[dir="rtl"] &': {
              "--_step-body-ta": "left",
              "--_step-body-ml": "var(--raikou-spacing-sm)",
              "--_step-body-mr": "0"
            }
          }
        },
        ".stepper-stepLabel": {
          fontWeight: "500",
          fontSize: "var(--stepper-fz)",
          lineHeight: "1"
        },
        ".stepper-stepDescription": {
          marginTop: "calc(var(--stepper-spacing) / 3)",
          marginBottom: "calc(var(--stepper-spacing) / 3)",
          fontSize: "calc(var(--stepper-fz) - rem(2px))",
          lineHeight: "1",
          color: "var(--raikou-color-dimmed)"
        }
      });
    };
  }
});

// ../components/Switch/src/Switch.plugin.ts
var require_Switch_plugin = __commonJS({
  "../components/Switch/src/Switch.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".switch-root": {
          "--switch-height-xs": rem2("16px"),
          "--switch-height-sm": rem2("20px"),
          "--switch-height-md": rem2("24px"),
          "--switch-height-lg": rem2("30px"),
          "--switch-height-xl": rem2("36px"),
          "--switch-width-xs": rem2("32px"),
          "--switch-width-sm": rem2("38px"),
          "--switch-width-md": rem2("46px"),
          "--switch-width-lg": rem2("56px"),
          "--switch-width-xl": rem2("72px"),
          "--switch-thumb-size-xs": rem2("12px"),
          "--switch-thumb-size-sm": rem2("14px"),
          "--switch-thumb-size-md": rem2("18px"),
          "--switch-thumb-size-lg": rem2("22px"),
          "--switch-thumb-size-xl": rem2("28px"),
          "--switch-label-font-size-xs": rem2("5px"),
          "--switch-label-font-size-sm": rem2("6px"),
          "--switch-label-font-size-md": rem2("7px"),
          "--switch-label-font-size-lg": rem2("9px"),
          "--switch-label-font-size-xl": rem2("11px"),
          "--switch-track-label-padding-xs": rem2("1px"),
          "--switch-track-label-padding-sm": rem2("2px"),
          "--switch-track-label-padding-md": rem2("2px"),
          "--switch-track-label-padding-lg": rem2("3px"),
          "--switch-track-label-padding-xl": rem2("3px"),
          position: "relative"
        },
        ".switch-input": {
          height: "0",
          width: "0",
          opacity: "0",
          margin: "0",
          padding: "0",
          position: "absolute",
          overflow: "hidden",
          whiteSpace: "nowrap"
        },
        ".switch-track": {
          "-webkit-tap-highlight-color": "transparent",
          cursor: "var(--_switch-cursor, var(--raikou-cursor-type))",
          overflow: "hidden",
          position: "relative",
          borderRadius: "var(--switch-radius)",
          backgroundColor: "var(--_switch-bg)",
          border: `${rem2("1px")} solid var(--_switch-bd)`,
          height: "var(--switch-height)",
          minWidth: "var(--switch-width)",
          margin: "0",
          transition: "background-color 150ms ease, border-color 150ms ease",
          appearance: "none",
          display: "flex",
          alignItems: "center",
          fontSize: "var(--switch-label-font-size)",
          fontWeight: "600",
          order: "var(--_switch-order, 1)",
          userSelect: "none",
          zIndex: "0",
          lineHeight: "0",
          color: "var(--_switch-color)",
          ".switch-input:focus-visible + &": {
            outline: `${rem2("2px")} solid var(--raikou-color-primary)`,
            outlineOffset: rem2("2px")
          },
          ".switch-input:checked + &": {
            "--_switch-bg": "var(--switch-color)",
            "--_switch-bd": "var(--switch-color)",
            "--_switch-color": "var(--raikou-color-white)"
          },
          ".switch-input:disabled + &, .switch-input[data-disabled] + &": {
            "--_switch-bg": "var(--_switch-disabled-color)",
            "--_switch-bd": "var(--_switch-disabled-color)",
            "--_switch-cursor": "not-allowed"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_switch-bg": "var(--raikou-switch-bg)",
            "--_switch-bd": "var(--raikou-switch-bd)",
            "--_switch-color": "var(--raikou-switch-color)",
            "--_switch-disabled-color": "var(--raikou-switch-disabled-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_switch-bg": "var(--raikou-switch-bg)",
            "--_switch-bd": "var(--raikou-switch-bd)",
            "--_switch-color": "var(--raikou-switch-color)",
            "--_switch-disabled-color": "var(--raikou-switch-disabled-color)"
          },
          "&[data-error]": {
            "--_switch-bd": "var(--raikou-color-error)"
          },
          "&[data-label-position='left']": {
            "--_switch-order": "2"
          }
        },
        ".switch-thumb": {
          position: "absolute",
          zIndex: "1",
          borderRadius: "var(--switch-radius)",
          display: "flex",
          backgroundColor: "var(--_switch-thumb-bg, var(--raikou-color-white))",
          height: "var(--switch-thumb-size)",
          width: "var(--switch-thumb-size)",
          border: `${rem2("1px")} solid var(--_switch-thumb-bd)`,
          left: "var(--_switch-thumb-left, var(--switch-track-label-padding))",
          transition: "left 150ms ease",
          "& > *": {
            margin: "auto"
          },
          ".switch-input:checked + * > &": {
            "--_switch-thumb-left": "calc(100% - var(--switch-thumb-size) - var(--switch-track-label-padding))",
            "--_switch-thumb-bd": "var(--raikou-color-white)"
          },
          ".switch-input:disabled + * > &, .switch-input[data-disabled] + * > &": {
            "--_switch-thumb-bd": "var(--_switch-thumb-bg-disabled)",
            "--_switch-thumb-bg": "var(--_switch-thumb-bg-disabled)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_switch-thumb-bd": "var(--raikou-switch-thumb-bd)",
            "--_switch-thumb-bg-disabled": "var(--raikou-switch-thumb-bg-disabled)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_switch-thumb-bd": "var(--raikou-switch-thumb-bd)",
            "--_switch-thumb-bg-disabled": "var(--raikou-switch-thumb-bg-disabled)"
          }
        },
        ".switch-trackLabel": {
          height: "100%",
          display: "grid",
          placeContent: "center",
          minWidth: "calc(var(--switch-width) - var(--switch-thumb-size))",
          paddingInline: "var(--switch-track-label-padding)",
          margin: "0 0 0 calc(var(--switch-thumb-size) + var(--switch-track-label-padding))",
          transition: "margin 150ms ease",
          ".switch-input:checked + * > &": {
            margin: "0 calc(var(--switch-thumb-size) + var(--switch-track-label-padding)) 0 0"
          }
        }
      });
    };
  }
});

// ../components/Table/src/Table.plugin.ts
var require_Table_plugin = __commonJS({
  "../components/Table/src/Table.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".table-root": {
          width: "100%",
          borderCollapse: "collapse",
          lineHeight: "var(--raikou-line-height)",
          fontSize: "var(--raikou-font-size-sm)",
          tableLayout: "var(--table-layout, auto)",
          captionSide: "var(--table-caption-side)",
          border: "var(--_table-border, none)",
          '[data-raikou-color-scheme="light"] &': {
            "--_table-hover-color": "var(--raikou-table-hover-color)",
            "--_table-striped-color": "var(--raikou-table-striped-color)",
            "--_table-border-color": "var(--raikou-table-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_table-hover-color": "var(--raikou-table-hover-color)",
            "--_table-striped-color": "var(--raikou-table-striped-color)",
            "--_table-border-color": "var(--raikou-table-border-color)"
          },
          "&[data-with-table-border]": {
            "--_table-border": `${rem2("1px")} solid var(--_table-border-color)`
          }
        },
        ".table-th": {
          textAlign: "var(--_th-text-align, left)",
          '[dir="rtl"] &': {
            "--_th-text-align": "right"
          }
        },
        ".table-tr": {
          borderBottom: "var(--_tr-border-bottom, none)",
          backgroundColor: "var(--_tr-bg, transparent)",
          "@media (hover: hover)": {
            "&:hover": {
              "--_tr-bg": "var(--_tr-hover-bg, transparent)"
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "--_tr-bg": "var(--_tr-hover-bg, transparent)"
            }
          },
          "&[data-with-row-border]": {
            "--_tr-border-bottom": `${rem2("1px")} solid var(--_table-border-color)`
          }
        },
        ".table-td, .table-th": {
          padding: "var(--table-vertical-spacing) var(--table-horizontal-spacing)",
          borderLeft: "var(--_border-left)",
          borderRight: "var(--_border-right)",
          "--_border-right": "none",
          "--_border-left": "none",
          "&[data-with-column-border]:not(:last-of-type)": {
            "--_border-right": `${rem2("1px")} solid var(--_table-border-color)`,
            '[dir="rtl"] &': {
              "--_border-left": `${rem2("1px")} solid var(--_table-border-color)`,
              "--_border-right": "none"
            }
          }
        },
        ".table-tbody": {
          "& > .table-tr": {
            "&:last-of-type": {
              "&[data-with-row-border]": {
                "--_tr-border-bottom": "none"
              }
            },
            "&[data-striped='odd']:nth-of-type(odd)": {
              "--_tr-bg": "var(--_table-striped-color)"
            },
            "&[data-striped='even']:nth-of-type(even)": {
              "--_tr-bg": "var(--_table-striped-color)"
            },
            "&[data-hover]": {
              "--_tr-hover-bg": "var(--_table-hover-color)"
            }
          }
        },
        ".table-caption": {
          color: "var(--raikou-color-dimmed)",
          marginTop: "var(--_margin-top, 0)",
          marginBottom: "var(--_margin-bottom, 0)",
          "&[data-side='top']": {
            "--_margin-bottom": "var(--raikou-spacing-xs)"
          },
          "&[data-side='bottom']": {
            "--_margin-top": "var(--raikou-spacing-xs)"
          }
        },
        ".table-scrollContainer": {
          "overflow-x": "var(--table-overflow)"
        },
        ".table-scrollContainerInner": {
          "min-width": "var(--table-min-width)"
        }
      });
    };
  }
});

// ../components/Tabs/src/Tabs.plugin.ts
var require_Tabs_plugin = __commonJS({
  "../components/Tabs/src/Tabs.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".tabs-root": {
          display: "var(--_tabs-display)",
          flexDirection: "var(--_tabs-flex-direction)",
          "--_tab-justify": "flex-start",
          "--_list-direction": "row",
          "--_panel-grow": "unset",
          "--_tabs-display": "block",
          "--_tabs-flex-direction": "row",
          "--_list-border-width": rem2(0),
          "--_list-border-size": "0 0 var(--_list-border-width) 0",
          "--_list-gap": "unset",
          "--_list-line-bottom": "0",
          "--_list-line-top": "unset",
          "--_list-line-left": "0",
          "--_list-line-right": "0",
          "--_tab-radius": "var(--tabs-radius) var(--tabs-radius) 0 0",
          "--_tab-border-width": "0 0 var(--_list-border-width) 0",
          "&[data-inverted]": {
            "--_list-line-bottom": "unset",
            "--_list-line-top": "0",
            "--_tab-radius": "0 0 var(--tabs-radius) var(--tabs-radius)",
            "--_tab-border-width": "var(--_list-border-width) 0 0 0",
            "& .list--default::before": {
              top: "0",
              bottom: "unset"
            }
          },
          "&[data-orientation='vertical']": {
            "--_list-line-left": "unset",
            "--_list-line-right": "0",
            "--_list-line-top": "0",
            "--_list-line-bottom": "0",
            "--_list-border-size": "0 var(--_list-border-width) 0 0",
            "--_tab-border-width": "0 var(--_list-border-width) 0 0",
            "--_tab-radius": "var(--tabs-radius) 0 0 var(--tabs-radius)",
            "--_list-direction": "column",
            "--_panel-grow": "1",
            "--_tabs-display": "flex",
            '[dir="rtl"] &': {
              "--_list-line-left": "0",
              "--_list-line-right": "unset",
              "--_list-border-size": "0 0 0 var(--_list-border-width)",
              "--_tab-border-width": "0 0 0 var(--_list-border-width)",
              "--_tab-radius": "0 var(--tabs-radius) var(--tabs-radius) 0"
            },
            "&[data-placement='right']": {
              "--_tabs-flex-direction": "row-reverse",
              "--_list-line-left": "0",
              "--_list-line-right": "unset",
              "--_list-border-size": "0 0 0 var(--_list-border-width)",
              "--_tab-border-width": "0 0 0 var(--_list-border-width)",
              "--_tab-radius": "0 var(--tabs-radius) var(--tabs-radius) 0",
              '[dir="rtl"] &': {
                "--_list-line-left": "unset",
                "--_list-line-right": "0",
                "--_list-border-size": "0 var(--_list-border-width) 0 0",
                "--_tab-border-width": "0 var(--_list-border-width) 0 0",
                "--_tab-radius": "var(--tabs-radius) 0 0 var(--tabs-radius)"
              }
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_tab-border-color": "var(--raikou-tabs-tab-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_tab-border-color": "var(--raikou-tabs-tab-border-color)"
          },
          "&[data-orientation='horizontal']": {
            "--_tab-justify": "center"
          },
          "&[data-variant='default']": {
            " --_list-border-width": rem2("2px"),
            '[data-raikou-color-scheme="light"] &': {
              "--_tab-hover-color": "var(--raikou-tabs-tab-default-hover-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_tab-hover-color": "var(--raikou-tabs-tab-default-hover-color)"
            }
          },
          "&[data-variant='outline']": {
            "--_list-border-width": rem2("1px")
          },
          "&[data-variant='pills']": {
            "--_list-gap": "calc(var(--raikou-spacing-sm) / 2)",
            '[data-raikou-color-scheme="light"] &': {
              "--_tab-hover-color": "var(--raikou-tabs-tab-pills-hover-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_tab-hover-color": "var(--raikou-tabs-tab-pills-hover-color)"
            }
          }
        },
        ".tabs-list": {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "var(--tabs-justify, flex-start)",
          flexDirection: "var(--_list-direction)",
          gap: "var(--_list-gap)",
          "--_tab-grow": "unset",
          "&[data-grow]": {
            "--_tab-grow": "1"
          }
        },
        ".tabs-panel": {
          flexGrow: "var(--_panel-grow)"
        },
        ".tabs-tab.tabs-tab": {
          position: "relative",
          padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
          fontSize: "var(--raikou-font-size-sm)",
          whiteSpace: "nowrap",
          zIndex: "0",
          display: "flex",
          alignItems: "center",
          lineHeight: "1",
          userSelect: "none",
          flexGrow: "var(--_tab-grow)",
          justifyContent: "var(--_tab-justify)",
          "&:disabled, &[data-disabled]": {
            opacity: "0.5",
            cursor: "not-allowed"
          },
          "&:focus": {
            zIndex: "1"
          }
        },
        ".tabs-tabSection": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "var(--_tab-section-margin-left, 0)",
          marginRight: "var(--_tab-section-margin-right, 0)",
          "&[data-position='left']": {
            "&:not(:only-child)": {
              "--_tab-section-margin-right": "var(--raikou-spacing-xs)",
              '[dir="rtl"] &': {
                "--_tab-section-margin-right": "0rem",
                "--_tab-section-margin-left": "var(--raikou-spacing-xs)"
              }
            }
          },
          "&[data-position='right']": {
            "&:not(:only-child)": {
              "--_tab-section-margin-left": "var(--raikou-spacing-xs)",
              '[dir="rtl"] &': {
                "--_tab-section-margin-left": "0rem",
                "--_tab-section-margin-right": "var(--raikou-spacing-xs)"
              }
            }
          }
        },
        /*************************************** default variant ***************************************/
        ".tabs-list[data-variant='default']": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            borderColor: "var(--_tab-border-color)",
            borderWidth: "var(--_list-border-size)",
            borderStyle: "solid",
            bottom: "var(--_list-line-bottom)",
            left: "var(--_list-line-left)",
            right: "var(--_list-line-right)",
            top: "var(--_list-line-top)"
          }
        },
        ".tabs-tab[data-variant='default']": {
          borderRadius: "var(--_tab-radius)",
          borderWidth: "var(--_tab-border-width)",
          borderStyle: "solid",
          borderColor: "var(--__tab-border-color)",
          backgroundColor: "var(--_tab-bg)",
          "--__tab-border-color": "transparent",
          "--_tab-bg": "transparent",
          "&[data-active]": {
            "--__tab-border-color": "var(--tabs-color)"
          },
          "@media (hover: hover)": {
            "&:hover": {
              "--_tab-bg": "var(--_tab-hover-color)",
              "&:not([data-active])": {
                "--__tab-border-color": "var(--_tab-border-color)"
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "--_tab-bg": "var(--_tab-hover-color)",
              "&:not([data-active])": {
                "--__tab-border-color": "var(--_tab-border-color)"
              }
            }
          },
          "&:disabled, &[data-disabled]": {
            "@media (hover: hover)": {
              "&:hover": {
                "--_tab-bg": "transparent"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_tab-bg": "transparent"
              }
            }
          }
        },
        /*************************************** outline variant ***************************************/
        ".tabs-list[data-variant='outline']": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            borderColor: "var(--_tab-border-color)",
            borderWidth: "var(--_list-border-size)",
            borderStyle: "solid",
            bottom: "var(--_list-line-bottom)",
            left: "var(--_list-line-left)",
            right: "var(--_list-line-right)",
            top: "var(--_list-line-top)"
          }
        },
        ".tabs-tab[data-variant='outline']": {
          border: `${rem2("1px")} solid transparent`,
          borderTopColor: "var(--_tab-border-top-color)",
          borderBottomColor: "var(--_tab-border-bottom-color)",
          borderLeftColor: "var(--_tab-border-left-color)",
          borderRightColor: "var(--_tab-border-right-color)",
          borderRadius: "var(--_tab-radius)",
          "--_tab-border-bottom-color": "transparent",
          "--_tab-border-top-color": "transparent",
          "--_tab-border-right-color": "transparent",
          "--_tab-border-left-color": "transparent",
          "&[data-active]": {
            "--_tab-border-top-color": "var(--_tab-border-color)",
            "--_tab-border-left-color": "var(--_tab-border-color)",
            "--_tab-border-right-color": "var(--_tab-border-color)",
            "--_tab-border-bottom-color": "var(--raikou-color-body)",
            "&[data-inverted]": {
              "--_tab-border-bottom-color": "var(--_tab-border-color)",
              "--_tab-border-top-color": "var(--raikou-color-body)"
            },
            "&[data-orientation='vertical']": {
              "&[data-placement='left']": {
                "--_tab-border-right-color": "var(--raikou-color-body)",
                "--_tab-border-left-color": "var(--_tab-border-color)",
                "--_tab-border-bottom-color": "var(--_tab-border-color)",
                '[dir="rtl"] &': {
                  "--_tab-border-right-color": "var(--_tab-border-color)",
                  "--_tab-border-left-color": "var(--raikou-color-body)"
                }
              },
              "&[data-placement='right']": {
                "--_tab-border-left-color": "var(--raikou-color-body)",
                "--_tab-border-right-color": "var(--_tab-border-color)",
                "--_tab-border-bottom-color": "var(--_tab-border-color)",
                '[dir="rtl"] &': {
                  "--_tab-border-left-color": "var(--_tab-border-color)",
                  "--_tab-border-right-color": "var(--raikou-color-body)"
                }
              }
            }
          }
        },
        /*************************************** pills variant ***************************************/
        ".tabs-tab[data-variant='pills']": {
          borderRadius: "var(--tabs-radius)",
          backgroundColor: "var(--_tab-bg)",
          color: "var(--_tab-color)",
          "--_tab-bg": "transparent",
          "--_tab-color": "inherit",
          "&:not([data-disabled])": {
            "@media (hover: hover)": {
              "&:hover": {
                "--_tab-bg": "var(--_tab-hover-color)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_tab-bg": "var(--_tab-hover-color)"
              }
            }
          },
          "&[data-active][data-active]": {
            "--_tab-bg": "var(--tabs-color)",
            "--_tab-color": "var(--raikou-color-white)",
            "@media (hover: hover)": {
              "&:hover": {
                "--_tab-bg": "var(--tabs-color)"
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "--_tab-bg": "var(--tabs-color)"
              }
            }
          }
        }
      });
    };
  }
});

// ../components/Text/src/Text.plugin.ts
var require_Text_plugin = __commonJS({
  "../components/Text/src/Text.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".text-root": {
          "-webkit-tap-highlight-color": "transparent",
          textDecoration: "none",
          fontSize: "var(--text-fz)",
          lineHeight: "var(--text-lh)",
          fontWeight: "normal",
          margin: "0",
          padding: "0",
          color: "var(--text-color)",
          "&[data-truncate]": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          '&[data-truncate="start"]': {
            direction: "rtl",
            textAlign: "right",
            '[dir="rtl"] &': {
              direction: "ltr",
              textAlign: "left"
            }
          },
          '&[data-variant="gradient"]': {
            backgroundImage: "var(--text-gradient)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
          },
          "&[data-line-clamp]": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "var(--text-line-clamp)",
            "-webkit-box-orient": "vertical"
          },
          "&[data-inherit]": {
            lineHeight: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit"
          },
          "&[data-inline]": {
            "--_text-line-height": "1"
          }
        }
      });
    };
  }
});

// ../components/Timeline/src/Timeline.plugin.ts
var require_Timeline_plugin = __commonJS({
  "../components/Timeline/src/Timeline.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".timeline-root": {
          "--offset": "calc(var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2)",
          "padding-left": "var(--_tl-pl, 0)",
          "padding-right": "var(--_tl-pr, 0)",
          '&[data-align="left"]': {
            "--_tl-pl": "var(--offset)",
            "@mixin rtl": {
              "--_tl-pl": "0",
              "--_tl-pr": "var(--offset)"
            }
          },
          '&[data-align="right"]': {
            "--_tl-pr": "var(--offset)",
            '[dir="rtl"] &': {
              "--_tl-pl": "var(--offset)",
              "--_tl-pr": "0"
            }
          }
        },
        ".timeline-itemTitle": {
          fontWeight: "500",
          lineHeight: "1",
          marginBottom: "calc(var(--raikou-spacing-xs) / 2)"
        },
        ".timeline-item": {
          "--item-border": "var(--tl-line-width) var(--tli-border-style, solid) var(--_item-border-color)",
          position: "relative",
          color: "var(--raikou-color-text)",
          paddingLeft: "var(--_item-pl, 0)",
          paddingRight: "var(--_item-pr, 0)",
          textAlign: "var(--_item-ta)",
          marginTop: "var(--_item-mt)",
          "&::before": {
            content: '""',
            pointerEvents: "none",
            position: "absolute",
            top: "0",
            left: "var(--_line-left, 0)",
            right: "var(--_line-right, 0)",
            bottom: "calc(var(--raikou-spacing-xl) * -1)",
            borderLeft: "var(--_line-border-left, var(--item-border))",
            borderRight: "var(--_line-border-right, 0)",
            display: "var(--_line-display, none)",
            '[dir="rtl"] &': {
              "--_line-border-left": 0,
              "--_line-border-right": "var(--item-border)"
            },
            '.timeline-root[data-align="left"] &': {
              "--_line-left": "calc(var(--tl-line-width) * -1)",
              "--_line-right": "auto",
              '[dir="rtl"] &': {
                "--_line-left": "auto",
                "--_line-right": "calc(var(--tl-line-width) * -1)"
              }
            },
            '.timeline-root[data-align="right"] &': {
              "--_line-left": "auto",
              "--_line-right": "calc(var(--tl-line-width) * -1)",
              '[dir="rtl"] &': {
                "--_line-left": "calc(var(--tl-line-width) * -1)",
                "--_line-right": "auto"
              }
            }
          },
          '.timeline-root[data-align="left"] &': {
            "--_item-pl": "var(--offset)",
            "--_item-ta": "left",
            '[dir="rtl"] &': {
              "--_item-pl": "0",
              "--_item-pr": "var(--offset)"
            }
          },
          '.timeline-root[data-align="right"] &': {
            "--_item-pr": "var(--offset)",
            "--_item-ta": "right",
            '[dir="rtl"] &': {
              "--_item-pl": "var(--offset)",
              "--_item-pr": "0"
            }
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_item-border-color": "var(--raikou-timeline-item-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_item-border-color": "var(--raikou-timeline-item-border-color)"
          },
          "[data-raikou-color-scheme] &[data-line-active]": {
            "&::before": {
              borderColor: "var(--tli-color, var(--tl-color))"
            }
          },
          "&:not(:last-of-type)": {
            "--_line-display": "block"
          },
          "&:not(:first-of-type)": {
            "--_item-mt": "var(--raikou-spacing-xl)"
          }
        },
        ".timeline-itemBullet": {
          width: "var(--tl-bullet-size)",
          height: "var(--tl-bullet-size)",
          borderRadius: "var(--tli-radius, var(--tl-radius))",
          border: "var(--_bullet-border-width, var(--tl-line-width)) solid var(--_bullet-border-color)",
          backgroundColor: "var(--_bullet-bg-color, var(--raikou-color-body))",
          position: "absolute",
          top: "0",
          left: "var(--_bullet-left, 0)",
          right: "var(--_bullet-right, 0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--_bullet-color, var(--raikou-color-text))",
          '[data-raikou-color-scheme="light"] &': {
            "--_bullet-border-color": "var(--raikou-timeline-bullet-border-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_bullet-border-color": "var(--raikou-timeline-bullet-border-color)"
          },
          '.timeline-root[data-align="left"] &': {
            "--_bullet-left": "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
            "--_bullet-right": "auto",
            '[dir="rtl"] &': {
              "--_bullet-left": "auto",
              "--_bullet-right": "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)"
            }
          },
          '.timeline-root[data-align="right"] &': {
            "--_bullet-left": "auto",
            "--_bullet-right": "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
            '[dir="rtl"] &': {
              "--_bullet-left": "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
              "--_bullet-right": "auto"
            }
          },
          "&[data-with-child]": {
            "--_bullet-border-width": "var(--tl-line-width)",
            '[data-raikou-color-scheme="light"] &': {
              "--_bullet-bg-color": "var(--raikou-timeline-bullet-bg-color)"
            },
            '[data-raikou-color-scheme="dark"] &': {
              "--_bullet-bg-color": "var(--raikou-timeline-bullet-bg-color)"
            }
          },
          "&[data-active]": {
            "--_bullet-border-color": "var(--tli-color, var(--tl-color))",
            "--_bullet-bg-color": "var(--raikou-color-white)",
            "--_bullet-color": "var(--raikou-color-white)",
            "&[data-with-child]": {
              "--_bullet-bg-color": "var(--tli-color, var(--tl-color))",
              "--_bullet-color": "var(--raikou-color-white)"
            }
          }
        },
        ".timeline-itemBody": {
          paddingLeft: "var(--_body-pl, 0)",
          paddingRight: "var(--_body-pr, 0)",
          textAlign: "var(--_body-ta)",
          '.timeline-root[data-align="left"] &': {
            "--_body-pl": "var(--offset)",
            "--_body-ta": "left",
            '[dir="rtl"] &': {
              "--_body-pl": "0",
              "--_body-pr": "var(--offset)",
              "--_body-ta": "right"
            }
          },
          '.timeline-root[data-align="right"] &': {
            "--_body-pr": "var(--offset)",
            "--_body-ta": "right",
            '[dir="rtl"] &': {
              "--_body-pl": "var(--offset)",
              "--_body-pr": "0",
              "--_body-ta": "left"
            }
          }
        }
      });
    };
  }
});

// ../components/ThemeIcon/src/ThemeIcon.plugin.ts
var require_ThemeIcon_plugin = __commonJS({
  "../components/ThemeIcon/src/ThemeIcon.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".themeIcon-root": {
          "--ti-size-xs": rem2("18px"),
          "--ti-size-sm": rem2("22px"),
          "--ti-size-md": rem2("28px"),
          "--ti-size-lg": rem2("34px"),
          "--ti-size-xl": rem2("44px"),
          lineHeight: "1",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          userSelect: "none",
          width: "var(--ti-size)",
          height: "var(--ti-size)",
          minWidth: "var(--ti-size)",
          minHeight: "var(--ti-size)",
          borderRadius: "var(--ti-radius)",
          background: "var(--_ti-bg, var(--ti-bg))",
          color: "var(--_ti-color, var(--ti-color))",
          border: "var(--ti-bd)"
        }
      });
    };
  }
});

// ../components/Title/src/Title.plugin.ts
var require_Title_plugin = __commonJS({
  "../components/Title/src/Title.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".title-root": {
          margin: "0",
          fontWeight: "var(--title-fw)",
          fontSize: "var(--title-fz)",
          lineHeight: "var(--title-lh)",
          fontFamily: "var(--raikou-font-family-headings)"
        }
      });
    };
  }
});

// ../components/Tooltip/src/Tooltip.plugin.ts
var require_Tooltip_plugin = __commonJS({
  "../components/Tooltip/src/Tooltip.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".tooltip-root": {
          position: "absolute",
          padding: "calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-xs)",
          pointerEvents: "none",
          fontSize: "var(--raikou-font-size-sm)",
          whiteSpace: "var(--_tooltip-white-space, nowrap)",
          backgroundColor: "var(--_tooltip-bg)",
          color: "var(--_tooltip-color)",
          borderRadius: "var(--tooltip-radius)",
          '[data-raikou-color-scheme="light"] &': {
            "--_tooltip-bg": "var(--tooltip-bg, var(--raikou-tooltip-bg))",
            "--_tooltip-color": "var(--raikou-tooltip-color)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_tooltip-bg": "var(--tooltip-bg, var(--raikou-tooltip-bg))",
            "--_tooltip-color": "var(--raikou-tooltip-color)"
          },
          "&[data-multiline]": {
            "--_tooltip-white-space": "normal"
          }
        },
        ".tooltip-arrow": {
          backgroundColor: "inherit",
          border: "0",
          zIndex: "1"
        }
      });
    };
  }
});

// ../components/UnstyledButton/src/UnstyledButton.plugin.ts
var require_UnstyledButton_plugin = __commonJS({
  "../components/UnstyledButton/src/UnstyledButton.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".unstyled-button-root": {
          backgroundColor: "transparent",
          cursor: "pointer",
          border: "0",
          padding: "0",
          appearance: "none",
          fontSize: "var(--raikou-font-size-md)",
          textAlign: "left",
          textDecoration: "none",
          color: "inherit",
          touchAction: "manipulation",
          "-webkit-tap-highlight-color": "transparent"
        }
      });
    };
  }
});

// ../components/VisuallyHidden/src/VisuallyHidden.plugin.ts
var require_VisuallyHidden_plugin = __commonJS({
  "../components/VisuallyHidden/src/VisuallyHidden.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents, theme }) {
      addComponents({
        ".visuallyHidden-root": {
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          whiteSpace: "nowrap"
        }
      });
    };
  }
});

// ../carousel/src/Carousel.plugin.ts
var require_Carousel_plugin = __commonJS({
  "../carousel/src/Carousel.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".carousel-root": {
          position: "relative"
        },
        ".carousel-viewport": {
          height: "var(--carousel-height, auto)",
          overflow: "hidden"
        },
        ".carousel-container": {
          display: "flex",
          flexDirection: "var(--_container-direction, row)",
          height: "var(--carousel-height, auto)",
          marginRight: "var(--_container-mr)",
          marginLeft: "var(--_container-ml)",
          marginBottom: "var(--_container-mb)",
          "[data-include-gap-in-size] &": {
            '&[data-orientation="vertical"]': {
              "--_container-mb": "calc(var(--carousel-slide-gap) * -1)"
            },
            '&[data-orientation="horizontal"]': {
              "--_container-mr": "calc(var(--carousel-slide-gap) * -1)",
              '[dir="rtl"] &': {
                "--_container-ml": "calc(var(--carousel-slide-gap) * -1)",
                "--_container-mr": "0"
              }
            }
          },
          '&[data-orientation="vertical"]': {
            "--_container-direction": "column"
          }
        },
        ".carousel-controls": {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: "1",
          pointerEvents: "none",
          flexDirection: "var(--_controls-direction)",
          left: "var(--_controls-left)",
          right: "var(--_controls-right)",
          top: "var(--_controls-top)",
          bottom: "var(--_controls-bottom)",
          padding: "var(--_controls-padding)",
          '.carousel-root[data-orientation="vertical"] &': {
            "--_controls-left": "calc(50% - var(--carousel-control-size) / 2)",
            "--_controls-top": "0",
            "--_controls-bottom": "0",
            "--_controls-direction": "column",
            "--_controls-padding": "var(--carousel-controls-offset) 0"
          },
          '.carousel-root[data-orientation="horizontal"] &': {
            "--_controls-left": "0",
            "--_controls-right": "0",
            "--_controls-top": "calc(50% - var(--carousel-control-size) / 2)",
            "--_controls-direction": "row",
            "--_controls-padding": "0 var(--carousel-controls-offset)"
          }
        },
        ".carousel-control": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "var(--carousel-control-size)",
          minHeight: "var(--carousel-control-size)",
          borderRadius: "var(--carousel-control-size)",
          pointerEvents: "all",
          backgroundColor: "var(--raikou-color-white)",
          color: "var(--raikou-color-black)",
          boxShadow: "var(--raikou-shadow-md)",
          opacity: "var(--_control-opacity)",
          border: `${rem2("1px")} solid var(--raikou-color-gray-3)`,
          transition: "opacity 100ms ease",
          '[data-raikou-color-scheme="light"] &': {
            "--_control-opacity": "0.85"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_control-opacity": "0.65"
          },
          "@media (hover: hover)": {
            "&:hover": {
              "--_control-opacity": "1"
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "--_control-opacity": "1"
            }
          }
        },
        ".carousel-indicators": {
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          gap: rem2("8px"),
          pointerEvents: "none",
          flexDirection: "var(--_indicators-direction)",
          bottom: "var(--_indicators-bottom)",
          left: "var(--_indicators-left)",
          right: "var(--_indicators-right)",
          top: "var(--_indicators-top)",
          '.carousel-root[data-orientation="vertical"] &': {
            "--_indicators-bottom": "0",
            "--_indicators-top": "0",
            "--_indicators-right": "var(--raikou-spacing-md)",
            "--_indicators-direction": "column"
          },
          '.carousel-root[data-orientation="horizontal"] &': {
            "--_indicators-bottom": "var(--raikou-spacing-md)",
            "--_indicators-left": "0",
            "--_indicators-right": "0",
            "--_indicators-direction": "row"
          }
        },
        ".carousel-indicator": {
          pointerEvents: "all",
          width: "var(--_indicator-width)",
          height: "var(--_indicator-height)",
          borderRadius: "var(--raikou-radius-xl)",
          boxShadow: "var(--raikou-shadow-sm)",
          opacity: "var(--_indicator-opacity, 0.6)",
          backgroundColor: "var(--raikou-color-white)",
          "@media (hover: hover)": {
            "&:hover": {
              "--_text-decoration": "underline",
              "--_indicator-opacity": "1"
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "--_text-decoration": "underline",
              "--_indicator-opacity": "1"
            }
          },
          "&[data-active]": {
            "--_indicator-opacity": "1"
          },
          '.carousel-root[data-orientation="vertical"] &': {
            "--_indicator-width": rem2("5px"),
            "--_indicator-height": rem2("25px")
          },
          '.carousel-root[data-orientation="horizontal"] &': {
            "--_indicator-width": rem2("25px"),
            "--_indicator-height": rem2("5px")
          }
        },
        ".carousel-slide": {
          position: "relative",
          flex: "0 0 var(--carousel-slide-size)",
          paddingRight: "var(--_slide-pr, 0)",
          paddingLeft: "var(--_slide-pl, 0)",
          paddingBottom: "var(--_slide-pb, 0)",
          marginRight: "var(--_slide-mr, 0)",
          marginLeft: "var(--_slide-ml, 0)",
          marginBottom: "var(--_slide-mb, 0)",
          ".carousel-root[data-include-gap-in-size] &": {
            '&[data-orientation="vertical"]': {
              "--_slide-pb": "var(--carousel-slide-gap)"
            },
            '&[data-orientation="horizontal"]': {
              "--_slide-pr": "var(--carousel-slide-gap)",
              '[dir="rtl"] &': {
                "--_slide-pl": "var(--carousel-slide-gap)",
                "--_slide-pr": "0"
              }
            }
          },
          ".carousel-root:not([data-include-gap-in-size]) &": {
            '&[data-orientation="vertical"]': {
              "--_slide-mb": "var(--carousel-slide-gap)"
            },
            '&[data-orientation="horizontal"]': {
              "--_slide-mr": "var(--carousel-slide-gap)",
              '[dir="rtl"] &': {
                "--_slide-ml": "var(--carousel-slide-gap)",
                "--_slide-mr": "0"
              }
            }
          }
        }
      });
    };
  }
});

// ../code-highlight/src/CodeHighlight.plugin.ts
var require_CodeHighlight_plugin = __commonJS({
  "../code-highlight/src/CodeHighlight.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".codeHighlight-code": {
          display: "inline-block",
          padding: `${rem2("1px")} ${rem2("3px")}`,
          fontSize: rem2("13px"),
          borderRadius: "var(--raikou-radius-xs)",
          lineHeight: "var(--_code-line-height, var(--raikou-line-height))",
          fontFamily: "var(--raikou-font-family-monospace)"
        },
        ".codeHighlight-pre": {
          display: "block",
          padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
          margin: "0",
          "--_code-line-height": "1.7"
        },
        ".codeHighlight-header": {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        },
        ".codeHighlight-controls": {
          display: "flex",
          marginTop: rem2("7px"),
          marginRight: rem2("7px")
        },
        ".codeHighlight-copy, .codeHighlight-control": {
          backgroundColor: "transparent",
          opacity: "0.8",
          margin: "0",
          "@media (hover: hover)": {
            "&:hover": {
              opacity: "1"
            }
          },
          "@media (hover: none)": {
            "&:active": {
              opacity: "1"
            }
          },
          "@media (max-width: 40em)": {
            display: "none"
          }
        },
        ".codeHighlight-copy": {
          position: "absolute",
          top: rem2("5px"),
          right: rem2("5px"),
          zIndex: "1"
        },
        ".codeHighlight-file": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "var(--raikou-font-size-xs)",
          gap: rem2("7px"),
          padding: `${rem2("7px")} ${rem2("12px")}`,
          fontFamily: "var(--raikou-font-family-monospace)",
          fontWeight: "700",
          lineHeight: "1",
          userSelect: "none",
          cursor: "var(--_file-cursor)",
          border: `${rem2("1px")} solid var(--_file-bd)`,
          borderTop: "0",
          borderLeft: "0",
          color: "var(--_file-color)",
          opacity: "var(--_file-opacity)",
          backgroundColor: "var(--_file-bg)",
          whiteSpace: "nowrap",
          "@media (hover: hover)": {
            "&:hover": {
              "--_file-opacity": "1"
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "--_file-opacity": "1"
            }
          },
          "&:last-of-type": {
            borderBottomRightRadius: "var(--raikou-radius-sm)"
          },
          "&:only-child": {
            "--_file-cursor": "default"
          },
          "&[data-active]": {
            "--_file-opacity": "1",
            "--_file-color": "var(--_file-active-color) !important",
            "--_file-bg": "var(--_file-active-bg)"
          },
          "--_file-opacity": "0.8",
          "--_file-cursor": "pointer",
          '[data-raikou-color-scheme="light"] &': {
            "--_file-color": "var(--raikou-color-gray-8)",
            "--_file-bd": "var(--raikou-color-gray-2)",
            "--_file-active-bg": "var(--raikou-color-white)",
            "--_file-active-color": "var(--raikou-color-black)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_file-color": "var(--raikou-color-dark-0)",
            "--_file-bd": "var(--raikou-color-dark-4)",
            "--_file-active-bg": "var(--raikou-color-dark-6)",
            "--_file-active-color": "var(--raikou-color-white)"
          }
        },
        ".codeHighlight-files": {
          display: "flex"
        },
        ".codeHighlight-codeWrapper": {
          maxHeight: "var(--ch-max-collapsed-height)",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            zIndex: "100",
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            backgroundImage: "linear-gradient(0deg, var(--_background) 16%, rgba(0, 0, 0, 0) 100%)",
            borderRadius: `calc(var(--raikou-radius-md) - ${rem2("1px")})`
          },
          "&[data-expanded]": {
            maxHeight: "none",
            "&::before": {
              display: "none"
            }
          }
        },
        ".codeHighlight-showCodeButton": {
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "var(--raikou-font-size-sm)",
          color: "var(--raikou-color-anchor)",
          width: "100%",
          textAlign: "center",
          zIndex: "101",
          paddingTop: "var(--raikou-spacing-xs)",
          paddingBottom: "var(--raikou-spacing-xs)",
          "&[data-hidden]": {
            display: "none"
          }
        },
        ".codeHighlight-root": {
          marginTop: "0",
          position: "relative"
        },
        ".codeHighlight-fileIcon": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "0",
          "& > svg": {
            display: "block"
          }
        }
      });
    };
  }
});

// ../code-highlight/src/CodeHighlight.theme.plugin.ts
var require_CodeHighlight_theme_plugin = __commonJS({
  "../code-highlight/src/CodeHighlight.theme.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".codeHighlight-theme": {
          color: "var(--_color)",
          background: "var(--_background)",
          '[data-raikou-color-scheme="light"] &': {
            "--_color": "var(--raikou-color-gray-7)",
            "--_background": "var(--raikou-color-gray-0)",
            "--code-comment-color": "var(--raikou-color-gray-6)",
            "--code-keyword-color": "var(--raikou-color-violet-8)",
            "--code-tag-color": "var(--raikou-color-red-9)",
            "--code-literal-color": "var(--raikou-color-blue-6)",
            "--code-string-color": "var(--raikou-color-blue-9)",
            "--code-variable-color": "var(--raikou-color-lime-9)",
            "--code-class-color": "var(--raikou-color-orange-9)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_color": "var(--raikou-color-dark-1)",
            "--_background": "var(--raikou-color-dark-8)",
            "--code-comment-color": "var(--raikou-color-dark-3)",
            "--code-keyword-color": "var(--raikou-color-violet-3)",
            "--code-tag-color": "var(--raikou-color-yellow-4)",
            "--code-literal-color": "var(--raikou-color-blue-4)",
            "--code-string-color": "var(--raikou-color-green-6)",
            "--code-variable-color": "var(--raikou-color-blue-2)",
            "--code-class-color": "var(--raikou-color-orange-5)"
          },
          ":global(.hljs-comment), :global(.hljs-quote)": {
            fontStyle: "italic",
            color: "var(--code-comment-color)"
          },
          ":global(.hljs-doctag), :global(.hljs-formula), :global(.hljs-keyword)": {
            color: "var(--code-keyword-color)"
          },
          ":global(.hljs-deletion), :global(.hljs-name), :global(.hljs-section), :global(.hljs-selector-tag), :global(.hljs-subst)": {
            color: "var(--code-tag-color)"
          },
          ":global(.hljs-literal)": {
            color: "var(--code-literal-color)"
          },
          ":global(.hljs-addition), :global(.hljs-attribute), :global(.hljs-meta .hljs-string), :global(.hljs-regexp), :global(.hljs-string)": {
            color: "var(--code-string-color)"
          },
          ":global(.hljs-attr), :global(.hljs-number), :global(.hljs-selector-attr), :global(.hljs-selector-class), :global(.hljs-selector-pseudo), :global(.hljs-template-variable), :global(.hljs-type), :global(.hljs-variable)": {
            color: "var(--code-variable-color)"
          },
          ":global(.hljs-bullet), :global(.hljs-link), :global(.hljs-meta), :global(.hljs-selector-id), :global(.hljs-symbol), :global(.hljs-title), :global(.hljs-built_in), :global(.hljs-class .hljs-title), :global(.hljs-title.class_)": {
            color: "var(--code-class-color)"
          },
          ":global(.hljs-emphasis)": {
            fontStyle: "italic"
          },
          ":global(.hljs-strong)": {
            fontWeight: "700"
          },
          ":global(.hljs-link)": {
            textDecoration: "underline"
          }
        }
      });
    };
  }
});

// ../dates/src/components/CalendarHeader/CalendarHeader.plugin.ts
var require_CalendarHeader_plugin = __commonJS({
  "../dates/src/components/CalendarHeader/CalendarHeader.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-calendarHeader": {
          "--dch-control-size-xs": rem2("30px"),
          "--dch-control-size-sm": rem2("36px"),
          "--dch-control-size-md": rem2("42px"),
          "--dch-control-size-lg": rem2("48px"),
          "--dch-control-size-xl": rem2("54px"),
          display: "flex",
          maxWidth: `calc(var(--dch-control-size) * 7 + ${rem2("7px")})`,
          marginBottom: "var(--raikou-spacing-xs)"
        },
        ".dates-calendarHeaderLevel, .dates-calendarHeaderControl": {
          height: "var(--dch-control-size)",
          borderRadius: "var(--raikou-radius-default)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          backgroundColor: "var(--_control-bg)",
          opacity: "var(--_control-opacity, 1)",
          cursor: "var(--_control-cursor, pointer)",
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-disabled], :disabled)": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-disabled], :disabled)": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "&:disabled, &[data-disabled]": {
            "--_control-opacity": "0.2",
            "--_control-cursor": "not-allowed"
          }
        },
        ".dates-calendarHeaderControl": {
          width: "var(--dch-control-size)"
        },
        ".dates-calendarHeaderLevel": {
          flex: "1",
          fontSize: "var(--dch-fz)",
          fontWeight: "500",
          textTransform: "capitalize"
        },
        ".dates-calendarHeaderControlIcon": {
          width: "60%",
          height: "60%",
          transform: "var(--_chevron-transform)",
          '&[data-direction="next"]': {
            "--_chevron-transform": "rotate(270deg)",
            '[dir="rtl"] &': {
              "--_chevron-transform": "rotate(90deg)"
            }
          },
          '&[data-direction="previous"]': {
            "--_chevron-transform": "rotate(90deg)",
            '[dir="rtl"] &': {
              "--_chevron-transform": "rotate(270deg)"
            }
          }
        }
      });
    };
  }
});

// ../dates/src/components/DateTimePicker/DateTimePicker.plugin.ts
var require_DateTimePicker_plugin = __commonJS({
  "../dates/src/components/DateTimePicker/DateTimePicker.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-timeWrapper": {
          display: "flex",
          alignItems: "stretch",
          marginTop: "var(--raikou-spacing-md)"
        },
        ".dates-timeInput": {
          flex: "1",
          marginRight: "var(--_mr, var(--raikou-spacing-md))",
          marginLeft: "var(--_ml, 0)",
          '[dir="rtl"] &': {
            "--_mr": "0",
            "--_ml": "var(--raikou-spacing-md)"
          }
        }
      });
    };
  }
});

// ../dates/src/components/Day/Day.plugin.ts
var require_Day_plugin = __commonJS({
  "../dates/src/components/Day/Day.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-day": {
          "--day-size-xs": rem2("30px"),
          "--day-size-sm": rem2("36px"),
          "--day-size-md": rem2("42px"),
          "--day-size-lg": rem2("48px"),
          "--day-size-xl": rem2("54px"),
          width: `var(--day-size, ${rem2("36px")})`,
          height: `var(--day-size, ${rem2("36px")})`,
          fontSize: "calc(var(--day-size) / 2.8)",
          display: "var(--_day-display, inline-flex)",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "var(--_day-user-select, none)",
          cursor: "var(--_day-cursor, pointer)",
          backgroundColor: "var(--_day-bg, transparent)",
          borderRadius: "var(--_day-radius, var(--raikou-radius-default))",
          color: "var(--_day-color, var(--raikou-color-text))",
          opacity: "var(--_day-opacity, 1)",
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-static], [data-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_day-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_day-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-static], [data-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_day-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_day-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "&[data-static]": {
            "--_day-user-select": "auto",
            "--_day-cursor": "default"
          },
          "&[data-weekend]": {
            "--_day-color": "var(--raikou-color-red-6)"
          },
          "&[data-outside]": {
            "--_day-color": "var(--raikou-color-dimmed)",
            "--_day-opacity": "0.5"
          },
          "&:disabled, &[data-disabled]": {
            "--_day-color": "var(--raikou-color-dimmed)",
            "--_day-cursor": "not-allowed",
            "--_day-opacity": "0.5"
          },
          "&[data-hidden]": {
            "--_day-display": "none"
          },
          "&[data-in-range]": {
            "--_day-bg": "var(--raikou-primary-color-light-hover)",
            "--_day-radius": "0",
            "@media (hover: hover)": {
              "&:hover": {
                "[data-raikou-color-scheme] &:not([data-disabled], [data-static])": {
                  "--_day-bg": "var(--raikou-primary-color-light)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "[data-raikou-color-scheme] &:not([data-disabled], [data-static])": {
                  "--_day-bg": "var(--raikou-primary-color-light)"
                }
              }
            }
          },
          "&[data-first-in-range]": {
            "--_day-radius": "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",
            '[dir="rtl"] &': {
              "--_day-radius": "0 var(--raikou-radius-default) var(--raikou-radius-default) 0"
            }
          },
          "&[data-last-in-range]": {
            "--_day-radius": "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",
            '[dir="rtl"] &': {
              "--_day-radius": "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)"
            }
          },
          "&[data-last-in-range][data-first-in-range]": {
            "--_day-radius": "var(--raikou-radius-default)"
          },
          "&[data-selected]": {
            "--_day-bg": "var(--raikou-primary-color-filled)",
            "--_day-color": "var(--raikou-color-white)",
            "@media (hover: hover)": {
              "&:hover": {
                "[data-raikou-color-scheme] &:not([data-disabled], [data-static])": {
                  "--_day-bg": "var(--raikou-primary-color-filled-hover)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "[data-raikou-color-scheme] &:not([data-disabled], [data-static])": {
                  "--_day-bg": "var(--raikou-primary-color-filled-hover)"
                }
              }
            }
          }
        }
      });
    };
  }
});

// ../dates/src/components/LevelsGroup/LevelsGroup.plugin.ts
var require_LevelsGroup_plugin = __commonJS({
  "../dates/src/components/LevelsGroup/LevelsGroup.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-levelsGroup": {
          display: "flex",
          gap: "var(--raikou-spacing-md)"
        }
      });
    };
  }
});

// ../dates/src/components/Month/Month.plugin.ts
var require_Month_plugin = __commonJS({
  "../dates/src/components/Month/Month.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-month": {
          borderCollapse: "collapse",
          tableLayout: "fixed"
        },
        ".dates-monthCell": {
          padding: "var(--_month-cell-padding, 0)",
          "&[data-with-spacing]": {
            "--_month-cell-padding": rem2("0.5px")
          }
        }
      });
    };
  }
});

// ../dates/src/components/MonthsList/MonthsList.plugin.ts
var require_MonthsList_plugin = __commonJS({
  "../dates/src/components/MonthsList/MonthsList.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-monthsList": {
          borderCollapse: "collapse",
          borderWidth: "0",
          cursor: "pointer"
        },
        ".dates-monthsListCell": {
          padding: "var(--_cell-padding, 0)",
          "&[data-with-spacing]": {
            "--_cell-padding": rem2("0.5px")
          }
        }
      });
    };
  }
});

// ../dates/src/components/PickerControl/PickerControl.plugin.ts
var require_PickerControl_plugin = __commonJS({
  "../dates/src/components/PickerControl/PickerControl.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-pickerControl": {
          "--dpc-size-xs": rem2("30px"),
          "--dpc-size-sm": rem2("36px"),
          "--dpc-size-md": rem2("42px"),
          "--dpc-size-lg": rem2("48px"),
          "--dpc-size-xl": rem2("54px"),
          fontSize: "var(--dpc-fz)",
          height: "var(--dpc-size)",
          width: `calc((var(--dpc-size) * 7) / 3 + ${rem2("1.5px")})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          cursor: "var(--_control-cursor, pointer)",
          backgroundColor: "var(--_control-bg, transparent)",
          color: "var(--_control-color, var(--raikou-color-text))",
          opacity: "var(--_control-opacity, 1)",
          borderRadius: "var(--_control-radius, var(--raikou-radius-default))",
          "@media (hover: hover)": {
            "&:hover": {
              "&:not([data-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&:not([data-disabled])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_control-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_control-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "&:disabled, &[data-disabled]": {
            "--_control-color": "var(--raikou-color-dimmed)",
            "--_control-cursor": "not-allowed",
            "--_control-opacity": "0.5"
          },
          "&[data-selected]": {
            "--_control-bg": "var(--raikou-primary-color-filled)",
            "--_control-color": "var(--raikou-color-white)",
            "@media (hover: hover)": {
              "&:hover": {
                "[data-raikou-color-scheme] &": {
                  "--_control-bg": "var(--raikou-primary-color-filled-hover)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "[data-raikou-color-scheme] &": {
                  "--_control-bg": "var(--raikou-primary-color-filled-hover)"
                }
              }
            }
          },
          "&[data-in-range]": {
            "--_control-bg": "var(--raikou-primary-color-light-hover)",
            "--_control-radius": "0",
            "@media (hover: hover)": {
              "&:hover": {
                "[data-raikou-color-scheme] &": {
                  "--_control-bg": "var(--raikou-primary-color-light)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                "[data-raikou-color-scheme] &": {
                  "--_control-bg": "var(--raikou-primary-color-light)"
                }
              }
            }
          },
          "&[data-first-in-range]": {
            "--_control-radius": "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",
            '[dir="rtl"] &': {
              "--_control-radius": "0 var(--raikou-radius-default) var(--raikou-radius-default) 0"
            }
          },
          "&[data-last-in-range]": {
            "--_control-radius": "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",
            '[dir="rtl"] &': {
              "--_control-radius": "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)"
            }
          },
          "&[data-first-in-range][data-last-in-range]": {
            "--_control-radius": "var(--raikou-radius-default)"
          }
        }
      });
    };
  }
});

// ../dates/src/components/PickerInputBase/PickerInputBase.plugin.ts
var require_PickerInputBase_plugin = __commonJS({
  "../dates/src/components/PickerInputBase/PickerInputBase.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-pickerInput-input": {
          cursor: "var(--_cursor, pointer)",
          lineHeight: "unset",
          "&[data-read-only]": {
            "--_cursor": "default"
          }
        }
      });
    };
  }
});

// ../dates/src/components/TimeInput/TimeInput.plugin.ts
var require_TimeInput_plugin = __commonJS({
  "../dates/src/components/TimeInput/TimeInput.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-timeInput-input": {
          paddingTop: "0",
          paddingBottom: "0",
          appearance: "none",
          "&::-webkit-calendar-picker-indicator": {
            display: "none"
          },
          "&::-webkit-clear-button": {
            display: "none"
          },
          "&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-second-field": {
            paddingTop: "0",
            maxHeight: rem2("30px"),
            display: "inline",
            "&:focus": {
              backgroundColor: "var(--raikou-primary-color-filled)",
              color: "var(--raikou-color-white)"
            }
          }
        }
      });
    };
  }
});

// ../dates/src/components/WeekdaysRow/WeekdaysRow.plugin.ts
var require_WeekdaysRow_plugin = __commonJS({
  "../dates/src/components/WeekdaysRow/WeekdaysRow.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-weekday": {
          color: "var(--raikou-color-dimmed)",
          fontWeight: "normal",
          fontSize: "var(--wr-fz)",
          textTransform: "capitalize",
          paddingBottom: "calc(var(--wr-spacing) / 2)"
        }
      });
    };
  }
});

// ../dates/src/components/YearsList/YearsList.plugin.ts
var require_YearsList_plugin = __commonJS({
  "../dates/src/components/YearsList/YearsList.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".dates-yearsList": {
          borderCollapse: "collapse",
          borderWidth: "0"
        },
        ".dates-yearsListCell": {
          padding: "var(--_cell-padding, 0)",
          "&[data-with-spacing]": {
            "--_cell-padding": rem2("0.5px")
          }
        }
      });
    };
  }
});

// ../dropzone/src/Dropzone.plugin.ts
var require_Dropzone_plugin = __commonJS({
  "../dropzone/src/Dropzone.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".dropZone-root": {
          position: "relative",
          backgroundColor: "var(--_dropzone-bg)",
          border: `rem(1px) dashed var(--_dropzone-border-color)`,
          color: "var(--_dropzone-color, var(--raikou-color-text))",
          padding: "var(--raikou-spacing-md)",
          borderRadius: "var(--dropzone-radius)",
          cursor: "var(--_dropzone-cursor, pointer)",
          userSelect: "none",
          transition: "background-color 100ms ease, border-color 100ms ease",
          "&[data-loading], &:not([data-activate-on-click])": {
            "--_dropzone-cursor": "default"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_dropzone-bg": "var(--raikou-color-white)",
            "--_dropzone-border-color": "var(--raikou-color-gray-4)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_dropzone-bg": "var(--raikou-color-dark-6)",
            "--_dropzone-border-color": "var(--raikou-color-dark-4)"
          },
          "@media (hover: hover)": {
            "&:hover": {
              "&[data-activate-on-click]:not([data-loading])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_dropzone-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_dropzone-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "@media (hover: none)": {
            "&:active": {
              "&[data-activate-on-click]:not([data-loading])": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_dropzone-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_dropzone-bg": "var(--raikou-color-dark-5)"
                }
              }
            }
          },
          "&[data-accept]": {
            "--_dropzone-bg": "var(--dropzone-accept-bg)",
            "--_dropzone-border-color": "var(--dropzone-accept-bg)",
            "--_dropzone-color": "var(--dropzone-accept-color)"
          },
          "&[data-reject]": {
            "--_dropzone-bg": "var(--dropzone-reject-bg)",
            "--_dropzone-border-color": "var(--dropzone-reject-bg)",
            "--_dropzone-color": "var(--dropzone-reject-color)"
          }
        },
        ".dropZone-inner": {
          pointerEvents: "var(--_dropzone-inner-pointer-events, all)",
          userSelect: "none",
          "&[data-disable-pointer-events]": {
            "--_dropzone-inner-pointer-events": "none"
          }
        },
        ".dropZone-fullScreen": {
          position: "fixed",
          inset: "0",
          backgroundColor: "var(--raikou-color-body)",
          display: "flex",
          flexDirection: "column",
          padding: "var(--raikou-spacing-xs)",
          transition: "opacity 100ms ease",
          "& .dropzone": {
            flex: "1"
          }
        }
      });
    };
  }
});

// ../notifications/src/Notifications.plugin.ts
var require_Notifications_plugin = __commonJS({
  "../notifications/src/Notifications.plugin.ts"(exports, module) {
    "use strict";
    module.exports = function({ addComponents }) {
      addComponents({
        ".notifications-root": {
          width: "calc(100% - var(--raikou-spacing-md) * 2)",
          position: "fixed",
          zIndex: "var(--notifications-z-index)",
          top: "var(--notifications-top)",
          left: "var(--notifications-left)",
          right: "var(--notifications-right)",
          bottom: "var(--notifications-bottom)",
          transform: "var(--notifications-transform)",
          maxWidth: "var(--notifications-container-width)"
        },
        ".notifications-notification": {
          "& + &": {
            marginTop: "var(--raikou-spacing-md)"
          }
        }
      });
    };
  }
});

// ../nprogress/src/NavigationProgress.plugin.ts
var require_NavigationProgress_plugin = __commonJS({
  "../nprogress/src/NavigationProgress.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".nProgress-root": {
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          zIndex: "var(--nprogress-z-index)",
          backgroundColor: "transparent",
          transition: "opacity 150ms ease",
          transitionDelay: "50ms",
          opacity: "var(--_nprogress-opacity, 0)",
          overflow: "visible",
          "&[data-mounted]": {
            "--_nprogress-opacity": "1"
          }
        },
        ".nProgress-section": {
          position: "relative",
          transition: "width 150ms ease",
          overflow: "visible",
          "&::before": {
            content: "''",
            position: "absolute",
            width: rem2("100px"),
            height: "var(--progress-size)",
            top: "0",
            right: "1px",
            transform: "rotate(4deg) translateY(-4px)",
            boxShadow: "0 0 10px var(--progress-section-color), 0 0 5px var(--progress-section-color)"
          }
        }
      });
    };
  }
});

// ../spotlight/src/Spotlight.plugin.ts
var require_Spotlight_plugin = __commonJS({
  "../spotlight/src/Spotlight.plugin.ts"(exports, module) {
    "use strict";
    init_src();
    module.exports = function({ addComponents }) {
      addComponents({
        ".spotlight-root": {
          "&[data-scrollable]": {
            "--_spotlight-content-height": "100%"
          }
        },
        ".spotlight-content": {
          overflow: "hidden",
          height: "var(--_spotlight-content-height, auto)",
          maxHeight: "var(--spotlight-max-height)"
        },
        ".spotlight-body": {
          display: "flex",
          flexDirection: "column",
          height: "var(--_spotlight-content-height, auto)"
        },
        ".spotlight-search": {
          border: "0",
          backgroundColor: "transparent"
        },
        ".spotlight-actionsList": {
          /* Used in child ScrollArea */
          "--spotlight-actions-list-padding": rem2("4px"),
          borderTop: `${rem2("1px")} solid var(--_actions-list-border)`,
          flex: "1",
          padding: "var(--spotlight-actions-list-padding)",
          maxHeight: `calc(100% - ${rem2("3.125rem")})`,
          marginRight: "var(--_actions-list-mr, calc(var(--spotlight-actions-list-padding) * -1))",
          marginLeft: "var(--_actions-list-ml, 0)",
          '[dir="rtl"] &': {
            "--_actions-list-mr": "0",
            "--_actions-list-ml": "calc(var(--spotlight-actions-list-padding) * -1)"
          },
          '[data-raikou-color-scheme="light"] &': {
            "--_actions-list-border": "var(--raikou-color-gray-2)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_actions-list-border": "var(--raikou-color-dark-4)"
          }
        },
        ".spotlight-action": {
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: `${rem2("7px")} var(--raikou-spacing-md)`,
          borderRadius: "var(--raikou-radius-default)",
          backgroundColor: "var(--_action-bg, transparent)",
          color: "var(--_action-color, inherit)",
          textAlign: "var(--_action-text-align, left)",
          '[dir="rtl"] &': {
            "--_action-text-align": "right"
          },
          "&:not([data-selected])": {
            "@media (hover: hover)": {
              "&:hover": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_action-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_action-bg": "var(--raikou-color-dark-6)"
                }
              }
            },
            "@media (hover: none)": {
              "&:active": {
                '[data-raikou-color-scheme="light"] &': {
                  "--_action-bg": "var(--raikou-color-gray-0)"
                },
                '[data-raikou-color-scheme="dark"] &': {
                  "--_action-bg": "var(--raikou-color-dark-6)"
                }
              }
            }
          },
          "&[data-selected]": {
            "--_action-bg": "var(--raikou-color-primary)",
            "--_action-color": "var(--raikou-color-white)",
            "--_action-description-color": "var(--raikou-color-white)",
            "--_action-description-opacity": "0.7"
          }
        },
        ".spotlight-actionBody": {
          flex: "1"
        },
        ".spotlight-actionSection": {
          marginLeft: "var(--_action-section-ml)",
          marginRight: "var(--_action-section-mr)",
          opacity: "var(--_action-section-opacity, 1)",
          color: "var(--_action-section-color, inherit)",
          "&[data-dimmed]": {
            "--_action-section-opacity": "var(--_action-description-opacity, 1)",
            "--_action-section-color": "var(--_action-description-color, var(--raikou-color-dimmed))"
          },
          '&[data-position="left"]': {
            "--_action-section-mr": "var(--raikou-spacing-md)"
          },
          '&[data-position="right"]': {
            "--_action-section-ml": "var(--raikou-spacing-md)"
          }
        },
        ".spotlight-actionLabel": {
          display: "block"
        },
        ".spotlight-actionDescription": {
          display: "block",
          fontSize: "var(--raikou-font-size-xs)",
          opacity: "var(--_action-description-opacity, 1)",
          color: "var(--_action-description-color, var(--raikou-color-dimmed))"
        },
        ".spotlight-empty": {
          color: "var(--raikou-color-dimmed)",
          padding: "var(--raikou-spacing-md)",
          textAlign: "center"
        },
        ".spotlight-footer": {
          padding: `var(--raikou-spacing-xs) calc(var(--raikou-spacing-md) + ${rem2(
            "4px"
          )})`,
          borderTop: `${rem2("1px")} solid var(--_footer-border)`,
          '[data-raikou-color-scheme="light"] &': {
            "--_footer-border": "var(--raikou-color-gray-2)"
          },
          '[data-raikou-color-scheme="dark"] &': {
            "--_footer-border": "var(--raikou-color-dark-4)"
          }
        },
        ".spotlight-actionsGroup": {
          display: "var(--_display, flex)",
          flexDirection: "column",
          marginTop: "var(--raikou-spacing-md)",
          "&::before": {
            content: "var(--spotlight-label)",
            textTransform: "uppercase",
            fontSize: "var(--raikou-font-size-xs)",
            fontWeight: "700",
            color: "var(--raikou-color-dimmed)",
            paddingLeft: "var(--_actions-group-pl, var(--raikou-spacing-md))",
            paddingRight: "var(--_actions-group-pr, 0)"
          },
          '[dir="rtl"] &': {
            "--_actions-group-pl": "0",
            "--_actions-group-pr": "var(--raikou-spacing-md)"
          },
          "&:empty": {
            "--_display": "none"
          }
        }
      });
    };
  }
});

// src/plugin.ts
var require_plugin = __commonJS({
  "src/plugin.ts"(exports, module) {
    module.exports = {
      plugins: [
        require_global_plugin(),
        require_css_variables_plugin(),
        require_Accordion_plugin(),
        require_ActionIcon_plugin(),
        require_Alert_plugin(),
        require_AppShell_plugin(),
        require_Anchor_plugin(),
        require_AspectRatio_plugin(),
        require_Avatar_plugin(),
        require_BackgroundImage_plugin(),
        require_Badge_plugin(),
        require_Blockquote_plugin(),
        require_Breadcrumbs_plugin(),
        require_Burger_plugin(),
        require_Button_plugin(),
        require_Card_plugin(),
        require_Center_plugin(),
        require_Checkbox_plugin(),
        require_Chip_plugin(),
        require_Code_plugin(),
        require_ColorInput_plugin(),
        require_ColorPicker_plugin(),
        require_ColorSwatch_plugin(),
        require_Combobox_plugin(),
        require_Container_plugin(),
        require_Dialog_plugin(),
        require_Divider_plugin(),
        require_Drawer_plugin(),
        require_Fieldset_plugin(),
        require_Flex_plugin(),
        require_Grid_plugin(),
        require_Group_plugin(),
        require_Image_plugin(),
        require_Indicator_plugin(),
        require_InlineInput_plugin(),
        require_Input_plugin(),
        require_Kbd_plugin(),
        require_List_plugin(),
        require_Loader_plugin(),
        require_LoadingOverlay_plugin(),
        require_Mark_plugin(),
        require_Menu_plugin(),
        require_Modal_plugin(),
        require_ModalBase_plugin(),
        require_NavLink_plugin(),
        require_Notification_plugin(),
        require_NumberInput_plugin(),
        require_Overlay_plugin(),
        require_Pagination_plugin(),
        require_Paper_plugin(),
        require_PasswordInput_plugin(),
        require_Pill_plugin(),
        require_PillsInput_plugin(),
        require_PinInput_plugin(),
        require_Popover_plugin(),
        require_Progress_plugin(),
        require_Radio_plugin(),
        require_Rating_plugin(),
        require_RingProgress_plugin(),
        require_ScrollArea_plugin(),
        require_SegmentedControl_plugin(),
        require_SimpleGrid_plugin(),
        require_Skeleton_plugin(),
        require_Slider_plugin(),
        require_Spoiler_plugin(),
        require_Stack_plugin(),
        require_Stepper_plugin(),
        require_Switch_plugin(),
        require_Table_plugin(),
        require_Tabs_plugin(),
        require_Text_plugin(),
        require_Timeline_plugin(),
        require_ThemeIcon_plugin(),
        require_Title_plugin(),
        require_Tooltip_plugin(),
        require_UnstyledButton_plugin(),
        require_VisuallyHidden_plugin(),
        require_Carousel_plugin(),
        require_CodeHighlight_plugin(),
        require_CodeHighlight_theme_plugin(),
        require_CalendarHeader_plugin(),
        require_DateTimePicker_plugin(),
        require_Day_plugin(),
        require_LevelsGroup_plugin(),
        require_Month_plugin(),
        require_MonthsList_plugin(),
        require_PickerControl_plugin(),
        require_PickerInputBase_plugin(),
        require_TimeInput_plugin(),
        require_WeekdaysRow_plugin(),
        require_YearsList_plugin(),
        require_Dropzone_plugin(),
        require_Notifications_plugin(),
        require_NavigationProgress_plugin(),
        require_Spotlight_plugin()
      ]
    };
  }
});
export default require_plugin();
