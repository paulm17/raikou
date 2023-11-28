import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tooltip, Checkbox } from "@raikou/client";

const code = `
import { Tooltip, Checkbox } from '@raikou/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}

export const tooltip: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
