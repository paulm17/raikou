import React from "react";
import { Button } from "@raikou/server";
import { TextInput } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { modals } from "@raikou/modals";

const code = `
import { TextInput, Button } from '@raikou/core';
import { modals } from '@raikou/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: "Subscribe to newsletter",
          children: (
            <>
              <TextInput
                label="Your email"
                placeholder="Your email"
                data-autofocus
              />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}

export const content: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
