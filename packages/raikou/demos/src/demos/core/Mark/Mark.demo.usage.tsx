import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Mark, MarkProps, Text } from "@raikou/server";

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const code = `
import { Text, Mark } from '@raikou/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark{{props}}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    {
      prop: "color",
      type: "color",
      initialValue: "yellow",
      libraryValue: "yellow",
    },
  ],
};
