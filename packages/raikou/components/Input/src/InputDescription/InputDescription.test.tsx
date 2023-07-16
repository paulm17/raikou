import { tests } from "@raikou/tests";
import {
  InputDescription,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from "./InputDescription";

const defaultProps: InputDescriptionProps = {};

describe("@raikou/core/InputDescription", () => {
  tests.itSupportsSystemProps<
    InputDescriptionProps,
    InputDescriptionStylesNames
  >({
    component: InputDescription,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLParagraphElement,
    displayName: "@raikou/core/InputDescription",
    stylesApiName: "InputWrapper",
    stylesApiSelectors: ["description"],
  });
});
