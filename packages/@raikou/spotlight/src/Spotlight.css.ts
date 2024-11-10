import { css } from '@stylefusion/react';

export const SpotlightRootStyle = css({
  '&[data-scrollable]': {
    '--spotlight-content-height': '100%',
  },
});

export const SpotlightContentStyle = css({
  overflow: 'hidden',
  height: 'var(--spotlight-content-height, auto)',
  maxHeight: 'var(--spotlight-max-height)',
});

export const SpotlightBodyStyle = css({
  display: 'flex',
  flexDirection: 'column',
  height: 'var(--spotlight-content-height, auto)',
});

export const SpotlightSearchStyle = css({
  border: 0,
  backgroundColor: 'transparent',
});

export const SpotlightActionsListStyle = css(({ theme }) => ({
  /* Used in child ScrollArea */
  '--spotlight-actions-list-padding': '4px',

  borderTop: '1px solid',
  flex: 1,
  padding: 'var(--spotlight-actions-list-padding)',
  maxHeight: 'calc(100% - 3.125rem)',
  marginInlineEnd: 'calc(var(--spotlight-actions-list-padding) * -1)',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[2],
  }),
  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),
}));

export const SpotlightActionStyle = css(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '7px var(--raikou-spacing-md)',
  borderRadius: 'var(--raikou-radius-default)',
  backgroundColor: 'transparent',
  color: 'inherit',
  textAlign: 'left',

  ...theme.applyMixin('where-rtl', {
    textAlign: 'right',
  }),

  '&:_where(:not([data-selected]))': {
    ...theme.applyMixin('hover', {
      '&:hover': {
        ...theme.applyStyles('light', {
          backgroundColor: theme.colors.gray[0],
        }),
        ...theme.applyStyles('dark', {
          backgroundColor: theme.colors.dark[6],
        }),
      },
    }),
  },

  '&:_where([data-selected])': {
    backgroundColor: 'var(--raikou-primary-color-filled)',
    color: 'var(--raikou-primary-color-contrast, var(--raikou-color-white))',
    '--action-description-color': 'var(--raikou-primary-color-contrast, var(--raikou-color-white))',
    '--action-description-opacity': '0.7',
  },
}));

export const SpotlightActionBodyStyle = css({
  flex: 1,
});

export const SpotlightActionSectionStyle = css({
  opacity: 1,
  color: 'inherit',

  '&:_where([data-dimmed])': {
    opacity: 'var(--action-description-opacity, 1)',
    color: 'var(--action-description-color, var(--raikou-color-dimmed))',
  },

  '&:_where([data-position="left"])': {
    marginInlineEnd: 'var(--raikou-spacing-md)',
  },

  '&:_where([data-position="right"])': {
    marginInlineStart: 'var(--raikou-spacing-md)',
  },

  '& > svg': {
    display: 'block',
  },
});

export const SpotlightActionLabelStyle = css({
  display: 'block',
});

export const SpotlightActionDescriptionStyle = css({
  display: 'block',
  fontSize: 'var(--raikou-font-size-xs)',
  opacity: 'var(--action-description-opacity, 1)',
  color: 'var(--action-description-color, var(--raikou-color-dimmed))',
});

export const SpotlightEmptyStyle = css({
  color: 'var(--raikou-color-dimmed)',
  padding: 'var(--raikou-spacing-md)',
  textAlign: 'center',
});

export const SpotlightFooterStyle = css(({ theme }) => ({
  padding: 'var(--raikou-spacing-xs) calc(var(--raikou-spacing-md) + rem(4px))',
  borderTop: '1px solid',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),
}));

export const SpotlightActionsGroupStyle = css({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'var(--raikou-spacing-md)',

  '&:before': {
    content: 'var(--spotlight-label)',
    textTransform: 'uppercase',
    fontSize: 'var(--raikou-font-size-xs)',
    fontWeight: 700,
    color: 'var(--raikou-color-dimmed)',
    paddingInlineStart: 'var(--raikou-spacing-md)',
  },

  '&:empty': {
    display: 'none',
  },
});
