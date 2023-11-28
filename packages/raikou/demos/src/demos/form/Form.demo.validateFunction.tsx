/* eslint-disable no-console */
import React from "react";
import { useForm } from "@raikou/form";
import { RaikouDemo } from "@raikou/ds";
import { Box, Button, Group } from "@raikou/server";
import { TextInput, NumberInput } from "@raikou/client";

const code = `
import { useForm } from '@raikou/form';
import { Box, TextInput, NumberInput, Button, Group } from '@raikou/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
          ? 'You must be at least 18'
          : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: "", age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      age:
        values.age === undefined
          ? "Age is required"
          : values.age < 18
          ? "You must be at least 18"
          : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="You age"
          {...form.getInputProps("age")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export const validateFunction: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
