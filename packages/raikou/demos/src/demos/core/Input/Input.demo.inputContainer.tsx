import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput, Tooltip } from "@raikou/client";

const code = `
import { useState } from 'react';
import { TextInput, Tooltip } from '@raikou/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`;

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip
          label="Additional information"
          position="top-start"
          opened={focused}
        >
          {children}
        </Tooltip>
      )}
    />
  );
}

export const inputContainer: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
