import React, { useEffect } from "react";
import { RaikouDemo } from "@raikou/ds";
import { useDirection } from "@raikou/core";
import { ActionIcon } from "@raikou/server";
import {
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from "@tabler/icons-react";

const code = `
import { ActionIcon, useDirection } from '@raikou/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`;

function Demo() {
  const { toggleDirection, dir, setDirection } = useDirection();
  useEffect(() => () => setDirection("ltr"), []);

  return (
    <ActionIcon
      onClick={() => toggleDirection()}
      variant="default"
      radius="md"
      size="lg"
    >
      {dir === "rtl" ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}

export const directionControl: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
