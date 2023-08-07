import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import { ColorInput, ColorInputProps } from "./ColorInput";
import { __InputStylesNames } from "../Input";

const defaultProps: ColorInputProps = {
  ...inputDefaultProps,
};

describe("@raikou/core/ColorInput", () => {
  tests.axe([
    <ColorInput aria-label="test-label" />,
    <ColorInput label="test-label" />,
    <ColorInput label="test-label" error />,
    <ColorInput label="test-label" error="test-error" id="test" />,
    <ColorInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<ColorInputProps, __InputStylesNames>({
    component: ColorInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/ColorInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<ColorInputProps>({
    component: ColorInput,
    props: defaultProps,
    selector: "input",
  });
});
