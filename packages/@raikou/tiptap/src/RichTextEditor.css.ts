import { css } from '@stylefusion/react';

export const RichTextEditorRootStyle = css(({ theme }) => ({
  position: 'relative',
  border: '1px solid',
  borderRadius: 'var(--raikou-radius-default)',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[4],
  }),
  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),
}));

export const RichTextEditorTypographyStylesProviderStyle = css({
  padding: 0,
  margin: 0,

  '& li > p': {
    margin: 0,
    display: 'inline-block',
  },

  '& ul li, & ol li': {
    marginTop: '2px',
  },

  '& p': {
    marginTop: '7px',
  },

  '& h1, & h2, & h3, & h4, & h5, & h6, & p': {
    marginTop: '0',
  },
});

export const RichTextEditorContentStyle = css(({ theme }) => ({
  backgroundColor: 'var(--raikou-color-body)',
  borderRadius: 'var(--raikou-radius-default)',

  '& .ProseMirror': {
    outline: '0',
    padding: 'var(--raikou-spacing-md)',
  },

  '& .ProseMirror > *:last-child': {
    marginBottom: '0',
  },

  '& .ProseMirror p.is-editor-empty:first-of-type::before': {
    content: 'attr(data-placeholder)',
    pointerEvents: 'none',
    userSelect: 'none',
    float: 'left',
    height: '0',
    color: 'var(--raikou-color-placeholder)',
  },

  '& pre': {
    fontFamily: 'var(--raikou-font-family-monospace)',
    borderRadius: 'var(--raikou-radius-default)',
    padding: 'var(--raikou-spacing-sm) var(--raikou-spacing-md)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[0],
      color: theme.colors.gray[9],
      '--code-color-comment': theme.colors.gray[5],
      '--code-color-var': theme.colors.red[7],
      '--code-color-number': theme.colors.blue[7],
      '--code-color-title': theme.colors.pink[7],
      '--code-color-keyword': theme.colors.violet[7],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[8],
      color: theme.colors.dark[1],
      '--code-color-comment': theme.colors.dark[2],
      '--code-color-var': theme.colors.red[5],
      '--code-color-number': theme.colors.cyan[5],
      '--code-color-title': theme.colors.yellow[5],
      '--code-color-keyword': theme.colors.violet[3],
    }),

    '& code': {
      background: 'none !important',
      color: 'inherit',
      fontSize: 'inherit',
      padding: '0',
    },

    '& .hljs-comment, & .hljs-quote': {
      color: 'var(--code-color-comment)',
    },

    [`
      & .hljs-variable,
      & .hljs-template-variable,
      & .hljs-attribute,
      & .hljs-tag,
      & .hljs-regexp,
      & .hljs-link,
      & .hljs-name,
      & .hljs-selector-id,
      & .hljs-selector-class
    `]: {
      color: 'var(--code-color-var)',
    },

    [`
      & .hljs-number,
      & .hljs-meta,
      & .hljs-built_in,
      & .hljs-builtin-name,
      & .hljs-literal,
      & .hljs-type,
      & .hljs-params
    `]: {
      color: 'var(--code-color-number)',
    },

    [`
      & .hljs-string,
      & .hljs-symbol,
      & .hljs-bullet
    `]: {
      color: 'var(--code-color-var)',
    },

    '& .hljs-title, & .hljs-section': {
      color: 'var(--code-color-title)',
    },

    '& .hljs-keyword, & .hljs-selector-tag': {
      color: 'var(--code-color-keyword)',
    },

    '& .hljs-emphasis': {
      fontStyle: 'italic',
    },

    '& .hljs-strong': {
      fontWeight: '700',
    },
  },
}));

export const RichTextEditorLinkEditorDropdownStyle = css({
  backgroundColor: 'var(--raikou-color-body)',
});

export const RichTextEditorControlStyle = css(({ theme }) => ({
  '&&': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'var(--raikou-radius-default)',
    cursor: 'default',

    "&:_where([data-variant='default'])": {
      border: '1px solid',
      minWidth: '26px',
      height: '26px',
    },

    "&:_where([data-variant='subtle'])": {
      '--control-icon-size': '20px',
      minWidth: '32px',
      height: '32px',
    },

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.gray[4],
      color: theme.colors.gray[4],
    }),

    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[4],
      color: theme.colors.dark[1],

      "&:_where([data-variant='default'])": {
        backgroundColor: theme.colors.dark[6],
      },

      "&:_where([data-variant='subtle'])": {
        backgroundColor: theme.colors.dark[7],
      },
    }),

    '&:_where([data-disabled])': {
      cursor: 'not-allowed',

      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[1],
        color: theme.colors.gray[5],
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[5],
        color: theme.colors.dark[3],
      }),
    },

    '&:_where([data-interactive]):not([data-disabled])': {
      cursor: 'pointer',

      ...theme.applyMixin('hover', {
        color: 'var(--mantine-color-bright)',

        '&:hover': {
          ...theme.applyStyles('light', {
            backgroundColor: theme.colors.gray[0],
          }),

          ...theme.applyStyles('dark', {
            backgroundColor: theme.colors.dark[5],
          }),
        },
      }),
    },

    '&:_where([data-active])': {
      backgroundColor: 'var(--raikou-primary-color-light)',
      color: 'var(--raikou-primary-color-filled)',

      ...theme.applyMixin('hover', {
        '&:hover': {
          backgroundColor: 'var(--raikou-primary-color-light-hover)',
        },
      }),
    },
  },
}));

