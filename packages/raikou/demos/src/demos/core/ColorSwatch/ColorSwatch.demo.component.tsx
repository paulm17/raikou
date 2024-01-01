import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { rem } from "@raikou/theme";
import { CheckIcon } from "@raikou/client";
import { ColorSwatch } from "@raikou/server";

const code = `
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@raikou/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--raikou-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--raikou-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      c="white"
      style={{ cursor: "pointer" }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}

export const component: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
