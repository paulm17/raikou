import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";

const code = `
import { TextInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput
        type="password"
        label="Password input"
        placeholder="Password input"
      />
      <TextInput
        mt="md"
        type="date"
        label="Date input"
        placeholder="Date input"
      />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}

export const type: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