export const RichTextEditorControlIconStyle = css({
  width: 'var(--control-icon-size, 16px)',
  height: 'var(--control-icon-size, 16px)',
});

export const RichTextEditorControlsGroupStyle = css({
  display: 'flex',
  backgroundColor: 'var(--raikou-color-body)',

  "&:_where([data-variant='default'])": {
    borderRadius: 0,

    '&:_where(:not(:last-of-type))': {
      borderInlineEndWidth: 0,
    },

    '&:_where(:last-of-type)': {
      borderStartEndRadius: 'var(--raikou-radius-default)',
      borderEndEndRadius: 'var(--raikou-radius-default)',
    },

    '&:_where(&:first-of-type)': {
      borderStartStartRadius: 'var(--raikou-radius-default)',
      borderEndStartRadius: 'var(--raikou-radius-default)',
    },
  },
});

export const RichTextEditorLinkEditorStyle = css({
  display: 'flex',
});

export const RichTextEditorLinkEditorInputStyle = css({
  borderStartEndRadius: 0,
  borderEndEndRadius: 0,
  borderInlineEnd: 0,
});

export const RichTextEditorLinkEditorExternalControlStyle = css(({ theme }) => ({
  border: '1px solid',
  color: 'var(--raikou-color-text)',
  height: '24px',
  width: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'var(--raikou-radius-default)',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[7],
    borderColor: theme.colors.dark[4],
  }),

  '&:_where([data-active])': {
    backgroundColor: 'var(--raikou-primary-color-light)',
    color: 'var(--raikou-primary-color-filled)',

    ...theme.applyMixin('hover', {
      '&:hover': {
        backgroundColor: 'var(--raikou-primary-color-light-hover)',
      },
    }),
  },
}));

export const RichTextEditorLinkEditorSaveStyle = css({
  borderStartStartRadius: 0,
  borderEndStartRadius: 0,
});

export const RichTextEditorToolbarStyle = css(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 'var(--raikou-spacing-sm)',
  top: 'var(--rte-sticky-offset, 0px)',
  backgroundColor: 'var(--raikou-color-body)',
  zIndex: 1,
  borderStartEndRadius: 'var(--raikou-radius-default)',
  borderStartStartRadius: 'var(--raikou-radius-default)',
  borderBottom: '1px solid',

  "&:_where([data-variant='default'])": {
    padding: 'var(--raikou-spacing-xs) var(--raikou-spacing-md)',
  },

  "&:_where([data-variant='subtle'])": {
    padding: '4px',
    rowGap: 0,
  },

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[4],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),

  '&:_where([data-sticky])': {
    position: 'sticky',
  },
}));

export const RichTextEditorTaskListStyle = css(({ theme }) => ({
  listStyleType: 'none',
  padding: 0,
  paddingInlineStart: 0,

  '& :_where(li)': {
    margin: 0,
    padding: 0,
    display: 'flex',
  },

  '& :_where(ul)': {
    marginTop: '5px',
  },

  '& p': {
    margin: 0,
    padding: 0,
  },

  '& :_where(label)': {
    display: 'inline-block',
  },

  '& :_where(input)': {
    cursor: 'pointer',
    appearance: 'none',
    width: '18px',
    height: '18px',
    border: '1px solid',
    borderRadius: 'var(--raikou-radius-default)',
    verticalAlign: 'middle',
    position: 'relative',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.gray[4],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[6],
      borderColor: theme.colors.dark[4],
    }),

    '&:checked': {
      backgroundColor: 'var(--raikou-primary-color-filled)',
      borderColor: 'var(--raikou-primary-color-filled)',

      '&:before': {
        position: 'absolute',
        content: "''",
        inset: 0,
        backgroundImage:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxMC4yOTMgMy43MDdsMyAzYS45OTcuOTk3IDAgMDAxLjQxNCAwbDUtNUExIDEgMCAxMDguMjkzLjI5M0w0IDQuNTg2eiIvPjwvc3ZnPg==")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '10px',
        backgroundPosition: 'center',
      },
    },
  },

  '& :_where(li > label)': {
    marginInlineEnd: 'var(--raikou-spacing-sm)',
  },
}));
