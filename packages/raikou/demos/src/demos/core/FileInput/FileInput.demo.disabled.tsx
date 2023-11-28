import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";

const code = `
import { FileInput } from '@raikou/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return (
    <FileInput disabled label="Disabled input" placeholder="Disabled input" />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
