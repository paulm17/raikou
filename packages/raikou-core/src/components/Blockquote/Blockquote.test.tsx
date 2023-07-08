import { tests } from "@raikou/tests";
import {
  Blockquote,
  BlockquoteProps,
  BlockquoteStylesNames,
} from "./Blockquote";

const defaultProps: BlockquoteProps = {
  icon: "test-icon",
};

describe("@raikou/core/Blockquote", () => {
  tests.itSupportsSystemProps<BlockquoteProps, BlockquoteStylesNames>({
    component: Blockquote,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLQuoteElement,
    displayName: "@raikou/core/Blockquote",
    stylesApiSelectors: ["root", "icon"],
  });
});
