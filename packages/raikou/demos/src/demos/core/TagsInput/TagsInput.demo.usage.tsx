import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";

const code = `
import { TagsInput } from '@raikou/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`;

function Demo() {
  return (
    <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
