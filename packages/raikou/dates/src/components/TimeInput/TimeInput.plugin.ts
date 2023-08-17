import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-timeInput-input": {
      paddingTop: "0",
      paddingBottom: "0",
      appearance: "none",

      "&::-webkit-calendar-picker-indicator": {
        display: "none",
      },

      "&::-webkit-clear-button": {
        display: "none",
      },

      "&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-second-field":
        {
          paddingTop: "0",
          maxHeight: rem("30px"),
          display: "inline",

          "&:focus": {
            backgroundColor: "var(--raikou-primary-color-filled)",
            color: "var(--raikou-color-white)",
          },
        },
    },
  });
};
