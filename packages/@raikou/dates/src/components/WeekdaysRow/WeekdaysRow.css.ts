import { css } from '@stylefusion/react';

export const WeekdayStyle = css({
  color: 'var(--raikou-color-dimmed)',
  fontWeight: 'normal',
  fontSize: 'var(--wr-fz, var(--raikou-font-size-sm))',
  textTransform: 'capitalize',
  paddingBottom: 'calc(var(--wr-spacing, var(--raikou-spacing-sm)) / 2)',
});
