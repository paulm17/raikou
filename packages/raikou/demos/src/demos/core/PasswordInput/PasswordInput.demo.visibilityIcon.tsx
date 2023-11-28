import React from "react";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { PasswordInput } from "@raikou/client";

const code = `
import { PasswordInput } from '@raikou/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        ) : (
          <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        )
      }
    />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEyeOff
            style={{
              width: "var(--psi-icon-size)",
              height: "var(--psi-icon-size)",
            }}
          />
        ) : (
          <IconEyeCheck
            style={{
              width: "var(--psi-icon-size)",
              height: "var(--psi-icon-size)",
            }}
          />
        )
      }
    />
  );
}

export const visibilityIcon: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
