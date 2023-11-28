import React, { useState } from "react";
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
} from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Stepper } from "@raikou/client";
import { rem } from "@raikou/system";

const code = `
import { useState } from 'react';
import { Stepper, rem } from '@raikou/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
      />
      <Stepper.Step
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
      />
      <Stepper.Step
        icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />}
      />
    </Stepper>
  );
}

export const iconsOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
