import { css } from "@stylefusion/react";

export const ChipRootStyles = css({
  '--chip-size-xs': '23px',
  '--chip-size-sm': '28px',
  '--chip-size-md': '32px',
  '--chip-size-lg': '36px',
  '--chip-size-xl': '40px',
  
  '--chip-icon-size-xs': '10px',
  '--chip-icon-size-sm': '12px',
  '--chip-icon-size-md': '14px',
  '--chip-icon-size-lg': '16px',
  '--chip-icon-size-xl': '18px',

  '--chip-padding-xs': '16px',
  '--chip-padding-sm': '20px',
  '--chip-padding-md': '24px',
  '--chip-padding-lg': '28px',
  '--chip-padding-xl': '32px',

  '--chip-checked-padding-xs': '7.5px',
  '--chip-checked-padding-sm': '10px',
  '--chip-checked-padding-md': '11.7px',
  '--chip-checked-padding-lg': '13.5px',
  '--chip-checked-padding-xl': '15.7px',

  '--chip-spacing-xs': '10px',
  '--chip-spacing-sm': '12px',
  '--chip-spacing-md': '16px',
  '--chip-spacing-lg': '20px',
  '--chip-spacing-xl': '22px',

  '--chip-size': 'var(--chip-size-sm)',
  '--chip-icon-size': 'var(--chip-icon-size-sm)',
  '--chip-padding': 'var(--chip-padding-sm)',
  '--chip-spacing': 'var(--chip-spacing-sm)',
  '--chip-checked-padding': 'var(--chip-checked-padding-sm)',
  '--chip-bg': 'var(--raikou-primary-color-filled)',
  '--chip-hover': 'var(--raikou-primary-color-filled-hover)',
  '--chip-color': 'var(--raikou-color-white)',
  '--chip-bd': '1px solid transparent',
})

export const ChipLabelStyles = css(({ theme }: any) => ({
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  borderRadius: '1000rem',
  height: 'var(--chip-size)',
  fontSize: 'var(--chip-fz, var(--raikou-font-size-sm))',
  lineHeight: 'calc(var(--chip-size) - rem(2px))',
  paddingInline: 'var(--chip-padding)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  border: '1px solid transparent',
  color: 'var(--raikou-color-text)',

  '&:_where([data-checked])': {
    padding: 'var(--chip-checked-padding)',
  },

  '&:_where([data-disabled])': {
    cursor: 'not-allowed',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[2],
      color: theme.colors.gray[5],
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[6],
      color: theme.colors.dark[3],
    }),
  },

  [`${ChipRootStyles} [data-variant="outline"]:not([data-disabled]) &`]: {
    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.gray[3]}`,
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[6],
      border: `1px solid ${theme.colors.dark[4]}`,
    }),

    ...theme.applyMixin('hover', {
      "&:hover": {
        ...theme.applyStyles('light', {
          backgroundColor: theme.colors.gray[0],
        }),

        ...theme.applyStyles('dark', {
          backgroundColor: theme.colors.dark[5],
        }),
      }
    }),

    "&:_where([data-checked])": {
      "--chip-icon-color": "var(--chip-color)",
      border: "var(--chip-bd)",

      ...theme.applyMixin('hover', {
        "&:hover": {
          backgroundColor: "var(--chip-hover)",
        }
      })
    }
  },

  [`.${ChipRootStyles}[data-variant="filled"]:not([data-disabled]) &, .${ChipRootStyles}[data-variant="light"]:not([data-disabled]) &`]: {
    border: '1px solid transparent',
    color: 'var(--raikou-color-text)',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[1],
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[5],
    }),

    ...theme.applyMixin('hover', {
      "&:hover": {
        ...theme.applyStyles('light', {
          backgroundColor: theme.colors.gray[2],
        }),
        ...theme.applyStyles('dark', {
          backgroundColor: theme.colors.dark[4],
        }),
      }
    }),

    '&:_where([data-checked])': {
      '--chip-icon-color': 'var(--chip-color)',
      color: 'var(--chip-color)',
      backgroundColor: 'var(--chip-bg)',

      ...theme.applyMixin('hover', {
        "&:hover": {
          backgroundColor: 'var(--chip-hover)',
        }
      }),
    },
  }
}));

export const ChipIconWrapperStyles = css({
  width: 'calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))',
  maxWidth: 'calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))',
  height: 'var(--chip-icon-size)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
});

export const ChipCheckIconStyles = css({
  width: 'var(--chip-icon-size)',
  height: 'var(--chip-icon-size)',
  display: 'block',
  color: 'var(--chip-icon-color, inherit)',
});

export const ChipInputStyles = css({
  width: 0,
  height: 0,
  padding: 0,
  opacity: 0,
  margin: 0,

  [`&:focus-visible + .${ChipLabelStyles}`]: {
    outline: "2px solid var(--raikou-primary-color-filled)",
    outlineOffset: "2px",
  }
})
