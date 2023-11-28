import React from "react";
import { RaikouDemo } from "@raikou/ds";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@raikou/form";
import { Button, Group, Box } from "@raikou/server";
import { TextInput, NumberInput } from "@raikou/client";

const code = `
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@raikou/form';
import { Button, Group, TextInput, NumberInput, Box } from '@raikou/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-22 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color",
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register",
      ),
    },
  });

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(() => {})}
    >
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps("job")}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps("favoriteColor")}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps("age")}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}

export const validators: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
