import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tooltip, Chip } from "@raikou/client";

const code = `
import { Tooltip, Chip } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}

export const tooltip: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
