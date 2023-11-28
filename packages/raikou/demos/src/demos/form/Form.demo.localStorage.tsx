import React, { useEffect } from "react";
import { useForm } from "@raikou/form";
import { RaikouDemo } from "@raikou/ds";
import { Box } from "@raikou/server";
import { TextInput } from "@raikou/client";

const code = `
import { useEffect } from 'react';
import { useForm } from '@raikou/form';
import { TextInput, Box } from '@raikou/core';

function Demo() {
  const form = useForm({ initialValues: { name: '', occupation: '' } });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user-form', JSON.stringify(form.values));
  }, [form.values]);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { name: "", occupation: "" } });

  useEffect(() => {
    const storedValue = window.localStorage.getItem("user-form");
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem("user-form")!));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Failed to parse stored value");
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user-form", JSON.stringify(form.values));
  }, [form.values]);

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps("occupation")}
      />
    </Box>
  );
}

export const localStorage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
