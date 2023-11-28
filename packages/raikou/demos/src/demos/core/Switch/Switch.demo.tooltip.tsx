import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Switch, Tooltip } from "@raikou/client";

const code = `
import { Switch, Tooltip } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}

export const tooltip: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
