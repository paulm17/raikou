import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Radio, CheckIcon } from "@raikou/client";

const code = `
import { Radio, CheckIcon } from '@raikou/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;

function Demo() {
  return (
    <Radio
      icon={CheckIcon}
      label="Custom check icon"
      name="check"
      value="check"
      defaultChecked
    />
  );
}

export const icon: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
