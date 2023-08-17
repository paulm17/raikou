import React from "react";
import { render, tests, screen } from "@raikou/tests";
import { datesTests } from "@raikou/dates-tests";
import {
  MonthLevel,
  MonthLevelProps,
  MonthLevelStylesNames,
} from "./MonthLevel";

const defaultProps: MonthLevelProps = {
  month: new Date(2022, 3, 11),
  levelControlAriaLabel: "level-control",
  nextLabel: "next",
  previousLabel: "prev",
};

function expectLabel(label: string) {
  expect(screen.getByLabelText("level-control")).toHaveTextContent(label);
}

describe("@raikou/dates/MonthLevel", () => {
  tests.itSupportsSystemProps<MonthLevelProps, MonthLevelStylesNames>({
    component: MonthLevel,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/dates/MonthLevel",
    stylesApiSelectors: [
      "calendarHeader",
      "calendarHeaderControl",
      "calendarHeaderControlIcon",
      "calendarHeaderLevel",
      "day",
      "month",
      "monthCell",
      "monthRow",
      "monthTbody",
      "monthThead",
      "weekday",
      "weekdaysRow",
    ],

    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsHeaderProps({
    component: MonthLevel,
    props: defaultProps,
  });
  datesTests.itSupportsMonthProps({
    component: MonthLevel,
    props: defaultProps,
  });
  datesTests.itSupportsGetDayRef({
    component: MonthLevel,
    props: defaultProps,
  });
  datesTests.itSupportsWithNextPrevious({
    component: MonthLevel,
    props: defaultProps,
  });
  datesTests.itSupportsOnDayKeydown({
    component: MonthLevel,
    props: defaultProps,
  });
  datesTests.itSupportsOnDayClick({
    component: MonthLevel,
    props: defaultProps,
  });

  it("renders correct CalendarHeader label", () => {
    render(<MonthLevel {...defaultProps} />);
    expectLabel("April 2022");
  });

  it("supports changing month label format", () => {
    render(<MonthLevel {...defaultProps} monthLabelFormat="MM/YY" />);
    expectLabel("04/22");
  });

  it("supports changing month label with callback", () => {
    render(
      <MonthLevel
        {...defaultProps}
        monthLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />,
    );

    expectLabel("3/2022");
  });

  it("has correct default __staticSelector", () => {
    const { container } = render(<MonthLevel {...defaultProps} />);
    expect(container.querySelector("table td button")).toHaveClass(
      "raikou-MonthLevel-day",
    );
    expect(screen.getByLabelText("level-control")).toHaveClass(
      "raikou-MonthLevel-calendarHeaderLevel",
    );
  });

  it("supports custom __staticSelector", () => {
    const { container } = render(
      <MonthLevel {...defaultProps} __staticSelector="Calendar" />,
    );
    expect(container.querySelector("table td button")).toHaveClass(
      "raikou-Calendar-day",
    );
    expect(screen.getByLabelText("level-control")).toHaveClass(
      "raikou-Calendar-calendarHeaderLevel",
    );
  });

  it("disables next control if maxDate is before end of month", () => {
    render(<MonthLevel {...defaultProps} maxDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText("next")).toBeDisabled();
  });

  it("disables previous control if minDate is after start of month", () => {
    render(<MonthLevel {...defaultProps} minDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText("prev")).toBeDisabled();
  });
});
