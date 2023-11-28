import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Rating } from "@raikou/client";
import { IconSun, IconMoon } from "@tabler/icons-react";

const code = `
import { Rating } from '@raikou/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`;

function Demo() {
  return (
    <Rating
      emptySymbol={<IconSun size="1rem" />}
      fullSymbol={<IconMoon size="1rem" />}
    />
  );
}

export const symbol: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
