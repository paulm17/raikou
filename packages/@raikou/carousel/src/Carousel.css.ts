import { css } from '@stylefusion/react';

export const CarouselRootStyle = css({
  '--carousel-height': 'auto',
  position: 'relative',
});

export const CarouselViewportStyle = css({
  height: 'var(--carousel-height)',
  overflow: 'hidden',
});

export const CarouselContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  height: 'var(--carousel-height)',

  ':_where([data-include-gap-in-size]) &': {
    '&:_where([data-orientation="vertical"])': {
      marginBottom: 'calc(var(--carousel-slide-gap) * -1)',
    },
    '&:_where([data-orientation="horizontal"])': {
      marginInlineEnd: 'calc(var(--carousel-slide-gap) * -1)',
    },
  },

  '&:_where([data-orientation="vertical"])': {
    flexDirection: 'column',
  },
});

export const CarouselControlsStyle = css({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 1,
  pointerEvents: 'none',

  '&:_where([data-orientation="vertical"])': {
    insetInlineStart: 'calc(50% - var(--carousel-control-size) / 2)',
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    padding: 'var(--carousel-controls-offset) 0',
  },

  '&:_where([data-orientation="horizontal"])': {
    insetInlineStart: 0,
    insetInlineEnd: 0,
    top: 'calc(50% - var(--carousel-control-size) / 2)',
    flexDirection: 'row',
    padding: '0 var(--carousel-controls-offset)',
  },
});

export const CarouselControlStyle = css(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 'var(--carousel-control-size)',
  minHeight: 'var(--carousel-control-size)',
  borderRadius: 'var(--carousel-control-size)',
  pointerEvents: 'all',
  backgroundColor: 'var(--raikou-color-white)',
  color: 'var(--raikou-color-black)',
  boxShadow: 'var(--carousel-control-shadow)',
  border: '1px solid var(--carousel-control-border-color)',
  transition: 'opacity 100ms ease',

  ...theme.applyStyles('light', {
    opacity: 0.85,
  }),

  ...theme.applyStyles('dark', {
    opacity: 0.65,
  }),

  ...theme.applyMixin('hover', {
    '&:hover': {
      opacity: 1,
    },
  }),
}));

export const CarouselIndicatorsStyle = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  pointerEvents: 'none',

  '&:_where([data-orientation="vertical"])': {
    bottom: 0,
    top: 0,
    insetInlineEnd: 'var(--raikou-spacing-md)',
    flexDirection: 'column',
  },

  '&:_where([data-orientation="horizontal"])': {
    bottom: 'var(--raikou-spacing-md)',
    insetInlineStart: 0,
    insetInlineEnd: 0,
    flexDirection: 'row',
  },
});

export const CarouselIndicatorStyle = css(({ theme }) => ({
  pointerEvents: 'all',
  borderRadius: 'var(--raikou-radius-xl)',
  boxShadow: 'var(--raikou-shadow-sm)',
  opacity: 0.6,
  backgroundColor: 'var(--raikou-color-gray-2)',

  ...theme.applyMixin('hover', {
    '&:hover': {
      opacity: 1,
    },
  }),

  '&:_where([data-active])': {
    opacity: 1,
  },

  '&:_where([data-orientation="vertical"])': {
    width: '5px',
    height: '25px',
  },

  '&:_where([data-orientation="horizontal"])': {
    width: '25px',
    height: '5px',
  },
}));

export const CarouselSlideStyle = css({
  position: 'relative',
  flex: '0 0 var(--carousel-slide-size, 100%)',

  [`.${CarouselRootStyle}:_where([data-include-gap-in-size]) &`]: {
    '&:_where([data-orientation="vertical"])': {
      paddingBottom: 'var(--carousel-slide-gap)',
    },
    '&:_where([data-orientation="horizontal"])': {
      paddingInlineEnd: 'var(--carousel-slide-gap)',
    },
  },

  [`.${CarouselRootStyle}:_where(:not([data-include-gap-in-size])) &`]: {
    '&:_where([data-orientation="vertical"])': {
      marginBottom: 'var(--carousel-slide-gap)',
    },
    '&:_where([data-orientation="horizontal"])': {
      marginInlineEnd: 'var(--carousel-slide-gap)',
    },
  },
});
