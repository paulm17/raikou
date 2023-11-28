import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Space } from "@raikou/server";

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const code = `
import { Text, Space } from '@raikou/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`;

export const horizontal: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "h", type: "size", initialValue: "md", libraryValue: "__" },
  ],
};
