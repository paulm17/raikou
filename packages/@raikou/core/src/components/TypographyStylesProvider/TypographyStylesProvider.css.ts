import { css } from '@stylefusion/react';

export const TypographyStylesProviderRootStyle = css(({ theme }: any) => ({
  '& :first-child': {
    marginTop: 0,
  },
  '& :last-child': {
    marginBottom: 0,
  },
  '& :_where(h1, h2, h3, h4, h5, h6)': {
    marginBottom: 'var(--raikou-spacing-xs)',
    textWrap: 'var(--raikou-heading-text-wrap)',
  },
  '& :_where(h1)': {
    marginTop: 'calc(1.5 * var(--raikou-spacing-xl))',
    fontSize: 'var(--raikou-h1-font-size)',
    lineHeight: 'var(--raikou-h1-line-height)',
    fontWeight: 'var(--raikou-h1-font-weight)',
  },
  '& :_where(h2)': {
    marginTop: 'var(--raikou-spacing-xl)',
    fontSize: 'var(--raikou-h2-font-size)',
    lineHeight: 'var(--raikou-h2-line-height)',
    fontWeight: 'var(--raikou-h2-font-weight)',
  },
  '& :_where(h3)': {
    marginTop: 'calc(0.8 * var(--raikou-spacing-xl))',
    fontSize: 'var(--raikou-h3-font-size)',
    lineHeight: 'var(--raikou-h3-line-height)',
    fontWeight: 'var(--raikou-h3-font-weight)',
  },
  '& :_where(h4)': {
    marginTop: 'calc(0.8 * var(--raikou-spacing-xl))',
    fontSize: 'var(--raikou-h4-font-size)',
    lineHeight: 'var(--raikou-h4-line-height)',
    fontWeight: 'var(--raikou-h4-font-weight)',
  },
  '& :_where(h5)': {
    marginTop: 'calc(0.5 * var(--raikou-spacing-xl))',
    fontSize: 'var(--raikou-h5-font-size)',
    lineHeight: 'var(--raikou-h5-line-height)',
    fontWeight: 'var(--raikou-h5-font-weight)',
  },
  '& :_where(h6)': {
    marginTop: 'calc(0.5 * var(--raikou-spacing-xl))',
    fontSize: 'var(--raikou-h6-font-size)',
    lineHeight: 'var(--raikou-h6-line-height)',
    fontWeight: 'var(--raikou-h6-font-weight)',
  },
  '& :_where(img)': {
    maxWidth: '100%',
    marginBottom: 'var(--raikou-spacing-xs)',
  },
  '& :_where(p)': {
    marginTop: 0,
    marginBottom: 'var(--raikou-spacing-lg)',
  },
  '& :_where(mark)': {
    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.yellow[2],
      color: 'inherit',
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.yellow[5],
      color: theme.colors.black,
    }),
  },
  '& :_where(a)': {
    color: 'var(--raikou-color-anchor)',
    textDecoration: 'none',

    ...theme.applyStyles('hover', {
      textDecoration: 'underline',
    }),
  },

  '& :_where(hr)': {
    marginTop: 'var(--raikou-spacing-md)',
    marginBottom: 'var(--raikou-spacing-md)',
    border: 0,
    borderTop: '1px solid',

    ...theme.applyStyles('light', {
      borderColor: theme.colors.gray[3],
    }),
    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[3],
    }),
  },

  '& :_where(pre)': {
    marginTop: 'var(--raikou-spacing-md)',
    marginBottom: 'var(--raikou-spacing-md)',
    overflowX: 'auto',
    fontFamily: 'var(--raikou-font-family-monospace)',
    fontSize: 'var(--raikou-font-size-xs)',
    borderRadius: 'var(--raikou-radius-sm)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[0],
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[8],
    }),

    '& :_where(code)': {
      backgroundColor: 'transparent',
      padding: 0,
      borderRadius: 0,
      color: 'inherit',
      border: 0,
    },
  },

  '& :_where(kbd)': {
    '--kbd-padding': '3px 5px',
    '--kbd-fz': '12px',

    fontFamily: 'var(--raikou-font-family-monospace)',
    lineHeight: 'var(--raikou-line-height)',
    fontWeight: 700,
    padding: 'var(--kbd-padding)',
    fontSize: 'var(--kbd-fz)',
    borderRadius: 'var(--raikou-radius-sm)',
    border: '1px solid',
    borderBottomWidth: '3px',

    ...theme.applyStyles('light', {
      borderColor: theme.colors.gray[3],
      color: theme.colors.gray[7],
      backgroundColor: theme.colors.gray[0],
    }),
    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[3],
      color: theme.colors.dark[0],
      backgroundColor: theme.colors.dark[8],
    }),
  },

  '& :_where(code)': {
    lineHeight: 'var(--raikou-line-height)',
    padding: '1px 5px',
    borderRadius: 'var(--raikou-radius-sm)',
    fontFamily: 'var(--raikou-font-family-monospace)',
    fontSize: 'var(--raikou-font-size-xs)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[0],
      color: theme.colors.black,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[5],
      color: theme.colors.white,
    }),
  },

  '& :_where(ul, ol):not([data-type="taskList"])': {
    marginBottom: 'var(--raikou-spacing-md)',
    paddingInlineStart: '38px',

    '& :_where(li)': {
      marginBottom: 'var(--raikou-spacing-xs)',
    },
  },

  '& :_where(table)': {
    width: '100%',
    borderCollapse: 'collapse',
    captionSide: 'bottom',
    marginBottom: 'var(--raikou-spacing-md)',

    ...theme.applyStyles('light', {
      '--table-border-color': theme.colors.gray[3],
    }),
    ...theme.applyStyles('dark', {
      '--table-border-color': theme.colors.dark[4],
    }),

    '& :_where(caption)': {
      marginTop: 'var(--raikou-spacing-xs)',
      fontSize: 'var(--raikou-font-size-sm)',
      color: theme.colors.dimmed,
    },

    '& :_where(th)': {
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 'var(--raikou-font-size-sm)',
      padding: 'var(--raikou-spacing-xs) var(--raikou-spacing-sm)',
    },

    '& :_where(thead th)': {
      borderBottom: '1px solid',
      borderColor: 'var(--table-border-color)',
    },

    '& :_where(tfoot th)': {
      borderTop: '1px solid',
      borderColor: 'var(--table-border-color)',
    },

    '& :_where(td)': {
      padding: 'var(--raikou-spacing-xs) var(--raikou-spacing-sm)',
      borderBottom: '1px solid',
      borderColor: 'var(--table-border-color)',
      fontSize: 'var(--raikou-font-size-sm)',
    },

    '& :_where(tr:last-of-type td)': {
      borderBottom: 0,
    },
  },

  '& :_where(blockquote)': {
    fontSize: 'var(--raikou-font-size-lg)',
    lineHeight: 'var(--raikou-line-height)',
    margin: 'var(--raikou-spacing-md) 0',
    borderRadius: 'var(--raikou-radius-sm)',
    padding: 'var(--raikou-spacing-md) var(--raikou-spacing-lg)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[0],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[8],
    }),
  },
}));
