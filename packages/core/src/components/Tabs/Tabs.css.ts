import { css } from "@stylefusion/react";

export const TabsRootStyle = css(({ theme }: any) => ({
  display: 'var(--tabs-display)',
  flexDirection: 'var(--tabs-flex-direction)',

  '--tab-justify': 'flex-start',
  '--tabs-list-direction': 'row',
  '--tabs-panel-grow': 'unset',
  '--tabs-display': 'block',
  '--tabs-flex-direction': 'row',
  '--tabs-list-border-width': 0,
  '--tabs-list-border-size': '0 0 var(--tabs-list-border-width) 0',
  '--tabs-list-gap': 'unset',

  '--tabs-list-line-bottom': 0,
  '--tabs-list-line-top': 'unset',
  '--tabs-list-line-start': 0,
  '--tabs-list-line-end': 0,

  '--tab-radius': 'var(--tabs-radius) var(--tabs-radius) 0 0',
  '--tab-border-width': '0 0 var(--tabs-list-border-width) 0',

  '&[data-inverted]': {
    '--tabs-list-line-bottom': 'unset',
    '--tabs-list-line-top': 0,
    '--tab-radius': '0 0 var(--tabs-radius) var(--tabs-radius)',
    '--tab-border-width': 'var(--tabs-list-border-width) 0 0 0',

    [`& .${TabsListStyle}:before`]: {
      top: 0,
      bottom: "unset",
    },
  },

  '&[data-orientation="vertical"]': {
    '--tabs-list-line-start': 'unset',
    '--tabs-list-line-end': 0,
    '--tabs-list-line-top': 0,
    '--tabs-list-line-bottom': 0,
    '--tabs-list-border-size': '0 var(--tabs-list-border-width) 0 0',
    '--tab-border-width': '0 var(--tabs-list-border-width) 0 0',
    '--tab-radius': 'var(--tabs-radius) 0 0 var(--tabs-radius)',
    '--tabs-list-direction': 'column',
    '--tabs-panel-grow': 1,
    '--tabs-display': 'flex',

    ...theme.applyMixin("rtl", {
      '--tabs-list-border-size': '0 0 0 var(--tabs-list-border-width)',
      '--tab-border-width': '0 0 0 var(--tabs-list-border-width)',
      '--tab-radius': '0 var(--tabs-radius) var(--tabs-radius) 0',
    }),

    '&[data-placement="right"]': {
      '--tabs-flex-direction': 'row-reverse',
      '--tabs-list-line-start': 0,
      '--tabs-list-line-end': 'unset',
      '--tabs-list-border-size': '0 0 0 var(--tabs-list-border-width)',
      '--tab-border-width': '0 0 0 var(--tabs-list-border-width)',
      '--tab-radius': '0 var(--tabs-radius) var(--tabs-radius) 0',

      ...theme.applyMixin("rtl", {
        '--tabs-list-border-size': '0 var(--tabs-list-border-width) 0 0',
        '--tab-border-width': '0 var(--tabs-list-border-width) 0 0',
        '--tab-radius': 'var(--tabs-radius) 0 0 var(--tabs-radius)',
      }),
    },
  },

  ...theme.applyStyles("light", {
    '--tab-border-color': theme.colors.gray[3],
  }),

  ...theme.applyStyles("dark", {
    '--tab-border-color': theme.colors.dark[4],
  }),

  '&[data-orientation="horizontal"]': {
    '--tab-justify': 'center',
  },

  '&[data-variant="default"]': {
    '--tabs-list-border-width': '2px',

    ...theme.applyStyles("light", {
      '--tab-hover-color': theme.colors.gray[0],
    }),

    ...theme.applyStyles("dark", {
      '--tab-hover-color': theme.colors.dark[6],
    }),
  },
  
  '&[data-variant="outline"]': {
    '--tabs-list-border-width': '1px',
  },

  '&[data-variant="pills"]': {
    '--tabs-list-gap': "calc(var(--raikou-spacing-sm) / 2)",

    ...theme.applyStyles("light", {
      '--tab-hover-color': theme.colors.gray[0],
    }),

    ...theme.applyStyles("dark", {
      '--tab-hover-color': theme.colors.dark[6],
    }),
  },
}));

