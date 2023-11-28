import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Radio } from "@raikou/client";

const code = `
import { Radio } from '@raikou/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`;

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}

export const iconColor: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
