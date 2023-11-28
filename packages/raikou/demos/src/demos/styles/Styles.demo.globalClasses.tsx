import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group } from "@raikou/server";

const code = `
import { Group } from '@raikou/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="raikou-focus-auto">
        Focus auto
      </button>
      <button type="button" className="raikou-focus-always">
        Focus always
      </button>
      <button type="button" className="raikou-focus-never">
        Focus never
      </button>
      <button type="button" className="raikou-active">
        Active
      </button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <button type="button" className="raikou-focus-auto">
        Focus auto
      </button>
      <button type="button" className="raikou-focus-always">
        Focus always
      </button>
      <button type="button" className="raikou-focus-never">
        Focus never
      </button>
      <button type="button" className="raikou-active">
        Active
      </button>
    </Group>
  );
}

export const globalClasses: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
