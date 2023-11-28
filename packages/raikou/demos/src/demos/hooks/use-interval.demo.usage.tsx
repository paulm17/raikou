import React, { useState, useEffect } from "react";
import { Stack, Button, Text } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useInterval } from "@raikou/hooks";

const code = `
import { useState, useEffect } from 'react';
import { useInterval } from '@raikou/hooks';
import { Stack, Button, Text } from '@raikou/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'red' : 'teal'}
        variant="outline"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? "red" : "teal"}
        variant="outline"
      >
        {interval.active ? "Stop" : "Start"} counting
      </Button>
    </Stack>
  );
}

export const useIntervalDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
