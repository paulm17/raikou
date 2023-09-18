import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  userEvent,
} from "@raikou/tests";
import { __InputStylesNames } from "../../../../components/Input/src";
import { clickInput, datesTests, expectValue } from "@raikou/dates-tests";
import { MonthPickerInput, MonthPickerInputProps } from "./MonthPickerInput";
import { DatesProvider } from "../DatesProvider";

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe("@raikou/dates/MonthPickerInput", () => {
  tests.axe([
    <MonthPickerInput aria-label="test-label" />,
    <MonthPickerInput aria-label="test-label" error />,
    <MonthPickerInput aria-label="test-label" error="test-error" id="test" />,
    <MonthPickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<MonthPickerInputProps, __InputStylesNames>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/dates/MonthPickerInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MonthPickerInputProps>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    selector: "button",
  });

  datesTests.itSupportsDateInputProps({
    component: MonthPickerInput,
    props: defaultProps,
  });
  datesTests.itSupportsClearableProps({
    component: MonthPickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  datesTests.itSupportsYearsListProps({
    component: MonthPickerInput,
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
    component: MonthPickerInput,
    props: {
      ...defaultProps,
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
      <MonthPickerInput
        {...defaultProps}
        valueFormat="MMMM"
        value={new Date(2022, 3, 11)}
      />,
    );
    expectValue(container, "April");

    rerender(
      <MonthPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />,
    );
    expectValue(container, "April, May");

    rerender(
      <MonthPickerInput
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
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{
          opened: true,
          withinPortal: false,
          transitionProps: { duration: 0 },
        }}
      />,
    );
    expect(container.querySelector("[data-dates-input]")).toHaveClass(
      "raikou-MonthPickerInput-input",
    );

    expect(container.querySelector("table button")).toHaveClass(
      "raikou-MonthPickerInput-monthsListControl",
    );
  });

  it('can be controlled (type="default") with timezone', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: "UTC" }}>
        <MonthPickerInput
          {...defaultProps}
          date={new Date(2022, 0, 31, 23)}
          value={new Date(2022, 0, 31, 23)}
          onChange={spy}
        />
      </DatesProvider>,
    );

    await clickInput(container);
    expect(container.querySelector("[data-selected]")!.textContent).toBe("Feb");

    await userEvent.click(container.querySelector("table button")!);
    expect(spy).toHaveBeenCalledWith(new Date(2021, 11, 31, 19));
  });
});
