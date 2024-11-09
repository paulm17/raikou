import { css } from '@stylefusion/react';

export const TimeInputStyle = css({
  paddingTop: 0,
  paddingBottom: 0,
  appearance: "none",

  "&::-webkit-calendar-picker-indicator": {
    display: "none",
  },

  "&::-webkit-clear-button": {
    display: "none",
  },

  "&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-second-field, &::-webkit-datetime-edit-ampm-field": {
    paddingTop: 0,
    maxHeight: "30px",
    display: "inline",

    "&:focus": {
      backgroundColor: "var(--raikou-primary-color-filled)",
      color: "var(--raikou-color-white)",
    },
  },
});