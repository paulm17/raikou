import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";

const code = `
import { TextInput } from '@raikou/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return (
    <TextInput disabled label="Disabled input" placeholder="Disabled input" />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
