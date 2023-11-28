import React from "react";
import { Badge } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useIdle } from "@raikou/hooks";

const eventsCode = `
import { Badge } from '@raikou/core';
import { useIdle } from '@raikou/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { events: ["click", "touchstart"] });
  return (
    <Badge color={idle ? "blue" : "teal"}>
      Current state: {idle ? "idle" : "not idle"}
    </Badge>
  );
}

export const useIdleEvents: RaikouDemo = {
  type: "code",
  code: eventsCode,
  component: Demo,
  centered: true,
};
