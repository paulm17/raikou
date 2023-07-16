import { tests } from "@raikou/tests";
import {
  ComboboxChevron,
  ComboboxChevronProps,
  ComboboxChevronStylesNames,
} from "./ComboboxChevron";

const defaultProps: ComboboxChevronProps = {};

describe("@raikou/core/ComboboxChevron", () => {
  tests.itSupportsSystemProps<ComboboxChevronProps, ComboboxChevronStylesNames>(
    {
      component: ComboboxChevron,
      props: defaultProps,
      styleProps: true,
      extend: true,
      variant: true,
      size: true,
      classes: true,
      refType: SVGSVGElement,
      displayName: "@raikou/core/ComboboxChevron",
      stylesApiSelectors: ["root"],
    }
  );
});
