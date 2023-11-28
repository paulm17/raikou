import React, { useState } from "react";
import { usePageLeave } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";

const code = `
import { useState } from 'react';
import { usePageLeave } from '@raikou/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text ta="center">Mouse left the page {leftsCount} times</Text>;
}

export const usePageLeaveDemo: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
