import { patchConsoleError, render, screen, tests } from '@raikou-tests/core';
import { datesTests } from '@raikou-tests/dates';
import { WeekdaysRow, WeekdaysRowProps, WeekdaysRowStylesNames } from './WeekdaysRow';

const defaultProps: WeekdaysRowProps = {};

function Wrapper(props: Partial<WeekdaysRowProps>) {
  return (
    <table>
      <thead>
        <WeekdaysRow {...defaultProps} {...props} />
      </thead>
    </table>
  );
}

describe('@raikou/dates/WeekdaysRow', () => {
  beforeAll(patchConsoleError);
  afterAll(patchConsoleError.release);

  tests.itSupportsSystemProps<WeekdaysRowProps, WeekdaysRowStylesNames>({
    component: WeekdaysRow,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableRowElement,
    displayName: '@raikou/dates/WeekdaysRow',
    stylesApiSelectors: ['weekdaysRow', 'weekday'],
  });

  datesTests.itSupportsWeekdaysProps({ component: WeekdaysRow, props: defaultProps });

  it('supports changing cell component', () => {
    render(<Wrapper cellComponent="td" />);
    expect(screen.queryAllByRole('cell')).toHaveLength(7);
    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
  });

  it('has correct default __staticSelector', () => {
    render(<Wrapper />);
    expect(screen.getByRole('row')).toHaveClass('raikou-WeekdaysRow-weekdaysRow ');
  });

  it('supports __staticSelector', () => {
    render(<Wrapper __staticSelector="Month" />);
    expect(screen.getByRole('row')).toHaveClass('raikou-Month-weekdaysRow ');
  });
});
