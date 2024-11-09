import { render, screen, tests } from '@raikou-tests/core';
import { datesTests } from '@raikou-tests/dates';
import { CalendarHeader, CalendarHeaderProps, CalendarHeaderStylesNames } from './CalendarHeader';

const defaultProps: CalendarHeaderProps = {
  nextLabel: 'next',
  previousLabel: 'prev',
  label: '',
};

describe('@raikou/dates/CalendarHeader', () => {
  tests.itSupportsSystemProps<CalendarHeaderProps, CalendarHeaderStylesNames>({
    component: CalendarHeader,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@raikou/dates/CalendarHeader',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
    ],
  });

  datesTests.itSupportsHeaderProps({ component: CalendarHeader, props: defaultProps });
  datesTests.itSupportsWithNextPrevious({ component: CalendarHeader, props: defaultProps });

  it('renders given label', () => {
    render(<CalendarHeader {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports levelControlAriaLabel', () => {
    render(
      <CalendarHeader {...defaultProps} label="test-label" levelControlAriaLabel="Change month" />
    );

    expect(screen.getByText('test-label')).toHaveAttribute('aria-label', 'Change month');
  });

  it('has correct default __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} />);
    expect(screen.getByLabelText('next')).toHaveClass(
      'raikou-CalendarHeader-calendarHeaderControl'
    );
  });

  it('supports custom __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByLabelText('next')).toHaveClass('raikou-Calendar-calendarHeaderControl');
  });
});
