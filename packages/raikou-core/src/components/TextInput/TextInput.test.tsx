import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import { TextInput, TextInputProps } from "./TextInput";
import { __InputStylesNames } from "../Input";

const defaultProps: TextInputProps = {
  ...inputDefaultProps,
};

describe("@raikou/core/TextInput", () => {
  tests.axe([
    <TextInput aria-label="test-label" />,
    <TextInput label="test-label" />,
    <TextInput label="test-label" error />,
    <TextInput label="test-label" error="test-error" id="test" />,
    <TextInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<TextInputProps, __InputStylesNames>({
    component: TextInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/TextInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextInputProps>({
    component: TextInput,
    props: defaultProps,
    selector: "input",
  });
});
