import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={["First", "Second"]}
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
