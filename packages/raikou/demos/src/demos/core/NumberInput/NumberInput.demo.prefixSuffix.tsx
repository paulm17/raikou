import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}

export const prefixSuffix: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
