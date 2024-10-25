import { css } from '@stylefusion/react';

export const NotificationsRootStyle = css({
  width: "calc(100% - var(--raikou-spacing-md) * 2)",
  position: "fixed",
  zIndex: "var(--notifications-z-index)",
  maxWidth: "var(--notifications-container-width)",

  "&:_where([data-position='top-center'])": {
    top: "var(--raikou-spacing-md)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  "&:_where([data-position='top-left'])": {
    top: "var(--raikou-spacing-md)",
    left: "var(--raikou-spacing-md)",
  },

  "&:_where([data-position='top-right'])": {
    top: "var(--raikou-spacing-md)",
    right: "var(--raikou-spacing-md)",
  },

  "&:_where([data-position='bottom-center'])": {
    bottom: "var(--raikou-spacing-md)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  "&:_where([data-position='bottom-left'])": {
    bottom: "var(--raikou-spacing-md)",
    left: "var(--raikou-spacing-md)",
  },

  "&:_where([data-position='bottom-right'])": {
    bottom: "var(--raikou-spacing-md)",
    right: "var(--raikou-spacing-md)",
  },
});

export const NotificationsNotificationStyle = css({
  "& + &": {
    marginTop: "var(--raikou-spacing-md)",
  },
});
