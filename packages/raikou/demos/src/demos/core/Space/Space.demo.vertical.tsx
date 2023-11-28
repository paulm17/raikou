import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Space } from "@raikou/server";

function Wrapper(props: any) {
  return (
    <div style={{ display: "flex" }}>
      <Text>First part</Text>
      <Space {...props} />
      <Text>Second part</Text>
    </div>
  );
}

const code = `
import { Text, Space } from '@raikou/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </div>
  );
}
`;

export const vertical: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "w", type: "size", initialValue: "md", libraryValue: "__" },
  ],
};
