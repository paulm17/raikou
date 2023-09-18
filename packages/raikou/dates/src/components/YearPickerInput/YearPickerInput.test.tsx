import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
} from "@raikou/tests";
import { __InputStylesNames } from "../../../../components/Input/src";
import { clickInput, datesTests, expectValue } from "@raikou/dates-tests";
import { YearPickerInput, YearPickerInputProps } from "./YearPickerInput";
import { DatesProvider } from "../DatesProvider";

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe("@raikou/dates/YearPickerInput", () => {
  tests.axe([
    <YearPickerInput aria-label="test-label" />,
    <YearPickerInput aria-label="test-label" error />,
    <YearPickerInput aria-label="test-label" error="test-error" id="test" />,
    <YearPickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<YearPickerInputProps, __InputStylesNames>({
    component: YearPickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/dates/YearPickerInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<YearPickerInputProps>({
    component: YearPickerInput,
    props: defaultPropsWithInputProps,
    selector: "button",
  });

  datesTests.itSupportsDateInputProps({
    component: YearPickerInput,
    props: defaultProps,
  });
  datesTests.itSupportsClearableProps({
    component: YearPickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  datesTests.itSupportsYearsListProps({
    component: YearPickerInput,
    props: {
      ...defaultProps,
      defaultValue: new Date(),
      popoverProps: {
        opened: true,
        withinPortal: false,
        transitionProps: { duration: 0 },
      },
    },
  });

  it("supports valueFormat prop", () => {
    const { container, rerender } = render(
      <YearPickerInput
        {...defaultProps}
        valueFormat="YY"
        value={new Date(2022, 3, 11)}
      />,
    );
    expectValue(container, "22");

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />,
    );
    expectValue(container, "22, 24");

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="range"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />,
    );
    expectValue(container, "22 – 24");
  });

  it("has correct default __staticSelector", () => {
    const { container } = render(
      <YearPickerInput
        {...defaultProps}
        popoverProps={{
          opened: true,
          withinPortal: false,
          transitionProps: { duration: 0 },
        }}
      />,
    );
    expect(container.querySelector("[data-dates-input]")).toHaveClass(
      "raikou-YearPickerInput-input",
    );

    expect(container.querySelector("table button")).toHaveClass(
      "raikou-YearPickerInput-yearsListControl",
    );
  });

  it('can be controlled (type="default") with timezone (UTC)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: "UTC" }}>
        <YearPickerInput
          {...defaultProps}
          date={new Date(2022, 3, 11)}
          value={new Date(2023, 3, 11)}
          onChange={spy}
        />
      </DatesProvider>,
    );

    await clickInput(container);
    expect(container.querySelector("[data-selected]")!.textContent).toBe(
      "2023",
    );

    await userEvent.click(container.querySelector("table button")!);
    expect(spy).toHaveBeenCalledWith(new Date(2019, 11, 31, 19));
  });

  it('can be controlled (type="default") with timezone (America/Los_Angeles)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: "America/Los_Angeles" }}>
        <YearPickerInput
          {...defaultProps}
          date={new Date(2022, 3, 11)}
          value={new Date(2023, 3, 11)}
          onChange={spy}
        />
      </DatesProvider>,
    );

    await clickInput(container);
    expect(container.querySelector("[data-selected]")!.textContent).toBe(
      "2023",
    );

    await userEvent.click(container.querySelector("table button")!);
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1, 3));
  });
});
