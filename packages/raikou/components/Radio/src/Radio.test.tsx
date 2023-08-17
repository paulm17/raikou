import { tests } from "@raikou/tests";
import { Radio, RadioProps, RadioStylesNames } from "./Radio";
import { RadioGroup } from "./RadioGroup/RadioGroup";

const defaultProps: RadioProps = {
  defaultChecked: true,
  label: "test-label",
  description: "test-description",
  error: "test-error",
};

describe("@raikou/core/Radio", () => {
  tests.itSupportsSystemProps<RadioProps, RadioStylesNames>({
    component: Radio,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/Radio",
    stylesApiSelectors: [
      "root",
      "body",
      "description",
      "error",
      "icon",
      "inner",
      "radio",
      "label",
      "labelWrapper",
    ],
  });

  it("exposes RadioGroup as a static component", () => {
    expect(Radio.Group).toBe(RadioGroup);
  });
});
