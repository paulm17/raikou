import { tests } from "@raikou/tests";
import {
  InputError,
  InputErrorProps,
  InputErrorStylesNames,
} from "./InputError";

const defaultProps: InputErrorProps = {};

describe("@raikou/core/InputError", () => {
  tests.itSupportsSystemProps<InputErrorProps, InputErrorStylesNames>({
    component: InputError,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLParagraphElement,
    displayName: "@raikou/core/InputError",
    stylesApiName: "InputWrapper",
    stylesApiSelectors: ["error"],
  });
});
