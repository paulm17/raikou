import { tests } from "@raikou/tests";
import { Rating, RatingProps, RatingStylesNames } from "./Rating";

const defaultProps: RatingProps = {};

describe("@raikou/core/Rating", () => {
  tests.itSupportsSystemProps<RatingProps, RatingStylesNames>({
    component: Rating,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Rating",
    stylesApiSelectors: [
      "root",
      "starSymbol",
      "input",
      "label",
      "symbolBody",
      "symbolGroup",
    ],
  });
});
