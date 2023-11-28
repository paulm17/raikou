import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox } from "@raikou/client";
import { Stack } from "@raikou/server";

const code = `
import { Checkbox } from '@raikou/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox
        checked={false}
        onChange={() => {}}
        indeterminate
        label="Indeterminate checkbox"
      />
      <Checkbox
        checked
        onChange={() => {}}
        indeterminate
        label="Indeterminate checked checkbox"
      />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox
        disabled
        checked
        onChange={() => {}}
        label="Disabled checked checkbox"
      />
      <Checkbox
        disabled
        indeterminate
        label="Disabled indeterminate checkbox"
      />
    </Stack>
  );
}

export const states: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
