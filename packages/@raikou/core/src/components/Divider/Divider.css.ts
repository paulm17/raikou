import { css } from '@stylefusion/react';

export const DividerRootStyle = css(({ theme }) => ({
  '--divider-size-xs': '1px',
  '--divider-size-sm': '2px',
  '--divider-size-md': '3px',
  '--divider-size-lg': '4px',
  '--divider-size-xl': '5px',
  '--divider-size': 'var(--divider-size-xs)',

  ...theme.applyStyles('light', {
    '--divider-color': theme.colors.gray[3],
  }),

  ...theme.applyStyles('dark', {
    '--divider-color': theme.colors.dark[4],
  }),

  "&:_where([data-orientation='horizontal'])": {
    borderTop: 'var(--divider-size) var(--divider-border-style, solid) var(--divider-color)',
  },

  "&:_where([data-orientation='vertical'])": {
    borderInlineStart:
      'var(--divider-size) var(--divider-border-style, solid) var(--divider-color)',
    height: 'auto',
    alignSelf: 'stretch',
  },

  '&:_where([data-with-label])': {
    border: 0,
  },
}));

export const DividerLabelStyle = css({
  display: 'flex',
  alignItems: 'center',
  fontSize: 'var(--raikou-font-size-xs)',
  color: 'var(--raikou-color-dimmed)',
  whiteSpace: 'nowrap',

  "&:_where([data-position='left']):before": {
    display: 'none',
  },

  "&:_where([data-position='right']):after": {
    display: 'none',
  },

  '&:before': {
    content: "''",
    flex: 1,
    height: '1px',
    borderTop: 'var(--divider-size) var(--divider-border-style, solid) var(--divider-color)',
    marginInlineEnd: 'var(--raikou-spacing-xs)',
  },

  '&:after': {
    content: "''",
    flex: 1,
    height: '1px',
    borderTop: 'var(--divider-size) var(--divider-border-style, solid) var(--divider-color)',
    marginInlineStart: 'var(--raikou-spacing-xs)',
  },
});
