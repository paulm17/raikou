import React from "react";
import { useFocusWithin } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Box, Text } from "@raikou/server";
import { TextInput } from "@raikou/client";

const code = `
import { useFocusWithin } from '@raikou/hooks';
import { TextInput, Button, Box, Text } from '@raikou/core';

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--raikou-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`;

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused
            ? "var(--raikou-color-blue-light)"
            : "transparent",
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput
          label="Focus this input"
          placeholder="Styles will be added to parent"
        />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}

export const useFocusWithinDemo: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
