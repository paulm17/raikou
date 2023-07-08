import { tests } from "@raikou/tests";
import {
  InputPlaceholder,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
} from "./InputPlaceholder";

const defaultProps: InputPlaceholderProps = {};

describe("@raikou/core/InputPlaceholder", () => {
  tests.itSupportsSystemProps<
    InputPlaceholderProps,
    InputPlaceholderStylesNames
  >({
    component: InputPlaceholder,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLSpanElement,
    displayName: "@raikou/core/InputPlaceholder",
    stylesApiSelectors: ["placeholder"],
  });
});
