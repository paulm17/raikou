import React from "react";
import { NavLink } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";

const code = `
import { NavLink } from '@raikou/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavLink
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </>
  );
}

export const nested: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 240,
  component: Demo,
  code,
};
