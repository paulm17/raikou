import React, { useRef } from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput, NumberInputHandlers } from "@raikou/client";
import { Group, Button } from "@raikou/server";

const code = `
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@raikou/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button
          onClick={() => handlersRef.current?.decrement()}
          variant="default"
        >
          Decrement by 2
        </Button>

        <Button
          onClick={() => handlersRef.current?.increment()}
          variant="default"
        >
          Increment by 2
        </Button>
      </Group>
    </>
  );
}

export const handlers: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
