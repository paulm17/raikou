import { css } from '@stylefusion/react';

export const TableRootStyle = css(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  lineHeight: 'var(--raikou-line-height)',
  fontSize: 'var(--raikou-font-size-sm)',
  tableLayout: 'var(--table-layout, auto)',
  captionSide: 'var(--table-caption-side, bottom)',
  border: 'none',

  ...theme.applyStyles('light', {
    '--table-hover-color': theme.colors.gray[1],
    '--table-striped-color': theme.colors.gray[0],
    '--table-border-color': theme.colors.gray[3],
  }),

  ...theme.applyStyles('dark', {
    '--table-hover-color': theme.colors.dark[5],
    '--table-striped-color': theme.colors.dark[6],
    '--table-border-color': theme.colors.dark[4],
  }),

  '&:_where([data-with-table-border])': {
    border: 'rem(1px) solid var(--table-border-color)',
  },
}));

const tdth = {
  padding:
    'var(--table-vertical-spacing) var(--table-horizontal-spacing, var(--raikou-spacing-xs))',

  '&:_where([data-with-column-border]:not(:last-child))': {
    borderInlineEnd: 'rem(1px) solid var(--table-border-color)',
  },
};

export const TableThStyle = css(({ theme }) => ({
  textAlign: 'left',

  ...theme.applyMixin('where-rtl', {
    textAlign: 'right',
  }),

  ...tdth,
}));

export const TableTrStyle = css(({ theme }) => ({
  borderBottom: 'none',
  backgroundColor: 'transparent',

  ...theme.applyMixin('hover', {
    '&:_where([data-hover]):hover': {
      backgroundColor: 'var(--tr-hover-bg)',
    },
  }),

  '&:_where([data-with-row-border])': {
    borderBottom: 'rem(1px) solid var(--table-border-color)',
  },
}));

export const TableTdStyle = css(tdth);

export const TableTbodyStyle = css({
  '& :_where(tr)': {
    '&:_where([data-with-row-border]:last-of-type)': {
      borderBottom: 'none',
    },

    "&:_where([data-striped='odd']:nth-of-type(odd))": {
      backgroundColor: 'var(--table-striped-color)',
    },

    "&:_where([data-striped='even']:nth-of-type(even))": {
      backgroundColor: 'var(--table-striped-color)',
    },

    '&[data-hover]': {
      '--tr-hover-bg': 'var(--table-highlight-on-hover-color, var(--table-hover-color))',
    },
  },
});

export const TableTheadStyle = css({
  top: 'var(--table-sticky-header-offset, 0)',
  zIndex: 3,

  '&:_where([data-sticky])': {
    position: 'sticky',
    backgroundColor: 'var(--raikou-color-body)',
  },
});

export const TableCaptionStyle = css({
  color: 'var(--raikou-color-dimmed)',

  "&:_where([data-side='top'])": {
    marginBottom: 'var(--raikou-spacing-xs)',
  },

  "&:_where([data-side='bottom'])": {
    marginTop: 'var(--raikou-spacing-xs)',
  },
});

export const TableScrollContainerStyle = css({
  overflowX: 'var(--table-overflow)',
});

export const TableScrollContainerInnerStyle = css({
  minWidth: 'var(--table-min-width)',
});
