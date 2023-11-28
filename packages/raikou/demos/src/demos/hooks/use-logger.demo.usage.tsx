import React, { useState } from "react";
import { useLogger } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { useState } from 'react';
import { useLogger } from '@raikou/hooks';
import { Button } from '@raikou/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger("Demo", [{ count, hello: "world" }]);
  return (
    <Button onClick={() => setCount((c) => c + 1)}>
      Update state ({count})
    </Button>
  );
}

export const useLoggerDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
