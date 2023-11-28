import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { UnstyledButton, Text } from "@raikou/server";
import { Checkbox } from "@raikou/client";
import classes from "./Checkbox.demo.card.module.css";

const cssCode = `.root {
  position: relative;
}

.control {
  background-color: light-dark(var(--raikou-color-white), var(--raikou-color-dark-6));
  border: rem(1px) solid light-dark(var(--raikou-color-gray-3), var(--raikou-color-dark-4));
  padding: var(--raikou-spacing-md);
  padding-left: rem(60px);
  border-radius: var(--raikou-radius-md);
  transition: border-color 100ms ease;

  &[data-checked] {
    border-color: var(--raikou-color-blue-filled);
  }
}

.checkboxWrapper {
  position: absolute;
  top: var(--raikou-spacing-md);
  left: var(--raikou-spacing-md);
  pointer-events: none;
}

.checkbox {
  &:not(:checked) {
    background-color: var(--raikou-color-body);
  }
}

.label {
  font-family: var(--raikou-font-family-monospace);
  font-weight: bold;
  font-size: var(--raikou-font-size-md);
  line-height: 1.3;
  color: var(--raikou-color-bright);
}

.description {
  margin-top: rem(8px);
  color: var(--raikou-color-dimmed);
  font-size: var(--raikou-font-size-xs);
}
`;

const code = `
import { Checkbox, UnstyledButton, Text } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@raikou/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@raikou/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}

export const card: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 320,
  component: Demo,
  defaultExpanded: false,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode },
  ],
};
