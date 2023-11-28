import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Title } from "@raikou/server";

const code = `
import { Text, Title } from '@raikou/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{" "}
      <Text span c="blue" inherit>
        highlight
      </Text>{" "}
      something
    </Title>
  );
}

export const inherit: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
