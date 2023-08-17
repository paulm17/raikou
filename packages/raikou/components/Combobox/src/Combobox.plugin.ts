import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".comboBox-dropdown.comboBox-dropdown": {
      padding: "var(--combobox-padding)",

      "&[data-hidden]": {
        display: "none",
      },
    },

    /* Variables must be both on dropdown and options to support usage of Combobox.Options without Combobox.Dropdown */
    ".comboBox-dropdown, .comboBox-options": {
      "--combobox-option-padding-xs": `${rem("4px")} ${rem("8px")}`,
      "--combobox-option-padding-sm": `${rem("6px")} ${rem("10px")}`,
      "--combobox-option-padding-md": `${rem("8px")} ${rem("12px")}`,
      "--combobox-option-padding-lg": `${rem("10px")} ${rem("16px")}`,
      "--combobox-option-padding-xl": `${rem("14px")} ${rem("20px")}`,
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
        "--_option-color": "var(--raikou-color-white)",
      },

      "&[data-combobox-disabled]": {
        "--_option-cursor": "not-allowed",
        "--_option-opacity": "0.35",
      },

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-combobox-selected], [data-combobox-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_option-bg": "var(--raikou-combobox-option-hover-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_option-bg": "var(--raikou-combobox-option-hover-bg)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-combobox-selected], [data-combobox-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_option-bg": "var(--raikou-combobox-option-active-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_option-bg": "var(--raikou-combobox-option-active-bg)",
            },
          },
        },
      },
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
        "border-color": "var(--_search-border-color)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_search-border-color": "var(--raikou-combobox-search-border-color)",
        "--_search_background": "var(--raikou-combobox-search_background)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_search-border-color": "var(--raikou-combobox-search-border-color)",
        "--_search_background": "var(--raikou-combobox-search_background)",
      },
    },

    ".comboBox-empty": {
      fontSize: "var(--combobox-option-fz)",
      textAlign: "center",
      padding: "var(--combobox-option-padding)",
      color: "var(--raikou-color-dimmed)",
    },

    ".comboBox-header, .comboBox-footer": {
      fontSize: "var(--combobox-option-fz)",
      border: "0 solid var(--_footer-border-color)",
      marginLeft: "calc(var(--combobox-padding) * -1)",
      marginRight: "calc(var(--combobox-padding) * -1)",
      padding: "var(--combobox-option-padding)",

      '[data-raikou-color-scheme="light"] &': {
        "--_footer-border-color": "var(--raikou-combobox-footer-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_footer-border-color": "var(--raikou-combobox-footer-border-color)",
      },
    },

    ".comboBox-footer": {
      borderTopWidth: rem("1px"),
      marginTop: "var(--combobox-padding)",
      marginBottom: "calc(var(--combobox-padding) * -1)",
    },

    ".comboBox-header": {
      borderBottomWidth: rem("1px"),
      marginBottom: "var(--combobox-padding)",
      marginTop: "calc(var(--combobox-padding) * -1)",
    },

    ".comboBox-group": {
      "&:has(.groupLabel:only-child)": {
        display: "none",
      },
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
        height: rem("1px"),
        marginLeft: "var(--raikou-spacing-xs)",
        backgroundColor: "var(--_divider-bg)",

        '[data-raikou-color-scheme="light"] &': {
          "--_divider-bg": "var(--raikou-combobox-divider-bg)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_divider-bg": "var(--raikou-combobox-divider-bg)",
        },
      },

      "&:only-child": {
        display: "none",
      },
    },

    ".comboBox-chevron": {
      "--combobox-chevron-size-xs": rem("14px"),
      "--combobox-chevron-size-sm": rem("18px"),
      "--combobox-chevron-size-md": rem("20px"),
      "--combobox-chevron-size-lg": rem("24px"),
      "--combobox-chevron-size-xl": rem("28px"),

      width: "var(--combobox-chevron-size)",
      height: "var(--combobox-chevron-size)",
      color: "var(--_color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_color": "var(--raikou-combobox-chevron-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_color": "var(--raikou-combobox-chevron-color)",
      },

      "&[data-error]": {
        "--_color": "var(--raikou-color-error)",
      },
    },

    ".comboBox-optionsDropdownScrollArea": {
      "margin-right": "calc(var(--combobox-padding) * -1)",

      '[dir="rtl"] &': {
        marginLeft: "calc(var(--combobox-padding) * -1)",
        marginRight: "0",
      },
    },

    ".comboBox-optionsDropdownOption": {
      display: "flex",
      alignItems: "center",
      flexDirection: "var(--_flex-direction, row)",
      gap: rem("8px"),

      "&[data-reverse]": {
        justifyContent: "space-between",
      },
    },

    ".comboBox-optionsDropdownCheckIcon": {
      opacity: "0.4",
      width: "0.8em",
      height: "0.8em",

      "[data-combobox-selected] &": {
        opacity: "1",
      },
    },
  });
};
