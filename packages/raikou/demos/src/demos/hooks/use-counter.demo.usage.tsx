import React from "react";
import { Group, Button, Text } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useCounter } from "@raikou/hooks";

const code = `
import { Group, Button, Text } from '@raikou/core';
import { useCounter } from '@raikou/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text size="md" ta="center" py="xs">
        Count: {count}
      </Text>
      <Group justify="center">
        <Button variant="outline" size="xs" onClick={handlers.increment}>
          Increment
        </Button>
        <Button variant="outline" size="xs" onClick={handlers.decrement}>
          Decrement
        </Button>
        <Button variant="outline" size="xs" onClick={handlers.reset}>
          Reset
        </Button>
        <Button variant="outline" size="xs" onClick={() => handlers.set(5)}>
          Set 5
        </Button>
      </Group>
    </>
  );
}

export const useCounterDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
