import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={["first", "second"]}
    />
  );
}

export const maxTags: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
