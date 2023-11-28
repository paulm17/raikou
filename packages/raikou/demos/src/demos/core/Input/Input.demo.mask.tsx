import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { IMaskInput } from "react-imask";

const code = `
import { Input } from '@raikou/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input<any> component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`;

function Demo() {
  return (
    <Input<any>
      component={IMaskInput}
      mask="+7 (000) 000-00-00"
      placeholder="Your phone"
    />
  );
}

export const mask: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
