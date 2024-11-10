import { css } from '@stylefusion/react';

export const PopoverDropdownStyle = css(({ theme }) => ({
  position: 'absolute',
  border: '1px solid var(--popover-border-color)',
  padding: 'var(--raikou-spacing-sm) var(--raikou-spacing-md)',
  boxShadow: 'var(--popover-shadow, none)',
  borderRadius: 'var(--popover-radius, var(--raikou-radius-default))',

  '&:_where([data-fixed])': {
    position: 'fixed',
  },

  '&:focus': {
    outline: 'none',
  },

  ...theme.applyStyles('light', {
    '--popover-border-color': theme.colors.gray[2],
    backgroundColor: theme.colors.white,
  }),

  ...theme.applyStyles('dark', {
    '--popover-border-color': theme.colors.dark[4],
    backgroundColor: theme.colors.dark[6],
  }),
}));

export const PopoverArrowStyle = css({
  backgroundColor: 'inherit',
  border: '1px solid var(--popover-border-color)',
  zIndex: 1,
});
