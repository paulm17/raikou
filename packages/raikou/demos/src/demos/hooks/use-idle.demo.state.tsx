import React from "react";
import { Badge } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useIdle } from "@raikou/hooks";

const initialStateCode = `
import { Badge } from '@raikou/core';
import { useIdle } from '@raikou/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return (
    <Badge color={idle ? "blue" : "teal"}>
      Current state: {idle ? "idle" : "not idle"}
    </Badge>
  );
}

export const useIdleInitialState: RaikouDemo = {
  type: "code",
  code: initialStateCode,
  component: Demo,
  centered: true,
};
