import React from "react";
import { tests, render } from "@raikou/tests";
import { datesTests } from "@raikou/dates-tests";
import { Month, MonthProps, MonthStylesNames } from "./Month";

const defaultProps: MonthProps = {
  month: new Date(2022, 3, 2),
};

describe("@raikou/dates/Month", () => {
  tests.itSupportsSystemProps<MonthProps, MonthStylesNames>({
    component: Month,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableElement,
    displayName: "@raikou/dates/Month",
    stylesApiSelectors: ["month"],
  });

  datesTests.itSupportsOnDayClick({ component: Month, props: defaultProps });
  datesTests.itSupportsOnDayKeydown({ component: Month, props: defaultProps });
  datesTests.itSupportsGetDayRef({ component: Month, props: defaultProps });
  datesTests.itSupportsMonthProps({ component: Month, props: defaultProps });

  it("has correct default __staticSelector", () => {
    const { container } = render(<Month {...defaultProps} />);
    expect(container.querySelector("table")).toHaveClass("raikou-Month-month");
    expect(container.querySelector("thead tr")).toHaveClass(
      "raikou-Month-weekdaysRow",
    );
    expect(container.querySelector("tbody tr td button")).toHaveClass(
      "raikou-Month-day",
    );
  });

  it("supports __staticSelector", () => {
    const { container } = render(
      <Month {...defaultProps} __staticSelector="Calendar" />,
    );
    expect(container.querySelector("table")).toHaveClass(
      "raikou-Calendar-month",
    );
    expect(container.querySelector("thead tr")).toHaveClass(
      "raikou-Calendar-weekdaysRow",
    );
    expect(container.querySelector("tbody tr td button")).toHaveClass(
      "raikou-Calendar-day",
    );
  });

  it("supports static prop", () => {
    const { container, rerender } = render(<Month {...defaultProps} />);
    expect(
      (container.querySelector("td")!.firstChild as HTMLElement).tagName,
    ).toBe("BUTTON");

    rerender(<Month {...defaultProps} static />);
    expect(
      (container.querySelector("td")!.firstChild as HTMLElement).tagName,
    ).toBe("DIV");
  });
});
