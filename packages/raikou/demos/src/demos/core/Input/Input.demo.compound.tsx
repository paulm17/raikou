import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";

const code = `
import { Input } from '@raikou/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}

export const compound: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
