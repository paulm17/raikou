import React from "react";
import { tests } from "@raikou/tests";
import { Progress, ProgressProps, ProgressStylesNames } from "./Progress";
import { ProgressRoot } from "./ProgressRoot/ProgressRoot";
import { ProgressLabel } from "./ProgressLabel/ProgressLabel";
import { ProgressSection } from "./ProgressSection/ProgressSection";

const defaultProps: ProgressProps = {
  value: 40,
  "aria-label": "test",
};

describe("@raikou/core/Progress", () => {
  tests.axe([<Progress {...defaultProps} />]);

  tests.itSupportsSystemProps<ProgressProps, ProgressStylesNames>({
    component: Progress,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Progress",
    stylesApiSelectors: ["root", "section"],
  });

  it("exposes ProgressRoot, ProgressSection and ProgressLabel components", () => {
    expect(Progress.Root).toBe(ProgressRoot);
    expect(Progress.Section).toBe(ProgressSection);
    expect(Progress.Label).toBe(ProgressLabel);
  });
});
