import React from "react";
import { useHover } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";
import { rem } from "@raikou/system";

const code = `
import { useHover } from '@raikou/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      style={{
        height: rem(60),
        backgroundColor: "var(--raikou-color-blue-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{hovered ? "I am hovered" : "Put mouse over me please"}</Text>
    </div>
  );
}

export const useHoverDemo: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
