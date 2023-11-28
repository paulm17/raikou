import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { InputBase } from "@raikou/client";
import { IMaskInput } from "react-imask";

const code = `
import { InputBase } from '@raikou/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase<any>
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <InputBase<any>
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}

export const inputBase: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
