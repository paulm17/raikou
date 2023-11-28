import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";

const code = `
import { FileInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
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
