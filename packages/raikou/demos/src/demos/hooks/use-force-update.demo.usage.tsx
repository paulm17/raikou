import React from "react";
import { Button, Text, Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useForceUpdate, randomId } from "@raikou/hooks";

const code = `
import { Button, Text, Group } from '@raikou/core';
import { useForceUpdate, randomId } from '@raikou/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
