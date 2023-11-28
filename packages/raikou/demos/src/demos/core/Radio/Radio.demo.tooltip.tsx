import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tooltip, Radio } from "@raikou/client";

const code = `
import { Tooltip, Radio } from '@raikou/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
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
