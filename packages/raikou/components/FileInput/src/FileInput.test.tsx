import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import { FileInput, FileInputProps } from "./FileInput";
import { __InputStylesNames } from "../../Input/src";

const defaultProps: FileInputProps = {
  ...inputDefaultProps,
};

describe("@raikou/core/FileInput", () => {
  tests.axe([<FileInput aria-label="test-label" />]);

  tests.itSupportsSystemProps<FileInputProps, __InputStylesNames>({
    component: FileInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/core/FileInput",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<FileInputProps>({
    component: FileInput,
    props: defaultProps,
    selector: "button",
  });
});
