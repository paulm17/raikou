import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";
import classes from "./Styles.demo.classNames.module.css";

const code = `
import { useState } from 'react';
import { TextInput } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`;

const cssCode = `
.root {
  position: relative;
  margin-top: rem(5px);
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: rem(2px);
  border-radius: 0;
  padding-left: 0;
  background-color: var(--raikou-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: rem(7px);
  color: var(--raikou-color-placeholder);
  font-weight: 400;
  font-size: var(--raikou-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(rem(-20px));
    font-size: var(--raikou-font-size-xs);
    color: var(--raikou-color-text);
  }
}
`;

function Demo() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ "data-floating": floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}

export const classNames: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode },
  ],
};
