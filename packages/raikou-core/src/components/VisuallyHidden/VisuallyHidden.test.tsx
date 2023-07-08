import { tests } from "@raikou/tests";
import { VisuallyHidden, VisuallyHiddenProps } from "./VisuallyHidden";

const defaultProps: VisuallyHiddenProps = {};

describe("@raikou/core/VisuallyHidden", () => {
  tests.itSupportsClassName({ component: VisuallyHidden, props: defaultProps });
  tests.itRendersChildren({ component: VisuallyHidden, props: defaultProps });
  tests.itHasClasses({ component: VisuallyHidden });

  it("has correct displayName", () => {
    expect(VisuallyHidden.displayName).toEqual("@raikou/core/VisuallyHidden");
  });
});
