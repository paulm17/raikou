import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".typographyStylesProvider-root": {
      "& h1, & h2, & h3, & h4, & h5, & h6": {
        marginTop: "calc(1.55 * var(--raikou-spacing-xl))",
        marginBottom: "var(--raikou-spacing-xs)",
      },

      "& h1": {
        fontSize: "var(--raikou-h1-font-size)",
        lineHeight: "var(--raikou-h1-line-height)",
        fontWeight: "var(--raikou-h1-font-weight)",
      },

      "& h2": {
        fontSize: "var(--raikou-h2-font-size)",
        lineHeight: "var(--raikou-h2-line-height)",
        fontWeight: "var(--raikou-h2-font-weight)",
      },

      "& h3": {
        fontSize: "var(--raikou-h3-font-size)",
        lineHeight: "var(--raikou-h3-line-height)",
        fontWeight: "var(--raikou-h3-font-weight)",
      },

      "& h4": {
        fontSize: "var(--raikou-h4-font-size)",
        lineHeight: "var(--raikou-h4-line-height)",
        fontWeight: "var(--raikou-h4-font-weight)",
      },

      "& h5": {
        fontSize: "var(--raikou-h5-font-size)",
        lineHeight: "var(--raikou-h5-line-height)",
        fontWeight: "var(--raikou-h5-font-weight)",
      },

      "& h6": {
        fontSize: "var(--raikou-h6-font-size)",
        lineHeight: "var(--raikou-h6-line-height)",
        fontWeight: "var(--raikou-h6-font-weight)",
      },

      "& img": {
        maxWidth: "100%",
        marginBottom: "var(--raikou-spacing-xs)",
      },

      "& p": {
        marginTop: 0,
        marginBottom: "var(--raikou-spacing-lg)",
      },

      "& mark": {
        '[data-raikou-color-scheme="light"] &': {
          backgroundColor: "var(--raikou-color-yellow-2)",
          color: "inherit",
        },

        '[data-raikou-color-scheme="dark"] &': {
          backgroundColor: "var(--raikou-color-yellow-5)",
          color: "var(--raikou-color-black)",
        },
      },

      "& a": {
        color: "var(--raikou-color-anchor)",
        textDecoration: "none",

        "@media (hover: hover)": {
          "&:hover": {
            textDecoration: "underline",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            textDecoration: "underline",
          },
        },
      },

      "& hr": {
        marginTop: "var(--raikou-spacing-md)",
        marginBottom: "var(--raikou-spacing-md)",
        border: 0,
        borderTop: `rem(1px) solid`,

        '[data-raikou-color-scheme="light"] &': {
          borderColor: "var(--raikou-color-gray-3)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          borderColor: "var(--raikou-color-dark-3)",
        },
      },

      "& pre": {
        padding: "var(--raikou-spacing-xs)",
        lineHeight: "var(--raikou-line-height)",
        margin: 0,
        marginTop: "var(--raikou-spacing-md)",
        marginBottom: "var(--raikou-spacing-md)",
        overflowX: "auto",
        fontFamily: "var(--raikou-font-family-monospace)",
        fontSize: "var(--raikou-font-size-xs)",
        borderRadius: "var(--raikou-radius-sm)",

        '[data-raikou-color-scheme="light"] &': {
          backgroundColor: "var(--raikou-color-gray-0)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          backgroundColor: "var(--raikou-color-dark-8)",
        },

        "& code": {
          backgroundColor: "transparent",
          padding: 0,
          borderRadius: 0,
          color: "inherit",
          border: 0,
        },
      },

      "& code": {
        lineHeight: "var(--raikou-line-height)",
        padding: `rem(1px) rem(5px)`,
        borderRadius: "var(--raikou-radius-sm)",
        fontFamily: "var(--raikou-font-family-monospace)",
        fontSize: "var(--raikou-font-size-xs)",

        '[data-raikou-color-scheme="light"] &': {
          backgroundColor: "var(--raikou-color-gray-0)",
          color: "var(--raikou-color-black)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          backgroundColor: "var(--raikou-color-dark-5)",
          color: "var(--raikou-color-white)",
        },
      },

      "& ul, &, ol": {
        marginBottom: "var(--raikou-spacing-md)",
        paddingLeft: rem("38px"),

        "& li": {
          marginBottom: "var(--raikou-spacing-xs)",
        },
      },

      "& table": {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: "bottom",
        marginBottom: "var(--raikou-spacing-md)",

        "& caption": {
          marginTop: "var(--raikou-spacing-xs)",
          fontSize: "var(--raikou-font-size-sm)",
          color: "var(--raikou-color-gray-6)",
        },

        "& th": {
          textAlign: "left",
          fontWeight: "bold",
          color: "var(--raikou-color-gray-7)",
          fontSize: "var(--raikou-font-size-sm)",
          padding: "var(--raikou-spacing-xs) var(--raikou-spacing-sm)",
        },

        "& thead th": {
          borderBottom: `rem(1px) solid`,
          borderColor: "var(--raikou-color-gray-3)",
        },

        "& tfoot th": {
          borderTop: `rem(1px) solid`,
          borderColor: "var(--raikou-color-gray-3)",
        },

        "& td": {
          padding: "var(--raikou-spacing-xs) var(--raikou-spacing-sm)",
          borderBottom: `rem(1px) solid`,
          borderColor: "var(--raikou-color-gray-3)",
          fontSize: "var(--raikou-font-size-sm)",
        },

        "& tr:last-of-type td": {
          borderBottom: 0,
        },
      },

      "& blockquote": {
        fontSize: "var(--raikou-font-size-lg)",
        lineHeight: "var(--raikou-line-height)",
        margin: "var(--raikou-spacing-md) 0",
        borderRadius: "var(--raikou-radius-sm)",
        padding: "var(--raikou-spacing-md) var(--raikou-spacing-lg)",

        '[data-raikou-color-scheme="light"] &': {
          backgroundColor: "var(--raikou-color-gray-0)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          backgroundColor: "var(--raikou-color-dark-8)",
        },
      },
    },
  });
};
