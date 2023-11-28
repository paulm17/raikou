/* eslint-disable no-console */
import React from "react";
import { useForm } from "@raikou/form";
import { Button, Box } from "@raikou/server";
import { TextInput } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { notifications } from "@raikou/notifications";

const code = `
import { useForm } from '@raikou/form';
import { TextInput, Button, Box } from '@raikou/core';
import { notifications } from '@raikou/notifications';

function Demo() {
  const form = useForm({
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log, handleError)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: { name: "", email: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: "Please fill name field", color: "red" });
    } else if (errors.email) {
      notifications.show({
        message: "Please provide a valid email",
        color: "red",
      });
    }
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log, handleError)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export const onSubmitErrors: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
