module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".timeline-root": {
      "--offset": "calc(var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2)",

      "padding-left": "var(--_tl-pl, 0)",
      "padding-right": "var(--_tl-pr, 0)",

      '&[data-align="left"]': {
        "--_tl-pl": "var(--offset)",

        "@mixin rtl": {
          "--_tl-pl": "0",
          "--_tl-pr": "var(--offset)",
        },
      },

      '&[data-align="right"]': {
        "--_tl-pr": "var(--offset)",

        '[dir="rtl"] &': {
          "--_tl-pl": "var(--offset)",
          "--_tl-pr": "0",
        },
      },
    },

    ".timeline-itemTitle": {
      fontWeight: "500",
      lineHeight: "1",
      marginBottom: "calc(var(--raikou-spacing-xs) / 2)",
    },

    ".timeline-item": {
      "--item-border":
        "var(--tl-line-width) var(--tli-border-style, solid) var(--_item-border-color)",

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
          "--_line-border-right": "var(--item-border)",
        },

        '.timeline-root[data-align="left"] &': {
          "--_line-left": "calc(var(--tl-line-width) * -1)",
          "--_line-right": "auto",

          '[dir="rtl"] &': {
            "--_line-left": "auto",
            "--_line-right": "calc(var(--tl-line-width) * -1)",
          },
        },

        '.timeline-root[data-align="right"] &': {
          "--_line-left": "auto",
          "--_line-right": "calc(var(--tl-line-width) * -1)",

          '[dir="rtl"] &': {
            "--_line-left": "calc(var(--tl-line-width) * -1)",
            "--_line-right": "auto",
          },
        },
      },

      '.timeline-root[data-align="left"] &': {
        "--_item-pl": "var(--offset)",
        "--_item-ta": "left",

        '[dir="rtl"] &': {
          "--_item-pl": "0",
          "--_item-pr": "var(--offset)",
        },
      },

      '.timeline-root[data-align="right"] &': {
        "--_item-pr": "var(--offset)",
        "--_item-ta": "right",

        '[dir="rtl"] &': {
          "--_item-pl": "var(--offset)",
          "--_item-pr": "0",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_item-border-color": "var(--raikou-timeline-item-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_item-border-color": "var(--raikou-timeline-item-border-color)",
      },

      "[data-raikou-color-scheme] &[data-line-active]": {
        "&::before": {
          borderColor: "var(--tli-color, var(--tl-color))",
        },
      },

      "&:not(:last-of-type)": {
        "--_line-display": "block",
      },

      "&:not(:first-of-type)": {
        "--_item-mt": "var(--raikou-spacing-xl)",
      },
    },

    ".timeline-itemBullet": {
      width: "var(--tl-bullet-size)",
      height: "var(--tl-bullet-size)",
      borderRadius: "var(--tli-radius, var(--tl-radius))",
      border:
        "var(--_bullet-border-width, var(--tl-line-width)) solid var(--_bullet-border-color)",
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
        "--_bullet-border-color": "var(--raikou-timeline-bullet-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bullet-border-color": "var(--raikou-timeline-bullet-border-color)",
      },

      '.timeline-root[data-align="left"] &': {
        "--_bullet-left":
          "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
        "--_bullet-right": "auto",

        '[dir="rtl"] &': {
          "--_bullet-left": "auto",
          "--_bullet-right":
            "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
        },
      },

      '.timeline-root[data-align="right"] &': {
        "--_bullet-left": "auto",
        "--_bullet-right":
          "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",

        '[dir="rtl"] &': {
          "--_bullet-left":
            "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)",
          "--_bullet-right": "auto",
        },
      },

      "&[data-with-child]": {
        "--_bullet-border-width": "var(--tl-line-width)",

        '[data-raikou-color-scheme="light"] &': {
          "--_bullet-bg-color": "var(--raikou-timeline-bullet-bg-color)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_bullet-bg-color": "var(--raikou-timeline-bullet-bg-color)",
        },
      },

      "&[data-active]": {
        "--_bullet-border-color": "var(--tli-color, var(--tl-color))",
        "--_bullet-bg-color": "var(--raikou-color-white)",
        "--_bullet-color": "var(--raikou-color-white)",

        "&[data-with-child]": {
          "--_bullet-bg-color": "var(--tli-color, var(--tl-color))",
          "--_bullet-color": "var(--raikou-color-white)",
        },
      },
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
          "--_body-ta": "right",
        },
      },

      '.timeline-root[data-align="right"] &': {
        "--_body-pr": "var(--offset)",
        "--_body-ta": "right",

        '[dir="rtl"] &': {
          "--_body-pl": "var(--offset)",
          "--_body-pr": "0",
          "--_body-ta": "left",
        },
      },
    },
  });
};
