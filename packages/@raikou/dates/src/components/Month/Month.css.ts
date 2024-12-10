import { css } from '@stylefusion/react';

export const MonthStyle = css({
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
});

export const MonthCellStyle = css({
  padding: 0,

  ':_where([data-with-spacing])': {
    padding: '0.5px',
  },
});

export const MonthWeekNumberStyle = css({
  '--wn-size-xs': '30px',
  '--wn-size-sm': '36px',
  '--wn-size-md': '42px',
  '--wn-size-lg': '48px',
  '--wn-size-xl': '54px',

  color: 'var(--mantine-color-dimmed)',
  fontWeight: 'normal',
  fontSize: 'calc(var(--wn-size, var(--wn-size-sm)) / 2.8)',
  textAlign: 'center',
  width: 'var(--wn-size, var(--wn-size-sm))',
});
