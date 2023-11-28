import React from "react";
import { Text } from "@raikou/server";
import { TextInput } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { usePrevious, useInputState } from "@raikou/hooks";

const code = `
import { TextInput, Text } from '@raikou/core';
import { usePrevious, useInputState } from '@raikou/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;

function Demo() {
  const [value, setValue] = useInputState("");
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}

export const usePreviousUsage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
