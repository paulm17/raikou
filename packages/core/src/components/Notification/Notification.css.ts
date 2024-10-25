import { css } from "@stylefusion/react";

export const NotificationRootStyle = css(({ theme }: any) => ({
  "--notification-radius": "var(--raikou-radius-default)",
  "--notification-color": "var(--raikou-primary-color-filled)",

  overflow: "hidden",
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  alignItems: "center",
  paddingInlineStart: "22px",
  paddingInlineEnd: "var(--raikou-spacing-xs)",
  paddingTop: "var(--raikou-spacing-xs)",
  paddingBottom: "var(--raikou-spacing-xs)",
  borderRadius: "var(--notification-radius)",
  boxShadow: "var(--raikou-shadow-lg)",

  '&:before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    width: '6px',
    top: 'var(--notification-radius)',
    bottom: 'var(--notification-radius)',
    insetInlineStart: '4px',
    borderRadius: 'var(--notification-radius)',
    backgroundColor: 'var(--notification-color)',
  },

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[6],
  }),

  '&:_where([data-with-icon])': {
    paddingInlineStart: 'var(--raikou-spacing-xs)',

    '&:before': {
      display: 'none',
    },
  },
  
  "&:_where([data-with-border])": {
    ...theme.applyStyles('light', {
      border: `1px solid ${theme.colors.gray[3]}`,
    }),

    ...theme.applyStyles('dark', {
      border: `1px solid ${theme.colors.dark[4]}`,
    }),
  },
}));

export const NotificationIconStyle = css({
  boxSizing: 'border-box',
  marginInlineEnd: 'var(--raikou-spacing-md)',
  width: '28px',
  height: '28px',
  borderRadius: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--notification-color)',
  color: 'var(--raikou-color-white)',
});

export const NotificationLoaderStyle = css({
  marginInlineEnd: 'var(--raikou-spacing-md)',
});

export const NotificationBodyStyle = css({
  flex: 1,
  overflow: 'hidden',
  marginInlineEnd: 'var(--raikou-spacing-xs)',
});

export const NotificationTitleStyle = css(({ theme }: any) => ({
  marginBottom: '2px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 'var(--raikou-font-size-sm)',
  lineHeight: 'var(--raikou-line-height-sm)',
  fontWeight: 500,

  ...theme.applyStyles('light', {
    color: theme.colors.gray[9],
  }),

  ...theme.applyStyles('dark', {
    color: theme.colors.white,
  }),
}));


export const NotificationDescriptionStyle = css(({ theme }: any) => ({
  fontSize: 'var(--raikou-font-size-sm)',
  lineHeight: 'var(--raikou-line-height-sm)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  ...theme.applyStyles('light', {
    color: theme.colors.black,
  }),

  ...theme.applyStyles('dark', {
    color: theme.colors.dark[0],
  }),

  "&:_where([data-with-title])": {
    ...theme.applyStyles('light', {
      color: theme.colors.gray[6],
    }),

    ...theme.applyStyles('dark', {
      color: theme.colors.dark[2],
    }),
  },
}));
  
export const NotificationCloseButtonStyle = css(({ theme }: any) => ({
  ...theme.applyMixin('hover', {
    "&:hover": {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[8],
      }),
    }
  }),
}));
