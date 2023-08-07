import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".modal-root": {
      "--modal-size-xs": rem("320px"),
      "--modal-size-sm": rem("380px"),
      "--modal-size-md": rem("440px"),
      "--modal-size-lg": rem("620px"),
      "--modal-size-xl": rem("780px"),

      "&[data-full-screen]": {
        "--modal-border-radius": "0 !important",

        ".modal-content": {
          "--_content-flex": "0 0 100%",
          "--_content-max-height": "auto",
          "--_content-height": "100dvh",
        },

        ".modal-inner": {
          "--_inner-y-offset": "0",
          "--_inner-x-offset": "0",
        },
      },

      "&[data-centered]": {
        ".modal-inner": {
          "--_inner-align": "center",
        },
      },
    },

    ".modal-header": {
      borderTopLeftRadius: "var(--modal-radius)",
      borderTopRightRadius: "var(--modal-radius)",
    },

    ".modal-content": {
      flex: "var(--_content-flex, 0 0 var(--modal-size))",
      maxWidth: "100%",
      maxHeight:
        "var(--_content-max-height, calc(100dvh - var(--modal-y-offset) * 2))",
      height: "var(--_content-height, auto)",
      overflowY: "auto",
    },

    ".modal-inner": {
      display: "flex",
      justifyContent: "center",
      alignItems: "var(--_inner-align, flex-start)",
      paddingTop: "var(--_inner-y-offset, var(--modal-y-offset))",
      paddingBottom: "var(--_inner-y-offset, var(--modal-y-offset))",
      paddingLeft: "var(--_inner-x-offset, var(--modal-x-offset))",
      paddingRight: "var(--_inner-x-offset, var(--modal-x-offset))",
    },
  });
};
