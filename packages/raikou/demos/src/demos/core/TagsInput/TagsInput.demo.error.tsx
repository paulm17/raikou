import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={['React', 'Angular']}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={['React', 'Angular']}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={["React", "Angular"]}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={["React", "Angular"]}
      />
    </>
  );
}

export const error: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
