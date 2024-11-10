import { css } from '@stylefusion/react';

export const PillRootStyle = css(({ theme }) => ({
  '--pill-fz-xs': '10px',
  '--pill-fz-sm': '12px',
  '--pill-fz-md': '14px',
  '--pill-fz-lg': '16px',
  '--pill-fz-xl': '18px',

  '--pill-height-xs': '18px',
  '--pill-height-sm': '22px',
  '--pill-height-md': '25px',
  '--pill-height-lg': '28px',
  '--pill-height-xl': '32px',

  '--pill-fz': 'var(--pill-fz-sm)',
  '--pill-height': 'var(--pill-height-sm)',

  fontSize: 'var(--pill-fz)',
  flex: 0,
  height: 'var(--pill-height)',
  paddingInline: '0.8em',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'var(--pill-radius, 1000rem)',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  maxWidth: '100%',

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[7],
    color: theme.colors.dark[0],
  }),

  ...theme.applyStyles('light', {
    color: theme.colors.black,
  }),

  '&:_where([data-with-remove]:not(:has(button:disabled)))': {
    paddingInlineEnd: 0,
  },

  '&:_where([data-disabled], :has(button:disabled))': {
    cursor: 'not-allowed',
  },

  '&[data-variant=default]': {
    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[1],
    }),

    '&:_where([data-disabled], :has(button:disabled))': {
      backgroundColor: theme.colors.gray[3],
    },
  },

  '&[data-variant=contrast]': {
    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.white,
    }),

    '&:_where([data-disabled], :has(button:disabled))': {
      backgroundColor: theme.colors.gray[3],
    },
  },
}));

export const PillLabelStyle = css({
  cursor: 'inherit',
  overflow: 'hidden',
  height: '100%',
  lineHeight: 'var(--pill-height)',
  textOverflow: 'ellipsis',
});

export const PillRemoveStyle = css({
  color: 'inherit',
  fontSize: 'inherit',
  height: '100%',
  minHeight: 'unset',
  minWidth: '2em',
  width: 'unset',
  borderRadius: 0,
  paddingInlineStart: '0.1em',
  paddingInlineEnd: '0.3em',
  flex: 0,
  borderEndEndRadius: 'var(--pill-radius, 50%)',
  borderStartEndRadius: 'var(--pill-radius, 50%)',

  [`&.${PillRootStyle}[data-disabled] > &, &:disabled`]: {
    display: 'none',
    backgroundColor: 'transparent',
    width: '0.8em',
    minWidth: '0.8em',
    padding: 0,
    cursor: 'not-allowed',

    '& > svg': {
      display: 'none',
    },
  },

  '& > svg': {
    pointerEvents: 'none',
  },
});

export const PillGroupStyle = css({
  '--pg-gap-xs': '6px',
  '--pg-gap-sm': '8px',
  '--pg-gap-md': '10px',
  '--pg-gap-lg': '12px',
  '--pg-gap-xl': '12px',
  '--pg-gap': 'var(--pg-gap-sm)',

  display: 'flex',
  alignItems: 'center',
  gap: 'var(--pg-gap)',
  flexWrap: 'wrap',
});
