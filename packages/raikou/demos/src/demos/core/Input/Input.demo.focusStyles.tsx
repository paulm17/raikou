import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input, TextInput } from "@raikou/client";
import classes from "./Input.demo.focusStyles.module.css";

const code = `
import { Input, TextInput } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`;

const cssCode = `
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--raikou-color-blue-filled);
    border-color: transparent;
  }
}
`;

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}

export const focusStyles: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
