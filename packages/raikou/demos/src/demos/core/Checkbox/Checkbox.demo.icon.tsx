import React from "react";
import { IconBiohazard, IconRadioactive } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox, CheckboxProps } from "@raikou/client";

const code = `
import { Checkbox, CheckboxProps } from '@raikou/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
  indeterminate ? (
    <IconRadioactive {...others} />
  ) : (
    <IconBiohazard {...others} />
  );

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox
        icon={CheckboxIcon}
        label="Custom icon: indeterminate"
        indeterminate
        mt="sm"
      />
    </>
  );
}

export const icon: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};