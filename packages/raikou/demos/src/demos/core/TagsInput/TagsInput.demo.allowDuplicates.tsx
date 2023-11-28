import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}

`;

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}

export const allowDuplicates: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
