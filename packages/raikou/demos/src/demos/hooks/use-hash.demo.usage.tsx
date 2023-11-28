import React from "react";
import { useHash, randomId } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Group, Button, Text, Code } from "@raikou/server";

const code = `
import { useHash, randomId } from '@raikou/hooks';
import { Button, Text, Code } from '@raikou/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;

function Demo() {
  const [hash, setHash] = useHash();

  return (
    <>
      <Group justify="center">
        <Button onClick={() => setHash(randomId())}>
          Set hash to random string
        </Button>
      </Group>

      <Text ta="center" mt="md">
        Current hash: <Code>{hash}</Code>
      </Text>
    </>
  );
}

export const useHashDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
