import React from "react";
import { Badge } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useIdle } from "@raikou/hooks";

const code = `
import { Badge } from '@raikou/core';
import { useIdle } from '@raikou/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);
  return (
    <Badge color={idle ? "blue" : "teal"}>
      Current state: {idle ? "idle" : "not idle"}
    </Badge>
  );
}

export const useIdleDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
