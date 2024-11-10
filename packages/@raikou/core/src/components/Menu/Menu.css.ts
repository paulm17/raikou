import { css } from '@stylefusion/react';

export const MenuDropdownStyle = css({
  padding: '4px',
});

export const MenuLabelStyle = css({
  color: 'var(--raikou-color-dimmed)',
  fontWeight: 500,
  fontSize: 'var(--raikou-font-size-xs)',
  padding: 'calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-sm)',
  cursor: 'default',
});

export const MenuDividerStyle = css(({ theme }) => ({
  marginTop: '4px',
  marginBottom: '4px',
  borderTop: '1px solid',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),
}));

export const MenuItemStyle = css(({ theme }) => ({
  fontSize: 'var(--raikou-font-size-sm)',
  width: '100%',
  padding: 'calc(var(--raikou-spacing-xs) / 1.5) var(--raikou-spacing-sm)',
  borderRadius: 'var(--popover-radius, var(--raikou-radius-default))',
  color: 'var(--menu-item-color, var(--raikou-color-text))',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',

  '&:_where([data-disabled], :disabled)': {
    color: 'var(--raikou-color-dimmed)',
    opacity: 0.6,
    pointerEvents: 'none',
  },

  '&:_where([data-hovered])': {
    ...theme.applyStyles('light', {
      backgroundColor: `var(--menu-item-hover, ${theme.colors.gray[1]})`,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: `var(--menu-item-hover, ${theme.colors.dark[4]})`,
    }),
  },
}));

export const MenuItemLabelStyle = css({
  flex: 1,
});

export const MenuItemSectionStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  "&:_where([data-position='left'])": {
    marginInlineEnd: 'var(--raikou-spacing-xs)',
  },

  "&:_where([data-position='right'])": {
    marginInlineStart: 'var(--raikou-spacing-xs)',
  },
});
