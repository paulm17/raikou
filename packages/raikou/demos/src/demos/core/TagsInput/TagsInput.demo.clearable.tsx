import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      defaultValue={['React']}
      clearable
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      defaultValue={["React"]}
      clearable
    />
  );
}

export const clearable: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
