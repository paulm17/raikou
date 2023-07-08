import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import { InputBase, InputBaseProps } from "./InputBase";
import { __InputStylesNames } from "../Input";

const defaultProps: InputBaseProps = {
  ...inputDefaultProps,
};

describe("@raikou/core/InputBase", () => {
  tests.axe([
    <InputBase aria-label="test-label" />,
    <InputBase label="test-label" />,
    <InputBase label="test-label" error />,
    <InputBase label="test-label" error="test-error" id="test" />,
    <InputBase label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<InputBaseProps, __InputStylesNames>({
    component: InputBase,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/InputBase",
    stylesApiSelectors: [...inputStylesApiSelectors],
    polymorphicSelector: ".raikou-InputBase-input",
  });

  tests.itSupportsInputProps<InputBaseProps>({
    component: InputBase,
    props: defaultProps,
    selector: "input",
  });
});
