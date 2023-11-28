import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox } from "@raikou/client";

const code = `
import { Checkbox } from '@raikou/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}

export const iconColor: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
