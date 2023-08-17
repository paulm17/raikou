import React from "react";
import { render, tests, createContextContainer, screen } from "@raikou/tests";
import {
  TimelineItem,
  TimelineItemProps,
  TimelineItemStylesNames,
} from "./TimelineItem";
import { Timeline } from "../Timeline";

const TestContainer = createContextContainer(TimelineItem, Timeline, {});

const defaultProps: TimelineItemProps = {
  title: "test-title",
  bullet: "test-bullet",
};

describe("@raikou/core/TimelineItem", () => {
  tests.itSupportsSystemProps<TimelineItemProps, TimelineItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/TimelineItem",
    stylesApiSelectors: [
      "itemBody",
      "itemContent",
      "itemBullet",
      "item",
      "itemTitle",
    ],
    stylesApiName: "Timeline",
    compound: true,
    providerStylesApi: false,
    selector: ".raikou-Timeline-item",
  });

  it("renders given bullet", () => {
    render(<TestContainer bullet="test-bullet" />);
    expect(screen.getByText("test-bullet")).toBeInTheDocument();
  });

  it("renders given title", () => {
    render(<TestContainer title="test-title" />);
    expect(screen.getByText("test-title")).toBeInTheDocument();
  });
});
