import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Badge } from "@raikou/server";

const code = `
import { Badge } from '@raikou/server';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}

export const fullWidth: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
