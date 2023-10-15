import React from "react";
import { Demo, RaikouDemo } from "@raikou/ds";
import { ArgsStoryFn } from "@storybook/types";
import { R as ReactRenderer } from "@storybook/react/dist/types-0a347bb9";

export function renderDemo(demo: RaikouDemo): ArgsStoryFn<ReactRenderer, any> {
  return () => (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        maxWidth: 820,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Demo data={demo} />
    </div>
  );
}
