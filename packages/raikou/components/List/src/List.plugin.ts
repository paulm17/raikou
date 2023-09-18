module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".list-root": {
      listStylePosition: "inside",
      fontSize: "var(--list-fz, var(--raikou-fz-md))",
      lineHeight: "var(--list-lh, var(--raikou-line-height-md))",
      margin: "0",
      padding: "0",
      paddingLeft: "var(--_list-pl, 0)",
      paddingRight: "var(--_list-pr, 0)",

      "&[data-with-padding]": {
        "--_list-pl": "var(--raikou-spacing-md)",

        '[dir="rtl"] &': {
          "--_list-pl": "0",
          "--_list-pr": "var(--raikou-spacing-md)",
        },
      },
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
          "--_item-wrapper-align": "center",
        },
      },

      "&:not(:first-of-type)": {
        "--_item-mt": "var(--list-spacing, 0)",
      },

      "&[data-centered]": {
        "--_item-lh": "1",
      },
    },

    ".list-itemWrapper": {
      display: "inline-flex",
      flexDirection: "var(--_item-wrapper-direction, column)",
      alignItems: "var(--_item-wrapper-align, flex-start)",
      whiteSpace: "normal",
    },

    ".list-itemIcon": {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: "var(--_item-icon-mr, var(--raikou-spacing-sm))",
      marginLeft: "var(--_item-icon-ml, 0)",

      '[dir="rtl"] &': {
        "--_item-icon-mr": "0",
        "--_item-icon-ml": "var(--raikou-spacing-sm)",
      },
    },
  });
};
