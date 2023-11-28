import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";

const code = `
import { Input } from '@raikou/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}

export const placeholder: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
