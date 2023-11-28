import React from "react";
import { useViewportSize } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";

const code = `
import { useViewportSize } from '@raikou/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text ta="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
