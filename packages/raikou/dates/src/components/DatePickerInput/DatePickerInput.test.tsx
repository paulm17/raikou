import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
} from "@raikou/tests";
import { __InputStylesNames } from "@raikou/core";
import { datesTests, expectValue } from "@raikou/dates-tests";
import { DatePickerInput, DatePickerInputProps } from "./DatePickerInput";

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe("@raikou/dates/DatePickerInput", () => {
  tests.axe([
    <DatePickerInput aria-label="test-label" />,
    <DatePickerInput aria-label="test-label" error />,
    <DatePickerInput aria-label="test-label" error="test-error" id="test" />,
    <DatePickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<DatePickerInputProps, __InputStylesNames>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/dates/DatePickerInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    selector: "button",
  });

  datesTests.itSupportsDateInputProps({
    component: DatePickerInput,
    props: defaultProps,
  });
  datesTests.itSupportsClearableProps({
    component: DatePickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  datesTests.itSupportsYearsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: "decade",
      defaultValue: new Date(2022, 3, 11),
      popoverProps: {
        opened: true,
        withinPortal: false,
        transitionProps: { duration: 0 },
      },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: "year",
      defaultValue: new Date(2022, 3, 11),
      popoverProps: {
        opened: true,
        withinPortal: false,
        transitionProps: { duration: 0 },
      },
    },
  });

  it("supports valueFormat prop", () => {
    const { container, rerender } = render(
      <DatePickerInput
        {...defaultProps}
        valueFormat="MMMM"
        value={new Date(2022, 3, 11)}
      />,
    );
    expectValue(container, "April");

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />,
    );
    expectValue(container, "April, May");

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="range"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />,
    );
    expectValue(container, "April – May");
  });

  it("has correct default __staticSelector", () => {
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        popoverProps={{
          opened: true,
          withinPortal: false,
          transitionProps: { duration: 0 },
        }}
      />,
    );
    expect(container.querySelector("[data-dates-input]")).toHaveClass(
      "raikou-DatePickerInput-input",
    );

    expect(container.querySelector("table button")).toHaveClass(
      "raikou-DatePickerInput-day",
    );
  });
});
