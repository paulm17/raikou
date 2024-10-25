import { css } from "@stylefusion/react";

export const TimelineRootStyle = css({
  '--offset': 'calc(var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2)',
  '--tl-bullet-size': '20px',
  '--tl-line-width': '4px',
  '--tl-radius': '1000px',
  '--tl-color': 'var(--raikou-primary-color-filled)',

  '&:_where([data-align="left"])': {
    paddingInlineStart: 'var(--offset)',
  },
  '&:_where([data-align="right"])': {
    paddingInlineEnd: 'var(--offset)',
  },
});

export const TimelineItemTitleStyle = css({
  fontWeight: 500,
  lineHeight: 1,
  marginBottom: 'calc(var(--raikou-spacing-xs) / 2)',
});

export const TimelineItemStyle = css(({theme}: any) => ({
  '--item-border': 'var(--tl-line-width) var(--tli-border-style, solid) var(--item-border-color)',
  
  position: 'relative',
  color: 'var(--raikou-color-text)',

  '&:before': {
    content: "''",
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 'var(--timeline-line-left, 0)',
    right: 'var(--timeline-line-right, 0)',
    bottom: 'calc(var(--raikou-spacing-xl) * -1)',
    borderInlineStart: 'var(--item-border)',
    display: 'var(--timeline-line-display, none)',

    [`.${TimelineRootStyle}[data-align="left"] &`]: {
      '--timeline-line-left': 'calc(var(--tl-line-width) * -1)',
      '--timeline-line-right': 'auto',

      ...theme.applyMixin('rtl', {
        '--timeline-line-left': 'auto',
        '--timeline-line-right': 'calc(var(--tl-line-width) * -1)',
      })
    },

    [`.${TimelineRootStyle}[data-align="right"] &`]: {
      '--timeline-line-left': 'auto',
      '--timeline-line-right': 'calc(var(--tl-line-width) * -1)',

      ...theme.applyMixin('rtl', {
        '--timeline-line-left': 'calc(var(--tl-line-width) * -1)',
        '--timeline-line-right': 'auto',
      })
    }
  },

  [`.${TimelineRootStyle}:_where([data-align="left"]) &`]: {
    paddingInlineStart: 'var(--offset)',
    textAlign: 'left',
  },

  [`.${TimelineRootStyle}:_where([data-align="right"]) &`]: {
    paddingInlineEnd: 'var(--offset)',
    textAlign: 'right',
  },
  
  ...theme.applyStyles('light', {
    '--item-border-color': theme.colors.gray[3],
  }),

  ...theme.applyStyles('dark', {
    '--item-border-color': theme.colors.dark[4],
  }),

  '&:_where([data-line-active])': {
    '&:before': {
      borderColor: 'var(--tli-color, var(--tl-color))',
    }
  },
  
  '&:_where(:not(:last-of-type))': {
    '--timeline-line-display': 'block',
  },

  '&:_where(:not(:first-of-type))': {
    marginTop: 'var(--raikou-spacing-xl)',
  }  
}))

export const TimelineItemBulletStyle = css(({theme}: any) => ({
  width: 'var(--tl-bullet-size)',
  height: 'var(--tl-bullet-size)',
  borderRadius: 'var(--tli-radius, var(--tl-radius))',
  border: 'var(--tl-line-width) solid',
  backgroundColor: 'var(--raikou-color-body)',
  position: 'absolute',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--raikou-color-text)',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[3],
  }),
  
  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),

  [`.${TimelineRootStyle}:_where([data-align="left"]) &`]: {
    left: 'calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)',
    right: 'auto',

    ...theme.applyMixin('where-rtl', {
      left: 'auto',
      right: 'calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)',
    }),
  },

  [`.${TimelineRootStyle}:_where([data-align="right"]) &`]: {
    left: 'auto',
    right: 'calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)',

    ...theme.applyMixin('where-rtl', {
      left: 'calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)',
      right: 'auto',
    }),
  },

  '&:_where([data-with-child])': {
    borderWidth: 'var(--tl-line-width)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[3],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[4],
    }),
  },

  '&:_where([data-active])': {
    borderColor: 'var(--tli-color, var(--tl-color))',
    backgroundColor: 'var(--raikou-color-white)',
    color: 'var(--tl-icon-color, var(--raikou-color-white))',

    '&:_where([data-with-child])': {
      backgroundColor: 'var(--tli-color, var(--tl-color))',
      color: 'var(--tli-color, var(--raikou-color-white))',
    }
  }
}))

export const TimelineItemBodyStyle = css(({theme}: any) => ({
  [`.${TimelineRootStyle}:_where([data-align="left"]) &`]: {
    paddingInlineStart: 'var(--offset)',
    textAlign: 'left',

    ...theme.applyMixin('where-rtl', {
      textAlign: 'right',
    }),
  },

  [`.${TimelineRootStyle}:_where([data-align="right"]) &`]: {
    paddingInlineEnd: 'var(--offset)',
    textAlign: 'right',

    ...theme.applyMixin('where-rtl', {
      textAlign: 'left',
    }),
  },
}));
