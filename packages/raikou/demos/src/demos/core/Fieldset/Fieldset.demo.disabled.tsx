import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Fieldset, Button, Group } from "@raikou/server";
import { TextInput } from "@raikou/client";

const code = `
import { Fieldset, TextInput, Button, Group } from '@raikou/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
`;

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 500,
  centered: true,
  code,
};
