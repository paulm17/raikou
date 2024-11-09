import { render, screen, tests } from '@raikou-tests/core';
import { datesTests } from '@raikou-tests/dates';
import { YearsList, YearsListProps, YearsListStylesNames } from './YearsList';

const defaultProps: YearsListProps = {
  decade: new Date(2022, 3, 11),
};

describe('@raikou/dates/YearsList', () => {
  tests.itSupportsSystemProps<YearsListProps, YearsListStylesNames>({
    component: YearsList,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableElement,
    displayName: '@raikou/dates/YearsList',
    stylesApiSelectors: ['yearsList', 'yearsListCell', 'yearsListControl', 'yearsListRow'],
  });

  datesTests.itSupportsGetControlRef({
    component: YearsList,
    props: defaultProps,
    numberOfControls: 10,
  });
  datesTests.itSupportsYearsListProps({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: YearsList, props: defaultProps });

  it('has correct default __staticSelector', () => {
    render(<YearsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('raikou-YearsList-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('raikou-YearsList-yearsListControl');
  });

  it('supports custom __staticSelector', () => {
    render(<YearsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('raikou-Calendar-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('raikou-Calendar-yearsListControl');
  });
});
