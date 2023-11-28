import React from "react";
import { useForm } from "@raikou/form";
import { RaikouDemo } from "@raikou/ds";
import { Text, Box } from "@raikou/server";
import { TextInput } from "@raikou/client";

const code = `
import { useForm } from '@raikou/form';
import { TextInput, Text, Box } from '@raikou/core';

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span c={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span c={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { text: "initial value" } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps("text")}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{" "}
        <Text span c={form.isTouched("text") ? "blue" : "red"}>
          {form.isTouched("text") ? "touched" : "not touched"}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{" "}
        <Text span c={form.isDirty("text") ? "blue" : "red"}>
          {form.isDirty("text") ? "dirty" : "not dirty"}
        </Text>
      </Text>
    </Box>
  );
}

export const status: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
