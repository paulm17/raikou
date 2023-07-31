import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import { Textarea, TextareaProps } from "./Textarea";
import { __InputStylesNames } from "../../Input/src";

const defaultProps: TextareaProps = {
  ...inputDefaultProps,
};

describe("@raikou/core/Textarea", () => {
  tests.axe([
    <Textarea aria-label="test-label" />,
    <Textarea label="test-label" />,
    <Textarea label="test-label" error />,
    <Textarea label="test-label" error="test-error" id="test" />,
    <Textarea label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<TextareaProps, __InputStylesNames>({
    component: Textarea,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLTextAreaElement,
    displayName: "@raikou/core/Textarea",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextareaProps>({
    component: Textarea,
    props: defaultProps,
    selector: "textarea",
  });
});
