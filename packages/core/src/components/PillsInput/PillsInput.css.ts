import { css } from "@stylefusion/react";

export const PillsInputFieldStyle = css({
  backgroundColor: "transparent",
  appearance: "none",
  minWidth: "100px",
  flex: 1,
  border: 0,
  fontSize: "inherit",
  height: "1.6em",
  color: "inherit",
  padding: 0,

  "&::placeholder": {
    color: "var(--input-placeholder-color)",
    opacity: 1,
  },

  "&:_where([data-type='hidden'], [data-type='auto'])": {
    height: "1px",
    width: "1px",
    top: 0,
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    opacity: 0,
  },

  "&:focus": {
    outline: "none",
  },

  "&:_where([data-type='auto']:focus)": {
    height: "1.6em",
    visibility: "visible",
    opacity: 1,
    position: "static",
  },

  "&:_where([data-pointer]:not([data-disabled], :disabled))": {
    cursor: "pointer",
  },

  "&:_where([data-disabled], :disabled)": {
    cursor: "not-allowed",
  },
});