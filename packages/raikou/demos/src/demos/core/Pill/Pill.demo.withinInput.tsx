import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Pill, InputBase } from "@raikou/client";

const code = `
import { Pill, InputBase } from '@raikou/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`;

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}

export const withinInput: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
