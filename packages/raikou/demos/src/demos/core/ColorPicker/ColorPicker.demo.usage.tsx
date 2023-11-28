import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorPicker } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { useState } from 'react';
import { ColorPicker, Text } from '@raikou/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text mt="md">{value}</Text>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
