import { css } from '@stylefusion/react';

export const AngleSliderRootStyle = css(({ theme }) => ({
  width: 'var(--slider-size)',
  height: 'var(--slider-size)',
  position: 'relative',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',

  '&:focus-within': {
    outline: '2px solid var(--raikou-primary-color-filled)',
    outlineOffset: '2px',
  },

  '--slider-size': '60px',
  '--thumb-size': 'calc(var(--slider-size) / 5)',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[1],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[5],
  }),
}));

export const AngleSliderMarksStyle = css({
  position: 'absolute',
  inset: 1,
  borderRadius: 'var(--slider-size)',
  pointerEvents: 'none',
});

export const AngleSliderMarkStyle = css(({ theme }) => ({
  position: 'absolute',
  width: '2px',
  top: 0,
  bottom: 0,
  left: 'calc(50% - 1px)',
  transform: 'rotate(var(--angle))',

  '&::before': {
    content: "''",
    position: 'absolute',
    top: 'calc(var(--thumb-size) / 3)',
    left: '0.5px',
    width: '1px',
    height: 'calc(var(--thumb-size) / 1.5)',
    transform: 'translate(-50%, -50%)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[4],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[3],
    }),
  },

  '&[data-label]::after': {
    minWidth: '18px',
    textAlign: 'center',
    content: 'attr(data-label)',
    position: 'absolute',
    top: '-24px',
    left: '-7px',
    transform: 'rotate(calc(360deg - var(--angle)))',
    fontSize: 'var(--raikou-font-size-xs)',
  },
}));

export const AngleSliderThumbStyle = css(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 'calc(50% - 1.5px)',
  height: '100%',
  width: '3px',
  outline: 'none',
  pointerEvents: 'none',

  '&::before': {
    content: "''",
    position: 'absolute',
    right: 0,
    top: 0,
    height: 'min(var(--thumb-size), calc(var(--slider-size) / 2))',
    width: '3px',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[7],
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[1],
    }),
  },
}));

export const AngleSliderLabelStyle = css({
  fontSize: 'var(--raikou-font-size-xs)',
});
