import React, { useState } from "react";
import { useDebouncedValue } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text, Box } from "@raikou/server";
import { TextInput } from "@raikou/client";

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@raikou/hooks';
import { TextInput, Text } from '@raikou/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        label="Enter value to see debounce effect"
        placeholder="Enter value to see debounce effect"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text mt="sm">
        <Text component="span" c="dimmed" size="sm">
          Value:
        </Text>{" "}
        {value.trim() || "[empty string]"}
      </Text>
      <Text>
        <Text component="span" c="dimmed" size="sm">
          Debounced value:
        </Text>{" "}
        {debounced.trim() || "[empty string]"}
      </Text>
    </Box>
  );
}

export const useDebouncedValueLeading: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
