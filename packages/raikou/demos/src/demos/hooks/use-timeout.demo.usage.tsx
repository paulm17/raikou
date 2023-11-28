import React, { useState } from "react";
import { Button, Text, Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { randomId, useTimeout } from "@raikou/hooks";

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@raikou/core';
import { randomId, useTimeout } from '@raikou/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState("");
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
