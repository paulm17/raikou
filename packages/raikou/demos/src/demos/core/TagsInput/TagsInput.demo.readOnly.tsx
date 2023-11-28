import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={["First", "Second"]}
    />
  );
}

export const readOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
