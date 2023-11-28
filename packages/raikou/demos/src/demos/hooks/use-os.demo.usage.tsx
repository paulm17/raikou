import React from "react";
import { useOs } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";

const code = `
import { useOs } from '@raikou/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text ta="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
