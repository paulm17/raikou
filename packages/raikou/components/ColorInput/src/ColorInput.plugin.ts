import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".colorInput-eyeDropperIcon": {
      "--ci-eye-dropper-icon-size-xs": rem("14px"),
      "--ci-eye-dropper-icon-size-sm": rem("16px"),
      "--ci-eye-dropper-icon-size-md": rem("18px"),
      "--ci-eye-dropper-icon-size-lg": rem("20px"),
      "--ci-eye-dropper-icon-size-xl": rem("22px"),
      "--ci-eye-dropper-icon-size": "var(--ci-eye-dropper-icon-size-sm)",
    },

    ".colorInput-colorPreview": {
      "--ci-preview-size-xs": rem("16px"),
      "--ci-preview-size-sm": rem("18px"),
      "--ci-preview-size-md": rem("22px"),
      "--ci-preview-size-lg": rem("28px"),
      "--ci-preview-size-xl": rem("36px"),
      "--ci-preview-size": "var(--ci-preview-size-sm)",
    },
  });
};
