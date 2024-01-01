import React, { useRef } from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconClock } from "@tabler/icons-react";
import { ActionIcon } from "@raikou/server";
import { rem } from "@raikou/theme";
import { TimeInput } from "@raikou/dates";

const code = `
import { useRef } from 'react';
import { ActionIcon, rem } from '@raikou/core';
import { TimeInput } from '@raikou/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`;

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput
      label="Click icon to show browser picker"
      ref={ref}
      rightSection={pickerControl}
    />
  );
}

export const picker: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
