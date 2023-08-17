import { tests } from "@raikou/tests";
import {
  InlineCodeHighlight,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
} from "./InlineCodeHighlight";

const defaultProps: InlineCodeHighlightProps = {
  code: "test-code",
};

describe("@raikou/code-highlight/InlineCodeHighlight", () => {
  tests.itSupportsSystemProps<
    InlineCodeHighlightProps,
    InlineCodeHighlightStylesNames
  >({
    component: InlineCodeHighlight,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLElement,
    displayName: "@raikou/core/InlineCodeHighlight",
    stylesApiSelectors: ["code"],
  });
});