export const TabsListStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'var(--tabs-justify, flex-start)',
  flexDirection: 'var(--tabs-list-direction)',
  gap: 'var(--tabs-list-gap)',

  '--tab-grow': 'unset',

  '&[data-grow]': {
    '--tab-grow': '1',
  },

  "&[data-variant='default']": {
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      borderColor: 'var(--tab-border-color)',
      borderWidth: 'var(--tabs-list-border-size)',
      borderStyle: 'solid',
      bottom: 'var(--tabs-list-line-bottom)',
      insetInlineStart: 'var(--tabs-list-line-start)',
      insetInlineEnd: 'var(--tabs-list-line-end)',
      top: 'var(--tabs-list-line-top)',
    },
  },
  "&[data-variant='outline']": {
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      borderColor: 'var(--tab-border-color)',
      borderWidth: 'var(--tabs-list-border-size)',
      borderStyle: 'solid',
      bottom: 'var(--tabs-list-line-bottom)',
      insetInlineStart: 'var(--tabs-list-line-start)',
      insetInlineEnd: 'var(--tabs-list-line-end)',
      top: 'var(--tabs-list-line-top)',
    },
  },
});

export const TabsPanelStyle = css({
  flexGrow: 'var(--tabs-panel-grow)',
});

export const TabsTabStyle = css(({ theme }: any) => ({
  position: 'relative',
  padding: 'var(--raikou-spacing-xs) var(--raikou-spacing-md)',
  fontSize: 'var(--raikou-font-size-sm)',
  whiteSpace: 'nowrap',
  zIndex: 0,
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
  userSelect: 'none',
  flexGrow: 'var(--tab-grow)',
  justifyContent: 'var(--tab-justify)',

  '&:disabled, &[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    zIndex: 1,
  },

  '[data-variant="default"] &': {
    borderRadius: 'var(--tab-radius)',
    borderWidth: 'var(--tab-border-width)',
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: 'var(--tab-bg)',

    '--tab-bg': 'transparent',

    '&:_where([data-active])': {
      borderColor: 'var(--tabs-color)',
    },

    ...theme.applyMixin("hover", {
      '&:hover': {
        '--tab-bg': 'var(--tab-hover-color)',
      },

      '&:hover:_where(:not([data-active]))': {
        borderColor: 'var(--tab-border-color)',
      },
    }),

    '&:disabled, &[data-disabled]': {
      ...theme.applyMixin("hover", {
        '&:hover': {
          '--tab-bg': 'transparent',
        },
      }),
    },
  },

  '[data-variant="pills"] &': {
    borderRadius: 'var(--tabs-radius)',
    backgroundColor: 'var(--tab-bg)',
    color: 'var(--tab-color)',

    '--tab-bg': 'transparent',
    '--tab-color': 'inherit',

    '&:not([data-disabled])': {
      ...theme.applyMixin("hover", {
        '&:hover': {
          '--tab-bg': 'var(--tab-hover-color)',
        },
      }),
    },

    '&[data-active]': {
      '--tab-bg': 'var(--tabs-color)',
      '--tab-color': 'var(--tabs-text-color, var(--raikou-color-white))',

      ...theme.applyMixin("hover", {
        '&:hover': {  
          '--tab-bg': 'var(--tabs-color)',
        },
      }),
    },
  },

  '&[data-variant="outline"]': {
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
    borderRight: '1px solid transparent',
    borderLeft: '1px solid transparent',
    borderTopColor: 'var(--tab-border-top-color)',
    borderBottomColor: 'var(--tab-border-bottom-color)',
    borderRadius: 'var(--tab-radius)',
    position: 'relative',

    '--tab-border-bottom-color': 'transparent',
    '--tab-border-top-color': 'transparent',
    '--tab-border-inline-end-color': 'transparent',
    '--tab-border-inline-start-color': 'transparent',

    '&:_where([data-active])': {
      '&:before': {
        content: "''",
        position: 'absolute',
        backgroundColor: 'var(--tab-border-color)',
        bottom: 'var(--tab-before-bottom, rem(-1px))',
        left: 'var(--tab-before-left, rem(-1px))',
        right: 'var(--tab-before-right, auto)',
        top: 'var(--tab-before-top, auto)',
        width: '1px',
        height: '1px',
      },

      '&:after': {
        content: "''",
        position: 'absolute',
        backgroundColor: 'var(--tab-border-color)',
        bottom: 'var(--tab-after-bottom, rem(-1px))',
        right: 'var(--tab-after-right, rem(-1px))',
        left: 'var(--tab-after-left, auto)',
        top: 'var(--tab-after-top, auto)',
        width: '1px',
        height: '1px',
      },

      borderTopColor: 'var(--tab-border-color)',
      borderBottomColor: 'var(--tab-border-color)',
      borderInlineStartColor: 'var(--tab-border-color)',
      borderInlineEndColor: 'var(--tab-border-color)',

      '--tab-border-color': 'var(--tab-border-color)',
      '--tab-border-inline-start-color': 'var(--tab-border-color)',
      '--tab-border-inline-end-color': 'var(--tab-border-color)',
      '--tab-border-bottom-color': 'var(--tab-border-color)',

      '&[data-inverted]': {
        '--tab-border-bottom-color': 'var(--tab-border-color)',
        '--tab-border-top-color': 'var(--tab-border-color)',

        '--tab-before-bottom': 'auto',
        '--tab-before-top': '-1px',
        '--tab-after-bottom': 'auto',
        '--tab-after-top': '-1px',
      },
      
      "&[data-orientation='vertical']": {
        "&[data-placement='left']": {
          '--tab-border-inline-end-color': 'var(--tab-border-color)',
          '--tab-border-inline-start-color': 'var(--tab-border-color)',
          '--tab-border-bottom-color': 'var(--tab-border-color)',

          '--tab-before-right': '-1px',
          '--tab-before-left': 'auto',
          '--tab-before-bottom': 'auto',
          '--tab-before-top': '-1px',
          '--tab-after-left': 'auto',
          '--tab-after-right': '-1px',

          ...theme.applyMixin("rtl", {
            '--tab-before-right': 'auto',
            '--tab-before-left': '-1px',
            '--tab-after-right': '-1px',
            '--tab-after-left': 'auto',
          }),
        },

        "&[data-placement='right']": {
          '--tab-border-inline-start-color': 'var(--tab-border-color)',
          '--tab-border-inline-end-color': 'var(--tab-border-color)',
          '--tab-border-bottom-color': 'var(--tab-border-color)',

          '--tab-before-left': '-1px',
          '--tab-before-right': 'auto',
          '--tab-before-bottom': 'auto',
          '--tab-before-top': '-1px',
          '--tab-after-left': 'auto',
          '--tab-after-right': '-1px',

          ...theme.applyMixin("rtl", {
            '--tab-before-right': 'auto',
            '--tab-before-left': '-1px',
            '--tab-after-right': '-1px',
            '--tab-after-left': 'auto',
          }),
        },
      },
    },
  },
}));

export const TabsTabSectionStyle = css(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'var(--tab-section-margin-left, 0)',
  marginRight: 'var(--tab-section-margin-right, 0)',

  '&[data-position="left"]': {
    '&:not(:only-child)': {
      '--tab-section-margin-right': 'var(--raikou-spacing-xs)',

      ...theme.applyMixin("rtl", {
        '--tab-section-margin-right': '0rem',
        '--tab-section-margin-left': 'var(--raikou-spacing-xs)',
      }),
    },
  },

  '&[data-position="right"]': {
    '&:not(:only-child)': {
      '--tab-section-margin-left': 'var(--raikou-spacing-xs)',

      ...theme.applyMixin("rtl", {
        '--tab-section-margin-left': '0rem',
        '--tab-section-margin-right': 'var(--raikou-spacing-xs)',
      }),
    },
  },
}));


