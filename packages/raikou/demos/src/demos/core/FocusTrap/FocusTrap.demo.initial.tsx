import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { FocusTrap, TextInput } from "@raikou/client";
import { Button, Box } from "@raikou/server";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { FocusTrap, TextInput, Button, Box } from '@raikou/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`;

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>
        {active ? "Deactivate" : "Activate"} focus trap
      </Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput
            mt="sm"
            label="Second input"
            placeholder="Second input"
            data-autofocus
          />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}

export const initial: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
